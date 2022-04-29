import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function FichaUser(){
    const params = useParams();
    const [user, setUser] = useState({ ficha: [{Nome:"Teste"}]});
    console.log(params.userId); 
    
    useEffect(() => {
      async function fetchUser() {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/camila-dante-paciente/${params.userId}`
        );
        console.log(response.data);
        setUser(response.data);
        
      }
      fetchUser();
      
    }, []);
  

    console.log(user);
    return (
      <>
        <h1>OIIII</h1>
        <h1>{user.Nome}</h1>
        <p>{user.Idade}</p>

        
      </>
    );
}