import { useContext } from 'react';

import { ProductsContext } from '../../context/product.context';
import ProductCard from '../../components/product-cart/product-card.component';

import './shop.styles.scss';

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
