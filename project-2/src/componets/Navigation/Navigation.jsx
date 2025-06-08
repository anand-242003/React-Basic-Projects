import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation} `  }>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navigation;
