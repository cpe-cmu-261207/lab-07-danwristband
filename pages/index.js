import React from 'react';
import Head from 'next/head'


const folio = () => {
  return (
      <>
    <Head>
    <title>DanAkkaraphan</title>
   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
</Head>

      <div>
          <header className="header">
        <div className="menu">
            <a href='' className="home">HOME
            </a>
            <a href={`/post/gallory`} className="gallory">GALLORY
            </a>
            <a href={`/post/contact`} className="contact">CONTACT
            </a>
            <a href={`/post/gpacal`} className="gpa" >GPA CALCULATOR
            </a>
            <a href={`/post`} className="gpa" >FETCHDATA
            </a>
        </div>
    </header>

    <div className="PICHEAD">
        <img src="photo/sen.PNG"
            width="30" height="30" className="d-inline-block align-top" alt=""></img>
    </div>

    <div className="d-flex bd-highlight">
        <div className="p-2 w-100 bd-highlight"  style={{backgroundColor: "rgb(231, 248, 252)",
        minWidth: "30%"}}>

            {/* <img src="photo/Proflie.JPG" className="profile align-top" alt="" width="300" height="300"></img> */}

            <h2 className="personal">
                PERSONAL
            </h2>
            <h5 className="personal">
               <div> NAME :</div> <div>Akkaraphan Rattanakos</div>
            </h5>
            <h5 className="personal">
                <div> NICKNAME :</div> <div>Dan</div>
             </h5>
             <h5 className="personal">
                <div> BIRTHDAY :</div> <div>5 Jan 2001</div>
             </h5>
             <h5 className="personal">
                <div> RELATIONSHIP :</div> <div>Single</div>
             </h5>

             <h2 className="personal">
                CONTACT
            </h2>
            <h5 className="personal">
               <div> FACEBOOK :</div> <div><a href="https://www.facebook.com/dan.akkaraphan/"/* style="text-decoration: none;"*/>แดน.</a></div>
            </h5>
            <h5 className="personal">
                <div> INSTAGRAM :</div> <div><a href="https://www.instagram.com/danwristband" /*style="text-decoration: none;"*/>danwristband</a></div>
             </h5>
             <h5 className="personal">
                <div> GMAIL :</div> <div>dan.akkaraphan
                </div>
             </h5>
             <h5 className="personal">
                <div> CMU ACCOUNT :</div> <div>Akkaraphan_r</div>
             </h5>
             </div>
        </div>
        <div className="p-2 flex-shrink-1 bd-highlight" style={{backgroundColor: "rgb(247, 246, 239)"}}> <div id="content" className="box">
           
            <div className="content">

                    <div className="card border-primary mb-3" /*style="max-width: 100%"*/>
                        <div className="card-header">Introduce myself</div>
                        <div className="card-body text-primary">
                          <p className="card-text"> My name is Akkaraphan. I’m from MaeHongSon . I finished my schooling 2 year ago from
                            Maesariang Boripatsuksa School. Is there anyone here from my city? tou know?</p>
                        </div>
                    </div>

                        <div className="card border-success mb-3" /* style="max-width: 100%"*/>
                            <div className="card-header">Hobbies</div>
                            <div className="card-body text-success">
                             
                              <p className="card-text">OK, few.

                                I like watching movies and play games. I play basketball on weekends and watching movies
                                whenever I get time. I will play games as well being my favorite game is PUBG M and ROV.</p>
                            </div>
                          </div>
                          

                          <div className="card border-warning mb-3 " /*style="max-width: 100%"*/>
                            
                            <div className="card-body text-success">
                             
                              <p className="card-text">OK, few.

                                I’m happy to step into college life, which provides more freedom and where, finally, I
                                don’t have to come in a uniform. Post-college, I will play PUBGM with many female
                                friends.
                           
                                I’m particularly strong in Photoshop creating and creating well-designed posterand
                                infographic. If anyone requires support in these areas, I’ll be glad to help. I look
                                forward to meeting each one of you in the coming days.
    
                                Thanks. Have a great day.</p>
                            </div>
                          </div>
                        
            </div>
        </div>
        </div>
    <footer>

    </footer>
      </div>
      
      </>
  )
}

export default folio
