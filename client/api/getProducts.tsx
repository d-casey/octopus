import useSWR, { Fetcher } from "swr";
import { request } from "graphql-request";

type ProductData = {
  Product: {
    name: string;
    power: string;
    description: string;
    price: number;
    quantity: number;
    brand: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    model_code: string;
    colour: string;
    img_url: string;
  };
};

const fetcher: Fetcher<ProductData, string> = (query) =>
  request("http://localhost:3001/graphql", query);

function useGetProducts() {
  const { data, error } = useSWR<ProductData, string>(
    `{
      Product(id: "1") {
        name,
        power,
        description,
        price,
        quantity,
        brand,
        weight,
        height,
        width,
        length,
        model_code,
        colour,
        img_url
      }
    }`,
    fetcher
  );

  return { data, error };
}

export { useGetProducts };
