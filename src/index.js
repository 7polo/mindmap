import 'hotbox/less/hotbox.less';
import './style/style.less';
import '@7polo/kity/dist/kity.js';
import '@7polo/kityminder-core/dist/kityminder.core.min.js';
import 'hotbox/hotbox.js';

import Editor from './kityminder/editor';


export default class MinderEditor {
    constructor(el) {
        this.editor = new Editor(el);
    }

    importJson(json) {
        this.editor.minder.importJson(json);
    }

    on(event, callback) {
        this.editor.minder.on(event, callback);
    }
}