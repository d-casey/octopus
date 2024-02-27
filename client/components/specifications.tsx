type SpecificationsProps = {
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
};

const Specifications = ({
  brand,
  weight,
  height,
  width,
  length,
  model_code,
  colour,
}: SpecificationsProps) => (
  <div data-testid="specifications" className="specifications content">
    <h3>Specification</h3>
    <div className="aligned-lists">
      <ul>
        <li>Brand</li>
        <li>Item weight (g)</li>
        <li>Dimensions (cm)</li>
        <li>Item Model Number</li>
        <li>Colour</li>
      </ul>
      <ul>
        <li>{brand}</li>
        <li>{weight}</li>
        <li>
          {height} x {width} x {length}
        </li>
        <li>{model_code}</li>
        <li>{colour}</li>
      </ul>
    </div>
  </div>
);

export default Specifications;
