import './ProductCard.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price} $</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;