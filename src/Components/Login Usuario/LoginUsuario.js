import {useState} from "react"
import axios from "axios"
import styles from "./LoginUsuario.module.css"
import {useParams} from 'react-router-dom'



export function LoginUsuario(){
     
    const [form, setForm]= useState({
        Nome:"",
        CPFpaciente:"",
        Senha:"",
              
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
        
                <h1>Login do Usuário</h1>
        
             </span>

            <div className={styles.ficha}>
            <form  onSubmit={handleSubmit}>

            <div className={styles.gerais}>

            <div className={styles.cat}>
                
                 <div className={styles.topic}>
                 <label className={styles.boxForm} >Nome</label>
                 <input onChange={handleChange} className={styles.lineBig} value={form.Nome} name="Nome" placeholder="Nome" />
                 </div>
                 
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm} >CPF do Paciente</label>
                 <input onChange = {handleChange} className={styles.lineMedium} value ={form.CPFpaciente} name="CPFpaciente" placeholder="CPFpaciente" />
                 </div>
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm} >Senha</label>
                 <input onChange = {handleChange} className={styles.lineMedium} value={form.Senha} name="Senha" placeholder="Senha" />
                 </div>
            
            
            </div>
            <button type ="submit" className={styles.lineSmall}>Enviar</button>
            </div>
            </form>
            </div>


        </div>
        

    )
}