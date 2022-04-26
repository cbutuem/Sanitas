import styles from "./consultas.module.css"
import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export function Consultas(){
    const [form, setForm]= useState({
        Nome:"",
        Data:"",
        Resumo:"",
        Obs:"",
        Pedidos:"",
        Diagnostico:"",
        Tratamento:"",      
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
        
            <h1>Primeira Consulta</h1>
        
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
              <label for="formGroupExampleInput" class="form-label">Resumo da Consulta</label>
              <input onChange={handleChange} value={form.Resumo} name="Resumo" placeholder="Resumo" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Observações</label>
              <input onChange={handleChange} value={form.Obs} name="Obs" placeholder="Obs." />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Pedidos Médicos</label>
              <input onChange={handleChange} value={form.Pedidos} name="Pedidos" placeholder="Pedidos" />
            </div>
            <span  className={styles.title}>
        
            <h1>Retorno</h1>
        
            </span>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Diagnóstico</label>
              <input onChange={handleChange} value={form.Diagnostico} name="Diagnostico" placeholder="Diagnóstico" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Tratamento</label>
              <input onChange={handleChange} value={form.Tratamento} name="Tratamento" placeholder="Tratamento" />
            </div>

            <button type ="submit" className="botao">Enviar</button>
          </form>  
        </div>

        



     </div>
    
    )
}