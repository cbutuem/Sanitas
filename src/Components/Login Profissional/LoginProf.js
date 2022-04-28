import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import styles from "./LoginProf.module.css"
import { useNavigate } from "react-router-dom";


export function LoginProf(){
    const navigate = useNavigate();
    const params = useParams();
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
      
      if(find[itens].Nome === form.Nome && find[itens].Senha === form.Senha && find[itens].CRM === form.CRM){
        usuario.map((info) => {
          navigate(`/user/${info._id}`);
        });
        
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
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nome</label>
                <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">CRM</label>
                <input onChange={handleChange} value={form.CRM} name="CRM" placeholder="CRM" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">CPF do Paciente</label>
                <input onChange = {handleChange} value ={form.CPFpaciente} name="CPFpaciente" placeholder="CPFpaciente" />
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