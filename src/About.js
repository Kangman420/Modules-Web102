import './About.css';
import React from "react";  
import { Link } from "react-router-dom";

const AboutHeader = () =>
{
    return (
        <div id="top">
          <div className="top_left">
            <img src={process.env.PUBLIC_URL + "/img/chef_about.png"} alt="chef" />
          </div>
          <div className="top_right">
            <img src={process.env.PUBLIC_URL + "/img/right1.png"} alt="right1" />
            <img src={process.env.PUBLIC_URL + "/img/right2.png"} alt="right2" />
          </div>
          <div id="top_box">
            <br />
            <a href="#">Global</a>
            <br />
            <a href="#">BUSINESS</a>
            <br />
            <h1>
              sadl;sadl;sadsad;lasfl;asfl;saldsadsadasdaasdsads
              <br />
              sa;flaskfsalfkaflaslfksakfs
              <br />
              asfplsafsla;fka;lfl;ksfl;kafl
              <br />
              s;ladksa;lfsa;flsaf;asl;fa;al
            </h1>
          </div>
        </div>
      );
    };

const BoxSection = () => {
    const leftBoxes = [
        { title: "TITLE", content: "sadl;asdksal;fsalsdsadsadak\naskdlsajdlkadsjlk" },
        { title: "TITLE", content: "sadl;asdksal;fsalsdsadsadak\naskdlsajdlkadsjlk" },
        { title: "3" },
        { title: "4" },
        { title: "5" },
        { title: "6" }
    ];
    
    return (
        <div id="box_all">
        <div className="box_left">
            {leftBoxes.map((box, index) => (
            <div className="box" key={index}>
                <br />
                {box.title && <a href="#">{box.title}</a>}
                <h1>
                {box.content ? box.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                    {line}
                    <br />
                    </React.Fragment>
                )) : box.title}
                </h1>
            </div>
            ))}
        </div>
        <div className="box_right">
            <h1>7</h1>
        </div>
        </div>
    );
    };



const AboutFooter = () => {
    return (
        <div id="footer">
            <div className="f_left">
                <ul>
                    {[
                        "법적고지",
                        "이메일무단수집거부",
                        "이용약관",
                        "개인정보취급방침",
                        "고객센터",
                        "입찰공고"
                    ].map((text, index, arr) => (
                        <React.Fragment key={index}>
                            <li>
                                <a href="#">{text}</a>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <div className="f_right"></div>
        </div>
    );
};


const About = () => 
{
    return(
    <div>
        <Link to ='/'><a>Back to Main</a></Link>
        <AboutHeader />
        <BoxSection />
        <AboutFooter />
        <div id="temp"></div>
    </div>
    );  
}

export default About;








