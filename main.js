
class Relation {
    constructor(triples) {
        this.triples = triples;
    }

    getObjects() {
        return this.triples.map(triple => triple[0]);
    }

    getAttributes() {
        return this.triples.map(triple => triple[1]);
    }

    getValues() {
        return this.triples.map(triple => triple[2]);
    }
}

let relation = new Relation([
    ['x1', 'a1', 1],
    ['x1', 'a2', 1],
    ['x2', 'a2', 1],
    ['x3', 'a3', 1]
]);

let weightedUpset = [
    ['a1', 0.5],
    ['a2', 0.5],
    ['a3', 0.5],
]



