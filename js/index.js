class Nodo {
    constructor(dato, next = null) {
        this.data = dato;
        this.next = next;
    }
}

class Linked {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertBefore(dato) {
        this.head = new Nodo(dato, this.head);
        this.size++;
    }

    insertAfter(dato) {
        let newNode = new Nodo(dato);
        if (!this.head) {
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.size++;
    }

    insertAt(dato, index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        const newNode = new Nodo(dato);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    insertLast(datos) {
        let newNode = new Nodo(datos);
        if (!this.head) {
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.size++;
    }

    insertFirst(datos) {
        let newNode = new Nodo(datos);
        if (!this.head) {
            this.head = newNode;
        } else {
            let lastHead = this.head;
            this.head = newNode;
            newNode.next = lastHead;
        }
        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            console.log("La lista está vacía.");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    removeLast() {
        if (!this.head) {
            console.log("La lista está vacía.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;
            
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        this.size--;
    }

    removeData(dato) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === dato) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    removeList() {
        this.head = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let List = new Linked();
List.removeFirst();
console.log(List);

List.removeLast();
console.log(List);
