function ProductCard({ image, name, price, category }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>Qiymət: {price} AZN</p>

      <p>Kateqoriya: {category}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;