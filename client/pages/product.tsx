import { useState } from "react";
import { Footer, Header, Loading, LoadingError } from "../components/core";
import { Description, Specifications, ProductUI } from "../components";
import { useGetProducts } from "../api/getProducts";

const Product = () => {
  const [cart, setCart] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const { data, error } = useGetProducts();

  if (error) return <LoadingError />;
  if (!data) return <Loading />;

  return (
    <>
      <Header cart={cart} />
      <ProductUI
        img_url={data.Product.img_url}
        description={data.Product.description}
        name={data.Product.name}
        power={data.Product.power}
        price={data.Product.price}
        quantity={data.Product.quantity}
        currentQuantity={quantity}
        setQuantity={setQuantity}
        cart={cart}
        setCart={setCart}
      />
      <Description description={data.Product.description} />
      <Specifications
        brand={data.Product.brand}
        weight={data.Product.weight}
        height={data.Product.height}
        width={data.Product.width}
        length={data.Product.length}
        model_code={data.Product.model_code}
        colour={data.Product.colour}
      />
      <Footer />
    </>
  );
};

export default Product;
