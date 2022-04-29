import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export function FichaUser(){
    const params = useParams();
    const [user, setUser] = useState({ ficha: [{}]});
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

    const exames = user.ficha;
    const cont = exames.filter(sem => sem !== "");
    return (
    <div>
      <ul>
        {
          cont.map((icons) =>{
            console.log(icons.Pedido);
            return(
              <>
                <li>{icons.Nome}</li>
                <li>{icons.Idade}</li>
                <li>{icons.Sexo}</li>
                <li>{icons.Peso}</li>
                <li>{icons.Altura}</li>
                <li>{icons.Medicamentos}</li>
                <li>{icons.Doencas}</li>
                <li>{icons.Alergias}</li>
                <li>{icons.Vacinas}</li>
                <li>{icons.Cirurgias}</li>
                <li>{icons.Insternacao}</li>
                <li>{icons.Queixas}</li>
                <li>{icons.HistoricoVida}</li>
                  HistoricoFamiliar 
                <li>{icons.HistoricoFamiliar[0]}</li>
                <li>{icons.HistoricoFamiliar[1]}</li>
                <li>{icons. NumeroGestacao}</li>
                <li>{icons.Menarca}</li>
                <li>{icons.Menopausa}</li>
                <li>{icons.Data}</li>
              </>
              );
          })
        }
      </ul>
    </div>
    )
}