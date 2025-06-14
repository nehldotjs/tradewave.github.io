import React, { useEffect } from "react";
import "./subStyles/responsible.css";
import resImage from "../../assets/conference.jpg";
import resbckImage from "../../assets/80493.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Responsible() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []);

  return (
    <div className="resWrapper" data-aos="zoom-in-up">
      <div className="rebackImgWrapper">
        <img src={resbckImage} alt="" />
      </div>
      <div className="resWriteUp" data-aos="zoom-in-up">
        <h2>Sustainable Investing</h2>
        <div className="resContent">
          <p>
            At <span>TRADEWAVE</span> Finance, we integrate environmental,
            social, and governance (ESG) considerations across the entire
            investment decision-making process and life cycle. We hold the
            belief that adopting robust and well-executed ESG policies and
            practices is vital for the long-term prosperity and sustainability
            of our portfolio companies.
            <br />
            <br /> When implemented effectively, these policies not only
            safeguard and enhance our reputation and financial performance but
            also contribute to the development of stronger, more valuable
            enterprises.
            <br />
            <br /> This, in turn, generates benefits for all stakeholders,
            including employees, customers, suppliers, shareholders, and the
            broader community. We regularly reassess our ESG approach to ensure
            its alignment with current best practices.
          </p>
          <div className="resImageWrapper">
            <img src={resImage} alt="Conference Meeting" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsible;
