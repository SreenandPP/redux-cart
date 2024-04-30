import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
    <div className='d-flex justify-content-between p-5 bg-dark '>
        <div className='w-25 text-white'>
          <h4 className='text-white'>ReduxCart 2024</h4>
          <p style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis ipsam ut hic. Accusantium cumque maiores, dolor magni exercitationem libero dolorum corporis? Quibusdam dolor nostrum ratione inventore enim libero repellendus?</p>
        </div>
        <div className='w-25 ms-5'>
          <h4 className='text-white'>Links</h4>
          <Link to={'/wish'} className='d-block mb-1 mt-3 text-decoration-none text-white'>Wishlist</Link>
          <Link to={'/cart'} className=' text-decoration-none text-white'>Cart</Link>
        </div>
        <div className='w-25 ' >

          <h4 className=' text-white'>Reference</h4>


          <a href="https://redux.js.org/" target='_blank' className=' mt-3 mb-1 text-white text-decoration-none ' >Redux</a><br />
          <a href="https://react-bootstrap.netlify.app/" target='_blank' className='text-white text-decoration-none'>React-Bootstrap</a><br />
          <a href="https://react-bootstrap.netlify.app/" target='_blank' className='text-white text-decoration-none'>React</a>

        </div>

         <div className='w-25 text-white'>
              <h4 className='text-white'>Contact Us</h4>
              <p >Submit your Email,so we can contact you...</p>
              <input type="email" className='form-control' placeholder='Enter Email Id' />
              <button className='btn btn-outline-light mt-3'>Submit</button>
         </div>


      </div>

       <h5 className='text-center'>ReduxCart 2024 <i className="fa-solid fa-copyright"></i> All rights resrved </h5>

    </div>
     
    </>
  )
}

export default Footer