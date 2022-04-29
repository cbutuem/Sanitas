import styles from "./consultas.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function Consultas(){
  const params = useParams();
  const [user, setUser] = useState([]);
  
  
  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
      );
      setUser(response.data);
    }
    fetchUser();
  }, [params.userId]);

    return (

    <div className={styles.box}>

     </div>
    
    )
}