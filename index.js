class List {
  constructor() {
    this.append = this.append;
    this.clear = this.clear;
    this.contains = this.contains;
    this.currentPosition = this.currentPosition;
    this.dataStorage = [];
    this.end = this.end;
    this.find = this.find;
    this.front = this.front;
    this.getElement = this.getElement;
    this.insert = this.insert;
    this.length = this.length;
    this.listSize = 0;
    this.moveTo = this.moveTo;
    this.next = this.next;
    this.pos = 0;
    this.prev = this.prev;
    this.remove = this.remove;
    this.toString = this.toString;
  }

  append(element) {
    this.dataStorage[this.listSize++] = element;
  }

  clear() {
    this.dataStorage = [];
    this.listSize = 0;
  }

  contains(element) {
    return this.dataStorage.some((item) => item === element);
  }

  currentPosition() {
    this.pos;
  }

  end() {
    this.end = this.listSize;
  }

  find(element) {
    for (let i = 0; i < this.dataStorage.length; i++) {
      if (element === this.dataStorage[i]) return i;
    }
    return -1;
  }

  front() {
    this.pos = 0;
  }

  getElement() {
    return this.dataStorage[this.pos];
  }

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos < 0) return false;
    this.dataStorage.splice(insertPos + 1, 0, element);
    this.listSize++;
    return true;
  }

  length() {
    return this.listSize;
  }

  moveTo(position) {
    this.pos = position;
  }

  next() {
    if (this.pos < this.listSize) this.pos++;
  }

  prev() {
    if (this.pos > 0) --this.pos;
  }

  remove(element) {
    const foundAt = this.find(element);
    if (foundAt < 0) return false;
    this.dataStorage.splice(foundAt, 1);
    --this.listSize;
    return true;
  }

  toString() {
    return this.dataStorage;
  }
}

const names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

console.log(names.getElement());
names.next();
console.log(names.getElement());
names.prev();
console.log(names.getElement());
