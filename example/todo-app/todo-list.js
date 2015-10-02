import {ceb, property, method, on} from 'es6/lib/ceb.js';
import {idomify} from '../builders/idomify.js';
import './todo-list-item.js';
import {todoify} from './todoify.js';

ceb().augment(
    idomify(`
        <p>
            <div class="checkbox-inline">
                <label>
                    <input type="radio" name="visibility" value="SHOW_ACTIVE" checked="{{data.visibility === 'SHOW_ACTIVE' || null}}">
                    Active
                    (<tpl-text value="data.activeItems.length" />)
                </label>
            </div>
            <div class="checkbox-inline">
                <label>
                    <input type="radio" name="visibility" value="SHOW_COMPLETED" checked="{{data.visibility === 'SHOW_COMPLETED' || null}}">
                    Completed
                    (<tpl-text value="data.completedItems.length" />)
                </label>
            </div>
            <div class="checkbox-inline">
                <label>
                    <input type="radio" name="visibility" value="SHOW_ALL" checked="{{data.visibility === 'SHOW_ALL' || null}}">
                    All
                    (<tpl-text value="data.allItems.length" />)
                </label>
            </div>
        </p>
        <hr>
        <tpl-each items="data.visibleItems" item="item">
            <todo-list-item tpl-placeholder tpl-key="{{item.id}}" item="{{item}}"/>
        </tpl-each>
        <hr>
    `),

    todoify().subscribe((el) => {
        let newState = el.store.getState().toJS();
        el.allItems = newState.todos;
        el.visibility = newState.visibilityFilter;
        el.render();
    }),

    property('allItems').value([]),
    property('completedItems').getter((el) => el.allItems.filter(v => v.completed)),
    property('activeItems').getter((el) => el.allItems.filter(v => {
        return !v.completed;
    })),
    property('visibleItems').getter((el) => {
        switch (el.visibility) {
            case 'SHOW_COMPLETED':
                return el.completedItems;
            case 'SHOW_ACTIVE':
                return el.activeItems;
            default:
                return el.allItems;
        }
    }),
    property('visibility'),

    method('createdCallback').invoke(el => {
        let newState = el.store.getState().toJS();
        el.allItems = newState.todos;
        el.visibility = newState.visibilityFilter;
    }),

    on('change').delegate('input[name=visibility]').skip().invoke((el, evt) => {
        el.actions.setVisibilityFilter(evt.target.value);
    })
).register('todo-list');
