var entryButton = document.querySelector('.add-entry-button');
var entryModal = document.querySelector('.add-entry-modal');

function unhideModal(event) {
  entryModal.classList.remove('hidden');
}

entryButton.addEventListener('click', unhideModal);
