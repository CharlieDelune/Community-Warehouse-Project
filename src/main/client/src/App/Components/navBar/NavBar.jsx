import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <div onClick={() => this.toggleDisplay("sublist1")}>Donate</div>
                            <ul id="sublist1" className="hidden">
                                <li><a href="/donate/furniture">Furniture</a></li>
                                <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NEXSN93F74GR2" target="_blank" rel="noopener noreferrer">Money</a></li>
                                <li><a href="/contact">Volunteer</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/request">Request Furniture</a>
                        </li>
                        <li>
                            <a href="/events">Events</a>
                        </li>
                        <li>
                            <a href="/press">Press & Testimonials</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
