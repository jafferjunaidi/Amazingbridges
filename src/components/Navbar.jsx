import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container">
    <Link  className="navbar-brand" to="/"><img src='logo.png'/></Link> 
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  aria-current='page' className='nav-link active' to='/'>Home</Link> 
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" data-bs-auto-close="false" to="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link> 
          <ul className="dropdown-menu">
            <div className="btn-group dropend">
              <button type="button" className="btn dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                Regionally
              </button>
              <ul className="dropdown-menu">
                <li><Link  className='dropdown-item ' to='/pakistanbridges'>Pakistan Bridges</Link> </li>
                <li><Link  className='dropdown-item' to='/chinabridges'>China Bridges</Link> </li>
                <li><Link  className='dropdown-item' to='/ukbridges'>UK Bridges</Link> </li>
              </ul>
            </div>
            <div className="btn-group dropend">
              <button type="button" className="btn dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                Bridges
              </button>
              <ul className="dropdown-menu">
                <li><Link  className='dropdown-item' to='/chainbridge'>Chain Bridge</Link> </li>
                <li><Link  className='dropdown-item' to='/towerbridge'>Tower Bridge</Link> </li>
                <li><Link  className='dropdown-item' to='/millauviaductbridge'>Millau Viaduct Bridge</Link> </li>
              </ul>
            </div>

          </ul>
        </li>
        <li className="nav-item">
          <Link  className='nav-link' to='/#gallery'>Gallery</Link> 
        </li>
        <li >
          <Link className='nav-link' to='/travelwithus'>Travel With Us</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link' to='/feedback'>Feedback</Link> 
        </li>
        <li className="nav-item">
          <Link  className='nav-link' to='/about'>About Us</Link> 
        </li>
        <li className="nav-item">
          <Link  className='nav-link' to='/contact'>Contact Us</Link> 
        </li>
        <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" data-bs-auto-close="outside" to="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Site map
          </Link> 
          <ul className="dropdown-menu">
            <li>
              <Link  className='dropdown-item' to='/'> Home</Link> 
            </li>
            
            <div className="btn-group dropstart">
              <button type="button" className="btn dropdown-toggle text-light"  data-bs-auto-close="outside" data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </button>
              <ul className="dropdown-menu">
                <li><Link  className='dropdown-item ' to='/pakistanbridges'>Pakistan Bridges</Link> </li>
                <li><Link  className='dropdown-item' to='/chinabridges'>China Bridges</Link> </li>
                <li><Link  className='dropdown-item' to='/ukbridges'>UK Bridges</Link> </li>
              </ul>
            </div>
            <div className="btn-group dropstart">
              <button type="button" className="btn dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                Pakistan
              </button>
              <ul className="dropdown-menu">
                <li><Link  className='dropdown-item ' to='/pakfamousbridge'>Famous bridges <br/>of Pakistan</Link> </li>
                <li><Link  className='dropdown-item' to='/pakoldbridge'>Oldest bridges <br/> of Pakistan </Link> </li>
                <li><Link  className='dropdown-item' to='/paklongbridge'>Longest bridges <br/>of Pakistan</Link> </li>
              </ul>
            </div>
            <div className="btn-group dropstart">
              <button type="button" className="btn dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                China
              </button>
              <ul className="dropdown-menu">
                <li><Link  className='dropdown-item ' to='/chinafamousbridge'>Famous bridges <br/>of China</Link> </li>
                <li><Link  className='dropdown-item' to='/chinaoldbridge'>Oldest bridges <br/> of China </Link> </li>
                <li><Link  className='dropdown-item' to='/chinalongbridge'>Longest bridges <br/>of China</Link> </li>
              </ul>
            </div>
            <div className="btn-group dropstart">
              <button type="button" className="btn dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                United Kingdom
              </button>
              <ul className="dropdown-menu">
                <li><Link  className='dropdown-item ' to='/ukfamousbridge'>Famous bridges <br/>of UK</Link> </li>
                <li><Link  className='dropdown-item' to='/ukoldbridge'>Oldest bridges <br/> of UK </Link> </li>
                <li><Link  className='dropdown-item' to='/uklongbridge'>Longest bridges <br/>of UK</Link> </li>
              </ul>
            </div>
            <li >
              <Link  className='dropdown-item' to='/#gallery'>Gallery</Link> 
            </li>
            <li >
              <Link  className='dropdown-item' to='/about'>About Us</Link> 
            </li>
            <li >
              <Link  className='dropdown-item' to='/contact'>Contact Us</Link> 
            </li>
            <li>
              <Link  className='dropdown-item' to='/queries'>Queries</Link> 
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link  className=' nav-link btn-faqs' to='/queries'>Queries</Link> 
        </li>
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
