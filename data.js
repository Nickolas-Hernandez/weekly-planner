var data = {
  editing: null,
  view: 'home-page',
  entries: [],
  nextEntryId: 1
};

var previousData = localStorage.getItem('data');

if (previousData) {
  data = JSON.parse(previousData);
}


function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

window.addEventListener('beforeunload', beforeUnload);
