import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      typeHouse: false,
      typeApartment: false,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  handleNameChange = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value.toUpperCase(),
    });
  }

  handleAdressChange = ({ target }) => {
    const { value } = target;
    this.setState({
      adress: value.replace(/[^a-zA-Z0-9]/g, ''),
    })
  }

  handleOnBlur = ({target}) => {
    let { value } = target;
    const myRe = new RegExp(/(^[0-9])/g);
    if (myRe.test(value)) {
      value = '';
      this.setState({ city: value })
    }
  }

  render() {
    const { name, email, cpf, adress, city, state, typeHouse, typeApartment  } = this.state;
    return (
      <div className="App">
        <fieldset>
          <label htmlFor="name">
          Nome:
          <input required maxLength="40" value={ name } name="name" onChange={ this.handleNameChange } type="text" />
          </label>
          <label htmlFor="email">
            Email:
            <input required maxLength="50" type="email" name="email" onChange={ this.handleChange } value={ email } />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input required maxLength="11" type="text" name="cpf" onChange={ this.handleChange } value={ cpf } />
          </label>
            <label htmlFor="adress">
              Endereço:
              <input required maxLength="200" type="text" name="adress" onChange={ this.handleAdressChange } value={ adress } />
            </label>
            <label htmlFor="city">
              Cidade:
              <input onChange={ this.handleChange } required maxLength="28" type="text" name="city" onBlur={ this.handleOnBlur } value={ city } />
            </label>
            <label htmlFor="state">
              Estado:
              <select onChange={ this.handleChange } value={ state } name="state" id="state">
               <option value="SP">São Paulo</option>
               <option value="RJ">Rio de Janeiro</option>
              </select>
            </label>
            <label htmlFor="typeHouse">
            Casa:
            <input required type="checkbox" name="typeHouse" onChange={ this.handleChange } value={ typeHouse } />
            </label>
            <label htmlFor="typeApartment">
            Apartamento:
            <input required type="checkbox" name="typeApartment" onChange={ this.handleChange } value={ typeApartment } />
            </label>
        </fieldset>
      </div>
    );
  }
}

export default App;
