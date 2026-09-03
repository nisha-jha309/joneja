import { useState } from "react"
import hero1 from "../assets/hero1.jpg"
import styles from "../css/home.module.css"
import { trustImage, aboutImages, productImage1, productImage2, insightData, clientsImages } from "../data/homeImages.js"
import mapImage from "../assets/map.png"
import Insight from "../components/home/insight.jsx"
import chairman from "../assets/chairman1.jpg"
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router"
export default function Home() {
    return (
        <>
            <section className={styles.hero}>
                <img src={hero1} alt="" className={styles.heroImage} />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroText}>
                    <h1 className={styles.heroHead}>Engineering Strength. Delivering Precision.</h1>
                    <p className={styles.heroSubhead}>Trusted solutions in Bright Steel, Hydraulics & Precision Components.</p>
                </div>
            </section>
            <section className={styles.trust}>
                <div className={styles.trustContent}>
                    <div className={styles.trustFeature}>
                        <img src={trustImage[0]} alt="" />
                        <div className={styles.trustDetail}>
                            <h4>Joneja Steels Group</h4>
                            <p>Accreted by <b>NABL</b></p>
                        </div>
                    </div>
                    <div className={styles.trustFeature}>
                        <img src={trustImage[1]} alt="" />
                        <div className={styles.trustDetail}>
                            <h4 className={styles.number}>12</h4>
                            <p>Market Area</p>
                        </div>
                    </div>
                    <div className={styles.trustFeature}>
                        <img src={trustImage[2]} alt="" />
                        <div className={styles.trustDetail}>
                            <h4>ISO/TS 16949:2015</h4>
                            <p>Certified Company</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <div className={styles.sectionName}>About</div>
                        <h1 className={styles.aboutHead}>Joneja Steels Group (JSG)</h1>
                        <p className={styles.aboutDescription}>For over four decades, Joneja Steel Group has been a trusted manufacturing partner to leading automotive, engineering, construction, hydraulic, and industrial brands worldwide.<br /><br />
                            Driven by innovation, quality, and technical excellence, our group operates through specialized business divisions that deliver world-class steel products, precision-engineered components, and hydraulic solutions tailored to modern industry requirements.<br /><br />
                            From raw material processing to advanced manufacturing, every product reflects our commitment to precision, durability, and customer satisfaction.
                        </p>
                        <Link className={styles.viewStoryBtn} to ="/about">Discover Our Story </Link>
                    </div>
                    <div className={styles.aboutImages}>
                        {aboutImages.map((image, index) => (
                            <img src={image} alt="About Joneja Steels" key={index} className={styles.aboutImage} />
                        ))
                        }
                    </div>
                </div>
            </section>
            <section className={styles.products}>
                <div className={styles.productsContent}>
                    <div className={styles.productsText}>
                        <h4 className={styles.productHead}>Built for Heavy-Duty Performance</h4>
                        <p className={styles.productSectionName}>Our Products</p>
                    </div>
                    <div className={styles.productImagesSection}>
                        <div className={styles.productImages1}>
                            {
                                productImage1.map((item, index) => (
                                    <div className={styles.productBox}>
                                        <div className={styles.productImageBox}>
                                            <img className={styles.productImage} src={item.src}></img>
                                            <div className={styles.productImageOverlay}></div>
                                            <Link className={styles.buyBtn} to="/productPage">Buy Now <BsArrowRight /> </Link>
                                        </div>
                                        <p className={styles.productName}>{item.productName}</p>
                                    </div>
                                ))
                            }

                        </div>
                        <div className={styles.productImages2}>
                            {
                                productImage2.map((item, index) => (
                                    <div className={styles.productBox}>
                                        <div className={styles.productImageBox}>
                                            <img className={styles.productImage} src={item.src}></img>
                                            <div className={styles.productImageOverlay}></div>
                                            <Link className={styles.buyBtn} to="/productPage">Buy Now <BsArrowRight /> </Link>                                        
                                        </div>
                                        <p className={styles.productName}>{item.productName}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.insights}>
                <div className={styles.insightsContent}>
                    <div className={styles.insightsHeading}>Industry Insights & Technical Knowledge</div>
                    <div className={styles.insightsImageBoxes}>
                        {insightData.map((item, index) => (
                            <Insight key={index} src={item.src} date={item.date} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.mapSection}>
                <div className={styles.mapContent}>
                    <div className={styles.mapText}>
                        <h4>Global Presence</h4>
                        <p>Serving Industries Across Continents</p>
                    </div>
                    <div className={styles.mapArea}>
                        <ul className={styles.countries}>
                            <li className={styles.country}>Europe</li>
                            <li className={styles.country}>Australia</li>
                            <li className={styles.country}>Asia</li>
                            <li className={styles.country}>South Africa</li>
                        </ul>
                        <img src={mapImage} alt="" className={styles.map} />
                    </div>
                </div>
            </section>
            <section className={styles.clients}>
                <div className={styles.clientsContent}>
                    <div className={styles.clientsText}>
                        <h4>Clients</h4>
                        <p>Trusted by Industry Leaders</p>
                    </div>
                    <div className={styles.clientsIcons}>
                        {clientsImages.map((item, index) => (
                            <div className={styles.clientsIcon}>
                                <img src={item} alt="" key={index} className={styles.clientsIcon} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.chairmanSection}>
                <div className={styles.chairmanContent}>
                    <div className={styles.chairman}>
                        <img className={styles.chairmanPhoto} src={chairman} />
                        <div className={styles.chairmanText}>
                            <h4 className={styles.chairmanHeading}>From The Chairman</h4>
                            <p className={styles.chairmanPara}>success has always been driven by a simple philosophy—deliver uncompromising quality while continuously evolving to meet the changing needs of industry. We remain committed to innovation, operational excellence, and building lasting partnerships that create sustainable value for our customers and stakeholders.
                            </p>
                            <p className={styles.chairmanName}>Ajay Singh Joneja, Managing Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 