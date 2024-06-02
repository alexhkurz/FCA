let attributes = ['a1', 'a2', 'a3'];

let objects = ['x1', 'x2', 'x3'];

class Relation {
    constructor(object, attribute, value) {
        this.object = object;
        this.attribute = attribute;
        this.value = value;
    }

    getObject() {
        return this.object;
    }

    getAttribute() {
        return this.attribute;
    }

    getValue() {
        return this.value;
    }
}

let relation = [
    new Relation('x1', 'a1', 1),
    new Relation('x1', 'a2', 1),
    new Relation('x2', 'a2', 1),
    new Relation('x3', 'a3', 1)
];

let weightedUpset = [
    ['a1', 0.5],
    ['a2', 0.5],
    ['a3', 0.5],
]



