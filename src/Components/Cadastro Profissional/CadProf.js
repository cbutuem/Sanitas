import {useState} from "react"
import axios from "axios"
import styles from "./CadProf.module.css"
import { useNavigate } from "react-router-dom";



export function CadProf(){
    const navigate = useNavigate();
    const [form, setForm]= useState({
        Nome:"",
        CPFdoProf:"",
        RG:"",
        Area:"",
        Especializacao:"",
        CRM:"",
        Email:"",
        Telefone:"",
        Senha:"",
              
      });

      function handleChange (event) {
        setForm({
          ...form, [event.target.name]: event.target.value
       });
       
    }


    async function handleSubmit(event){
        event.preventDefault();
        await axios.post("https://ironrest.herokuapp.com/camila-dante-medico", form);
        setForm({
          Nome:"",
          CPFdoProf:"",
          RG:"",
          Area:"",
          Especializacao:"",
          CRM:"",
          Email:"",
          Telefone:"",
          Senha:"",  
        })
        navigate(`/`); 
      }

    return (

        <div className={styles.box}>

            <span  className={styles.title}>
        
                <h1>Cadastro do Profissional</h1>
        
             </span>

            <div className={styles.ficha}>
            <form  onSubmit={handleSubmit}>

                
                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">Nome</label>
                 <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome" />
                 </div>
                 
                 
                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">CPF do Profissional</label>
                 <input onChange = {handleChange} value ={form.CPFdoProf} name="CPFdoProf" placeholder="CPF" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">RG</label>
                 <input onChange = {handleChange} value ={form.RG} name="RG" placeholder="RG" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">Área de Atuação</label>
                 <input onChange = {handleChange} value ={form.Area} name="Area" placeholder="Area" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">Especialização</label>
                 <input onChange = {handleChange} value ={form.Especializacao} name="Especializacao" placeholder="Especialização" />
                 </div>

                 <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">CRM</label>
                 <input onChange={handleChange} value={form.CRM} name="CRM" placeholder="CRM" />
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
                 <label for="formGroupExampleInput2" class="form-label">Senha</label>
                 <input onChange = {handleChange} value={form.Senha} name="Senha" placeholder="Senha" />
                 </div>
              <button type ="submit" className="botao">Enviar</button>
            </form>
            </div>


        </div>
        

    )
}