import styles from "./historico.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export function Historico(){
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

    const date = user.ficha;
    const cont = date.filter(sem => sem.Data !== "");
    return (
    <div>
      <ul>
        {
          cont.map((icons) =>{
            console.log(icons.Data);
            return(
              <li>
                <span>{icons.Data}</span>
              </li>
              );
          })
        }
      </ul>
    </div>
    )
}