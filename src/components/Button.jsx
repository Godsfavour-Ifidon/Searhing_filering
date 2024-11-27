function Button({ onCLickHandler, value, title }) {
  return (
    <button onClick={onCLickHandler} value={value} className="btn">
      {title}
    </button>
  );
}

export default Button;
