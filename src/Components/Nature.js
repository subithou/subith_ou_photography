import React from 'react'
import '../Styles/main.css';
import { Link } from "react-router-dom";


function Nature() {
  
  
  let countse = []
  for (let index = 1; index <= 71; index++) {
    countse.push(index)
    
  }
  // console.log(countse)

  return (

<section style={{backgroundColor:"rgb(255, 255, 255) "}} id="portfolio" className="portfolio">
<div className="container">



<ul id="portfolio-flters" className="d-flex justify-content-center">
<Link to='/'><li style={{borderRadius: 25}} className='filter-active'>Nature</li></Link>
 <Link to='/culture'>  <li style={{borderRadius: 25}} >Culture</li></Link>
 <Link to='/street'><li style={{borderRadius: 25}}>Street</li></Link> 

</ul>
    
<div className="row portfolio-container">
  
  
{countse.map(index => (
  <div className="col-lg-4 col-md-6 portfolio-item ">
    <div className="portfolio-img">
        <a href={'portfolio/Nature/'+index+'.jpg'} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="">
        <img src={'thumbnail/Nature/'+index+'.jpg'} className="img-fluid" alt=""/>      
        </a>
    </div>
  </div>
  )
      
  )}
</div>
</div>
</section>
      
    
  )
}

export default Nature;
