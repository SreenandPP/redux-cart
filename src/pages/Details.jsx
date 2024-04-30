import React,{useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
 

function Details() {

  const [data,setData]=useState([])
  const{id}=useParams()
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log(id);
    setData(JSON.parse(localStorage.getItem("response")).find(item=>item.id==id))
  },[])

  return (
   <>
     <div className='p-5 container'>
      
        <Row >
          <Col sm={12} md={6} lg={6} >
          <img className='img-fluid ' style={{height:'400px'}}  src={data.thumbnail}  alt="img" />
      
          </Col>
          <Col sm={12} md={6} lg={6} className='p-5'>
               <div className='mb-3 '>Product ID:{data?.id}</div>
               <h1 className='mb-1'>{data?.title}</h1>
               <div className='mb-3'>
                <span> ₹{data?.price}</span>
                <p>{data?.brand}</p>
               </div>
               <p className='mb-3' style={{textAlign:'justify'}}>{data?.description}</p>
               <div className='d-flex justify-content-between '>
                <button className='btn btn-lg border shadow mt-4' onClick={()=>{dispatch(addToWishList(data))}}>
                <i class="fa-solid fa-heart-circle-plus fa-lg" style={{color:'#ff006f'}}></i>
                </button>
                 <button className='btn btn-lg border shadow mt-4'  onClick={()=>{dispatch(addToCart(data))}}>
                 <i class="fa-solid fa-cart-plus fa-lg" style={{color:'#0f0c00'}}></i>
                </button>
               </div>
          </Col>
        </Row>
     </div>
   </>
  )
}

export default Details