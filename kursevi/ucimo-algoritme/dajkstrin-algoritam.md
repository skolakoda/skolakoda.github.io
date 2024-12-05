---
title: Dajkstrin algoritam
layout: lekcija-algoritmi
permalink: /dajkstrin-algoritam
---

**Dajkstrin algoritam nalazi najkraći put od početnog čvora do svih ostalih čvorova u grafu.** Počinje od jednog čvora, prati najbliže susede, i nastavlja dok ne obiđe sve moguće rute.

Dajkstrin algoritam može koristi prioritetni red da u svakom koraku brzo pronađe čvor sa najmanjom udaljenošću (što je ključno za efikasnost algoritma).

## Pseudokod algoritma

```
Dajkstrin algoritam(graf, izvor):
    kreira prazan prioritetni red Q
    kreira skup razdaljine[] i postavlja beskonačnost za sve čvorove, a za izvor 0
    dodaje izvor u red Q sa rastojanjem 0

    dokle Q nije prazan:
        uzima čvor u sa početka reda Q
        za svakog suseda v čvora u:
            računa procenjenu razdaljinu d od izvora do v kao razdaljine[u] + težina(u, v)
            ako je d < razdaljine[v]:
                ažurira razdaljine[v] na d
                dodaje v u red Q sa razdaljinom d

    vraća razdaljine[]
```

## Dajkstrin algoritam u C++

```c++
struct edge { int to, length; };

int dijkstra(const vector< vector<edge> > &graph, int source, int target) {
    vector<int> min_distance( graph.size(), INT_MAX );
    min_distance[ source ] = 0;
    set< pair<int,int> > active_vertices;
    active_vertices.insert( {0,source} );

    while (!active_vertices.empty()) {
        int where = active_vertices.begin()->second;
        if (where == target) return min_distance[where];
        active_vertices.erase( active_vertices.begin() );
        for (auto ed : graph[where])
            if (min_distance[ed.to] > min_distance[where] + ed.length) {
                active_vertices.erase( { min_distance[ed.to], ed.to } );
                min_distance[ed.to] = min_distance[where] + ed.length;
                active_vertices.insert( { min_distance[ed.to], ed.to } );
            }
    }
    return INT_MAX;
}
```

## Dajkstrin algoritam u JS-u

{:.ulaz}
```js
function dijkstra(graph, source) {
    const distances = {};
    const visited = new Set();
    const pq = new PriorityQueue();

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[source] = 0;
    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
        const currentNode = pq.dequeue();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        for (let neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor];
            const newDist = distances[currentNode] + weight;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.enqueue(neighbor, newDist);
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift().node;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// upotreba
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const distances = dijkstra(graph, 'A');
console.log(distances);
```

## Izvori

- Wikipedia, [*Dijkstra's algorithm*](https://en.wikipedia.org/wiki/Dijkstra's_algorithm)
- [*Pseudocode for Dijkstra's Algorithm*](https://www.codingdrills.com/tutorial/introduction-to-graph-algorithms/dijkstra-pseudocode)