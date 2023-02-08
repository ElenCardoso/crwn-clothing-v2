import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
  ItemDetailsName,
} from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemDetailsName>{name}</ItemDetailsName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
