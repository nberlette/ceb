import {AbstractModule, ComponentSymbol, RegistryKey} from "@tmorin/ceb-inversion-core";
import {Bus, BusSymbol} from "@tmorin/ceb-messaging-core";
import {InMemorySimpleBus} from "./bus";

/**
 * The options of {@link SimpleModule}.
 */
export interface SimpleModuleOptions {
    /**
     * The bus instance.
     * By default `InMemorySimpleBus.GLOBAL`.
     */
    bus: InMemorySimpleBus
    /**
     * The {@link RegistryKey} of the {@link InMemorySimpleBus} instance.
     * By default {@link BusSymbol}.
     */
    registryKey: RegistryKey
    /**
     * When `true`, the `error` internal events (i.e. `bus.on("error", ...)`) are displayed using `console.error(...)`.
     * By default `false`.
     */
    errorToConsole: boolean
}

/**
 * The module registers a {@link Bus} bound with the key {@link BusSymbol}
 *
 * @example Register the DomModule
 * ```typescript
 * import {inversion, messaging} from "@tmorin/ceb-bundle-web"
 * const container = inversion.ContainerBuilder.get()
 *   .module(new messaging.SimpleModule())
 *   .build()
 * ```
 */
export class SimpleModule extends AbstractModule {
    private readonly options: SimpleModuleOptions
    private readonly bus: InMemorySimpleBus

    constructor(
        /**
         * Options of the module.
         */
        partialOptions: Partial<SimpleModuleOptions> = {}
    ) {
        super();
        this.options = {
            bus: InMemorySimpleBus.GLOBAL,
            registryKey: BusSymbol,
            errorToConsole: false,
            ...partialOptions
        }
        this.bus = this.options.bus
    }

    async configure(): Promise<void> {
        this.registry.registerValue(this.options.registryKey, this.bus)
        this.registry.registerFactory(ComponentSymbol, (registry) => ({
            configure: async () => {
                if (this.options.errorToConsole) {
                    const bus = registry.resolve<Bus>(this.options.registryKey)
                    bus.on("action_handler_failed", ({action, error}) => {
                        const identifier = `${action.headers.messageType}/${action.headers.messageId}`
                        const message = `InMemorySimpleBus - an action handler of ${identifier} throws an error`
                        console.error(message, error);
                    })
                    bus.on("event_listener_failed", ({event, error}) => {
                        const identifier = `${event.headers.messageType}/${event.headers.messageId}`
                        const message = `InMemorySimpleBus - an event listener of ${identifier} throws an error`
                        console.error(message, error);
                    })
                }
            },
            dispose: async () => {
                await registry.resolve<Bus>(this.options.registryKey).dispose()
            }
        }))
    }
}
