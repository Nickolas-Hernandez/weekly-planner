var entryButton = document.querySelector('.add-entry-button');
var entryModal = document.querySelector('.add-entry-modal');
var entryForm = document.querySelector('.modal');
var submitButton = document.querySelector('.submit');

function unhideModal(event) {
  entryModal.classList.remove('hidden');
}

function handleEntrySubmit(event) {

  event.preventDefault()
  console.log('hi');
  console.log(event, event.target, event.submitter);

  console.log('submit was completed');
  var entry = {};
  entry.day = entryForm.elements.dayOfTheWeek.value;
  entry.time = entryForm.elements.time.value;
  entry.ampm = entryForm.elements.amPm.value;
  entry.notes = entryForm.elements.textArea.value;
  entry.entryId = data.nextEntryId;
  data.entryId++;
  console.log(entry);
  data.entries.unshift(entry);

  entryModal.className = 'add-entry-modal hidden';
}

entryButton.addEventListener('click', unhideModal);

submitButton.addEventListener('submit', handleEntrySubmit);
