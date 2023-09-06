import { Button } from "react-bootstrap";
import styles from './home.module.scss';
import Footer from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faLocationDot,faUserGroup,faHouseChimney,faBook} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Home() {
    return(
        <div style={{ left:'0'}}>
            <div style={{backgroundImage: `url("https://lelogama.go-jek.com/cache/5e/0a/5e0acb90d64525c3a160f9b436c80c10.webp")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '50vh',
                width: '98%',
                padding: '10px',

                marginLeft: '5px',
                marginRight: '5px',
                
                

         }}>
                <h1 style={{color: 'white', fontSize: '100px', textAlign: 'center', paddingTop: '100px'}}>Uber_Clone_Customer</h1>
            </div>
            <div style={{backgroundImage: `url("https://cdnassets.hw.net/18/ee/a1ab231e4908951871f1b18314d9/uber-hq-hero.jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '30vh',
                width: '98%',
                padding: '10px',

                marginLeft: '5px',
                marginRight: '5px',
                
                

         }}>
                <h1 style={{color: 'black', fontSize: '40px', textAlign: 'left', paddingTop: '10px',marginLeft:'90px'}}>The Uber you know, reimagined for business</h1>
                <h2 style={{marginLeft:'100px'}}> A Platform for everyone</h2>
                <div > 
                    <button style={{marginLeft:'100px', marginTop:'30px'}} className={cx('submit')} type="submit">
                        Get Started
                    </button>

                </div>
                   


            </div>
            <div >
                <h1 style={{fontSize:'35px', margin:'100px 0px 30px 200px'}}>
                Focused on safety, wherever you go
                </h1>
                <div style={{display:'flex',margin:'0px 200px 0px 200px', justifyContent:'flex-start'}}>
                    <div>
                        
                        <img style={{width:'550px', height:'400px', marginRight:'100px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt=""/>
                        <h3>Our commitment to your safety</h3> 
                        <p>With every safety feature and every standard in our Community Guidelines.</p>                  
                    </div>
                    <div>
                        <img style={{width:'550px', height:'400px'}} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt=""/>
                        <h3>Setting 10,000+ cities in motion</h3>
                        <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                    </div>
                </div>
            </div>

            <div style={{display:'flex',margin:'100px 200px 0px 200px',justifyContent:'space-around'}}>
                <div >
                    <FontAwesomeIcon icon={faUserGroup} size="2xl" />
                    <h3 style={{margin:'10px 0px 10px 0px'}}>About Us</h3>
                    <p style={{margin:'0px 0px 10px 0px'}}>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                    <a href="#" className={cx('info')} style={{textDecorationLine:'underline'}}>Learn more about Uber</a>
                </div>
                <div >
                    <FontAwesomeIcon icon={faBook} size="2xl" />
                    <h3 style={{margin:'10px 0px 10px 0px'}}>Newsroom</h3>
                    <p style={{margin:'0px 0px 10px 0px'}}>See announcements about our latest releases, initiatives, and partnerships.</p>
                    <a href="#" className={cx('info')} style={{textDecorationLine:'underline'}}>Visit our Newsroom</a>
                </div>
                <div >
                    <FontAwesomeIcon icon={faHouseChimney} size="2xl" />
                    <h3 style={{margin:'10px 0px 10px 0px'}}>Global citizenship</h3>
                    <p style={{margin:'0px 0px 10px 0px'}}>Learn about our commitment to making positive impact in the cities we serve.</p>
                    <a href="#" className={cx('info')} style={{textDecorationLine:'underline'}}>Learn more about our Global Citizenship</a>
                </div>

            </div>
            <div style={{width:'100%',height:'300px',backgroundColor:'#f6f6f6',margin:'100px 0px 0px 0px'}}>
                <div style={{marginLeft:'200px',marginBottom:'100px',padding:'50px 0px 0px 0px'}}>
                    <h1 style={{color:'black',fontSize:'35px'}}>
                        It’s easier in the apps
                    </h1>
                </div>
               
                <a href='#' className={cx('dowload')} style={{marginLeft:'200px',textDecorationLine:'underline'}}>Dowload Here</a>
            </div>

            <div>
                <Footer/>
            </div>
            
        </div>
        
    ) ;
}

export default Home;
