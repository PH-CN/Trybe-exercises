const nota1 = 59;

if (nota1 >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}

else if (nota1 < 80 && nota1 >= 60) {
    console.log("Você está na nossa lista de espera")
}

else if (nota1 < 60) {
    console.log("Você foi reprovada(o)")
}

else {
    console.log("Falha no processamento da nota.")
}