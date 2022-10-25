import React from 'react';
import './Modal.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../../../store/cartSlice';

const CartModal = ({isVisible,onCloce}) => {
    const dispatch = useDispatch()
    const items = useSelector((state)=>state.cart)
    
    if( !isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onCloce();
    }
    const handleRemove =(productId) =>{
        dispatch(remove(productId))

    }

    
    
    return (
        
        <div  onClick={handleClose} id="wrapper"
        className='z-40 fixed inset-0  backdrop-blur-sm flex  '>
            {/* bg-black bg-opacity-25 */}
            
           
            <div className=' modal-card-class overflow-auto with-modal flex flex-col  shadow top-0 right-0 bg-white shadow-md rounded-md'>
                
                <button onClick={()=> onCloce()} className=' cloce-botton font-bold place-self-end'>X</button>
                <div className='cart-box '>
                    <br />
                        <div className=' m-3  '>
                        {/* {
                                items.map(product=>(
                                    <div>
                                        <p>{product.price}</p>
                                    </div>

                                ))
                            } */}

                            
{
                items.map(product=>(
                    <div className='grid  container'>
                        <div className='flex grid grid-cols-3 container mt-2 bg-white rounded-md shadow'>
                        <img className='w-16 mt-3' src={product.img} alt="" />

                        <div className='mt-4'>
                            <p className='mt-2 font-bold'> $ {product.price}</p>
                           
                           
                        </div>
                        <div className='mt-4'>
                        <button onClick={() => handleRemove(product.id)} className= 'ml-auto mr-auto p-1 bg-red-600 text-white rounded'>Remove</button>
                        </div>
                     </div>
                    </div>
                ))
            }
                    </div>
                    <br />
               </div>

            </div>
        </div>
    );
};

export default CartModal;