import { Model, Collection } from 'nestedtypes'
import shop from '../../common/api/shop'

export const Product = Model.extend( {
    attributes : {
        image     : String,
        title     : String,
        price     : Number,
        inventory : Number
    },

    collection : {
        fetch(){
            shop.getProducts( products => this.set( products, { parse : true }) );
        }
    }
} );

export const Cart = Collection.extend({
    model : Product,

    checkout(){
        shop.buyProducts( this.toJSON(), () => this.reset() );
    }
});
