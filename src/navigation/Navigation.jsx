import "./navigation.css";
function Navigation({ handleInputChange, query }) {
  return (
    <>
      <div className="navigaion_section">
        <form>
          <input
            type="text"
            placeholder="Enter your shoes here!"
            className="inputBox"
            onChange={handleInputChange}
            value={query}
          />
        </form>

        <div className="menu">
          <a href="#">💖</a>
          <a href="#">🛒</a>
          <a href="#">🧑‍💻</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
