"use strict";

import '../../../kity/dist/kity.js';
import '../../../kityminder-core/dist/kityminder.core.min.js';
// import 'kityminder-core';
import '../node_modules/hotbox/hotbox.js';
import Editor from './kityminder/editor';
import './style/style.less';
import '../node_modules/hotbox/less/hotbox.less';

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