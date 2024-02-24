// import styles from './Button.module.css'

function Button() {
//   const styles = {
//       backgroundColor: "aquamarine",
//       color: "white",
//       padding: "10px 20px",
//       borderRadius: "5px",
//       border: "none",
//       cursor: "pointer",
//   }
  return(
    <button className={styles.button}>Click me</button>
    // <button className={styles}>Click me</button>
  );
}

export default Button;

// style react components with css
// 1. external
// 2. modules
// 3. inline