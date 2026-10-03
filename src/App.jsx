import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlElszJlPvpQiwDbnS6YczGkeZaSlKwcMWLojBRjblCw&s=10",
      name: "Laptop",
      price: 1200,
      category: "Elektronika"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_SQ-ysAER9hPEYc1SoVhozAMYe8v8JuemgAz04iTow&s=10",
      name: "Telefon",
      price: 800,
      category: "Elektronika"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwhD-nCH5FXSlq3PDxQNKuoG1g1UNUMsxylDb4xmK3w&s=10",
      name: "Qulaqlıq",
      price: 150,
      category: "Aksesuar"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOhUiqUkRE7MuknC9ZzjiPiD7icnth3DUzAtl751V2Q&s=10",
      name: "Smart Saat",
      price: 250,
      category: "Aksesuar"
    }
  ];

  return (
    <div className="container">
      <h1>Məhsullar</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;