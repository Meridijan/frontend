import React from 'react';
import eliteRank from '../assets/img/ELITE_RANK.png'
import '../styles/ProductListings.css';

function ProductListing() {
  const products = [
    { id: 1, name: 'VIP Package', price: 19.99, image: eliteRank },
    { id: 2, name: 'Custom Skin Pack', price: 9.99, image: '/img/skin-pack.png' },
    { id: 3, name: 'Server Access Pass', price: 29.99, image: '/img/server-pass.png' },
    { id: 4, name: 'Special Rank', price: 24.99, image: '/img/rank.png' },
    { id: 5, name: 'Resource Pack', price: 4.99, image: '/img/resource.png' },
    { id: 6, name: 'Merchandise', price: 39.99, image: '/img/merch.png' },
    { id: 7, name: 'Premium Bundle', price: 49.99, image: '/img/premium.png' },
    { id: 8, name: 'Donation Support', price: 5.00, image: '/img/donation.png' },
    { id: 9, name: 'Exclusive Perks', price: 14.99, image: '/img/perks.png' },
  ];

  return (
    <section className="ProductWrapper">
      <div className="ProductContainer">
        <h2>Our Products</h2>
        <div className="ProductGrid">
          {products.map((product) => (
            <div key={product.id} className="ProductCard">
              {product.image ? (
                <img src={product.image} alt={product.name} className="ProductImage" />
              ) : (
                <div className="Placeholder">No Image</div>
              )}
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductListing;
