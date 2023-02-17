import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery.js'
import {ReactComponent as Twiddle} from './assets/twiddle.svg'
import {ReactComponent as Apple} from './assets/apple.svg'
import {ReactComponent as Instagram} from './assets/instagram.svg'
import {ReactComponent as Spotify} from './assets/spotify.svg'
import {ReactComponent as Floral} from './assets/floral.svg'
import {ReactComponent as Tiktok} from './assets/tiktok.svg'
import {ReactComponent as Twitter} from './assets/twitter.svg'

class Page extends React.Component {

  render() {
    return (
      <div className="main_div">
        <div className="spacer"></div>
        <div className="gallery">
         <Gallery/>
        </div>
        <div className = 'nav_div'>
          <div className = 'tag_div'>
            <div className ='title_div'>GEESE</div>
            <Twiddle style={{height:'12px', width:'auto'}}/>
              <a href="https://geese.lnk.to/cowboynudes" target="_blank" className= "link"> cowboy nudes </a>
              <a href="https://www.youtube.com/watch?v=LvHsLdYXfaY" target="_blank" className= "link">watch</a>
              <a href="https://www.bandsintown.com/a/342405-geese" target="_blank" className="link" >tour</a>
              <a href="https://store.geeseband.com/" target="_blank" className="link" >merch</a>
              <a href="http://eepurl.com/hkwcxv" target="_blank" className= "link">newsletter</a>
          </div>
        </div>
        <div className='social_div'>
          <Floral />
          <a href="https://music.apple.com/us/artist/geese/1378038472" target="_blank"> <Apple className='social_icons' /></a>
          <a href="https://open.spotify.com/artist/0WCo84qtCKfbyIf1lqQWB4?si=kU13Aru_R-Sg51Nq6bAbQw" target="_blank"> <Spotify className='social_icons' /></a>
          <a href="https://www.tiktok.com/@geese.band?lang=en" target="_blank"> <Tiktok className='social_icons' /></a>
          <a href="https://www.instagram.com/geesebandnyc/" target="_blank"> <Instagram className='social_icons' /></a>
          <a href="https://twitter.com/geese_band" target="_blank"> <Twitter className='social_icons' /></a>
          <Floral />
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
