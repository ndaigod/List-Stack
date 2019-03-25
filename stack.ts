
class Unit<T> {
    private readonly data: T;
    private readonly last: Unit<T> = undefined;

    constructor(data, last: Unit<T>) {
        this.last = last;
        this.data = data;
    }

    getData(): T{
        return this.data;
    }

    getLast(): Unit<T>{
        return this.last;
    }
}

export default class Stack <TData> {
    private size: number = 0;
    top: Unit<TData> = undefined;

    constructor(items?: Array<TData>) {
        if(items) {
            for(let i = 0; i < items.length; i++) {
                this.push(items[i]);
            }
        }
    }

    push(data: TData): void {
        let top = new Unit<TData>(data, this.top);
        this.top = top;
        this.size++;
    }

    pop(): TData {
        if (this.size == 0) {
            return undefined;
        } else {
            let poppedTop = this.top;
            this.top = poppedTop.getLast();
            this.size--;
            return poppedTop.getData();
        }
    }

    getSize(): number {
        return this.size;
    }

    equals(other: Stack<TData>): boolean {
        if (other.size !== this.size) {
            return false;
        } else {
            let current: Unit<TData> = other.top;
            let currentOther: Unit<TData> = this.top;

            for(let i = 0; i < this.size; i++) {
                if (current.getData() !== currentOther.getData()) {
                    return false;
                }
                current = current.getLast();
                currentOther = currentOther.getLast();
            }

            return true;
        }
    }

    toString(): string {
        if (this.size === 0) {
            return 'Stack\'s empty.';
        } else {
            let result: string = '';
            let current: Unit<TData> = this.top;

            for (let i = 0; i < this.size; i++) {
                result += '[' + current.getData() + ']' + ',';
                current = current.getLast();
            }

            return result.substring(0, result.length - 1);
        }
    }
}

const firstStack = new Stack<number>([1,2,3,4]);
console.log(firstStack.toString());