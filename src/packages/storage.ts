import Signal from "./signal.ts"

class Storage {
    namespace = 'global' as string;
    data: {};
    #signals: {};
    constructor(namespace: string) {
        this.namespace = namespace;
        const stored = localStorage.getItem(namespace);
        this.data = stored ? JSON.parse(stored) : {};
        this.#signals = {}
    }
    get(key: string): unknown {
        return this.data[key];
    }
    set(key: string, value: unknown, force: boolean=false) {
        const old = this.data[key];
        if (old !== value || force === true) {
            this.data[key] = value;
            this.save();
            const signal = this.#signals[key];
            if (signal)
                signal.fire(value, old);
        }
    }
    save() {
        localStorage.setItem(this.namespace, JSON.stringify(this.data));
    }
    onChange(key: string): Signal {
        let signal = this.#signals[key]
        if (!signal) {
            signal = new Signal();
            this.#signals[key] = signal;
        }
        const val = this.get(key);
        if (val)
            signal.fire(val, undefined)
        return signal;
    }
}

export default Storage;