function Card({
  img,
  title,
  stars,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
}) {
  return (
    <section className="card">
      <img src={img} alt={title} />

      <div className="card_detail">
        <div className="card_title">
          <h4>{title}</h4>
        </div>

        <div className="card_reviews">
          <div className="stars">**</div>

          <div className="review">
            <h2>{reviews}</h2>
          </div>
        </div>
        <div className="card_price">
          <h3>
            <del>{prevPrice}</del>
            {newPrice}
          </h3>
          <div className="cart">💼</div>
        </div>
      </div>
    </section>
  );
}

export default Card;
