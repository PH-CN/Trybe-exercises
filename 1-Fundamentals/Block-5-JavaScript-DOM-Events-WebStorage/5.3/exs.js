function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const ulContainer = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let days = dezDaysList[i];
    let myLi = document.createElement('li');
    myLi.innerHTML = days;

    if (days === 24 || days === 25 || days === 31) {
      myLi.className = 'day holiday'
      ulContainer.appendChild(myLi)
    } else if (days === 4 || days === 11 || days === 18 || days === 25) {
      myLi.className = 'day friday'
      ulContainer.appendChild(myLi)
    } else {
      ulContainer.appendChild(myLi)
    }
  }
}

createDays();

function createBtn (phrase) {
  const btn = document.createElement('button')
  const div = document.querySelector('.buttons-container')
  btn.innerHTML = phrase;
  btn.id = 'btn-holiday';
  div.appendChild(btn)
}

createBtn('Feriados')