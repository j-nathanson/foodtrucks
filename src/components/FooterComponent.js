import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Footer.scss"


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-4 col-sm-6">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/catering'>Catering</Link></li>
                            <li><Link to='/ourtrucks'>Our Trucks</Link></li>
                        </ul>
                    </div>

                    <div className="col-8 col-sm-6 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-lg btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-lg btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-lg btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-lg btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                </div >
            </div >
        </footer >
    )
}

export default Footer;