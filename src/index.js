import './hotbox/hotbox.css';
import './style/style.less';
import '@7polo/kity/dist/kity.js';
import '@7polo/kityminder-core/dist/kityminder.core.min.js';
import './hotbox/hotbox.js';

import Editor from './kityminder/editor';


export default class MinderEditor {

    init = false;
    constructor(el) {
        kityminder.Minder.registerInitHook((option)=> {
            this.init = true;
            const timer = setInterval(()=> {
                if (this.getMinder()) {
                    clearInterval(timer)
                    this.getMinder().fire('ready')

                    this.getMinder().on('execCommand', (e)=> {
                        const cmd = e.commandName.toLowerCase();
                        if (cmd.indexOf('append') === 0 || cmd.indexOf('remove') === 0) {
                            this.getMinder().fire('nodechanged', e)
                        }
                    })
                }
            }, 50)
        });
        this.editor = new Editor(el);
    }

    getMinder() {
        return this.editor?.minder;
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