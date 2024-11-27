import "./color.css";
import Input from "../../components/Input";
function Color({ handleChange }) {
  return (
    <div>
      <h1>Colors</h1>

      <div className="color_inputs">
        <Input name="test2" value="" title="All" handleChange={handleChange} />
        <Input
          name="test2"
          value="black"
          title="Black"
          handleChange={handleChange}
        />
        <Input
          name="test2"
          value="blue"
          title="Blue"
          handleChange={handleChange}
        />
        <Input
          name="test2"
          value="green"
          title="Green"
          handleChange={handleChange}
        />
        <Input
          name="test2"
          value="red"
          title="Red"
          handleChange={handleChange}
        />
        <Input
          name="test2"
          value="white"
          title="White"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Color;
