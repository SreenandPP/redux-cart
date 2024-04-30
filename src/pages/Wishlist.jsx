import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'



function Wishlist() {
  const {wishlist}=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const dispatch=useDispatch()

  const handleAddToCart=(product)=>{
          dispatch(addToCart(product))
          dispatch(removeFromWishList(product.id))
  }
  
  return (
    <div className='container p-5'>
          <Row>
            {
            wishlist?.length>0?
            wishlist?.map(item=>(
              <Col sm={12} md={6} lg={6} xl={2}>
              <Card className='border shadow' >
                 <Card.Img src={item?.thumbnail} height={'150px'}  />
                 <Card.Body>
                    <Card.Title>{item?.title.slice(1-10)}...</Card.Title>
                    <Card.Text>₹{item?.price} </Card.Text>
                    <div className='d-flex justify-content-between'>
                    <button className='btn  border shadow ' onClick={()=>handleAddToCart(item)} >
                <i className="fa-solid fa-cart-plus " style={{color:'#0f0c00'}}></i>
               </button>
                <button className='btn  border shadow' onClick={()=>{dispatch(removeFromWishList(item?.id))}}>
                <i className="fa-solid fa-heart-circle-xmark" style={{color:'#ff006f'}}></i>
               </button>
                    </div>
                 </Card.Body>
              </Card>
           </Col>
            ))
            :
            <h1>No Wishlist item...</h1>
          }
           
          </Row>
 
    </div>
  )
}

export default Wishlist