import SwiperOne from "./SwiperOne";
import styles from "./App.module.css";
import InputField from "./InputField";
import SwiperTwo from "./SwiperTwo";
import Nav from "./Nav";
import Addverse from "./Addverse";
import SwiperThree from "./SwiperThree";
import Swipe from "./Swipe";
import LastSwiper from "./LastSwiper";
import Footer from "./Footer"; 
export default function App() {
  // const headin ="Trending This Season";
  return (
    <div className={styles.maindiv}>
      <Nav></Nav>
      <SwiperOne></SwiperOne>
      <InputField></InputField>

      <SwiperTwo></SwiperTwo>
      <Addverse></Addverse>
      <Swipe></Swipe>

      <SwiperThree></SwiperThree>
      <Swipe></Swipe>
      <LastSwiper></LastSwiper>
      <Footer></Footer>
      {/* <PopularDestinations></PopularDestinations> */}
    </div>
  );
}
