import styles from "./navBar.module.css"
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom"


export function Navbar(){
    const location = useLocation();

    const Loc = location.pathname;
    const splits = Loc.split('/', -1);
return(

<div className = {styles.navBar}>
    <span><Link className={styles.topicos} to ={ `user/${splits[splits.length-1]}`}>Ficha Medica</Link></span>
    <span><Link className={styles.topicos} to ={`/formulario/${splits[splits.length-1]}`}>Prontuário Médico</Link></span>
    <span><Link className={styles.topicos} to ={`/exames/${splits[splits.length-1]}`}>Exames</Link></span>
    <span><Link className={styles.topicos} to ={`/consultas/${splits[splits.length-1]}`}>Consultas</Link></span>
    <span><Link className={styles.topicos} to ={`/tratamentos/${splits[splits.length-1]}`}>Tratamentos</Link></span>
    <span><Link className={styles.topicos} to ={`/cirurgia/${splits[splits.length-1]}`}>Cirurgias</Link></span>
    <span><Link className={styles.topicos} to ={`/historico/${splits[splits.length-1]}`}>Histórico</Link></span>
</div>

)

}
       