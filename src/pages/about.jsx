import styles from "../css/about.module.css"
import hero from "../assets/about-hero.jpg"
import { aboutImages, aboutImageText, storyData, industryData, brandImages } from "../data/aboutImages.js";
import { useState, useEffect } from "react";
export default function About() {

    const storyYear = [1987, 1990, 2000, 2005, 2020, 2021];
    const [current, setCurrent] = useState(0);
    const [currentAbout, setCurrentAbout] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentAbout(prev => (prev + 1) % aboutImages.length);
                setFade(true);
            }, 300);
            setFade(false);

        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className={styles.hero}>
                <img src={hero} alt="" />
                <div className={styles.heroOverlay}></div>
            </div>
            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h4 className={styles.aboutHead}>About</h4>
                        <p className={styles.aboutSubhead}>Joneja Steels Group</p>
                        <div className={styles.aboutDescription}>Joneja Hydraulics Private Limited “JHPL” is a privately owned, progressive and Independent producer of Customised Hydraulic Cylinders and Hydraulic System. It has its manufacturing facility in Faridabad which is a part of National Capital Region (NCR). As a qualitative manufacturer of Hydraulic Cylinders, we have all in-house resources required to meet the customer expectation.</div>
                    </div>
                    <div className={styles.aboutImages}>
                        <div className={styles.caraouselBox}>
                            <img src={aboutImages[currentAbout]} alt="" className={`${styles.caraouselImage1} ${fade ? styles.show : ""}`} />
                            <p className={styles.picName}>{aboutImageText[currentAbout]}</p>
                            <div className={styles.caraouselDots}>
                                {aboutImages.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.caraouselDot} ${currentAbout === index ? styles.currentCarouselDot : ""
                                            }`}
                                    />
                                ))}

                            </div>
                        </div>
                        <img src={aboutImages[(currentAbout + 1) % aboutImages.length]} alt="" className={`${styles.caraouselImage2} ${fade ? styles.show : ""}`} />
                    </div>
                </div>
            </div>
            <div className={styles.story}>
                <div className={styles.storyContent}>
                    <div className={styles.storyWrapper}>
                        <div className={styles.storyText}>
                            <div className={styles.storyHead}>
                                {storyData[current].head}
                            </div>

                            <div className={styles.storySubhead}>
                                {storyData[current].subhead}
                            </div>

                            <div className={styles.storyDescription}>
                                {storyData[current].description}
                            </div>
                        </div>

                        <div className={styles.StoryImage}>
                            <img src={storyData[current].src} alt="" />
                        </div>
                    </div>
                    <div className={styles.storyTimeline}>
                        <hr className={styles.storyLine} />
                        <div className={styles.storyTimes}>
                            {
                                storyYear.map((item, index) => (
                                    <div className={styles.storyTime} key={index}>
                                        <p className={`${styles.storysYear} ${current === index ? styles.activeYear : ""}`}>{item}</p>
                                        <div className={`${styles.storyCircle} ${current === index ? styles.activeYearCircle : ""}`} onClick={() => setCurrent(index)}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.industries}>
                <div className={styles.industryContent}>
                    <p className={styles.industryHead}>Industry We Serve</p>
                    <div className={styles.industryImages}>
                        {
                            industryData.map((item, index) => (
                                <div className={styles.industryImageBox} key={index}>
                                    <div className={styles.industryImageOverlay}></div>
                                    <img src={item.src} alt="" className={styles.industryImage} />
                                    <div className={styles.industryImageBoxText}>
                                        <div className={styles.industryName}>{item.name}</div>
                                        <div className={styles.industryDescription}>{item.description}</div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.brandSection}>
                        <p>PRICISION AUTO COMPONENTS EXPORT TO BRANDS</p>
                        <div className={styles.brands}>
                            {
                                brandImages.map((item, index) => (
                                    <div className={styles.brandBox} key={index}>
                                        <img src={item} alt="" className={styles.brand} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}