import styles from "../css/contact.module.css"
import axios from "axios"
import hero from "../assets/contact-hero.jpg"
import { useEffect, useState } from "react";
export default function Contact() {
    const [name,setName]=useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const [submitted,setSubmitted] = useState(false)

async function submitForm(e) {
    e.preventDefault();

    setError("");

    if (!name.trim() || !phone.trim() || !email.trim()) {
        setError("Fill all the credentials!");
        return;
    }

    if (name.trim().length < 4) {
        setError("Name should contain at least 4 characters.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email.trim())) {
        setError("Please enter a valid email address.");
        return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
        setError("Phone number should contain exactly 10 digits.");
        return;
    }
    setLoading(true);
    try {
        const response = await axios.post("http://localhost:5000/api/contact", {
            name,
            email,
            phone,
            message,
        });

        console.log(response.data);

        // alert("Message sent successfully!");

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 2000);

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setError("");

    } catch (err) {
        console.log(err);
        setError("Something went wrong.");
    }finally{
        setLoading(false);
    }
}
        return (
        <>
            <div className={styles.hero}>
                <img src={hero} alt="" />
                <div className={styles.heroOverlay}></div>
            </div>
            <div className={styles.formSection}>
                                    <div className={styles.formContent}>
                <div className={styles.formText}>
                    <p className={styles.formTextHead}>Joneja Steels Group(JSG)</p>
                    <div className={styles.contactMethods}>
                        <div className={styles.contactMethod}>
                        <h4>Head office:</h4>
                        <p>Plot No. 239 & 244, Sector - 24 Faridabad - 121005.</p>
                        <p>Haryana (INDIA)</p>
                    </div>
                    <div className={styles.contactMethod}>
                        <h4>Phone Number</h4>
                        <p>+91-129-4064485 / 86 / 87</p>
                    </div>
                    <div className={styles.contactMethod}>
                        <h4>Mobile Number</h4>
                        <p>+919212019811,+919212019820,21,22,27,+919870107279</p>
                    </div>
                    <div className={styles.contactMethod}>
                        <h4>Email</h4>
                        <a href ="mailto:marketing@jonejairon.co.in">marketing@jonejairon.co.in</a>
                        <a href ="mailto:sales@jonejairon.co.in">sales@jonejairon.co.in</a>
                        <a href ="mailto:sales1@jonejairon.co.in">sales1@jonejairon.co.in</a>
                        <a href ="mailto:sales2@jonejairon.co.in">sales2@jonejairon.co.in</a>
                        <a href ="mailto:sales3@jonejairon.co.in">sales3@jonejairon.co.in</a>
                    </div>
                    </div>
                </div>
                <form action="" className={styles.contactForm} onSubmit={submitForm}>
                    {error && <div className={styles.formError}>{error}</div>}
                    <input type="text" placeholder="Your Name"  value={name} onChange={(e)=> setName(e.target.value)}/>
                    <input type="email" placeholder="Your Email Address"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="tel" placeholder="Your Phone Number" value={phone}  onChange={(e)=> setPhone(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Write Your Message"  value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                    <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "Submitting..." : submitted ? "Submitted Successfully!" :"Submit Message"}
</button>
                </form>
            </div>
            </div>
        </>
    )
}