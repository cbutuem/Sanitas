import styles from "./exames.module.css"
import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export function Exames (){

    const [form, setForm]= useState({
        Nome:"",
        Data:"",
        Tipo:"",
        Exame:"",
        Diagnostico:"",      
      });


    function handleChange (event) {
        setForm({
          ...form, [event.target.name]: event.target.value
       }); 

    }
       async function handleSubmit(event){
        event.preventDefault();
        await axios.post ("https://ironrest.herokuapp.com/camila-dante", form);
      }



    return (

    <div className={styles.box}>

        <span  className={styles.title}>
        
            <h1>Exames</h1>
        
        </span>

        

        <div>
          <form onSubmit={handleSubmit}>

            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Nome Completo</label>
              <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Data</label>
              <input onChange={handleChange} value={form.Data} name="Data" placeholder="Data" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Tipo</label>
              <input onChange={handleChange} value={form.Tipo} name="Tipo" placeholder="Lab/Img" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Exame</label>
              <input onChange={handleChange} value={form.Exame} name="Exame" placeholder="Exame" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Diagnóstico</label>
              <input onChange={handleChange} value={form.Diagnostico} name="Diagnostico" placeholder="Exame" />
            </div>
            <button type ="submit" className="botao">Enviar</button>
          </form>  
        </div>

        



     </div>
    
    )
}