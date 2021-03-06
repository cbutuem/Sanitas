import styles from "./ficha.module.css"
import { useState, useEffect } from "react";
import axios from "axios"
//import {Link} from "react-router-dom" 
import { Botao } from "../../Botao/Botao";
import { useParams } from "react-router-dom";



export function FormularioMedico(props){
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = (dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();

  const params = useParams();
  const [topic, setTopic] = useState({ficha: [] });
  const [ciru, setCiru] = useState({
    data: "",
    local: "",
    motivo: "",
  });
  const [tag, setTag]= useState("");
  const [form, setForm]= useState({
    Nome:"",
    Idade:"",
    Sexo:"",
    Peso:"",
    Altura:"",
    Doencas:[],
    Alergias:[],
    Vacinas:[],
    Cirurgia:[],
    Internacao:[],
    Queixa: "",
    Medicamentos:[],
    Pedido:"",
    HistoricoVida:"",
    HistoricoFamiliar:[],
    Obs:"",
    NumeroGestacao:"",
    Menarca:"",
    Menopausa:"",
    Hipotese:"",
    Conduta:"",
    Diagnostico:"",
    Alteracoes:"",
    Data:`${dia}/${mes}/${ano}`,
    Medico:"",
  
  });

  const [submitStatus, setSubmitStatus] = useState(false);

  useEffect(() => {
    async function fetchTopic() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
      );
      setTopic(response.data);
      console.log("oii",response.data);
      setSubmitStatus(false);
    }

    fetchTopic();
  }, [params.userId, submitStatus]);

  function handleChange (event) {
    setForm({
      ...form, [event.target.name]: event.target.value
   }); 
  }

  function handleChangeCiru (event) {
    setCiru({
      ...ciru, [event.target.name]: event.target.value
   });
   console.log(ciru); 
  }
  
  function handleChangeTags(event) {
    const formData = { ...form };
    const name= event.target.name
    console.log(name);
    if(name === "Cirurgia"){
      formData[name].push(ciru);
      setCiru({
        data: "",
        local: "",
        motivo: "",
      });

    } else{
    formData[name].push(tag);
    setTag("");
    }
    
    setForm(formData);

    console.log(form);

    
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const attTopic = { ...topic };
    attTopic.ficha.push(form);
    console.log("wleblw",attTopic.ficha, attTopic); 
    delete attTopic._id;

    await axios.put(
      `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`,
      attTopic
    );
    setSubmitStatus(true);
  }


    return (

      <div className={styles.box}>

        <span  className={styles.title}>
        
            <h1>Prontu??rio M??dico</h1>
        
        </span>

        <div className={styles.ficha}>

          <form  onSubmit={handleSubmit}>

            <div className={styles.gerais}>

              <div className={styles.sub}><h2>Gerais</h2></div>

              <div className={styles.cat}>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Nome Completo</label>
                  <input onChange={handleChange}  className={styles.lineMedium} value={form.Nome} name="Nome" placeholder="Nome Completo" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Sexo</label>
                  <input onChange={handleChange} className={styles.lineSmall} value={form.Sexo} name="Sexo" placeholder="Sexo" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Idade</label>
                  <input onChange = {handleChange} className={styles.lineSmall} value ={form.Idade} name="Idade" placeholder="Idade" />
                </div>
                <div className={styles.topic}>
                  <label  className={styles.boxForm}>Peso</label>
                  <input onChange = {handleChange} className={styles.lineSmall} value={form.Peso} name="Peso" placeholder="Peso" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Medicamentos de uso Cont??nuo</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium} name= "Medicamentos" placeholder="Medicamentos" />
                  <Botao but={handleChangeTags} name="Medicamentos" currentTags={form.Medicamentos} tagName="Medicamentos"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Altura</label>
                  <input onChange= {handleChange} className={styles.lineSmall} value= {form.Altura} name= "Altura" placeholder="Altura" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> H??bitos de Vida</label>
                  <input onChange= {handleChange} value= {form.HistoricoVida} name= "HistoricoVida" placeholder="Hist??rico" />
                </div>
              </div>
            </div>
          
            <div className={styles.ap}>

              <div className={styles.sub}><h2>Antecedentes Pessoais</h2></div>

              <div className={styles.cat}>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Vacinas</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Vacinas" placeholder="Vacinas" />
                  <Botao but={handleChangeTags} name="Vacinas" currentTags={form.Vacinas} tagName="Vacinas"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Doen??as cr??nicas</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Doencas" placeholder="Doen??as cr??nicas" />
                  <Botao but={handleChangeTags} name="Doencas" currentTags={form.Doencas} tagName="Doencas"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Alergias</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Alergias" placeholder="Alergias" />
                  <Botao but={handleChangeTags} name="Alergias" currentTags={form.Alergias} tagName="Alergias"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Hist??rico Familiar</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}   name= "HistoricoFamiliar" placeholder="Hist??rico" />
                  <Botao but={handleChangeTags} name="HistoricoFamiliar" currentTags={form.HistoricoFamiliar} tagName="HistoricoFamiliar"/>
                </div>
                <div className={styles.topic}>
                    <label className={styles.boxForm}> Antecedente Cir??rgico</label>
                    <input onChange= {handleChangeCiru} className={styles.lineSmall} value= {ciru.tipo} name= "data" placeholder="Tipo de cirurgia" />
                    <input onChange= {handleChangeCiru} className={styles.lineSmall} value= {ciru.data} name= "local" placeholder="Data" />
                    <input onChange= {handleChangeCiru} className={styles.lineSmall} value= {ciru.motivo} name= "motivo" placeholder="Motivo" />
                    <Botao but={handleChangeTags} name="Cirurgia" currentTags={form.Cirurgia} tagName="Cirurgia"/> 
  
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Historico de Interna????o</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Internacao" placeholder="interna????o" />
                  <Botao but={handleChangeTags} name="internacao" currentTags={form.Internacao} tagName="Internacao"/>
                </div>
              </div>
            </div>
            
            
            <div className={styles.gineco}>

              <div className={styles.sub}><h2>Antecedente Ginecol??gico</h2></div>

              <div className={styles.cat}>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> N??mero de gestacao (gpa) </label>
                  <input onChange= {handleChange} className={styles.lineSmall} value= {form.NumeroGestacao} name= "NumeroGestacao" placeholder="Gesta????es" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Menarca</label>
                  <input onChange= {handleChange} className={styles.lineSmall} value= {form.Menarca} name= "Menarca" placeholder="Menarca" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Menopausa</label>
                  <input onChange= {handleChange}  className={styles.lineSmall} value= {form.Menopausa} name= "Menopausa" placeholder="Menopausa" />
                </div>
              </div>
            </div>

            <div className={styles.resumo}>
            
              <div className={styles.sub}><h2>Resumo</h2></div>

              <div className={styles.cat}>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Queixa Atual</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Queixa} name= "Queixa" placeholder="Queixa" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Hip??tese</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Hipotese} name= "Hipotese" placeholder="Hipotese" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Conduta</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Conduta} name= "Conduta" placeholder="Conduta" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Diagn??stico</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Diagnostico} name= "Diagnostico" placeholder="Diagn??stico" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Altera????es ao Exame  F??sico</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Alteracoes} name= "Alteracoes" placeholder="Altera????es" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Pedido de Ex??me</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Pedido} name= "Pedido" placeholder="Pedido" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Observa????es</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Obs} name= "Obs" placeholder="Observa????es" />
                </div>
              </div>
            </div>
            <button type ="submit" className="botao">Enviar</button>
          </form>
        </div>
      </div>
        
    )
} 