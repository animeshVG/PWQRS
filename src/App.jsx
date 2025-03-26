import React from "react";
import Image from "./assets/image20.png";
import QR from "./assets/MainQR.png";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50%",
          width: "70%",
          backgroundColor: "#266788",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "20%",
            width: "100%",
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Image} alt="" />
        </div>
        <div
          style={{
            height: "80%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "80%",
              width: "50%",
              backgroundColor: "white",
              // marginTop: -40,
              borderRadius: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={QR} style={{ height: "200px", width: "200px" }} />
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            To Download the App Scan this QR Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
