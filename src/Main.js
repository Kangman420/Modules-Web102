import './Main.css';
import { Link } from "react-router-dom";
import { IndexIconBox } from "module102-1";

const IndexHeader = () =>
{
    return (
        <div id="header">
        <ul>
            <li> <a>How It Works</a></li>
            <li> <a>Gifts</a></li>
            <li> <Link to ='/about'><a>About</a></Link></li>
            <li> <img src="/img/logo.png" alt="Logo" /></li>
            <li> <a>Login</a></li>
            <li> <a>Members</a></li>
            <li> <a>Contacts</a></li>
            </ul>
        </div>
    );
}

const IndexMainImg = () => {
    return (
        <>

            <div id="main_picture"></div>
            <div className="icon_title_text">
                <p>"WHAT'S FOR DINNER"</p>
                <h1 className="center">FINALLY HAS AN <br /> EASY ANSWER</h1>
            </div>
        </>
    );
};

const IndexFooter = () => {
    return (
        <>
            <div class="chefs">
            <div>
                <p>
                    <span>TITLE</span>
                    <br />asidklsa dklasjdlk sakdljaskl dajslkdjlaskd asdlkasjdlkaslkd aslkdaslkdaslkdjsaldk lksadsalkdasjlkdaskldaklsd kajldklas djkladlask sadsadasasfasfsafsa
                </p>
                <img src="/img/chef.png" />
                </div>
                </div>
        </>
    );
};

const iconData = [
    { id: 1, imgSrc: "/img/icon1.png", text: "ASDKASDJKASDHADSKJ\nsasl;dfaks;lsa;lfsa;lf\naskldsajdklasdlkaslkadskl" },
    { id: 2, imgSrc: "/img/icon2.png", text: "ASDKASDJKASDHADSKJ\nsasl;dfaks;lsa;lfsa;lf\naskldsajdklasdlkaslkadskl" },
    { id: 3, imgSrc: "/img/icon3.png", text: "ASDKASDJKASDHADSKJ\nsasl;dfaks;lsa;lfsa;lf\naskldsajdklasdlkaslkadskl" },
    { id: 4, imgSrc: "/img/icon4.png", text: "ASDKASDJKASDHADSKJ\nsasl;dfaks;lsa;lfsa;lf\naskldsajdklasdlkaslkadskl" }
];

const IndexMain = () => {
    return (
      <div>
        <IndexHeader />
        <IndexMainImg />
        <IndexIconBox iconData={iconData} />
        <IndexFooter />
      </div>
    );
  };

export default IndexMain;








