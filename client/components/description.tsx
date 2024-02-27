type DescriptionProps = {
  description: string;
};

const Description = ({ description }: DescriptionProps) => (
  <div data-testid="description" className="light-bg content">
    <h3>Description</h3>
    <p>{description}</p>
  </div>
);

export default Description;
