import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-3 footer-grid">
                        <h3>About Us</h3>
                        <p><Link to=""> Designed by Hammad Zulfiqar. </Link> <br /> I am full stack developer . I am working on Nodejs,sequelize(ORM),Express, mongoDB,& Reactjs since 2years .so, if you want make any kind of website/software please freely contact with us. (+92321-4583752) </p>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Menu</h3>
                        <ul>
                            <li><Link to="/">CHICKEN</Link></li>
                            <li><Link to="/care">BEAf</Link></li>
                            <li><Link to="/kitchen">MUTTON</Link></li>
                            {/* <li><Link to="/house-hold">MASALA</Link></li> */}
                            {/* <li><Link to="/contact">Contact</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Customer Services</h3>
                        <ul>
                            <li><Link to="/desclaimer">Disclaimer</Link></li>
                            <li><Link to="/faq">Faqs</Link></li>
                            <li><Link to="/privacy-and-policy">Privacy & Policy</Link></li>
                            <li><Link to="/term-and-condition">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                     {/* <div className="col-md-3 footer-grid"> */}
                        {/* <h3>My Account</h3> */}
                        {/* <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            {/* <li><Link to="wishlist">Wishlist</Link></li> */}
                        {/* </ul> */}
                    {/* </div>  */} 
                    <div className="clearfix" />
                    <div className="footer-bottom">
                        <h2><Link to="/"><b>T<br />H<br />E</b>HALAL MEAT<span>The Best Supermarket</span></Link></h2>
                        <p className="fo-para"><Link to=""></Link>. I am full stack developer . I am working on Nodejs,sequelize(ORM),Express, mongoDB,& Reactjs since 2years .so, if you want make any kind of website/software please freely contact with us.</p>
                        <ul className="social-fo">
                            <li><a href='https://www.facebook.com/halalmeat22' className=" face"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><Link to="#" className=" ins"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" whatsapp"><i className="fa fa-whatsapp" aria-hidden="true" /></Link></li>
                            {/* <li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true" /></Link></li> */}
                        </ul>
                        {/* <div className=" address">
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-home" aria-hidden="true" />New Delhi , Saket, India.</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-phone" aria-hidden="true" />+91 8375893352</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><Link to="/gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" />pandit.bechu@gmail.com</Link></p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="copy-right">
                        <p> © 2020 Big store. All Rights Reserved | Design by  <Link to="http://abhinashkumar.com/"> Abhinash kumar</Link></p>
                    </div> */}
                </div>
            </div>
            </div>

        )
    }
}
