import { useState, useEffect } from "react";
import axios from "axios"
import styles from "./LoginProf.module.css"
import { useNavigate } from "react-router-dom";


export function LoginProf(props){
    const navigate = useNavigate();
    const [med, setMed] = useState([]);
    const [user, setUser] = useState([]); 
    const [form, setForm]= useState({
        CRM:"",
        Nome:"",
        CPFpaciente:"",
        Senha:"",
              
      });

      useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://ironrest.herokuapp.com/camila-dante-paciente');
            setUser(response.data);
        }
        fetchData();    
      },[])

  
      useEffect(() => {
        async function fetchData(){ 
            const response = await axios.get('https://ironrest.herokuapp.com/camila-dante-medico');
            setMed(response.data);
        }
        fetchData();    
      },[])

      function handleChange (event) {
        setForm({
          ...form, [event.target.name]: event.target.value
       }); 
       console.log("haro",form);
    }

    async function handleSubmit(event){
      event.preventDefault();

      const find = med.filter(acharCRM => acharCRM.CRM === form.CRM);
      const itens = Object.keys(find);
      const usuario = user.filter(loginUser => loginUser.CPFpaciente === form.CPFpaciente);
      console.log("vaii",usuario);
      
      if(find[itens].Nome === form.Nome && find[itens].Senha === form.Senha && find[itens].CRM === form.CRM){
        console.log("oiii",usuario);
        if(usuario.length === 0){
          navigate(`/CadUsu`);
          console.log("eiii, vai filho");
        }
        else{
          navigate(`user/${usuario[0]._id}`);
          props.changeLoggedStatus(true);
          
        }  
        
        console.log("ALELUIA");
      }
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
                <label className={styles.boxForm}>Nome</label>
                <input onChange={handleChange} className={styles.lineBig} value={form.Nome} name="Nome" placeholder="Nome" />
              </div>
              <div className={styles.topic}>
                <label className={styles.boxForm}>CRM</label>
                <input onChange={handleChange} className={styles.lineMedium} value={form.CRM} name="CRM" placeholder="CRM" />
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