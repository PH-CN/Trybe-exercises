import { connect } from 'mongoose'

const options = {
  dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);