import './main.css';

const IndexHeader = () =>
{
    return (
        <div id="header">
        <ul>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Gifts</a></li>
            <li><a href="#">About</a></li>
            <li><img src="/img/logo.png" alt="Logo" /></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="#">Contacts</a></li>
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

const IconBox = ({ imgSrc, text }) => {
    return (
        <div className="Area3">
            <h1 className="center"><img src={imgSrc} alt="icon" /></h1>
            <h1 className="iconcenter">{text.split("\n").map((line, index) => <div key={index}>{line}</div>)}</h1>
            <br />......................................................................
        </div>
    );
};

const IndexIconBox = () => {
    return (
        <div className="icon_box">
            {iconData.map((icon) => (
                <IconBox key={icon.id} imgSrc={icon.imgSrc} text={icon.text} />
            ))}
        </div>
    );
};

const IndexMain = () => (
    <div>
        <IndexHeader />
        <IndexMainImg />
        <IndexIconBox />
        <IndexFooter/>
    </div>
    );  

export default IndexMain;








