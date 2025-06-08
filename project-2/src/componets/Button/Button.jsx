import styles from "./Button.module.css";
const Button = (props) => {
    const {text,iscolor,...rest}=props
  return (
    <button {...rest} className={iscolor ? styles.outline_btn:styles.primary_btn}>{text}</button>

  )
} 

export default Button