import {useState} from "react"
import axios from "axios"
import styles from "./LoginUsuario.module.css"



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
        await axios.get ("https://ironrest.herokuapp.com/camila-dante-paciente", form);
      }

    return (

        <div className={styles.box}>

            <span  className={styles.title}>
        
                <h1>Login do Usuário</h1>
        
             </span>

            <div className={styles.ficha}>
            <form  onSubmit={handleSubmit}>

            <div>
                
                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">Nome</label>
                 <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome" />
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