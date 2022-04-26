import styles from "./ficha.module.css"
import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom" 


export function FichaMedica(){
  const [tag, setTag]= useState("");
  const [form, setForm]= useState({
    Nome:"",
    Idade:"",
    Sexo:"",
    Peso:"",
    Altura:"",
    Doencas:[{}],
    Alergias:[{}],
    Vacinas:[{}],
    Cirurgia:[{}],
    Queixa: "",
    Medicamentos:"",
    Pedido:"",
    HistoricoVida:"",
    HistoricoFamiliar:[{}],
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
  
  function handleChangeTags() {
    const formData = { ...form };

    formData.tags.push(tag);

    setForm(formData);

    console.log(form);

    setTag("");
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
                  <input onChange= {handleChange} className={styles.lineMedium} value= {form.Medicamentos} name= "Medicamentos" placeholder="Medicamentos" />
                  <button>add</button>
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
                  <input onChange= {handleChange} className={styles.lineMedium} value= {form.Vacinas} name= "Vacinas" placeholder="Vacinas" />
                  <button>add</button>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}>Doenças crônicas</label>
                  <input onChange= {handleChange} value= {form.Doencas} name= "Doencas" placeholder="Doenças crônicas" />
                  <button>add</button>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Alergias</label>
                  <input onChange= {handleChange} className={styles.lineMedium} value= {form.Alergias} name= "Alergias" placeholder="Alergias" />
                  <button>add</button>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Histórico Familiar</label>
                  <input onChange= {handleChange} className={styles.lineMedium} value= {form.HistoricoFamiliar} name= "HistoricoFamiliar" placeholder="Histórico" />
                  <button>add</button>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Antecedente Cirúrgico</label>
                  <input onChange= {handleChange} className={styles.lineMedium} value= {form.Cirurgia} name= "Cirurgia" placeholder="Data, Local e Motivo" />
                  <button>add</button>
                </div>
                <div className={styles.topic}>
                  <label className={styles.boxForm}> Historico de Internação</label>
                  <input onChange= {handleChange} className={styles.lineMedium} value= {form.Internacao} name= "Internacao" placeholder="internação" />
                  <button>add</button>
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