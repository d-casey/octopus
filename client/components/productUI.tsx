import { Button } from "./core";

type ProductUIProps = {
  img_url: string;
  description: string;
  name: string;
  power: string;
  price: number;
  quantity: number;
  currentQuantity: number;
  setQuantity: Function;
  cart: number;
  setCart: Function;
};

const ProductUI = ({
  img_url,
  description,
  name,
  power,
  price,
  quantity,
  currentQuantity,
  setQuantity,
  cart,
  setCart,
}: ProductUIProps) => {
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price / 100);

  return (
    <div data-testid="product-ui" className="product content">
      <img src={img_url} alt={description} />
      <div>
        <h1>{name}</h1>
        <p>
          {power} // Packet of {quantity}
        </p>
        <div className="product-buttons">
          <h3>{formattedPrice}</h3>
          <ul className="quantity-buttons">
            <li>
              <Button
                className="btn small-btn"
                disabled={currentQuantity < 2}
                onClick={() => setQuantity(currentQuantity - 1)}
              >
                -
              </Button>
            </li>
            <li>
              <div title="Current quantity" className="text-above">
                <span>Qty</span>
                {currentQuantity}
              </div>
            </li>
            <li>
              <Button
                className="btn small-btn"
                onClick={() => setQuantity(currentQuantity + 1)}
              >
                +
              </Button>
            </li>
          </ul>
        </div>

        <Button
          className="btn primary-btn"
          onClick={() => setCart(cart + currentQuantity)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductUI;
