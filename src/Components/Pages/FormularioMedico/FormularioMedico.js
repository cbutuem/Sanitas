import styles from "./ficha.module.css"
import { useState } from "react"
import axios from "axios"
//import {Link} from "react-router-dom" 
import { Botao } from "../../Botao/Botao";


export function FormularioMedico(){
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
  
  });

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

   async function handleSubmit(event){
     event.preventDefault();
     await axios.post ("https://ironrest.herokuapp.com/camila-dante", form);
   }


    return (

      <div className={styles.box}>

        <span  className={styles.title}>
        
            <h1>Prontuário Médico</h1>
        
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
                  <label className={styles.boxForm}>Medicamentos de uso Contínuo</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium} name= "Medicamentos" placeholder="Medicamentos" />
                  <Botao but={handleChangeTags} name="Medicamentos" currentTags={form.Medicamentos} tagName="Medicamentos"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Altura</label>
                  <input onChange= {handleChange} className={styles.lineSmall} value= {form.Altura} name= "Altura" placeholder="Altura" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Hábitos de Vida</label>
                  <input onChange= {handleChange} value= {form.HistoricoVida} name= "HistoricoVida" placeholder="Histórico" />
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
                  <label className={styles.boxForm}>Doenças crônicas</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Doencas" placeholder="Doenças crônicas" />
                  <Botao but={handleChangeTags} name="Doencas" currentTags={form.Doencas} tagName="Doencas"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Alergias</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Alergias" placeholder="Alergias" />
                  <Botao but={handleChangeTags} name="Alergias" currentTags={form.Alergias} tagName="Alergias"/>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Histórico Familiar</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}   name= "HistoricoFamiliar" placeholder="Histórico" />
                  <Botao but={handleChangeTags} name="HistoricoFamiliar" currentTags={form.HistoricoFamiliar} tagName="HistoricoFamiliar"/>
                </div>
                <div className={styles.topic}>
                    <label className={styles.boxForm}> Antecedente Cirúrgico</label>
                    <input onChange= {handleChangeCiru} className={styles.lineSmall} value= {ciru.data} name= "data" placeholder="data" />
                    <input onChange= {handleChangeCiru} className={styles.lineSmall} value= {ciru.local} name= "local" placeholder="local" />
                    <input onChange= {handleChangeCiru} className={styles.lineSmall} value= {ciru.motivo} name= "motivo" placeholder="motivo" />
                    <Botao but={handleChangeTags} name="Cirurgia" currentTags={form.Cirurgia} tagName="Cirurgia"/> 
  
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Historico de Internação</label>
                  <input onChange= {(event) => {setTag(event.target.value);}} className={styles.lineMedium}  name= "Internacao" placeholder="internação" />
                  <Botao but={handleChangeTags} name="internacao" currentTags={form.Internacao} tagName="Internacao"/>
                </div>
              </div>
            </div>
            
            
            <div className={styles.gineco}>

              <div className={styles.sub}><h2>Antecedente Ginecológico</h2></div>

              <div className={styles.cat}>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Número de gestacao (gpa) </label>
                  <input onChange= {handleChange} className={styles.lineSmall} value= {form.NumeroGestacao} name= "NumeroGestacao" placeholder="Gestações" />
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
                  <label className={styles.boxForm}> Hipótese</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Hipotese} name= "Hipotese" placeholder="Hipotese" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Conduta</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Conduta} name= "Conduta" placeholder="Conduta" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Diagnóstico</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Diagnostico} name= "Diagnostico" placeholder="Diagnóstico" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Alterações ao Exame  Físico</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Alteracoes} name= "Alteracoes" placeholder="Alterações" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Pedido de Exâme</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Pedido} name= "Pedido" placeholder="Pedido" />
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Observações</label>
                  <input onChange= {handleChange} className={styles.lineBig} value= {form.Obs} name= "Obs" placeholder="Observações" />
                </div>
              </div>
            </div>
            <button type ="submit" className="botao">Enviar</button>
          </form>
        </div>
      </div>
        
    )
} 