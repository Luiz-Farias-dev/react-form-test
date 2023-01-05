import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    maritalStatus: '',
    genre: '',
  });

  const handleChange = (e) => {
    setData((prev) => {
      const {name, value} = e.target;
      const newData = {...prev, [name]: value};
      return newData;
    })
  }

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if(data.fullName) {
      const explodeString = data.fullName.split(' ')
      if(explodeString[0] && explodeString[1]) {
        value += amountToAdd;
      }    
    }
    if(data.email) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if(pattern.test(data.email)) {
        value += amountToAdd;
      }
    }
    if(data.maritalStatus) {
      value += amountToAdd;
    }
    if(data.genre) {
      value += amountToAdd;
    }
    return value;
  }

   const handleSubmit = () => {
    alert('Fomulário enviado com sucesso!');
    setData(() => {
      const newData = {
        fullName: '',
        email: '',
        maritalStatus: '',
        genre: '',
      }

      return newData;
    })
    console.log('submit')
   }

  return (
    <div className="App">
      <h3>Desafio Reactjs</h3>
      <h1>Progresso do Formulário</h1>

      <main>
        <div className='bar-container'>
          <div className='bar' style={{width: `${calculateProgress()}%`}}>

          </div>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input 
          className='name-email-select' 
          name='fullName' 
          value={data.fullName} 
          onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input 
          name='email' 
          className='name-email-select' 
          value={data.email} 
          onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select 
          name='maritalStatus' 
          className='name-email-select' 
          value={data.maritalStatus} 
          onChange={(e) => handleChange(e)}
          >
            <option value=''>- selecione -</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='radio'>
          <label htmlFor=''>Gênero</label>
          <span>
            <input 
            type='radio' 
            name='genre' 
            value='masculino' 
            onChange={(e) => handleChange(e)} 
            checked={data.genre === 'masculino'}
            /> Masculino
          </span>
          <span>
            <input 
            type='radio' 
            name='genre' 
            value={'feminino'} 
            onChange={(e) => handleChange(e)} 
            checked={data.genre === 'feminino'}
            /> Feminino
          </span>
          <span>
            <input 
            type='radio' 
            name='genre' 
            value={'outro'} 
            onChange={(e) => handleChange(e)} 
            checked={data.genre === 'outro'}
            /> Outro
          </span>
        </div>
        <button type='submit' onClick={() => handleSubmit()} disabled={calculateProgress() !== 100}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
