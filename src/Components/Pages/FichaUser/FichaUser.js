import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function FichaUser(){
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
    const cont = exames.filter(sem => sem !== "");
    return (
    <div>
      <ul>
        {
          cont.map((icons) =>{
            console.log(icons);
            return(
              <li>
                <span>{icons}</span>
              </li>
              );
          })
        }
      </ul>
    </div>
    )
}