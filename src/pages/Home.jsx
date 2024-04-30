import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk } from '../redux/slices/productSlice'
import Spinner from 'react-bootstrap/Spinner';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { onNavigateNext,onNavigatePrev } from '../redux/slices/productSlice';



function Home() {
    const dispatch = useDispatch()
    const {product, loading, error,productsPerPage,currentPage} = useSelector((state) => state.productReducer)

    useEffect(() => {
        dispatch(fetchProductThunk())
    }, [])


    const totalPages=Math.ceil(product?.length/ productsPerPage)
    const indexOfLastElement=currentPage * productsPerPage
    const indexOfFirstElement=indexOfLastElement-productsPerPage
    const validCard=product?.slice(indexOfFirstElement,indexOfLastElement)

    const navigatePrev=()=>{
        if(currentPage != 1){
            dispatch(onNavigatePrev())
        }
    }

    const navigateNext=()=>{
        if(currentPage != totalPages){
            dispatch(onNavigateNext())
        }
    }

    
    

    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder text-white">REDUX CART</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop whatever you desire</p>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            !loading&&error &&
                            <div className='text-danger display-4'>{error}</div>
                        }

                        {
                            loading ?
                                <div className='d-flex justify-content-center'>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="xl"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <h2 className='ms-2'>Loading...</h2>
                                </div>
                                : !error &&
                                validCard.map(item => (
                                    <div className="col mb-5">
                                        <div className="card h-100 shadow border">
                                            <Link to={`/detail/${item?.id}`} className='text-decoration-none'>

                                                <img className="card-img-top" style={{height:'180px'}} src={item.thumbnail} alt="..." />

                                                </Link>
                                                <div className="card-body p-4">
                                                    <div className="text-center"  style={{height:'100px'}}>

                                                        <h5 className="fw-bolder">{item?.title}</h5>

                                                        ₹{item?.price}
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <button className='btn btn-border' onClick={()=>{dispatch(addToWishList(item))}}>
                                                            <i class="fa-solid fa-heart-circle-plus" style={{ color: '#ff006f' }}></i>
                                                        </button>
                                                        <button className='btn btn-border' onClick={()=>{dispatch(addToCart(item))}}>
                                                            <i class="fa-solid fa-cart-plus" style={{ color: '#0f0c00' }}></i>
                                                        </button>

                                                    </div>
                                                </div>




                                        </div>

                                    </div>
                                ))
                        }


                    </div>
                </div>

                <div className='text-center'>
                    <button className='btn' onClick={navigatePrev}><i class="fa-solid fa-arrow-left"></i></button>
                    <span>{currentPage}/{totalPages}</span>
                    <button className='btn' onClick={navigateNext} ><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </section>

        </>
    )
}

export default Home