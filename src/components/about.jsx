import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                {props.data
                  ? props.data.paragraph
                  : "At the heart of our organization is a passion for innovation and a commitment to excellence. We have built our reputation by delivering top-quality solutions that empower our clients and transform their businesses. Our journey began with a simple goal: to provide exceptional value through creative thinking and cutting-edge technology. Today, we continue to evolve, staying ahead of the curve to meet the ever-changing needs of our customers. Our dedicated team works tirelessly to bring ideas to life and turn challenges into opportunities."}
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : <>
                          <li>Proven track record of success</li>
                          <li>Customer-focused approach</li>
                          <li>Innovative solutions tailored to your needs</li>
                        </>
                    }
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : <>
                          <li>Highly skilled and experienced team</li>
                          <li>Commitment to excellence</li>
                          <li>Comprehensive support and guidance</li>
                        </>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
