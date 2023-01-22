// Import stylesheets
import './style.css';

let dispDropLog = true;

function drag(ev) {
  console.log(this);
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  var dropId = this.getAttribute('data-id');
  ev.target.appendChild(document.getElementById(data));

  // if (data.includes(dropId)) {
  //     ev.target.appendChild(document.getElementById(data));
  // }

  //dispDropLog = dispDropLog ? console.log(dropId) : false;
}

function dragover(ev) {
  ev.preventDefault();
}

const dragDivs = document.querySelectorAll('.draggable');
dragDivs.forEach((div) => {
  div.addEventListener('dragstart', drag);
  //console.log(div);
});

const dropDivs = document.querySelectorAll('.droppable');
dropDivs.forEach((div) => {
  div.addEventListener('drop', drop);
  div.addEventListener('dragover', dragover);
});
