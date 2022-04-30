import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import soundcloud_img4 from '../../images/soundcloud_img4.png'
import soundcloud_img5 from '../../images/soundcloud_img5.png'
import soundcloud_img6 from '../../images/soundcloud_img6.png'
import soundcloud_img7 from '../../images/soundcloud_img7.png'
import soundcloud_img8 from '../../images/soundcloud_img8.png'
import soundcloud_img9 from '../../images/soundcloud_img9.png'
import soundclod_img_mob4 from '../../images/soundclod_img_mob4.png'
import soundclod_img_mob5 from '../../images/soundcloud_img_mob5.png'
import soundclod_img_mob6 from '../../images/soundcloud_img_mob6.png'
import soundclod_img_mob7 from '../../images/soundcloud_img_mob7.png'
import soundclod_img_mob8 from '../../images/soundcloud_img_mob8.png'
import soundcloud_img10 from '../../images/soundcloud_img10.png'
import SC1 from '../../images/SC1.gif'
import SC2 from '../../images/SC2.gif'
import SC3 from '../../images/SC3.gif'
import SC4 from '../../images/SC4.gif'
import SC5 from '../../images/SC5.gif'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  .title {
    width: 336px;
    height: 44px;
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;

    /* or 59px */
    margin: 22px 0 0 75px;
    color: #FFFFFF;
    @media (max-width: 480px) {
      width: 308px;
      height: 54px;

      font-family: 'Calibre';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 114.4%;

      /* or 27px */
      text-align: center;

      color: #FFFFFF;
      margin: 17px 0 0 34px;
    }
  }

  .title_text {
    width: 442px;
    height: 58px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    font-feature-settings: 'cpsp' on;
    margin: -44px 0 0 482px;
    color: #FFFFFF;
  }

  .mainimg {
    max-width: 1000px;
    max-height: 337px;
    margin: 60px 0 0 0;
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainimg_mob {
    display: none;
    @media (max-width: 480px) {
        max-width: 316px;
        max-height: 424px;
        margin: 40px 0 0 30px;
        display: block;
    }
  }

  .groupie {
      width: 1000px;
      height: 425px;
      margin: 120px 0 0 0;
      display: flex;
      flex-direction: row;
      @media (max-width: 480px) {
          display: none;
      }
  }

  .groupie_mob {
      display: none;
      @media (max-width: 480px) {
        display: block;
    }
  }

  .groupie_r {
    width: 1000px;
    height: 425px;
    margin: 120px 0 0 0;
    display: flex;
    flex-direction: row-reverse;
  }

  .mainimg1 {
    max-width: 362px;
    max-height: 372px;
    margin: 0px 0 0 0;
    @media (max-width: 480px) {
      max-width: 281px;
      max-height: 289.74px;
      margin: 36px 0 0 47px;
    }
  }

  .gif1 {
    max-width: 189px;
    max-height: 372px;
    margin: 0 0px 0 22px;
  }

  .gif2 {
    max-width: 208px;
    max-height: 424px;
    margin: 0 0px 0 47px;
  }

  .gif3 {
    max-width: 215px;
    max-height: 424px;
    margin: 0 0px 0 47px;
  }

  .gif4 {
    max-width: 172px;
    max-height: 349px;
    margin: 0 0px 0 9px;
  }

  .gif5 {
    max-width: 204px;
    max-height: 424px;
    margin: -40px 0 0 34px;
  }

  .mainimg1_1 {
      @media (max-width: 480px) {
        max-width: 170px;
        max-height: 340.8px;
        margin: 36px 0 0 102px;
        display: block;
      }
  }

  .descrip {
        width: 360px;
        height: 277px;
        margin: 40px 0 0 30px;
  }

  .descrip2 {
    width: 449px;
    height: 308px;
    margin: 40px 0 0 39px;
}

  .descrip_title {
    width: 356.02px;
    height: 46px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 226px;
        height: 28px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 163.4%;

        /* or 39px */

        color: #FFFFFF;
        margin: 81px 0 0 22px;

    }
  }

  .descrip_text {
    width: 360px;
    height: 99px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    margin: 28px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 328px;
        height: 196px;
        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        /* or 129% */
        margin: 36px 0 0 22px;
        color: #FFFFFF;
    }
  }

  .mainimg2 {
      max-width: 189px; //255
      max-height: 276px;
      margin: 0 0 0 30px;
      @media (max-width: 480px) {
        max-width: 304px;
        max-height: 290px;
        margin: 36px 0 0 35px;
      }
  }

  .descrip_title2 {
    width: 178.02px;
    height: 49px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 226px;
        height: 28px;
        left: 22px;
        top: 5762px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 163.4%;

        /* or 39px */

        color: #FFFFFF;
        margin: 70px 0 0 22px;
    }
  }

  .descrip_text2 {
    width: 449px;
    height: 38px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    margin: 28px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 328px;
        height: 262px;
        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        /* or 129% */

        color: #FFFFFF;
        margin: 36px 0 0 22px;

    }
  }

  .mainimg3 {
      max-width: 192px; //257
      max-height: 240px;
      margin: 0 0 0 39px;
      @media (max-width: 480px) {
        max-width: 307.1px;
        max-height: 290px;
        margin: 36px 0 0 34px;
      }
  }

  .descrip3 {
      width: 445px;
      height: 266px;
      margin: 75px 0 0 30px;
  }

  .descrip_title3 {
    width: 176.25px;
    height: 49px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 226px;
        height: 28px;
        left: 22px;
        top: 6494px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 163.4%;

        /* or 39px */
        margin: 80px 0 0 22px;
        color: #FFFFFF;
    }
  }

  .descrip_text3 {
    width: 445px;
    height: 56px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    
    /* or 120% */
    margin: 28px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 328px;
        height: 213px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        /* or 129% */

        color: #FFFFFF;
        margin: 36px 0 0 22px;


    }
  }

  .mainimg4 {
      max-width: 341px; //366
      max-height: 349px;
      margin: 0 0 0 23px;
  }

  .mainimg4_1 {
    max-width: 176px; 
    max-height: 349px;
    margin: 0 0 0 9px
  }

  .descrip4 {
      width: 231px;
      height: 324.21px;
      margin: 0 0 0 39px;
  }

  .descrip_title4 {
    width: 129px;
    height: 44px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 226px;
        height: 28px;
        left: 22px;
        top: 7177px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 163.4%;

        /* or 39px */
        margin: 80px 0 0 22px;
        color: #FFFFFF;
    }
  }

  .descrip_text4 {
    width: 231px;
    height: 78px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    margin: 28px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 328px;
        height: 144px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        /* or 129% */
        margin: 36px 0 0 22px;
        color: #FFFFFF;
    }
  }

  .mainimg5 {
      max-width: 206px; //238
      max-height: 424px;
      margin: -40px 0 0 39px;
      @media (max-width: 480px) {
          max-width: 315.59px;
          max-height: 290px;
          margin: 36px 0 0 30px;
      }
  }

  .descrip5 {
      width: 448px;
      height: 224px;
      margin: 60px 0 0 20px;
  }

  .descrip_title5 {
    width: 177.44px;
    height: 49px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 163.4%;
    
    /* or 59px */
    
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 226px;
        height: 28px;
        left: 22px;
        top: 8168px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 163.4%;

        /* or 39px */

        color: #FFFFFF;
        margin: 80px 0 0 22px;

    }
  }

  .descrip_text5 {
    width: 448px;
    height: 60px;
    
    font-family: 'Calibre';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    
    /* or 133% */
    margin: 28px 0 0 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 328px;
        height: 146px;

        font-family: 'Calibre';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        /* or 129% */
        margin: 36px 0 0 22px;
        color: #FFFFFF;
    }
  }

  .mainimg_mob2 {
    @media (max-width: 480px){
        max-width: 274.21px;
        max-height: 290px;
        margin: 36px 0 0 49px;
    }
  }

  .mainimg_mob3 {
    @media (max-width: 480px) {
        max-width: 170px;
        min-height: 340px;
        max-height: 340.8px;
        margin: 36px 0 0 102px;
    }
  }

  // .sc5 {
  //   max-width: 222px;
  //   max-height: 424px;
  //   margin: -424px 0 0 460px;
  // }

  ul {
    margin: 16px 0 0 0;
    padding: 0
  }

  li {
    margin: 0 0 16px 24px;
    padding: 0;
  }

`;

const SoundCloud_Navigation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className='title'>
                Redesigned Navigation
                </div>;
  const two = <div className='title_text'>Taking one tab at a time, comparing the current SoundCloud pages to my redesigned
                version. I have rearranged the content in a manner which felt more user friendly.</div>

  const three = <img className="mainimg" src={soundcloud_img4} alt="Main img"></img>;

  const nine = <img className="mainimg_mob" src={soundclod_img_mob4} alt="Main img"></img>;

  const four = <div className='groupie'>
                    <img className="mainimg1" src={soundcloud_img5} alt="Main img"></img>
                    <img className="gif1" src={SC1} alt="Main img"></img>
                    <div className='descrip'>
                        <div className='descrip_title'>Home Screen</div>
                        <div className='descrip_text'>My modified version of Home Screen. This version includes More of What You Like, The Upload, SoundCloud Weekly. This is completely customised according to the user, hence giving an easy selection of songs similar to user’s tastes, giving a more personalised experience.
                            <ul>
                                <li>Reduced number of categories as too many create complexity (according to MIller’s Law)</li>
                                <li>Made it very customizable to users, music on the first page would create an impression of familiarity</li>
                            </ul>
                        </div>
                    </div>
            </div>;

  const five = <div className='groupie'>
                <div className='descrip2'>
                    <div className='descrip_title2'>Discover</div>
                    <div className='descrip_text2'>Looking for new music gets easier now, I have grouped and reduced the number of categories, making it easier for the user to grasp.
                        <ul>
                            <li>I have removed the “Stream” function, as many users skipped it altogether as they did not understand it’s purpose. So I have combined it’s functions in “Discover” tab.</li>
                            <li>When asked users, why do they like SoundCloud, they said as it has new and not-so-mainstream music. But they usually don’t know what to look for, this tab makes it easier for them to skim through.</li>
                            <li>Removed a separate “Search” tab as users normally didn’t know what to look for.</li>
                        </ul>
                    </div>
                </div>
                <img className="mainimg2" src={soundcloud_img6} alt="Main img"></img>
                <img className="gif2" src={SC2} alt="Main img"></img>
                </div>;

  const six = <div className='groupie'>
                <img className="mainimg3" src={soundcloud_img7} alt="Main img"></img>
                <img className="gif3" src={SC3} alt="Main img"></img>
                <div className='descrip3'>
                    <div className='descrip_title3'>Podcasts</div>
                    <div className='descrip_text3'>Including a dedicated section for podcasts in SoundCloud, makes it the perfect platform for free flow of audio based creativity. Taking into accordance user’s needs, I decided the four main categories needed.
                        <ul>
                            <li>enabling users to browse and discover new podcasting content</li>
                            <li>now finding good quality new content is easier</li>
                            <li>enabling users to download content so they can listen on the go, as most users mutitask while listening to podcasts to use their time more effectively</li>
                        </ul>
                    </div>
                </div>
                </div>;

const seven = <div className='groupie'>
                <div className='descrip4'>
                    <div className='descrip_title4'>Library</div>
                    <div className='descrip_text4'>This tab includes user’s personal profile, playlists and tracks. To improve this tab’s look visually, I made a few changes.
                        <ul>
                            <li>enabling users to browse through favorites easily</li>
                            <li>now music and podcasts can be downloaded</li>
                            <li>users can easily see their profile, and view their playlists in a systematic manner</li>
                        </ul>
                    </div>
                </div>
                <img className="mainimg4" src={soundcloud_img8} alt="Main img"></img>
                <img className="gif4" src={SC4} alt="Main img"></img>
                <img className="mainimg4_1" src={soundcloud_img10} alt="Main img"></img>
                </div>;

const eight = <div className='groupie'>
                <img className="mainimg5" src={soundcloud_img9} alt="Main img"></img>
                <img className="gif5" src={SC5} alt="Main img"></img>
                <div className='descrip5'>
                    <div className='descrip_title5'>Settings</div>
                    <div className='descrip_text5'>And ofcourse, I am obsessed with dark mode everything, so I had to include it in my design. Plus a user I interviewed was unaware about this option on SoundCloud, as it is difficult to locate. So I making it easier here.
                        <ul>
                            <li>enabling users to switch themes with ease</li>
                            <li>merged with the “More” page to reduce the number of tasks a user has to perform</li>
                        </ul>
                    </div>
                </div>
                </div>;
    
    const ten = <div className='groupie_mob'>
            <div className='descrip_title'>Home Screen</div>
            <img className="mainimg1" src={soundclod_img_mob5} alt="Main img"></img>
            <img className="SC1" src={SC1} alt="Main img"></img>       
                <div className='descrip_text'>My modified version of Home Screen. This version includes More of What You Like, The Upload, SoundCloud Weekly. This is completely customised according to the user, hence giving an easy selection of songs similar to user’s tastes, giving a more personalised experience.
                    <ul>
                        <li>Reduced number of categories as too many create complexity (according to MIller’s Law)</li>
                        <li>Made it very customizable to users, music on the first page would create an impression of familiarity</li>
                    </ul>
            </div>
            <img className="mainimg1_1" src={soundclod_img_mob6} alt="Main img"></img>  
            </div>;

    const eleven = <div className='groupie_mob'>
        <div className='descrip_title2'>Discover</div>
        <img className="mainimg2" src={soundcloud_img6} alt="Main img"></img>
        <div className='descrip_text2'>Looking for new music gets easier now, I have grouped and reduced the number of categories, making it easier for the user to grasp.
            <ul>
                <li>I have removed the “Stream” function, as many users skipped it altogether as they did not understand it’s purpose. So I have combined it’s functions in “Discover” tab.</li>
                <li>When asked users, why do they like SoundCloud, they said as it has new and not-so-mainstream music. But they usually don’t know what to look for, this tab makes it easier for them to skim through.</li>
                <li>Removed a separate “Search” tab as users normally didn’t know what to look for.</li>
            </ul>
    </div>
    </div>;

const twelve = <div className='groupie_mob'>
    <div className='descrip_title3'>Podcasts</div>
        <img className="mainimg3" src={soundcloud_img7} alt="Main img"></img>
            <div className='descrip_text3'>Including a dedicated section for podcasts in SoundCloud, makes it the perfect platform for free flow of audio based creativity. Taking into accordance user’s needs, I decided the four main categories needed.
                <ul>
                    <li>enabling users to browse and discover new podcasting content</li>
                    <li>now finding good quality new content is easier</li>
                    <li>enabling users to download content so they can listen on the go, as most users mutitask while listening to podcasts to use their time more effectively</li>
                </ul>
        </div>
        </div>;

const thirteen = <div className='groupie_mob'>
        <div className='descrip_title4'>Library</div>
        <img className="mainimg_mob2" src={soundclod_img_mob7} alt="Main img"></img>
        <div className='descrip_text4'>This tab includes user’s personal profile, playlists and tracks. To improve this tab’s look visually, I made a few changes.
            <ul>
                <li>enabling users to browse through favorites easily</li>
                <li>now music and podcasts can be downloaded</li>
                <li>users can easily see their profile, and view their playlists in a systematic manner</li>
            </ul>
        </div>
        <img className="mainimg_mob3" src={soundclod_img_mob8} alt="Main img"></img>
        </div>;

const fourteen = <div className='groupie_mob'>
        <div className='descrip_title5'>Settings</div>
        <img className="mainimg5" src={soundcloud_img9} alt="Main img"></img> 
        <div className='descrip_text5'>And ofcourse, I am obsessed with dark mode everything, so I had to include it in my design. Plus a user I interviewed was unaware about this option on SoundCloud, as it is difficult to locate. So I making it easier here.
            <ul>
                <li>enabling users to switch themes with ease</li>
                <li>merged with the “More” page to reduce the number of tasks a user has to perform</li>
            </ul>
        </div>
        </div>;

  const items = [one, two, three, nine, four, five, six, seven, eight, ten, eleven, twelve, thirteen, fourteen];

  const blackBackGround = {
    background: 'black',
  }

  return (
    <div style={blackBackGround}>
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
    </div>
  );
};

export default SoundCloud_Navigation;
