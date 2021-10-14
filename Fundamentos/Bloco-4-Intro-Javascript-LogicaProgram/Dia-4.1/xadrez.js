let peçaini = "REI";
let peça = peçaini.toLowerCase()

switch (peça) {
  case "cavalo":
    console.log("em L")
    break;

case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez")
    break;

case "dama":
    console.log("pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
    break;

case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
    break;

case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser.")
    break;

case "peão":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.")
    break;

  default:
    console.log("que peça é essa?")
    break;
}