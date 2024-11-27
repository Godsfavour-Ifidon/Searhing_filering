function Input({ handleChange, value, title, name }) {
  return (
    <p>
      <label>
        {title}
        <input type="radio" name={name} value={value} onChange={handleChange} />
      </label>
    </p>
  );
}
export default Input;
