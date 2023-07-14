import banner from "../assets/images/banner.png";
import hero from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import TopTen from "./TopTen";

export default function Home() {
  return (
    <>
      <TopTen />
      <Footer />
    </>
  );
}
