import './About.css';
import React from "react";  
import { Link } from "react-router-dom";
import { BoxLeft, TopBox, TopRight } from "module102-2"

const AboutHeader = () =>
{
    const topBoxData = {
        category1: "Global",
        category2: "BUSINESS",
        content: `sadl;sadl;sadsad;lasfl;asfl;
                  saldsadsadasdaasdsadssdsd
                  sa;flaskfsalfkaflaslfksakfssdw
                  asfplsafsla;fka;lfl;ksfl;kafl
                  s;ladksa;lfsa;flsaf;asl;fa;al`
    };
    const topRightImages = ["/img/right1.png", "/img/right2.png"];
    return (
        <div id="top">
          <div className="top_left">
            <img src={process.env.PUBLIC_URL + "/img/chef_about.png"} alt="chef" />
          </div>
          <TopRight images={topRightImages} />
          <TopBox data={topBoxData} />
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
            {/* BoxLeft에 leftBoxes를 props로 전달 */}
            <BoxLeft leftBoxes={leftBoxes} />
            
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








