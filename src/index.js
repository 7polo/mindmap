import './hotbox/hotbox.css';
import './style/style.less';
import '@7polo/kity/dist/kity.js';
import '@7polo/kityminder-core/dist/kityminder.core.min.js';
import './hotbox/hotbox.js';

import Editor from './kityminder/editor';


export default class MinderEditor {
    constructor(el) {
        this.editor = new Editor(el);
    }

    getMinder() {
        return this.editor.minder;
    }

    import(json) {
        this.getMinder().importJson(json);
    }

    onEvent(event, callback) {
        this.getMinder().on(event, callback);
    }

    execCommand(cmd, params = []) {
        this.getMinder().execCommand.apply(this.getMinder(), [cmd].concat(params || []));
    }
}