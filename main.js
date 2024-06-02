
class Relation {
    // a Relation is a list of triples
    constructor(triples) {
        this.triples = triples;
    }

    getObjects() {
        return [...new Set(this.triples.map(triple => triple[0]))];
    }

    getAttributes() {
        return [...new Set(this.triples.map(triple => triple[1]))];
    }

    getValues() {
        return this.triples.map(triple => triple[2]);
    }

    getObject(triple) {
        return triple[0];
    }

    getAttribute(triple) {
        return triple[1];
    }

    getValue(triple) {
        return triple[2];
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
    ['a3', 0.5]
]

function truncatedDiv(x, y) {
    return (y === 0) ? 1 : ((x / y) > 1 ? 1 : x / y);
}

window.downUp = function() {
    let downUp = [];
    relation.getObjects().forEach(object => {
        let minVal = Infinity;
        relation.getAttributes().forEach(attribute => {
            let relationInstance = relation.triples.find(triple => relation.getObject(triple) === object && relation.getAttribute(triple) === attribute);
            let pair = weightedUpset.find(wu => wu[0] === attribute);
            let weight = pair ? pair[1] : 0; // if pair is undefined, set weight to 0
            let relationVal = relationInstance ? relation.getValue(relationInstance) : 0; // if relation undefined, set value to 0
            let val = truncatedDiv(relationVal, weight); 
            if (val < minVal) {
                minVal = val;
            }
        });
        downUp.push([object, minVal]);
    });
    return downUp;
}



