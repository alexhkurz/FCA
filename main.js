
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

    down(weightedUpset) {
        let downUp = [];
        this.getObjects().forEach(object => {
            let minVal = Infinity;
            this.getAttributes().forEach(attribute => {
                let incidenceRelTriple = this.triples.find(triple => this.getObject(triple) === object && this.getAttribute(triple) === attribute);
                let pair = weightedUpset.find(wu => wu[0] === attribute);
                let weight = pair ? pair[1] : 0; // if pair is undefined, set weight to 0
                let relationVal = incidenceRelTriple ? this.getValue(incidenceRelTriple) : 0; // if relation undefined, set value to 0
                let val = truncatedDiv(relationVal, weight); 
                if (val < minVal) {
                    minVal = val;
                }
            });
            downUp.push([object, minVal]);
        });
        return downUp;
    }

    up(weightedDownset) {
        let upOfDown = [];
        this.getAttributes().forEach(attribute => {
            let minVal = Infinity;
            this.getObjects().forEach(object => {
                let incidenceRelTriple = this.triples.find(triple => this.getAttribute(triple) === attribute && this.getObject(triple) === object);
                let pair = weightedDownset.find(wu => wu[0] === object);
                let weight = pair ? pair[1] : 0; // if pair is undefined, set weight to 0
                let relationVal = incidenceRelTriple ? this.getValue(incidenceRelTriple) : 0; // if relation undefined, set value to 0
                let val = truncatedDiv(relationVal, weight); 
                if (val < minVal) {
                    minVal = val;
                }
            });
            upOfDown.push([attribute, minVal]);
        });
        return upOfDown;
    }
}

let incidenceRel = new Relation([
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




