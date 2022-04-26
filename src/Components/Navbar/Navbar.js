import styles from "./navBar.module.css"
import {Link} from "react-router-dom" 


export function Navbar(){

return(

<div className = {styles.navBar}>
    <span className={styles.topicos}><Link to ={"/"}>Prontuário Médico</Link></span>
    <span className={styles.topicos}><Link to ={"/exames"}>Exames</Link></span>
    <span className={styles.topicos}><Link to ={"/consultas"}>Consultas</Link></span>
    <span className={styles.topicos}><Link to ={"/tratamentos"}>Tratamentos</Link></span>
    <span className={styles.topicos}><Link to ={"/cirurgia"}>Cirurgias</Link></span>
    <span className={styles.topicos}><Link to ={"/historico"}>Histórico</Link></span>
</div>

)

}
       
