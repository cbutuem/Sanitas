import styles from "./navBar.module.css"
import {Link} from "react-router-dom" 


export function Navbar(){

return(

<div className = {styles.navBar}>
    <span className={styles.topicos}><Link to ={`/user/:userId`}>Ficha Medica</Link></span>
    <span className={styles.topicos}><Link to ={"/formulario/:userId"}>Prontuário Médico</Link></span>
    <span className={styles.topicos}><Link to ={"/exames/:userId"}>Exames</Link></span>
    <span className={styles.topicos}><Link to ={"/consultas/:userId"}>Consultas</Link></span>
    <span className={styles.topicos}><Link to ={"/tratamentos/:userId"}>Tratamentos</Link></span>
    <span className={styles.topicos}><Link to ={"/cirurgia/:userId"}>Cirurgias</Link></span>
    <span className={styles.topicos}><Link to ={"/historico/:userId"}>Histórico</Link></span>
</div>

)

}
       
