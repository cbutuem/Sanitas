import styles from "./ficha.module.css"
import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom" 


export function FichaMedica(){

  const [form, setForm]= useState({
    Nome:"",
    Idade:"",
    Peso:"",
    Altura:"",
    Doencas:"",
    Alergias:"",
    Vacinas:"",
  
  });

  function handleChange (event) {
    setForm({
      ...form, [event.target.name]: event.target.value
   }); 
   console.log ("oii",form);


  }

   async function handleSubmit(event){
     event.preventDefault();
     await axios.post ("https://ironrest.herokuapp.com/camila-dante", form);
   }


    return (

      <div className={styles.box}>

        <span  className={styles.title}>
        
            <h1>Ficha Médica</h1>
        
        </span>

        <div className={styles.ficha}>
        <form onSubmit={handleSubmit}>
          
        
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Nome Completo</label>
              <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome do paciente" />
            </div><div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Idade</label>
              <input onChange = {handleChange} value ={form.Idade} name="Idade" placeholder="Idade do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Peso</label>
              <input onChange = {handleChange} value={form.Peso} name="Peso" placeholder="Peso do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Altura</label>
              <input onChange= {handleChange} value= {form.Altura} name= "Altura" placeholder="Altura do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Doenças crônicas</label>
              <input onChange= {handleChange} value= {form.Doencas} name= "Doencas" placeholder="Doenças crônicas" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Alergias</label>
              <input onChange= {handleChange} value= {form.Alergias} name= "Alergias" placeholder="Alergias" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Vacinas</label>
              <input onChange= {handleChange} value= {form.Vacinas} name= "Vacinas" placeholder="Vacinas" />
            </div>
            <button type ="submit" className="botao">Enviar</button>
          </form>
        </div>
      </div>
        
    )
} 