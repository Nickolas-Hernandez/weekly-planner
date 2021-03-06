var entryButton = document.querySelector('.add-entry-button');
var entryModal = document.querySelector('.add-entry-modal');
var entryForm = document.querySelector('.modal');
var submitButton = document.querySelector('.submit');
var tBody = document.querySelector('tbody');
var buttonsSection = document.querySelector('.day-buttons-section');
var scheduleHeading = document.querySelector('.schedule-title');

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
  data.nextEntryId++;
  data.entries.unshift(entry);
  if (entry.day === data.view) {
    tBody.appendChild(createDOM(entry));
  }

  entryModal.className = 'add-entry-modal hidden';
  entryForm.reset();
}

function createDOM(object) {

  var $tr = document.createElement('tr');
  $tr.className = object.day;
  $tr.setAttribute('data-view', object.day);
  $tr.setAttribute('data-entry-id', object.entryId);

  var timeTd = document.createElement('td');
  timeTd.textContent = object.time + ' ' + object.ampm;

  var notesTd = document.createElement('td');
  notesTd.textContent = object.notes;

  var button = document.createElement('button');
  button.className = 'update-button';
  button.textContent = 'Update';

  $tr.appendChild(timeTd);
  $tr.appendChild(notesTd);
  notesTd.appendChild(button);
  return $tr;
}

function generateEntries(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newRow = createDOM(data.entries[i]);
    tBody.appendChild(newRow);
  }
}

function showDayEntries(event) {
  if (event.target.textContent === 'Monday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Monday';
    data.view = 'monday';
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'monday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }
  } else if (event.target.textContent === 'Tuesday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Tuesday';
    data.view = 'tuesday';
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'tuesday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }

  } else if (event.target.textContent === 'Wednesday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Wednesday';
    data.view = 'wednesday';
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'wednesday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }
  } else if (event.target.textContent === 'Thursday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Thursday';
    data.view = 'thursday';
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'thursday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }

  } else if (event.target.textContent === 'Friday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Friday';
    data.view = 'friday';
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'friday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }
  } else if (event.target.textContent === 'Saturday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Saturday';
    data.view = 'saturday';
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'saturday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }
  } else if (event.target.textContent === 'Sunday') {
    removeEntries();
    scheduleHeading.textContent = 'Scheduled Events for Sunday';
    data.view = 'sunday';
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].day === 'sunday') {
        var newDom = createDOM(data.entries[i]);
        tBody.appendChild(newDom);
      }
    }

  }
}

function removeEntries() {
  var trElements = tBody.querySelectorAll('tr');
  for (var i = 0; i < trElements.length; i++) {
    trElements[i].remove();
  }
}

function updateClick(event){
  if(event.target.className === 'update-button' );
  var closestTR = event.target.closest('tr');
  var dataID = closestTR.getAttribute('data-entry-id');
  console.log(dataID);
  for (var i = 0; i < data.entries.length; i++){
    if(dataID === data.entries[i].entryId.toString()){
      data.editing = data.entries[i];
    }
  }
  unhideModal();
  entryForm.elements.day = data.editing.day;
}


tBody.addEventListener('click', updateClick);
entryButton.addEventListener('click', unhideModal);
entryForm.addEventListener('submit', handleEntrySubmit);
buttonsSection.addEventListener('click', showDayEntries);
window.addEventListener('DOMContentLoaded', generateEntries);
