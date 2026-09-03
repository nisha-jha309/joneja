import { useState } from "react";
import { Link } from "react-router-dom"
import styles from "../../css/home.module.css"
import { GoArrowUpRight } from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";

export default function Insight({ src, date, description }) {
    const [goHover,setGoHover] = useState(false);
    return (
        <div className={styles.insightsImageBox}>
            <img src={src} />
            <h1 className={styles.insightDate}>{date}</h1>
            <p className={styles.insightDescription}>{description}</p>
            <Link to="/insight" className={styles.goBtn} onMouseEnter={() => setGoHover(true)} onMouseLeave={() => setGoHover(false)}>
                {
                    goHover===true ? <LuArrowRight size={28} className={styles.goIcon}/> : <GoArrowUpRight size={28} className={styles.goIcon}/>
                }
                </Link>
        </div>

    )
}