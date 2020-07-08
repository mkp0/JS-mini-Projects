let empty = document.querySelectorAll('.empty')
let fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

function dragStart(e) {
    this.className += " startd"
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(e) {
    this.className = "fill"
}

empty.forEach((box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', DragLeave);
    box.addEventListener('drop', DragDrop);

})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered"
}

function DragLeave(e) {
    this.className = "empty";
}

function DragDrop(e) {
    this.className = "empty";
    this.append(fill)
}