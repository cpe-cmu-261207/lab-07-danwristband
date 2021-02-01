import React from "react";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>DanAkkaraphan</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        ></link>
      </Head>

      <div>
        <header className="header">
          <div className="menu">
            <a href={`/`} className="home">
              HOME
            </a>
            <a href={`/post/gallory`} className="gallory">
              GALLORY
            </a>
            <a href="" className="contact">
              CONTACT
            </a>
            <a href={`/post/gpacal`} className="gpa">
              GPA CALCULATOR
            </a>
            <a href={`/post`} className="gpa">
              FETCHDATA
            </a>
          </div>
        </header>

        <div className="PICHEAD">
          <img
            src={`/photo/sen.PNG`}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          ></img>
        </div>
      </div>

      <div
        className="p-2 flex-shrink-1 bd-highlight"
        style={{ backgroundColor: "rgb(247, 246, 239)", width: "1200px" ,textAlign:"center"}}
      >
        <div id="content" className="box">
          <div
            className="row justify-content-center"
            id="divTopBotMargin"
            style={{
              maxWidth: "2000px",
              position: "relative",
              margin: "auto",
              top: "25px",
            }}
          >
            <form
              className="col-10 col-sm-10 col-lg-8"
              style={{ backgroundColor: "lightblue" }}
            >
              <h1 style={{ color: "rgb(89, 92, 95)" }}>CONTACT</h1>
              <div className="row rows-col-2" id="divTopBotMargin">
                <div className="col-md-12 col-lg-6" id="divTopBotMargin">
                  <label for="name">Your Name (required)</label>
                  <input type="text" className="form-control" id="name"></input>
                </div>
                <div className="col-md-12 col-lg-6" id="divTopBotMargin">
                  <label for="email">Your Email (required)</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                  >
                    
                  </input>
                </div>
              </div>
              <div className="row" id="divTopBotMargin">
                <div className="col" id="divTopBotMargin">
                  <label for="subject">Subject</label>
                  <input type="text" className="form-control" id="subject">
                    
                  </input>
                </div>
              </div>

              <div className="form-group" id="divTopBotMargin">
                <label for="exampleFormControlTextarea1">Your Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div style={{ textAlign: "center" }} id="divTopBotMargin">
                <button
                  type="submit"
                  className="btn btn-danger"
                  id="divTopBotMargin"
                >
                  SEND
                </button>
              </div>
            </form>

            <div>
              <p
                style={{
                  position: "relative",
                  maxWidth: "700px",
                  margin: "auto",
                  top: "30px",
                }}
              >
                <img src="photo/original.gif" className="profile " alt="">
                 
                </img>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
