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

            <div>
                
                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">CRM</label>
                 <input onChange={handleChange} value={form.CRM} name="CRM" placeholder="CRM" />
                 </div>
                 
                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">Idade do Paciente</label>
                 <input onChange={handleChange} value={form.Idade} name="Idade" placeholder="Idade" />
                 </div>
                 
                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">CPF do Paciente</label>
                 <input onChange = {handleChange} value ={form.CPFpaciente} name="CPFpaciente" placeholder="CPFpaciente" />
                 </div>
                 
                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">Senha</label>
                 <input onChange = {handleChange} value={form.Senha} name="Senha" placeholder="Senha" />
                 </div>
            
            
            </div>
            <button type ="submit" className="botao">Enviar</button>
            </form>
            </div>


        </div>
        

    )
}