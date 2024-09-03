
type Subscriber = (...args: any) => void
export default class Signal {
    #subscribers = [] as Subscriber[];
    fire(...args: any[]) {
        this.#subscribers.forEach((subscriber) => subscriber(...args));
    }
    connect(subscriber: Subscriber): () => void {
        this.#subscribers.push(subscriber);
        return () => {
            const index = this.#subscribers.indexOf(subscriber);
            if (index > -1)
                this.#subscribers.splice(index, 1);
        }
    }
}