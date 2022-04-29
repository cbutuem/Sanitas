import styles from "./exames.module.css"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom"

export function Exames (){
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

    const exames = user.ficha;
    const cont = exames.filter(sem => sem.Pedido !== "");
    return (

    <div className={styles.box}>
    <span  className={styles.title}>
        
        <h1>Exames</h1>

     </span>

     <div className={styles.ficha}>

     <div className={styles.gerais}>

      <ul className={styles.topicos}>
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
      </div>
      </div>
    </div>
    
    )
}