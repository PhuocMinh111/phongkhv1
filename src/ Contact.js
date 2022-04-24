import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { Link } from "react-router-dom";
const address = "Địa chỉ nhà (bấm vào link)";

function Contact() {
  function googleMap() {
    window.open(
      "https://www.google.com/maps/place/5+%C4%90T870,+Th%E1%BA%A1nh+Ph%C3%BA,+Th%C3%A0nh+ph%E1%BB%91+M%E1%BB%B9+Tho,+Ti%E1%BB%81n+Giang,+Vi%E1%BB%87t+Nam/@10.373781,106.3048134,18.76z/data=!4m5!3m4!1s0x310aa52c9f3bf675:0xc912288df677bf81!8m2!3d10.3737734!4d106.3054755?hl=vi-VN"
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="banner">
        <div className="banner-center">
          <div className="banner-icon">
            <img
              src="https://cdn.tgdd.vn/Files/2020/07/21/1272550/unnamed_800x480.png"
              alt=""
            />
            <div className="banner-info">
              <h2>0917260919</h2>
            </div>
          </div>
          <div className="banner-icon">
            <img src="https://freesvg.org/img/phone-call-icon.png" alt="" />
            <div className="banner-info">
              <h2>0908140555</h2>
            </div>
          </div>
          <div onClick={googleMap} className="banner-icon">
            <img
              src="https://cdn.tgdd.vn/2020/03/GameApp/Untitled-3-200x200.jpg"
              alt="map"
            />
            <div className="banner-info">
              <h2 id="address">{address}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
