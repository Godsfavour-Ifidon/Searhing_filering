import Category from "../category/Category";
import Price from "../price/Price";
import Color from "../color/Color";
import "./sidebar.css";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar_container">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
