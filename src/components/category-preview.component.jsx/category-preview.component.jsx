import './category-preview.styles.scss';
import ProductCard from '../product-cart/product-card.component';
import { Link } from 'react-router-dom';

import React from 'react';

function CategoryPreview({ title, products }) {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>
          <Link to={title}>{title.toUpperCase()}</Link>
        </span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
