import React from "react";
import "./Home.css";

import { MainTitle } from "./../../components/mainTitle/MainTitle";
import { CenterMiddleSection } from "./../../components/centerMiddleSection/CenterMiddleSection";
import { Button } from "./../../components/button/Button";
import { FixedImage } from "./../../components/fixedImage/FixedImage";

export class Home extends React.Component {
  render() {
    return (
      <div id="homePage">
        <MainTitle
          title="Community Warehouse Project"
          subtitle="Help Us Turn Empty Houses Into Homes"
          imgUrl={process.env.PUBLIC_URL + "/images/chairTableBook.jpg"}
          fullScreen={true}
        />
        <CenterMiddleSection colorBackground={true}><Button text="Help A Family In Need" target="/donate"/></CenterMiddleSection>
        <FixedImage title="What Do We Do?"
          imgUrl={process.env.PUBLIC_URL + "/images/tableChairs.jpeg"} />
        <CenterMiddleSection colorBackground={false}>
          <p>The Community Warehouse Project of Chester County is a service organization that collects and
            redistributes donated furniture and other household items to individuals and families in need 
            within the region. It is generally a one-time, free service to pre-screened recipients, supported through 
            the generosity of those within our community.</p>
          <p>If you would like to donate furniture or make a financial contribution to the Community Warehouse Project, 
            please visit our donation page.</p>
        </CenterMiddleSection>
        <CenterMiddleSection colorBackground={true}><Button text="Give Back To Your Community" target="/donate"/></CenterMiddleSection>
        <FixedImage title="How Do We Do It?"
        imgUrl={process.env.PUBLIC_URL + "/images/bed.jpg"} />
        <CenterMiddleSection colorBackground={false}>
          <p>The Community Warehouse Project depends on people from the local community to volunteer, provide donations,
            including furniture, household goods and funds. Free furniture is then provided to families and individuals who
            are financially unable to afford their own new or used furniture.  Our volunteers help us collect and distribute
            this furniture and household goods. We also work with local social service agencies to identify people in need and
            distribute the furniture to them.  Our goal is that every family and individual suffering from poverty or other
            hardships can live in a furnished home.</p>
          <p>If you would like to donate furniture or make a financial contribution to the Community Warehouse Project, 
            please visit our donation page.</p>
            <Button text="Contact Us" target="/contact"/>
        </CenterMiddleSection>
      </div>
    );
  }
}
