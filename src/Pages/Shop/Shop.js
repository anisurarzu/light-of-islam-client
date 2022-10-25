import React from 'react';
import ShopHeader from './ShopHeader';
import './shop.css'
import ShoppingCard from './ShoppingCard';

import Cardmain from './Cardmain';
import SliderShow from './SliderShow';

const Shop = () => {
    return (
        <div className='main-shop-bg'>
          
             <ShopHeader></ShopHeader>
             <Cardmain></Cardmain>
           
             <br />
             <br />
        </div>
    );
};

export default Shop;