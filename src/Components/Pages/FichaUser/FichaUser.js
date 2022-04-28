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
        <h1>{user.instituicao}</h1>
        <p>{user.descricao}</p>
        <p>{user.categoria}</p>
        
      </>
    );
}