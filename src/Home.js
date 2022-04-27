import {Routes, Route } from "react-router-dom";
import {LoginProf} from "./Components/Login Profissional/LoginProf";
import {LoginUsuario} from "./Components/Login Usuario/LoginUsuario";
import App from './App';
import "./App.css"


function Home() {
    return(

        <div className="app">
            <Routes>


                <Route path="/" element = {<LoginProf/>}/>
                <Route path="LoginUsuario" element = {<LoginUsuario/>}/>


            </Routes>




        </div>


        );
    }
    
    export default Home;
    