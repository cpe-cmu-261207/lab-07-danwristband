import React from "react";
import Head from "next/head";

const gallory = () => {
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
            <a href="" className="gallory">
              GALLORY
            </a>
            <a href={`/post/contact`} className="contact">
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

        <div
          class="p-2 flex-shrink-1 bd-highlight"
          style={{ backgroundColor: "rgb(247, 246, 239)" }}
        ></div>

        <div id="content" class="box">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src={`/photo/1.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">Memory of engineering student</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/2.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">My best friend They are very tired</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/3.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">My best friend in old school</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/4.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">Bird is' me</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/5.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">The fool on the sky</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/6.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text"> My brain? No! Never had</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/7.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">
                    ส่งในตาหวานให้ติดตรึงตาแล้วเธอก็เดินหายเหมือนดั่งนินจา
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/8.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text"> drive to the world</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={`/photo/9.JPG`} class="card-img-top" alt="...">
                  
                </img>
                <div class="card-body">
                  <p class="card-text">dekkrapok No comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default gallory;
