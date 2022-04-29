import {Routes, Route } from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import { FormularioMedico } from "./Components/Pages/FormularioMedico/FormularioMedico";
import "./App.css"
import {Cirurgia} from "./Components/Pages/Cirurgia/cirurgia";
import {Consultas} from "./Components/Pages/Consultas/consultas";
import {Diagnostico} from "./Components/Pages/Diagnostico/diagnostico";
import {Exames} from "./Components/Pages/Exames/exames";
import {Historico} from "./Components/Pages/Historico/historico";
import {Tratamentos} from "./Components/Pages/Tratamentos/tratamentos";
import {LoginProf} from "./Components/Login Profissional/LoginProf";
import {CadProf} from "./Components/Cadastro Profissional/CadProf";
import {CadUsu} from "./Components/Cadastro Usuario/CadUsu"
import { useParams } from "react-router-dom";
import { FichaUser } from "./Components/Pages/FichaUser/FichaUser";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  const params = useParams();
  const [islogged, setIslogged] = useState();
  useEffect(() => {
    if (params.userId){
      setIslogged(true);
    }
    else{
      setIslogged(false);
    }
  },[]);

  return(
   
    
<div className="app">


   {islogged ? <span className= "header"><Navbar changeLoggedStatus={setIslogged}/></span> : null}

      <Routes className="home">

        <Route path="/formulario/:userId" element ={<FormularioMedico/>}/>
        <Route path="/cirurgia/:userId" element = {<Cirurgia/>}/>
        <Route path="/consultas/:userId" element = {<Consultas/>}/>
        <Route path="/diagnostico/:userId" element = {<Diagnostico/>}/>
        <Route path="/exames/:userId" element = {<Exames/>}/>
        <Route path="/historico/:userId" element = {<Historico/>}/>
        <Route path="/tratamentos/:userId" element = {<Tratamentos/>}/>
        <Route path="user/:userId" element= {<FichaUser/>}/>
        <Route path="/" element = {<LoginProf changeLoggedStatus={setIslogged}/>}/>
        <Route path="/CadProf" element = {<CadProf changeLoggedStatus={setIslogged}/>}/>
        <Route path="/CadUsu" element = {<CadUsu changeLoggedStatus={setIslogged}/>}/>

      </Routes>
</div>
 
  
  );
}

export default App;
