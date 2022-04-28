import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function FichaUser(){
    const params = useParams();
    const [user, setUser] = useState({});
    
    
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
      <>
        <h1>OIIII</h1>
        <h1>{user.Nome}</h1>
        <p>{user.Idade}</p>
        <p>{user.Peso}</p>
        <p>{user.Altura}</p>
        <p>{user.Doenças}</p>
        <p>{user.Alergia}</p>
        <p>{user.Medicamentos}</p>
        <p>{user.Vacinas}</p>
        <p>{user.Altura}</p>
        
      </>
    );
}