import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';



function Header() {
    const {wishlist}=useSelector(state=>state.wishlistReducer)
    const cart=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()
    return (
        <>
            <Navbar expand="lg " style={{backgroundColor:'#f5c947'}} >
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} className='text-decoration-none text-white'>
                            <i className="fa-solid fa-bag-shopping fa-lg me-2" style={{color:'#ffffff'}}></i>
                            Redux Cart
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='btn me-5 '  style={{backgroundColor:'#f0b402'}}>
                             
                             <input type="text" onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}} placeholder='Search..' className='form-control' />
                            
                            </Nav.Link>
                            <Nav.Link className='btn   shadow  text-white' style={{backgroundColor:'#f0b402',height:'fit-content'}}>
                                <Link to={'/wish'} className='text-decoration-none'>
                                <i className="fa-solid fa-heart me-2" style={{color:' #ff006f'}}></i>
                            Wishlist
                            <Badge bg="secondary " className='ms-2'>{wishlist?.length}</Badge>
                                </Link>
                            
                            </Nav.Link>
                            <Nav.Link className='btn  ms-2 shadow text-white' style={{backgroundColor:'#f0b402',height:'fit-content'}}>
                            <Link to={'/cart'} className='text-decoration-none'>

                            <i className="fa-solid fa-cart-shopping me-2" style={{color:'#0f0c00'}}></i>
                              Cart
                              <Badge bg="secondary "  className='ms-2'>{cart?.length}</Badge>
                            </Link>
                            
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header