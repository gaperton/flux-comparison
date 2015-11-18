import React           from 'nestedreact'

import CCart           from '../../common/components/Cart.jsx'
import CProductItem    from '../../common/components/ProductItem.jsx'
import CProductsList   from '../../common/components/ProductsList.jsx'

import { Cart, Product } from './models'

var App = React.createClass( {
    attributes : {
        cart     : Cart,
        products : Product.Collection
    },

    componentWillMount(){
        this.state.products.fetch();
    },

    render(){
        let { state } = this;
        return (
            <div>
                <ProductsContainer products={ state.products }
                                   addToCart={ product => state.cart.add( product ) }/>

                <CartContainer cart={ state.cart }/>
            </div>
        );
    }
} );

const ProductsContainer = ({ products, addToCart }) =>(
    <CProductsList title="Flux Shop Demo (NestedReact)">
        { products.map( product => (
            <CProductItem key={ product.id }
                          product={ product.toJSON() }
                          onAddToCartClicked={ addToCart }/>
            ))}
    </CProductsList>
);

const CartContainer = ( { cart } ) => (
    <CCart products={ cart.toJSON() }
           total={ cart.length }
           onCheckoutClicked={ () => cart.checkout() }/>
);

export default App;
