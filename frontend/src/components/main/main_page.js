import React from 'react';
import './main_page.css';
import FrontPage1 from '../../assets/images/desktopfront.png';
import FrontPage2 from '../../assets/images/front_page2.png';
import FrontMobile from '../../assets/images/mobile-front3.png';
import FrontMobile1 from '../../assets/images/front_mobile1.png';

class MainPage extends React.Component {

  render() {
    return (
      <div>
      <div className="desktop-front">
      <div className="front-page-1">
      <div className="front-title">Stay in touch with Homeroom.</div>
      </div>
      <div className="front-title-b">
        Connect with other students, participate in class discussions, and more.
      </div>
      <img className="front-mobile" src={FrontMobile}></img>
 
      
        <footer>
        </footer>
      </div>
      <div className="mobile-front">
      <div className="front-page-1">
      <div className="front-title">Stay in touch with <br/> Homeroom.</div>
      </div>
      <div className="front-title-b">
        Connect with other students, participate in class discussions, and more.
      </div>
      <img className="front-mobile" src={FrontMobile}></img>
      </div>
      </div>
    );
  }
}

export default MainPage;