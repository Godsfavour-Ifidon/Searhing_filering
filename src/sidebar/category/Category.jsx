import Input from "../../components/Input";
import "./category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h1>Category</h1>
      <div className="Category_inputs">
        <Input name="test" value="" title="All" handleChange={handleChange} />
        <Input
          name="test"
          value="sneakers"
          handleChange={handleChange}
          title="Sneakers"
        />
        <Input
          name="test"
          title="Flats"
          value="flats"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="sandals"
          title="Sandals"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="heels"
          title="Heels"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Category;
