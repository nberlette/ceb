import {Builder, CustomElementConstructor} from "../builder";
import {ElementBuilder} from "../element";
import {HooksRegistration} from "../hook";


/**
 * A template updates the children of an element.
 * @template P The type of the template parameters.
 */
export interface Template<P = any> {
    /**
     * Render the template.
     * @param destination the destination node
     * @param parameters the parameters of the rendering
     */
    render(destination: DocumentFragment | Element, parameters?: P): void
}

/**
 * The builder handles the integration of a templating solution to update the content of the Custom Element.
 *
 * Firstly, the integration of the templating solution has to be defined in a method, by default the method name is `render`.
 * The implementation of the method (i.e. the method `render`) must return an instance of {@link Template}.
 *
 * Secondly, the render method is wrapped by the builder in order to render the {@link Template} once returned.
 * That means, each time the render method is invoked, the returned {@link Template} is rendered automatically.
 * The wrapping is also responsible to select the right destination of the template: Light DOM vs Shadow DOM.
 *
 * By default, the template is rendered into the Light DOM of the Custom Element.
 * However, the builder can render the template into the Shadow DOM with {@link TemplateBuilder.shadow}.
 *
 * By default, the name of the wrapped method is `render`.
 * However, the name can be changed with {@link TemplateBuilder.method}.
 *
 * When a {@link Template} is rendered, template parameters can be provided to the {@link Template.render} method.
 * The template parameters can be set with {@link TemplateBuilder.parameters}.
 *
 * The library provides a built-in template solution: {@link html}.
 *
 * Finally, the builder can be registered using the method {@link ElementBuilder.builder} of the main builder (i.e. {@link ElementBuilder}).
 * However, it can also be registered with the decorative style using the decorator {@link TemplateBuilder.decorate}.
 *
 * @template E the type of the Custom Element
 * @template P The type of the template parameters.
 */
export class TemplateBuilder<E extends HTMLElement, P> implements Builder<E> {

    private constructor(
        private _isShadow = false,
        private _isFocusDelegation?: boolean,
        private _methName = "render",
        private _parameters?: P,
    ) {
    }

    /**
     * Provides a fresh builder.
     * @template E the type of the Custom Element
     * @template P The type of the template parameters.
     */
    static get<E extends HTMLElement, P>() {
        return new TemplateBuilder<E, P>()
    }

    /**
     * Forces the rendering into the Shadow DOM.
     *
     * @example
     * ```typescript
     * import {ElementBuilder, TemplateBuilder, html} from "ceb"
     * class HelloWorld extends HTMLElement {
     *     value = "World"
     *     render() {
     *         return html`Hello, ${this.value}!`
     *     }
     * }
     * ElementBuilder.get().builder(
     *     TemplateBuilder.get().shadow()
     * ).register()
     * ```
     *
     * @param focus when true the focus will be delegated to the shadow DOM
     */
    shadow(focus?: boolean) {
        this._isShadow = true
        this._isFocusDelegation = focus
        return this
    }

    /**
     * Overrides the default render method name.
     *
     * @example
     * ```typescript
     * import {ElementBuilder, TemplateBuilder, html} from "ceb"
     * class HelloWorld extends HTMLElement {
     *     value = "World"
     *     doRender() {
     *         return html`Hello, ${this.value}!`
     *     }
     * }
     * ElementBuilder.get().builder(
     *     TemplateBuilder.get().method("doRender")
     * ).register()
     * ```
     *
     * @param methName the render method name
     */
    method(methName: string) {
        this._methName = methName
        return this
    }

    /**
     * Set render parameters.
     *
     * @example
     * ```typescript
     * import {ElementBuilder, TemplateBuilder, html, UpdateParameters} from "ceb"
     * class HelloWorld extends HTMLElement {
     *     value = "World"
     *     doRender() {
     *         return html`Hello, ${this.value}!`
     *     }
     * }
     * ElementBuilder.get().builder(
     *     TemplateBuilder.get<UpdateParameters>()
     *         .parameters({ greyDom: true })
     * ).register()
     * ```
     *
     * @param parameters the parameters
     */
    parameters(parameters: P) {
        this._parameters = parameters
        return this
    }

    /**
     * Decorates the render method.
     *
     * @example
     * ```typescript
     * import {ElementBuilder, TemplateBuilder, html} from "ceb"
     * @ElementBuilder.get<HelloWorld>().decorate()
     * class HelloWorld extends HTMLElement {
     *     value = "World"
     *     @TemplateBuilder.get().decorate()
     *     render() {
     *         return html`Hello, ${this.value}!`
     *     }
     * }
     * ```
     */
    decorate<E extends HTMLElement>(): MethodDecorator {
        const builder = this
        return function (target: E, methName: string, _: PropertyDescriptor) {
            if (!builder._methName) {
                builder._methName = methName
            }
            const id = 'template'
            ElementBuilder.getOrSet(target, id, builder)
        }
    }

    /**
     * This API is dedicated for developer of Builders.
     * @protected
     */
    build(Constructor: CustomElementConstructor<E>, hooks: HooksRegistration<E>) {
        hooks.before('constructorCallback', el => {
            // wrap the default render function to render the template in call
            if (typeof el[this._methName] === 'function') {
                const original: Function = el[this._methName]
                const parameters = this._parameters
                const isShadow = this._isShadow;
                el[this._methName] = function (): Template<P> {
                    const template: Template<P> = original.apply(el, arguments)
                    template.render(isShadow ? el.shadowRoot : el, parameters)
                    return template
                }
            }

            if (this._isShadow && !el.shadowRoot) {
                // creates and initializes the shadow root
                el.attachShadow({mode: 'open', delegatesFocus: this._isFocusDelegation})
            }
        })

        hooks.before('connectedCallback', el => {
            if (typeof el[this._methName] === "function") {
                el[this._methName]()
            }
        })
    }

}