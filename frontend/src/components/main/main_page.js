import React from 'react';
import './main_page.css';
import FrontPage1 from '../../assets/images/front_page1.png';
import FrontPage2 from '../../assets/images/front_page2.png';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <img className="main-section-1" src={FrontPage1} alt=""></img>
        <img className="main-section-2" src={FrontPage2} alt=""></img>
        <footer>
        
        </footer>
      </div>
    );
  }
}

export default MainPage;