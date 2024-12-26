import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './stars';
import '../index.css';

function ProductCard({ product }) {
  return (
    <article className="card">
      <header>
        <h3>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
      </header>
      <section>
        <Stars rating={product.rating.rate} />
      </section>
    </article>
  );
}

export default ProductCard;