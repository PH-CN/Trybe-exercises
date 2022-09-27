let info = {
  character: 'Margarida',
  origin: 'Pato Donald',
  note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recurrent: 'Sim'
};

let info2 = {
  character: 'Tio Patinhas',
  origin: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  note: 'O último MacPatinhas',
  recurrent: 'Sim',
};

for(let i in info) {
  if (i === 'recurrent' && info.recurrent === 'Sim' && info2.recurrent === 'Sim') {
  console.log ('Ambos Recorrentes') 
} else {
  console.log(info[i] + ' e ' + info2[i])
  }
}