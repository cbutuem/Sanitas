//import styles from "./cirurgia.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function Cirurgia (){
    const params = useParams();
    const [user, setUser] = useState({ ficha:[] });

    useEffect(() => {
      async function fetchUser() {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
        );
        setUser(response.data);
      }
      fetchUser();
    }, [params.userId]);

   //const elements = user.ficha;
   console.log("hii", user.ficha);
   
   //const setFiltro = elements.map(ciru => ciru.Cirurgia);
   //console.log("hii",setFiltro);

    return(
        <ul>
            {user.ficha[user.ficha.length - 1].map((currentFicha) => {
        return <h1>Teste</h1>;
      })}
        </ul>


    )
}