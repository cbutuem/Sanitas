import {Routes, Route } from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import { FormularioMedico } from "./Components/Pages/FormularioMedico/FormularioMedico";
import "./App.css"
import {Cirurgia} from "./Components/Pages/Cirurgia/cirurgia";
import {Consultas} from "./Components/Pages/Consultas/consultas";

import {Exames} from "./Components/Pages/Exames/exames";
import {Historico} from "./Components/Pages/Historico/historico";
import {Tratamentos} from "./Components/Pages/Tratamentos/tratamentos";
import {LoginProf} from "./Components/Login Profissional/LoginProf";
import {LoginUsuario} from "./Components/Login Usuario/LoginUsuario";
import {CadProf} from "./Components/Cadastro Profissional/CadProf";
import {CadUsu} from "./Components/Cadastro Usuario/CadUsu"
import { useParams } from "react-router-dom";
import { FichaUser } from "./Components/Pages/FichaUser/FichaUser";



function App() {
  const params = useParams();

  return(
   
    
<div className="app">
   {params.userId !== "" ? <span className= "header"><Navbar/></span> : null}

      <Routes className="home">

        <Route path="/formulario/:userId" element ={<FormularioMedico/>}/>
        <Route path="/cirurgia/:userId" element = {<Cirurgia/>}/>
        <Route path="/consultas/:userId" element = {<Consultas/>}/>
        <Route path="/exames/:userId" element = {<Exames/>}/>
        <Route path="/historico/:userId" element = {<Historico/>}/>
        <Route path="/tratamentos/:userId" element = {<Tratamentos/>}/>
        <Route path="user/:userId" element= {<FichaUser/>}/>
        <Route path="/" element = {<LoginProf/>}/>
        <Route path="/LoginUsuario" element = {<LoginUsuario/>}/>
        <Route path="/CadProf" element = {<CadProf/>}/>
        <Route path="/CadUsu" element = {<CadUsu/>}/>

      </Routes>
</div>
 
  
  );
}

export default App;