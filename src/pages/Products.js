import { NavLink } from "react-router-dom";
import classes from '../components/Products.module.css'

const Product = () => {
  return (
    <section>
      <h4>Products page</h4>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/products/p1">Product, p1</NavLink>
        </li>
        <li>
          <NavLink to="/products/p2">Product, p2</NavLink>
        </li>
        <li>
          <NavLink to="/products/p3">Product, p3</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Product;
