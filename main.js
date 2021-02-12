var entryButton = document.querySelector('.add-entry-button');
var entryModal = document.querySelector('.add-entry-modal');
var entryForm = document.querySelector('.modal');
var submitButton = document.querySelector('.submit');
var tBody = document.querySelector('tbody');
var buttonsSection = document.querySelector('.day-buttons-section');

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

function showDayEntries(event){
  if(event.target.textContent === 'Monday'){

  }else if(event.target.textContent === 'Tuesday'){
    console.log('Tuesday');
  }else if(event.target.textContent === 'Wednesday'){
    console.log('Wednesday');
  }else if(event.target.textContent === 'Thursday'){
    console.log('thur');
  }else if(event.target.textContent === 'Friday'){
    console.log('fri');
  }else if(event.target.textContent === 'Saturday'){
    console.log('sat');
  }else if(event.target.textContent === 'Sunday'){
    console.log('sun');

  }
}

function removeEntries(object){

}

entryButton.addEventListener('click', unhideModal);
entryForm.addEventListener('submit', handleEntrySubmit);
buttonsSection.addEventListener('click', showDayEntries);
window.addEventListener('DOMContentLoaded', generateEntries);
