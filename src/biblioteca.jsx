import React from 'react';
import './App.css';

// Componente para la barra de navegación superior
const Header = () => {
  return (
    <header className="header">
      <div className="logo">Biblioteca</div>
      <div className="search-bar-container">
        <span className="search-icon"></span>
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
      <div className="right-icons">
        {/* Aquí puedes agregar otros iconos si los necesitas */}
        <span className="dropdown-icon">🔽</span>
      </div>
    </header>
  );
};

// Componente para cada tarjeta de producto
const ProductCard = ({ image, title, category, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p className="product-category">{category}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

// Componente para la cuadrícula de productos
const ProductGrid = () => {
  const products = [
    {
      image: "https://i.pinimg.com/1200x/e8/2f/dd/e82fdd77fc8088876c6e2bd6478c06db.jpg",
      title: "Nacatamal",
      category: "Gastronomía",
      description: "Aquí les dejo una receta para que se animen a elaborarlos. Es un trabajo intenso pero que puede ser muy divertido para toda la familia"
    },
    {
      image: "https://i.pinimg.com/1200x/e8/2f/dd/e82fdd77fc8088876c6e2bd6478c06db.jpg",
      title: "Nacatamal",
      category: "Gastronomía",
      description: "Aquí les dejo una receta para que se animen a elaborarlos. Es un trabajo intenso pero que puede ser muy divertido para toda la familia"
    },
    {
      image: "https://i.pinimg.com/1200x/e8/2f/dd/e82fdd77fc8088876c6e2bd6478c06db.jpg",
      title: "Nacatamal",
      category: "Gastronomía",
      description: "Aquí les dejo una receta para que se animen a elaborarlos. Es un trabajo intenso pero que puede ser muy divertido para toda la familia"
    },
    {
      image: "https://i.pinimg.com/1200x/e8/2f/dd/e82fdd77fc8088876c6e2bd6478c06db.jpg",
      title: "Nacatamal",
      category: "Gastronomía",
      description: "Aquí les dejo una receta para que se animen a elaborarlos. Es un trabajo intenso pero que puede ser muy divertido para toda la familia"
    },
    {
      image: "https://i.pinimg.com/1200x/e8/2f/dd/e82fdd77fc8088876c6e2bd6478c06db.jpg",
      title: "Nacatamal",
      category: "Gastronomía",
      description: "Aquí les dejo una receta para que se animen a elaborarlos. Es un trabajo intenso pero que puede ser muy divertido para toda la familia"
    },
    {
      image: "https://i.pinimg.com/1200x/e8/2f/dd/e82fdd77fc8088876c6e2bd6478c06db.jpg",
      title: "Nacatamal",
      category: "Gastronomía",
      description: "Aquí les dejo una receta para que se animen a elaborarlos. Es un trabajo intenso pero que puede ser muy divertido para toda la familia"
    }
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          category={product.category}
          description={product.description}
        />
      ))}
    </div>
  );
};

// Componente principal
function App() {
  return (
    <div className="library-app">
      <Header />
      <ProductGrid />
    </div>
  );
}

export default App;