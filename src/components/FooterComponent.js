import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Footer.scss"

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="col-6 col-sm-2 ">
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/catering'>Catering</Link></li>
                                <li><Link to='/ourtrucks'>Our Trucks</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;