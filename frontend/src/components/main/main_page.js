import React from 'react';
import './main_page.css';
import FrontPage1 from '../../assets/images/desktopfront.png';
import FrontPage2 from '../../assets/images/front_page2.png';
import FrontMobile from '../../assets/images/mobile-front3.png';
import FrontMobile2 from '../../assets/images/mobile-front2.png';
import FrontMobile3 from '../../assets/images/mobile-front3.png';
import FrontBottom from '../../assets/images/mobile-front-bottom.png';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {currIndex: '1'}
    

    this.handleSlider = this.handleSlider.bind(this);
  }

  componentDidMount() {
    this.handleSlider()
  }

  handleSlider() {
    setInterval(() => {
        this.nextSlide(); //this function change the index state. 
        }, 3000); 
}

nextSlide() {
    let currIndex = parseInt(this.state.currIndex);
    currIndex ++;
    if (currIndex === 3) {
        currIndex = 1
    }
    this.setState({currIndex: `${currIndex}`})
}

  render() {

    let image
    if (this.state.currIndex === "1"){ 
    image = FrontMobile }
    if (this.state.currIndex === '2'){
    image = FrontMobile2 }

    return (
      <div>
      <div className="desktop-front">
      <div className="front-page-1">
      <div className="front-title">Stay in touch with Homeroom.</div>
     
      <div className="front-title-b">
        Connect with other students, participate in class discussions, and more.
      </div>
      </div>
      <img className="front-mobile-backing" src={FrontMobile3}></img>
      <img className="front-mobile" src={image}></img>
      
        <footer>
        </footer>
      </div>
      <div className="desktop-front-2"><div className="front-title-d">Organized Communication</div>
      <div className="front-title-c">Direct Messaging Features and Hashtag Topics provide an easy way to organize communication channels.</div>
      <img className="front-bottom" src={FrontBottom}></img>
      </div>
      <div className="mobile-front">
      <div className="front-page-1">
      <div className="front-title">Stay in touch with Homeroom.</div>
      </div>
      <div className="front-title-b">
        Connect with other students, participate in class discussions, and more.
      </div>
      <img className="front-mobile-backing" src={FrontMobile3}></img>
      <img className="front-mobile" src={image}></img>
      </div>
      <div className="mobile-front-2"><div className="front-title-d">Organized Communication</div>
      <div className="front-title-c">Direct Messaging Features and Hashtag Topics provide an easy way to organize communication channels.</div></div>
      </div>
    );
  }
}

export default MainPage;