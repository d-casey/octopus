import { render, fireEvent, getByTestId } from "@testing-library/react";
import Product from "../pages/product";
import { productMock } from "./mocks";

const mock = { data: productMock, error: null };

jest.mock("../api/getProducts", () => ({
  useGetProducts: () => {
    return mock;
  },
}));

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(<Product />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(<Product />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});

test("should display all sections of the page", async () => {
  const { getByTestId } = render(<Product />);

  const expectedPageIds = [
    "header",
    "product-ui",
    "description",
    "specifications",
  ];
  expectedPageIds.forEach((id) => expect(getByTestId(id)).toBeInTheDocument());
});

test("should show the loading message when data is being fetched", async () => {
  mock.data = null;
  
  const { getByText } = render(<Product />);

  const loadingMessage = getByText("Loading....");

  expect(loadingMessage).toBeInTheDocument;
});

test("should show the error message when the product data does not load", async () => {
  mock.error = "error";

  const { getByText } = render(<Product />);

  const loadingMessage = getByText("Error fetching product data");

  expect(loadingMessage).toBeInTheDocument;
});
