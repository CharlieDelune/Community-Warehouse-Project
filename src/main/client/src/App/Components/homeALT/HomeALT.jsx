import React from "react";
import "./HomeALT.css";

import { MainTitle } from "../mainTitle/MainTitle";
import { CenterMiddleSection } from "../centerMiddleSection/CenterMiddleSection";
import { Button } from "../button/Button";
import { FixedImage } from "../fixedImage/FixedImage";

export class HomeALT extends React.Component {
  render() {
    return (
      <div id="homePage">
        <MainTitle
          title="Community Warehouse Project"
          subtitle="Help Us Turn Empty Houses Into Homes"
          imgUrl="/images/chairTableBook.jpg"
          fullScreen={true}
        />
        <CenterMiddleSection colorBackground={false}>
          <div>
            <h2>What Do We Do?</h2>
            <p>The Community Warehouse Project of Chester County is a service organization that collects and
              redistributes donated furniture and other household items to individuals and families in need 
              within the region. It is generally a one-time, free service to pre-screened recipients, supported through 
              the generosity of those within our community.</p>
            <p>If you would like to donate furniture or make a financial contribution to the Community Warehouse Project, 
              please visit our donation page.</p>
          </div>
          <div><Button text="Help A Family In Need" target="/donate"/></div>
        </CenterMiddleSection>
        <CenterMiddleSection colorBackground={true}>
          <div style={{width:'33%', float:'left'}}>
            <h1 style={{fontSize:'5em', marginBottom:'0'}}>150</h1>
            <h2 style={{fontSize:'2.5em', marginTop:'0'}}>Families served last year!</h2>
          </div>
          <div style={{width:'33%', float:'left'}}>
            <h1 style={{fontSize:'5em', marginBottom:'0'}}>37</h1>
            <h2 style={{fontSize:'2.5em', marginTop:'0'}}>Service providers have chosen <u>us</u>!</h2>
          </div>
          <div style={{width:'33%', float:'left'}}>
            <h1 style={{fontSize:'5em', marginBottom:'0'}}>3</h1>
            <h2 style={{fontSize:'2.5em', marginTop:'0'}}>Cool statistics in this div!</h2>
          </div>
          <div style={{clear:'both'}}><Button text="Give Back To Your Community" target="/donate"/></div>
        </CenterMiddleSection>
        <CenterMiddleSection colorBackground={false}>
          <div>
            <h2>How Do We Do It?</h2>
            <p>The Community Warehouse Project depends on people from the local community to volunteer, provide donations,
            including furniture, household goods and funds. Free furniture is then provided to families and individuals who
            are financially unable to afford their own new or used furniture.  Our volunteers help us collect and distribute
            this furniture and household goods. We also work with local social service agencies to identify people in need and
            distribute the furniture to them.  Our goal is that every family and individual suffering from poverty or other
            hardships can live in a furnished home.</p>
          <p>If you would like to donate furniture or make a financial contribution to the Community Warehouse Project, 
            please visit our donation page.</p>
          </div>
          <div><Button text="Contact Us" target="/contact"/></div>
        </CenterMiddleSection>
      </div>
    );
  }
}
