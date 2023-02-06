// DOM
const boxes = document.querySelectorAll('.box'),
    image = document.querySelector('.image');

boxes.forEach((box) => {

    // When a draggable element dragged over a box element
    box.addEventListener('dragover', (e) => {
        e.preventDefault(); // prevent default behaviour
        console.log("dragging");
        box.classList.add("hovered")
    })
    // When a draggable element leaves box element
    box.addEventListener('dragleave',() => {
        box.classList.remove("hovered");
    })

    // When a draggable element is dropped on a box element
    box.addEventListener('drop',() => {
        box.appendChild(image)
        box.classList.remove("hovered");

    })
})
