import React from 'react';
import './main_page.css';
import FrontPage1 from '../../assets/images/front_page1.png';
import FrontPage2 from '../../assets/images/front_page2.png';
import FrontMobile from '../../assets/images/front_mobile.png';
import FrontMobile1 from '../../assets/images/front_mobile1.png';

class MainPage extends React.Component {

  render() {
    return (
      <div>
      <div className="desktop-front">
        <img className="main-section-1" src={FrontPage1} alt=""></img>
        <img className="main-section-2" src={FrontPage2} alt=""></img>
        <footer>
        </footer>
      </div>
      <div className="mobile-front">
      <img className="main-section-1" src={FrontMobile1} alt=""></img>
       <br/> <img className="main-section-2" src={FrontMobile} alt=""></img>
      </div>
      </div>
    );
  }
}

export default MainPage;