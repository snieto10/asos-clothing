import { useContext } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-cart/product-card.component';

import './shop.styles.scss';
import { Fragment } from 'react';

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              {categoriesMap[title].map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default Shop;
