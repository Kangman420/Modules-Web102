import './About.css';
import { useNavigate } from "react-router-dom";

const AboutHeader = () =>
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

const AboutFooter = () => {
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


const About = () => (
    <div>
        <AboutHeader />
        <AboutFooter/>
    </div>
    );  

export default About;








