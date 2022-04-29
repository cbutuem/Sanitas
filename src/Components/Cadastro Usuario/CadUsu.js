import { useState, useEffect } from "react";
import axios from "axios"
import styles from "./CadUsu.module.css"
import { useNavigate } from "react-router-dom"




export function CadUsu(){
    const navigate = useNavigate();  
    const [form, setForm]= useState({
        Nome:"",
        CPFpaciente:"",
        RG:"",
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
        await axios.post ("https://ironrest.herokuapp.com/camila-dante-paciente", form);
        navigate(`/`);

      }

    return (

        <div className={styles.box}>

            <span  className={styles.title}>
        
                <h1>Cadastro do Usuário</h1>
        
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
                 <input onChange = {handleChange} className={styles.lineMedium} value ={form.CPFpaciente} name="CPFpaciente" placeholder="CPF do Paciente" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm} >RG</label>
                 <input onChange = {handleChange} className={styles.lineMedium} value ={form.RG} name="RG" placeholder="RG" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm} >Telefone</label>
                 <input onChange={handleChange} className={styles.lineMedium} value={form.Telefone} name="Telefone" placeholder="Telefone" />
                 </div>


                 <div className={styles.topic}>
                 <label className={styles.boxForm} >Email</label>
                 <input onChange={handleChange} className={styles.lineMedium} value={form.Email} name="Email" placeholder="Email" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm} >Aniversário</label>
                 <input onChange={handleChange} className={styles.lineMedium} value={form.Aniversario} name="Aniversario" placeholder="Aniversário" />
                 </div>
                 
                 
            
            
            </div>
            <button type ="submit" className={styles.lineSmall}>Enviar</button>
            </div>
            </form>
            </div>


        </div>
        

    )
}