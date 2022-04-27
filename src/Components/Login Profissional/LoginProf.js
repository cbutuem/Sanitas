import {useState} from "react"
import axios from "axios"
import styles from "./LoginProf.module.css"


export function LoginProf(){

    const [form, setForm]= useState({
        CRM:"",
        Idade:"",
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
        
                <h1>Login Profissional da Saúde</h1>
        
             </span>

            <div className={styles.ficha}>
            <form  onSubmit={handleSubmit}>

            <div className={styles.gerais}>
           
            <div className={styles.cat}>
                
                 <div className={styles.topic}>
                 <label className={styles.boxForm} > CRM </label>
                 <input onChange={handleChange} className={styles.lineMedium} value={form.CRM} name="CRM" placeholder="CRM" />
                 </div>
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Idade do Paciente</label>
                 <input onChange={handleChange} className={styles.lineSmall} value={form.Idade} name="Idade" placeholder="Idade" />
                 </div>
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm}>CPF do Paciente</label>
                 <input onChange = {handleChange} className={styles.lineMedium} value ={form.CPFpaciente} name="CPFpaciente" placeholder="CPFpaciente" />
                 </div>
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Senha</label>
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