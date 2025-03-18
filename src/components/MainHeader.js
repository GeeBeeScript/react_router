import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <section>
            <li><NavLink to="/welcome">Main</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </section>
    )
}

export default MainHeader
// NavLinks are similar to Links. The benefit of NavLinks over Links is
// that NavLinks allow special css classes to be added during hover and when
// clicking. by adding activeClassName as a property in the component