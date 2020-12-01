import React from "react";
import { Navbar, Button, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.svg";
import photo from "../Assets/photo.svg";
import left from "../Assets/left.svg";
import right from "../Assets/right.svg";
import inbox from "../Assets/inbox.png";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCamera } from "react-icons/ai";

import "./Home.css";
function Home() {
  return (
    <div className="container-fluid maindiv">
      <div>
        <Navbar className="navbr">
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <img className="photo" src={photo} />
          <Navbar.Text className="centre mt-2">
            <span className="Andri">Andri Brigssion</span>
          </Navbar.Text>
          <Navbar.Text>
            <BsThreeDots className="navicon" />
          </Navbar.Text>
        </Navbar>
        <hr />
      </div>
      <div className="main">
        <Row>
          <Col>
            <img className="left" src={left} />
          </Col>
          <Col className="second-colum">
            <div className="middle">
              <span classname="txt">Finish Account Setup</span>
              <div className="secndmiddle">
                <p>Complete your account setup by providing your proper </p>
                <p>biography info</p>
              </div>
            </div>
            <div className="info">
              <CgProfile size="15" className="icn" />
              <span className="zab">Personal info </span>
              <AiOutlineCamera size="15" className="icn1" color="blue" />
              <span className="efg">Profile picture</span>
              <hr />
            </div>

            <div className="botm">
              <img className="inbox" src={inbox} />
              <h6>Drag & Drop </h6>
              <p className="abc">or</p>
              <p className="cde">Upload from your local disk</p>
            </div>
            <button className="complete">Complete</button>
          </Col>
          <Col>
            <img className="right" src={right} width="90%" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
