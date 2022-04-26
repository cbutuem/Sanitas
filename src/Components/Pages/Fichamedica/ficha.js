import styles from "./ficha.module.css"
import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom" 


export function FichaMedica(){

  const [form, setForm]= useState({
    Nome:"",
    Idade:"",
    Sexo:"",
    Peso:"",
    Altura:"",
    Doencas:"",
    Alergias:"",
    Vacinas:"",
    Cirurgia:"",
    Queixa: "",
    Medicamentos:"",
    Pedido:"",
    HistoricoVida:"",
    HistoricoFamiliar:"",
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
   console.log ("oii",form);


  }

   async function handleSubmit(event){
     event.preventDefault();
     await axios.post ("https://ironrest.herokuapp.com/camila-dante", form);
   }


    return (

      <div className={styles.box}>

        <span  className={styles.title}>
        
            <h1>Ficha Médica</h1>
        
        </span>

        <div className={styles.ficha}>
        <form  onSubmit={handleSubmit}>

        <div>
          <h2>Gerais</h2>
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Nome Completo</label>
              <input onChange={handleChange} value={form.Nome} name="Nome" placeholder="Nome do paciente" />
            </div><div class="mb-3">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Sexo</label>
              <input onChange={handleChange} value={form.Sexo} name="Sexo" placeholder="F/M" />
            </div><div class="mb-3"></div>
              <label for="formGroupExampleInput2" class="form-label">Idade</label>
              <input onChange = {handleChange} value ={form.Idade} name="Idade" placeholder="Idade do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Peso</label>
              <input onChange = {handleChange} value={form.Peso} name="Peso" placeholder="Peso do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Medicamentos de Uso Contínuo</label>
              <input onChange= {handleChange} value= {form.Medicamentos} name= "Medicamentos" placeholder="Medicamentos" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Altura</label>
              <input onChange= {handleChange} value= {form.Altura} name= "Altura" placeholder="Altura do paciente" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Hábitos de Vida</label>
              <input onChange= {handleChange} value= {form.HistoricoVida} name= "HistoricoVida" placeholder="Histórico" />
            </div>
            


        </div>
          
        <div>
        <h2>Antecedentes Pessoais</h2>
          <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Vacinas</label>
              <input onChange= {handleChange} value= {form.Vacinas} name= "Vacinas" placeholder="Vacinas" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Doenças crônicas</label>
              <input onChange= {handleChange} value= {form.Doencas} name= "Doencas" placeholder="Doenças crônicas" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Alergias</label>
              <input onChange= {handleChange} value= {form.Alergias} name= "Alergias" placeholder="Alergias" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Histórico Familiar</label>
              <input onChange= {handleChange} value= {form.HistoricoFamiliar} name= "HistoricoFamiliar" placeholder="Histórico" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Antecedente Cirúrgico</label>
              <input onChange= {handleChange} value= {form.Cirurgia} name= "Cirurgia" placeholder="Data, Local e Mtivo" />
            </div>
        </div>
            
            
        <div>
          <h2>Antecedente Ginecológico</h2>
          <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Número de gestacao (gpa)
</label>
              <input onChange= {handleChange} value= {form.NumeroGestacao} name= "NumeroGestacao" placeholder="Gestações" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Menarca</label>
              <input onChange= {handleChange} value= {form.Menarca} name= "Menarca" placeholder="Menarca" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Menopausa</label>
              <input onChange= {handleChange} value= {form.Menopausa} name= "Menopausa" placeholder="Menopausa" />
            </div>

       

        </div>
            <div>
            <h2>Resumo</h2>


            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Queixa Atual</label>
              <input onChange= {handleChange} value= {form.Queixa} name= "Queixa" placeholder="Queixa" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Hipótese</label>
              <input onChange= {handleChange} value= {form.Hipotese} name= "Hipotese" placeholder="Hipotese" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Conduta</label>
              <input onChange= {handleChange} value= {form.Conduta} name= "Conduta" placeholder="Conduta" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Diagnóstico</label>
              <input onChange= {handleChange} value= {form.Diagnostico} name= "Diagnostico" placeholder="Diagnóstico" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Alterações ao Exame  Físico</label>
              <input onChange= {handleChange} value= {form.Alteracoes} name= "Alteracoes" placeholder="Alterações" />
            </div>
            
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Pedido de Exâme</label>
              <input onChange= {handleChange} value= {form.Pedido} name= "Pedido" placeholder="Pedido" />
            </div>
            
            
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"> Observações</label>
              <input onChange= {handleChange} value= {form.Obs} name= "Obs" placeholder="Observações" />
            </div>
            </div>
            <button type ="submit" className="botao">Enviar</button>
          </form>
        </div>
      </div>
        
    )
} 