import Button from "../components/Button";
import "./recommended.css";

function Recommended({ handleClick }) {
  return (
    <div className="recommended_section">
      <h1 className="recommended_title">Recommended</h1>

      <div className="btns">
        <Button onCLickHandler={handleClick} title="All product" value="" />
        <Button onCLickHandler={handleClick} title="Nike" value="Nike" />
        <Button onCLickHandler={handleClick} title="Adidas" value="Adidas" />
        <Button onCLickHandler={handleClick} title="Puma" value="Puma" />
        <Button onCLickHandler={handleClick} title="Vans" value="Vans" />
      </div>
    </div>
  );
}
export default Recommended;
