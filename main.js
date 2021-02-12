var entryButton = document.querySelector('.add-entry-button');
var entryModal = document.querySelector('.add-entry-modal');
var entryForm = document.querySelector('.modal');

function unhideModal(event) {
  entryModal.classList.remove('hidden');
}

function handleEntrySubmit(event) {
  if (event.target.tagName === 'I') {
    var object = {};
    object.day = entryForm.elements.dayOfTheWeek.value;
    object.time = entryForm.elements.time.value;
    object.ampm = entryForm.elements.amPm.value;
    object.day = entryForm.elements.textArea.value;
    object.entryId = data.nextEntryId;
    data.entryId++;

    entryModal.className = 'add-entry-modal hidden';
  }
}

entryButton.addEventListener('click', unhideModal);

entryModal.addEventListener('click', handleEntrySubmit);
