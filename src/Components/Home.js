import React, { useState } from "react";
import { Navbar, Row, Col, Form } from "react-bootstrap";
import logo from "../Assets/logo.svg";
import photo from "../Assets/photo.svg";
import left from "../Assets/left.svg";
import right from "../Assets/right.svg";
import inbox from "../Assets/inbox.png";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCamera } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import "./Home.css";
function Home() {
  const [toggle, setToggle] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // onDrop,
    // accept,
  });
  return (
    <div className="maindiv">
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
            <BsThreeDots className="navicon" color="#85909b" />
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
            </div>
            <div className="secndmiddle">
              <p>Complete your account by providing your</p>
              <p>biography info</p>
            </div>

            <div className="info">
              <Row>
                <Col>
                  <CgProfile
                    size="15"
                    className={toggle ? "icn" : "icn1"}
                    onClick={() => setToggle(false)}
                  />
                  <span
                    className={toggle ? "zab" : "efg"}
                    onClick={() => setToggle(false)}
                  >
                    Personal info{" "}
                  </span>
                  <hr
                    style={{ width: "130%" }}
                    className={toggle ? "hrone" : "hrtwo"}
                    onClick={(e) => {
                      setToggle(true);
                      }}
                  />  
                </Col>

                <Col>
                  <AiOutlineCamera
                    size="15"
                    className={toggle ? "icn1" : "icn"}
                    onClick={() => setToggle(true)}
                  />
                  <span
                    className={toggle ? "efg" : "zab"}
                    onClick={() => setToggle(true)}
                  >
                    Profile picture
                  </span>
                  <hr
                    style={{ width: "115%" }}
                    className={toggle ? "hrtwo" : "hrone"}
                    onClick={() => setToggle(true)}
                  />
                </Col>
              </Row>
            </div>

            <div className="botm">
            {toggle? (<Form>
                          <Form.Row>
                            <Form.Group>
                              <label htmlFor="file-input">
                              <img className="profile" src={photo}/>
                              <span className="Andri">Andri Brigssion</span>
                              </label>
                            </Form.Group>
                          </Form.Row>
                        </Form>):(
                      
          
              <div {...getRootProps()}>
                <input className="dropzone-input" {...getInputProps()} />
                <div className="text-center">
                  {isDragActive ? (
                    <p className="dropzone-content">
                      <img className="inbox" src={inbox} />
                      <p className="head">Drag & Drop </p>
                      <p className="abc">or</p>
                      <p className="cde">
                        <span className="upload" href="#">
                          Upload
                        </span>{" "}
                        from your local disk
                      </p>
                    </p>
                  ) : (
                    <p className="dropzone-content">
                      <img className="inbox" src={inbox} />
                      <p className="head">Drag & Drop </p>
                      <p className="abc">or</p>
                      <p className="cde">
                        <span className="upload" href="#">
                          Upload
                        </span>{" "}
                        from your local disk
                      </p>
                    </p>
                  )}
                </div>
              </div>
              )}
            </div>
            <button className="complete">Complete</button>
          </Col>
          <Col>
            <img className="right" src={right} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
