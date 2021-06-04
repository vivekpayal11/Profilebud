import React from "react";
import ApiCard from "../ApiCard/ApiCard";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Group16 from "./../assets/images/Group16.svg";

const Hompage = () => {
  return (
    <div className="container ">
      <div className="row">
        <Header />
      </div>
      <div className=" row content1">
        We extract Leads & Data from Instagram
      </div>{" "}
      <br />
      <div className="row content2 ">
        Our agency does all the hard work and gives you the clean targeted data
        in Sheets!
      </div>
      <div className="row getbtn ">
        <img src={Group16} className="getlead" alt="Group16" />
      </div>
      <div className="container">
        <div class="row" >
        
          <div className="col-xs-6 col-sm-6 col-sm-offset-4">
          <Card
           color1="#FF1111"
           color2="#FF8000"
            title="Followers / Following of @any_user"
            body="Lorem Ipsum something is there. Something more will come here. Oh yes it will come."
            btn="SAMPLE DATA"
          />
           </div>
          <div className="col-xs-6 col-sm-6">
          <Card className="card2"
            color1="#00D4FF"
            color2="#005DFF"
            title="Liker / Commenter of any post"
            body="Lorem Ipsum something is there. Something more will come here. Oh yes it will come."
            btn="SAMPLE DATA"
          />
          </div>
        </div>
        <div class="row card2" >
        <div className="col-xs-6  col-sm-6 ">
          <Card
           color1="#00FF6F"
           color2="#00FFC2"
            title="People Posting Specific #Hashtags"
            body="Lorem Ipsum something is there. Something more will come here. Oh yes it will come."
            btn="SAMPLE DATA"
          />
          </div>
            <div className="col-xs-6  col-sm-6 ">
          <Card
           color1="#A011FF"
           color2="#5D00FF"
            title="People Posting at Specific Locations"
            body="Lorem Ipsum something is there. Something more will come here. Oh yes it will come."
            btn="SAMPLE DATA"
          />
          </div>
        </div>
      </div>
      <div class="row noOfAccountRow">
      <div className="col-xs-6  col-sm-6 ">
        <ApiCard/>
        </div>
        <div className="col-xs-6  col-sm-6 ">
       <p className="bottomTest"> TRY IT FREE <br/><br/>
         Pay As You Go Rates<br/>
         Emails Price per email<br/>
          up to 10,000 $0.008<br/>
           up to 100,000 $0.005<br/>
            up to 250,000 $0.004 <br/>
             up to 1,000,000 $0.003 <br/><br/>
        Enterprise Packages <br/>
        over 1,000,000<br/><br/>
         Contact Us <br/><br/>
        LEARN MORE ABOUT ENTERPRISE</p>
        </div>
      </div>
    </div>
  );
};

export default Hompage;
