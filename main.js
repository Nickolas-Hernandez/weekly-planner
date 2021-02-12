var entryButton = document.querySelector('.add-entry-button');
var entryModal = document.querySelector('.add-entry-modal');
var entryForm = document.querySelector('.modal');
var submitButton = document.querySelector('.submit');
var tBody = document.querySelector('tbody');

function unhideModal(event) {
  entryModal.classList.remove('hidden');
}

function handleEntrySubmit(event) {
  event.preventDefault();
  var entry = {};
  entry.day = entryForm.elements.dayOfTheWeek.value;
  entry.time = entryForm.elements.time.value;
  entry.ampm = entryForm.elements.amPm.value;
  entry.notes = entryForm.elements.textArea.value;
  entry.entryId = data.nextEntryId;
  data.entryId++;
  data.entries.unshift(entry);
  entryModal.className = 'add-entry-modal hidden';
  tBody.appendChild(createDOM(entry));
  entryForm.reset();
}

function createDOM(object) {

  console.log('this should create a new dom');
  var $tr = document.createElement('tr');

  var timeTd = document.createElement('td');
  timeTd.textContent = object.time + ' ' +  object.ampm;

  var notesTd = document.createElement('td');
  notesTd.textContent = object.notes;

  $tr.appendChild(timeTd);
  $tr.appendChild(notesTd);
  return $tr;
}

function generateEntries(event){
  console.log('this fired');
  for (var i =0; i < data.entries.length; i++){
   var newRow = createDOM(data.entries[i]);
    tBody.appendChild(newRow);
  }
}

entryButton.addEventListener('click', unhideModal);
entryForm.addEventListener('submit', handleEntrySubmit);
window.addEventListener('DOMContentLoaded', generateEntries);
