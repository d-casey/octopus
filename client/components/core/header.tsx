type HeaderProps = {
  cart: number;
};

const Header = ({ cart }: HeaderProps) => {
  return (
    <div data-testid="header" className="header">
      <img
        src="http://localhost:3000/octopus-logo.svg"
        alt="Octopus Energy Logo"
      />
      <div>
        <img src="http://localhost:3000/basket.svg" alt="Basket Icon" />
        {cart > 0 && <span title="Basket items">{cart}</span>}
      </div>
    </div>
  );
};

export default Header;
