import { useState } from "react"
import styles from "../css/navbar.module.css"
import {navbarImages} from "../data/homeImages.js"
import { Link } from "react-router" 
import { IoMdClose } from "react-icons/io";

export default function Navbar(){
    const [isTrue,setIsTrue] = useState(false);
    return(
        <div className={styles.navbar}>
            <div className={styles.navContent}>
            <div className={styles.logo}><img src={navbarImages[0]} alt="" /></div>
            <div className={styles.companies}>
                <div className={styles.active}>
                    <img src={navbarImages[1]} alt=""/>
                </div>
                <div>
                    <img src={navbarImages[2]} alt=""/>
                </div>
                <div>
                    <img src={navbarImages[3]} alt=""/>
                </div>
                
            </div>
            <div className={styles.megaNav} onMouseEnter={()=>setIsTrue(true)} >
                <img src={navbarImages[4]} alt="" className={styles.megaNavImage} onClick={() => setIsTrue(prev => !prev)}/>
                <ul className={`${styles.megaNavList}  ${isTrue ? styles.activeMegaNav : "" }`}>
                    <li><Link to="/">mega one</Link></li>
                    <li><Link to="/">mega two</Link></li>
                    <li><Link to="/">mega three</Link></li>
                </ul>
                <ul className={`${styles.phoneNavList}  ${isTrue ? styles.activeMegaNav : "" }`}>
                    <li className={styles.closeMegaNav} onClick={() => setIsTrue(prev => !prev)}><IoMdClose /></li>
                    <li><Link to="/">mega one</Link></li>
                    <li><Link to="/">mega two</Link></li>
                    <li><Link to="/">mega three</Link></li>
                </ul>
            </div>
        </div>
        </div>
    )
}