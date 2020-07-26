import styles from "./Button.module.css";

const Button = (props) => (
    <button className={styles.button + " ph4 white flex center "} type="submit">
        {props.title}
    </button>
);

export default Button;
