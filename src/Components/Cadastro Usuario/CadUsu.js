import {useState} from "react"
import axios from "axios"
import styles from "./CadUsu.module.css"



export function CadUsu(){
    const [form, setForm]= useState({
        Nome:"",
        CPFpaciente:"",
        RG:"",
        Senha:"",
        Email:"",
        Telefone:"",
        Aniversario:"",
        ficha:[],       
      });

      function handleChange (event) {
        setForm({
          ...form, [event.target.name]: event.target.value
       }); 
    }


    async function handleSubmit(event){
        event.preventDefault();
        await axios.put("https://ironrest.herokuapp.com/camila-dante-paciente", form);
        setForm({
          Nome:"",
          CPFpaciente:"",
          RG:"",
          Senha:"",
          Email:"",
          Telefone:"",
          Aniversario:"",    
        });
      }

    return (

        <div className={styles.box}>

            <span  className={styles.title}>
        
                <h1>Cadastro do Usuário</h1>
        
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
                 <input onChange = {handleChange} value ={form.CPFpaciente} name="CPFpaciente" placeholder="CPF do Paciente" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">RG</label>
                 <input onChange = {handleChange} value ={form.RG} name="RG" placeholder="RG" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">Senha</label>
                 <input onChange = {handleChange} value={form.Senha} name="Senha" placeholder="Senha" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">Email</label>
                 <input onChange={handleChange} value={form.Email} name="Email" placeholder="Email" />
                 </div>

                                 
                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">Telefone</label>
                 <input onChange={handleChange} value={form.Telefone} name="Telefone" placeholder="Telefone" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">Aniversário</label>
                 <input onChange={handleChange} value={form.Aniversario} name="Aniversario" placeholder="Aniversário" />
                 </div>
                 
                 
            
            
            </div>
            <button type ="submit" className="botao">Enviar</button>
            </form>
            </div>


        </div>
        

    )
}