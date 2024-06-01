let attributes = {
    a1: null,
    a2: null,
    a3: null
};

let objects = {
    x1: null,
    x2: null,
    x3: null
};

let relation = [
    [objects.x1, attributes.a1],
    [objects.x1, attributes.a2],
    [objects.x3, attributes.a3]
];

// Create HTML elements to display the data
let attributesElement = document.createElement('div');
attributesElement.textContent = JSON.stringify(attributes);
document.body.appendChild(attributesElement);

let objectsElement = document.createElement('div');
objectsElement.textContent = JSON.stringify(objects);
document.body.appendChild(objectsElement);

let relationElement = document.createElement('div');
relationElement.textContent = JSON.stringify(relation);
document.body.appendChild(relationElement);

// Function to update the data
function updateData() {
    attributes.a1 = prompt("Enter a new value for a1");
    attributes.a2 = prompt("Enter a new value for a2");
    attributes.a3 = prompt("Enter a new value for a3");
    objects.x1 = prompt("Enter a new value for x1");
    objects.x2 = prompt("Enter a new value for x2");
    objects.x3 = prompt("Enter a new value for x3");
    relation = [
        [objects.x1, attributes.a1],
        [objects.x1, attributes.a2],
        [objects.x3, attributes.a3]
    ];
    attributesElement.textContent = JSON.stringify(attributes);
    objectsElement.textContent = JSON.stringify(objects);
    relationElement.textContent = JSON.stringify(relation);
}

// Create a button to update the data
let updateButton = document.createElement('button');
updateButton.textContent = "Update Data";
updateButton.addEventListener('click', updateData);
document.body.appendChild(updateButton);


