import styles from "./Nav.module.css";
import img5 from "./assets/img11.svg";
import img6 from "./assets/logo.png";
import img7 from "./assets/bell.svg";
import { IoMdContact } from "react-icons/io";
import Footer from "./Footer";
let Nav = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary" className={styles.navbar}>
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src={img6} alt="" className={styles.image} />
          </a>
          <form class="d-flex" role="search">
            <div className={styles.navitems}>
              <button
                className={styles.btn}
                style={{ border: "none", fontSize: "1.3vw" }}
              >
                Explore
                <img
                  src={img5}
                  alt=""
                  style={{ marginLeft: "1vw", width: "2vh" }}
                />
              </button>
              <button
                className={styles.btn}
                style={{
                  backgroundColor: "#5a5a5a",
                  color: "#fdd5a9",
                  fontSize: "1.3vw",
                  fontWeight: 600,
                  border: "1px solid #fdd5a9",
                }}
              >
                LUXURY GATEWAYS
              </button>
              <button className={styles.btn}>LIST YOUR PROPERTY</button>
              <button className={styles.btn}>+91 9167928471</button>
              <img className={styles.bell} src={img7} alt="" />
              <IoMdContact className={styles.icons} />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
