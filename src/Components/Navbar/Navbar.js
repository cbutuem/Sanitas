import styles from "./navBar.module.css"
import {Link} from "react-router-dom" 


export function Navbar(){

return(

<div className = {styles.navBar}>
    <span ><Link className={styles.topicos} to ={"/FichaMedica"}>Ficha Médica</Link></span>
    <span ><Link className={styles.topicos} to ={"/exames"}>Exames</Link></span>
    <span ><Link className={styles.topicos} to ={"/consultas"}>Consultas</Link></span>
    <span ><Link className={styles.topicos} to ={"/tratamentos"}>Tratamentos</Link></span>
    <span ><Link className={styles.topicos} to ={"/cirurgia"}>Cirurgias</Link></span>
    <span ><Link className={styles.topicos} to ={"/historico"}>Histórico</Link></span>
    
    
</div>

)

}
       
