---
title: Hrpa (<i>heap</i>)
layout: lekcija-strukture
permalink: /heap
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/500px-Max-Heap.svg.png)

**Hrpa (*heap*) je vrsta binarnog stabla gde je vrijednost u svakom čvoru veća od ili jednaka vrijednosti svih čvorova ispod njega (svih naslednika).** *Heap* se često koristi za implementaciju prioritetskih redova, i u algoritmima sortiranja (npr. *heapsort*). 

U prioritetskim redovima, gde elementi imaju različite prioritete, *heap* omogućava brzo pristupanje elementu sa najvišim ili najnižim prioritetom, bez potrebe da prolazi ceo red. 

### Implementacija u JS-u

{:.ulaz}
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  heapifyUp(index) {
    while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

// upotreba
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(8);

console.log(heap.peek()); // prikazuje najmanji
heap.extractMin();        // uklanja najmanji
console.log(heap.peek());
```

## Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
