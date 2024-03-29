import './category-item.styles.scss';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className='category-body-container'>
        <h2>{title}</h2>
        <Link to={`shop/${title}`}>
          <p>Shop Now</p>{' '}
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
