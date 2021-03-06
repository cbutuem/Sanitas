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

            <div className={styles.gerais}>

                <div className={styles.cat}>
                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Nome</label>
                 <input onChange={handleChange}  className={styles.lineMedium} value={form.Nome} name="Nome" placeholder="Nome" />
                 </div>
                 
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm}>CPF do Profissional</label>
                 <input onChange = {handleChange}  className={styles.lineMedium} value ={form.CPFdoProf} name="CPFdoProf" placeholder="CPF" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm}>RG</label>
                 <input onChange = {handleChange}  className={styles.lineMedium} value ={form.RG} name="RG" placeholder="RG" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm}>??rea de Atua????o</label>
                 <input onChange = {handleChange}  className={styles.lineMedium} value ={form.Area} name="Area" placeholder="Area" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Especializa????o</label>
                 <input onChange = {handleChange}  className={styles.lineMedium} value ={form.Especializacao} name="Especializacao" placeholder="Especializa????o" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm}>CRM</label>
                 <input onChange={handleChange}  className={styles.lineMedium} value={form.CRM} name="CRM" placeholder="CRM" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Email</label>
                 <input onChange={handleChange}  className={styles.lineMedium} value={form.Email} name="Email" placeholder="Email" />
                 </div>

                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Telefone</label>
                 <input onChange={handleChange}  className={styles.lineMedium} value={form.Telefone} name="Telefone" placeholder="Telefone" />
                 </div>
                 
                 <div className={styles.topic}>
                 <label className={styles.boxForm}>Senha</label>
                 <input onChange = {handleChange}  className={styles.lineMedium} value={form.Senha} name="Senha" placeholder="Senha" />
                 </div>
              <button type ="submit" className={styles.lineSmall} >Enviar</button>
              </div>
              </div>
            </form>
            
            </div>


        </div>
        

    )
}