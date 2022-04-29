import styles from "./cirurgia.module.css"
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

      <div className={styles.box}>
      <span  className={styles.title}>
          
          <h1>Cirurgias</h1>
  
       </span>
  
       <div className={styles.ficha}>
  
       <div className={styles.gerais}>
  
      <ul className={styles.topicos}>
      {
        cont.map((icons) =>{
          console.log(icons.Cirurgia);
          return(
            <li>
              <span>{icons.Cirurgia}</span>
            </li>
            );
        })
      }
      </ul>
      </div>
      </div>
    </div>
    
    )
}