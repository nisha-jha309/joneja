import styles from "../css/footer.module.css"
import {footerImages} from "../data/homeImages.js"
export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={styles.mainLeft}>
                    <div className={styles.call}>
                        <img src={footerImages[0]} alt="" />
                        <div className={styles.detail}>
                            <p>+91-129-4064485</p>
                            <p>+91-9212019820,21,22,27</p>
                        </div>
                    </div>
                    <div className={styles.location}>
                        <img src={footerImages[1]} alt=""/>
                        <div className={styles.detail}>
                            <p>239, Sector-24 Faridabad</p>
                            <p>Haryana (India)</p>
                        </div>
                    </div>
                    <div className={styles.message}>
                        <img src={footerImages[2]} alt="" />
                        <p>marketing@jonejairon.co.in</p>
                    </div>
                </div>
                <div className={styles.mainRight}>
                    <p>Follow Us</p>
                    <img src={footerImages[3]} alt="" />
                    <img src={footerImages[4]} alt="" />
                    <img src={footerImages[5]} alt="" />
                    <img src={footerImages[6]} alt="" />
                    <img src={footerImages[7]} alt="" />
                </div>
            </div>
            <div className={styles.miniFooter}>
                <p>© 2026 Joneja Steels Group (JSG). All right reserved.</p>
                <p>Designed and Promoted by Infinity Advertising Network</p>
            </div>
        </div>
    )
}