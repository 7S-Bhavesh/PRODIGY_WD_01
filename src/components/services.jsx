import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of services designed to meet your needs and help you achieve your goals. Whether you're looking for innovative solutions, expert guidance, or hands-on support, our dedicated team is here to deliver. From cutting-edge technology to personalized strategies, we bring excellence and commitment to everything we do. Let us help you transform your vision into reality with services that are tailored to you.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
