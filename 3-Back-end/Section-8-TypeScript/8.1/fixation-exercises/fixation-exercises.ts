enum Days {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

enum RainbowColors {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  blue = 'azul',
  indigo = 'anil',
  purple = 'violeta',
}

enum Actions {
  save = 1,
  print,
  open,
  view,
  close
}

enum Cardinal {
  north = 'n',
  south = 's',
  east = 'e',
  west= 'w',
}

const monday: Days = Days.monday;
const red: RainbowColors = RainbowColors.red;
const save: Actions = Actions.save;
const north: Cardinal = Cardinal.north;

console.log(`${monday} ${red} ${save} ${north}`)