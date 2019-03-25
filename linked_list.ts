
class Unit<T> {
    private readonly data: T;
    private next: Unit<T> = undefined;

    constructor(data) {
        this.data = data;
    }

    setNext(next: Unit<T>): void{
        this.next = next;
    }

    getNext(): Unit<T>{
        return this.next;
    }

    getData(): T{
        return this.data;
    }
}

export default class LinkedList <TData> {
    private size: number = 0;
    top: Unit<TData> = undefined;

    constructor(items?: Array<TData>) {
        if(items) {
            for(let i = 0; i < items.length; i++) {
                this.add(items[i],i);
            }
        }
    }

    add(data: TData, index: number): void {
        let newUnit: Unit<TData> =  new Unit<TData>(data);
        if (this.top === undefined) {
            this.top = newUnit;
        } else {
            if (index === 0) {
                newUnit.setNext(this.top);
                this.top = newUnit;
            } else {
                let current: Unit<TData> = this.top;
                let i: number = 1;
                while (i != index && i != this.size) {
                    current = current.getNext();
                    i++;
                }
                current.setNext(newUnit);
            }
        }
        this.size++;
    }

    remove(index: number): void {
        if (index < this.size) {
            if (index === 0) {
                this.top = this.top.getNext();
            } else {
                let current: Unit<TData> = this.top;
                let i: number = 1;
                while (i != index) {
                    current = current.getNext();
                    i++;
                }
                current.setNext(current.getNext().getNext());
            }
            this.size--;
        }
    }

    get(index: number): TData {
        if ((this.size - 1) < index) {
            return undefined;
        } else {
            let current: Unit<TData> = this.top;
            let i: number = 0;
            while (i != index) {
                current = current.getNext();
                i++;
            }
            return current.getData();
        }
    }

    getSize(): number {
        return this.size;
    }

    equals(other: LinkedList<TData>): boolean {
        if (other.size !== this.size) {
            return false;
        } else {
            let current: Unit<TData> = other.top;

            for(let i = 0; i < this.size; i++) {
                if (current.getData() !== this.get(i)) {
                    return false;
                }
                current = current.getNext();
            }

            return true;
        }
    }

    toString(): string {
        if (this.size === 0) {
            return 'List\'s empty.';
        } else {
            let result: string = '';
            let current: Unit<TData> = this.top;

            for (let i = 0; i < this.size; i++) {
                result += '[' + current.getData() + ']' + ',';
                current = current.getNext();
            }

            return result.substring(0, result.length - 1);
        }
    }
}




