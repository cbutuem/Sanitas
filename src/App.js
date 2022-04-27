import {Routes, Route } from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {FichaMedica} from "./Components/Pages/Fichamedica/ficha";
import "./App.css"
import {Cirurgia} from "./Components/Pages/Cirurgia/cirurgia";
import {Consultas} from "./Components/Pages/Consultas/consultas";
import {Exames} from "./Components/Pages/Exames/exames";
import {Historico} from "./Components/Pages/Historico/historico";
import {Tratamentos} from "./Components/Pages/Tratamentos/tratamentos";
import {CadProf} from "./Components/Cadastro Profissional/CadProf";
import {CadUsu} from "./Components/Cadastro Usuario/CadUsu";



function App() {
  return(
    
<div className="app">
   
      <span className= "header"><Navbar/></span> 

      <Routes className="home">

    
    
      
        
        <Route path="/FichaMedica" element ={<FichaMedica/>}/>
        <Route path="/cirurgia" element = {<Cirurgia/>}/>
        <Route path="/consultas" element = {<Consultas/>}/>
        <Route path="/exames" element = {<Exames/>}/>
        <Route path="/historico" element = {<Historico/>}/>
        <Route path="/tratamentos" element = {<Tratamentos/>}/>
        <Route path="CadProf" element = {<CadProf/>}/>
        <Route path="CadUsu" element = {<CadUsu/>}/>

        

     
 
      </Routes>
</div>
 
  
  );
}

export default App;
