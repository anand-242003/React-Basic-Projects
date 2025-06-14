import styles from './Contact.module.css';

function Contact() {
    return (
        <div>
            <h1 className={`container ${styles.header} `}>
                CONTACT US
            </h1>
            <p className={styles.content}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
    );
}

export default Contact;
