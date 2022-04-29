//import styles from "./cirurgia.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function Cirurgia (){
    const params = useParams();
    const [user, setUser] = useState({ficha:[]});

    useEffect(() => {
      async function fetchUser() {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
        );
        setUser(response.data);
      }
      fetchUser();
    }, [params.userId]);

    const cirur = user.ficha;
    const cont = cirur.filter(sem => sem.Cirurgia !== "")
    return(
      <ul>
      {
        cont.map((icons) =>{
          console.log(icons.Pedido);
          return(
            <li>
              <span>{icons.Pedido}</span>
            </li>
            );
        })
      }
    </ul>
    )
}