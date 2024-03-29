import { useContext, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-cart/product-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './category.styles.scss';

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container2'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Category;
