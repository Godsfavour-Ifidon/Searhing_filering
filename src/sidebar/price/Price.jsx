import Input from "../../components/Input";
import "./price.css";

function Price({ handleChange }) {
  return (
    <>
      <h1>Price</h1>
      <div className="Price_inputs">
        <Input name="test1" value="" title="All" handleChange={handleChange} />
        <Input
          name="test1"
          value="50"
          handleChange={handleChange}
          title="$0-$50"
        />
        <Input
          name="test1"
          value="100"
          handleChange={handleChange}
          title="$50-$100"
        />
        <Input
          name="test1"
          value="150"
          handleChange={handleChange}
          title="$100-$150"
        />
        <Input
          name="test1"
          value="200"
          title="above $150"
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default Price;
