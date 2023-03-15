import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

function Checkout() {
  const { cartItems, deleteItem } = useContext(CartContext);

  const reduceQty = (item) => {
    console.log(item);
  };
  const increaseQty = (item) => {
    console.log(item);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt='' />
              </td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <h4 onClick={() => reduceQty(item)}>&#60;</h4> {item.price}{' '}
                <h4 onClick={() => increaseQty(item)}>&#62;</h4>;
              </td>
              <td onClick={() => deleteItem(item)}>X</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Checkout;
