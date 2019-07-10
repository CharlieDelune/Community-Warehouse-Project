import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export class NavBar extends React.Component {

    toggleExpansion(){
        document.getElementById("navBarHolder").classList.toggle("unexpanded");
        document.getElementById("navBarHolder").classList.toggle("expanded");
    }
    toggleDisplay(idIn){
        document.getElementById(idIn).classList.toggle("hidden");
    }
    
    render() {
        return (
            <div id="navBarHolder" className="unexpanded">
                <div id="navBarButton" onClick={this.toggleExpansion}><span><FontAwesomeIcon icon={faBars}/></span></div>
                <div id="navBarLinks">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <div onClick={() => this.toggleDisplay("sublist1")}>Donate</div>
                            <ul id="sublist1" className="hidden">
                                <li><Link to="/donate/furniture">Furniture</Link></li>
                                <li><Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NEXSN93F74GR2" target="_blank" rel="noopener noreferrer">Money</Link></li>
                                <li><Link to="/contact">Volunteer</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/request">Request Furniture</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/press">Press & Testimonials</Link>
                        </li>
                        <li>
                            <Link to="/Linkbout">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
