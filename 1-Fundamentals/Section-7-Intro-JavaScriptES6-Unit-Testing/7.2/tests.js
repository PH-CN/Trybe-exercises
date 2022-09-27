const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const studentSkills = student => {
  const skills = Object.keys(student);
  for (value of skills) {
    console.log(`${value}, Nível: ${student[value]}`)
  }
}

studentSkills(student2)