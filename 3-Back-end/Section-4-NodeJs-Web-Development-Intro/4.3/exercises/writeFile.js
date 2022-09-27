const fs = require('fs').promises;

const write = async (file, content) => {
  await fs.writeFile(file, content)
  return ('Arquivo escrito com sucesso.')
}

module.exports = write;
