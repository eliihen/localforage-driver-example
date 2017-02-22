var names = [
  'Espen', 'Bette', 'Joaquin', 'Lakiesha', 'Siobhan', 'Kristel', 'Carter',
  'Simon', 'Lucien', 'Mckenzie', 'Laticia', 'Noah', 'Regenia', 'Yon', 'Sean',
  'Mila', 'Randal', 'Raymond', 'Mellissa', 'Velma', 'Rosalie', 'Santina',
  'Sanford', 'Daniela', 'Malik', 'Noe', 'Marty', 'Pia', 'Birgit', 'Fatima',
  'Kecia', 'Wilson', 'Cherish', 'Steven', 'Earlie', 'Buster', 'Inger', 'Cecile',
  'Eli', 'Bennett', 'Noble', 'Jesenia', 'Stephenie', 'Basil', 'Emiko', 'Dannie',
  'Gertrud', 'Emerita', 'Randee', 'Malka ',
];

function drawNames() {
  localforage.getItem('names').then(function(names) {
    document.getElementById('content').innerHTML = names.join();
  });
}

function addSomething() {
  var name = names[Math.floor(Math.random() * names.length)];

  localforage.getItem('names').then(function(names) {
    if (!names) {
      names = [];
    }

    names.push(name);
    localforage.setItem('names', names);
  }).then(drawNames);
}

function removeOne() {
  localforage.getItem('names').then(function(names) {
    if (!names) {
      names = [];
    }

    names.pop();
    localforage.setItem('names', names);
  }).then(drawNames);
}

localforage
  .defineDriver(webExtensionStorageDriver.local)
  .then(() => localforage.setDriver('webExtensionLocalStorage'))
  .then(drawNames);

document.getElementById('addButton').onclick = addSomething;
document.getElementById('removeButton').onclick = removeOne;

