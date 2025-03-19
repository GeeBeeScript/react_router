import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/p1">Product, p1</Link>
        </li>
        <li>
          <Link to="/products/p2">Product, p2</Link>
        </li>
        <li>
          <Link to="/products/p3">Product, p3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
