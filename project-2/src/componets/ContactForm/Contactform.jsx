import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [text, settext] = useState('');

  const submithandler = (event) => {
    event.preventDefault(); // prevents page reload
    console.log("Form Submitted", event);
  };

  const onVIAcallsubmithandler = () => {
    console.log("This is my first call");
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.contact_text}>
          <Button text="VIA SUPPORT CHAT" />
          <Button onClick={onVIAcallsubmithandler} text="VIA CALL" />
        </div>

        <Button text="VIA EMAIL FORM" iscolor={true} />

        <form onSubmit={submithandler}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows={5}
              style={{ borderRadius: 10 }}
              value={text}
              onChange={(event) => settext(event.target.value)}
            ></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button text="SUBMIT BUTTON" type="submit" />
          </div>
        </form>
      </div>

      {/* Live preview */}
      <div>
        <strong>Name:</strong> {name} <br />
        <strong>Email:</strong> {email} <br />
        <strong>Text:</strong> {text}
      </div>

      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
