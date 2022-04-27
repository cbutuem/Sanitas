import styles from "./exames.module.css"
import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export function Exames (){

    const [form, setForm]= useState({
        Nome:"",
        Especializacao:"",
        Pedido:"",
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
              <label for="formGroupExampleInput" class="form-label">Nome do Médico</label>
              <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome do Médico" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Especialização</label>
              <input onChange={handleChange} value={form.Especializacao} name="Especializacao" placeholder="Especialização" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Pedido</label>
              <input onChange={handleChange} value={form.Pedido} name="pedido" placeholder="Pedido" />
            </div>
            
            <button type ="submit" className="botao">Enviar</button>
          </form>  
        </div>

        



     </div>
    
    )
}