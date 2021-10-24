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

    if (days === 24  || days === 31) {
      myLi.className = 'day holiday'
      ulContainer.appendChild(myLi)
    } else if (days === 4 || days === 11 || days === 18) {
      myLi.className = 'day friday'
      ulContainer.appendChild(myLi)

    } else if (days === 25) {
      myLi.classList = 'day friday holiday'
      ulContainer.appendChild(myLi)
    } else {
      myLi.className = 'day'
      ulContainer.appendChild(myLi)
    }
  }
}

createDays();

function createBtnHoliday(phrase) {
  const btn = document.createElement('button')
  const div = document.querySelector('.buttons-container')
  btn.innerHTML = phrase;
  btn.id = 'btn-holiday';
  div.appendChild(btn)
}

createBtnHoliday('Feriados')

function changeHolidaysColors() {
  let backgroundColor = 'rgb(238,238,238)'
  let newColor = 'white'
  daysContainer = document.querySelectorAll('.holiday')
  for (let i = 0; i < daysContainer.length; i += 1) {
    if (daysContainer[i].style.backgroundColor === newColor) {
      daysContainer[i].style.backgroundColor = backgroundColor
    } else {
      daysContainer[i].style.backgroundColor = newColor
    }
  }
}

btnHoliday = document.getElementById('btn-holiday')

btnHoliday.addEventListener('click', changeHolidaysColors)

function createBtnFriday(phrase) {
  const btn = document.createElement('button')
  const div = document.querySelector('.buttons-container')
  btn.innerHTML = phrase;
  btn.id = 'btn-friday';
  div.appendChild(btn)
}

createBtnFriday('Sexta-feira')

function changeFridaysText(fridays) {
  let btnFriday = document.getElementById('btn-friday')
  let daysContainer = document.querySelectorAll('.friday')
  let newText = 'SEXTOU!'

  btnFriday.addEventListener('click', function () {
    for (let i = 0; i < daysContainer.length; i += 1) {
      if (daysContainer[i].innerHTML !== newText) {
        daysContainer[i].innerHTML = newText
      } else {
        daysContainer[i].innerHTML = fridays[i]
      }
    }
  })
}


let fridays = [4, 11, 18, 25]
changeFridaysText(fridays)

function zoom () {
  let days = document.querySelector('#days')
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '500'
  })
}

function zoomOut () {
  let days = document.querySelector('#days')
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'
  })
}

zoom()
zoomOut()

document.getElementById('task-input').value