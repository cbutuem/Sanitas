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

        

        <div className={styles.ficha}>
          <form onSubmit={handleSubmit}>

          <div className={styles.gerais}>

          <div className={styles.cat}>

            <div className={styles.topic}>
              <label className={styles.boxForm}>Nome do Médico</label>
              <input onChange={handleChange} className={styles.lineMedium} value={form.Nome} name="Nome" placeholder="Nome do Médico" />
            </div>
            <div className={styles.topic}>
              <label className={styles.boxForm}>Especialização</label>
              <input onChange={handleChange} className={styles.lineMedium} value={form.Especializacao} name="Especializacao" placeholder="Especialização" />
            </div>
            <div className={styles.topic}>
              <label className={styles.boxForm}>Pedido</label>
              <input onChange={handleChange} className={styles.lineMedium} value={form.Pedido} name="pedido" placeholder="Pedido" />
            </div>
            </div>
            <button type ="submit" className={styles.lineSmall}>Enviar</button>
            </div>
          </form>  
        </div>

        



     </div>
    
    )
}