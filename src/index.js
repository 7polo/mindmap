import './hotbox/hotbox.css';
import './style/style.less';
import '@7polo/kity/dist/kity.js';
import '@7polo/kityminder-core/dist/kityminder.core.min.js';
import '@7polo/kityminder-core/dist/kityminder.core.min.js';
// import '/Users/baoqianyong/Documents/code/workspace-front/kityminder-core/dist/kityminder.core.js';
import './hotbox/hotbox.js';

import Editor from './kityminder/editor';


export default class MinderEditor {
    constructor(el) {
        this.editor = new Editor(el);
        // console.log(this.editor)
        // const setStatus = this.getMinder().setStatus;
        // this.getMinder().setStatus = function () {
        //     console.log(arguments)
        //     if (arguments[0] === 'dragtree') {
        //         debugger
        //         this._dragMode = 0;
        //     }
        //     setStatus.apply(this, arguments)
        // }
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

    setReadOnly(readOnly) {
        this.getMinder().setDefaultOptions({'readOnly': readOnly})
    }
}