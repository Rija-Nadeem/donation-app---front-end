import React from 'react';
import './Footer.css';
class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div class="row">
                            <div className="col-md-3 col-sm-6 col-xm-12 segment-one md-mb-30 sm-mb-30">
                                <h3>Little Deeds</h3>
                                <p> 
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nostrum suscipit placeat amet vel esse soluta dolorum nesciunt
                                    dolores, possimus sint.
                                </p>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xm-12 segment-two md-mb-30 sm-mb-30">
                                <h2>Useful Links</h2>
                               <ul>
                                 <li><a href="/">Home</a></li>
                                 <li><a href="/">Login</a></li>
                                 <li><a href="/">Help</a></li>
                               </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xm-12 segment-three sm-mb-30">
                                <h2>Follow Us</h2>
                                <p> 
                                    Please follow us on our social media profile in order to keep updated.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <a href="/"><i class="fab fa-facebook"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="/"><i class="fab fa-pinterest"></i></a>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xm-12 segment-four sm-mb-30">
                                <h2>Our Newletter</h2>
                                <p> 
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nostrum suscipit placeat amet vel esse soluta dolorum nesciunt
                                    dolores, possimus sint.
                                </p>
                                <form action="">
                                    <input type="email" />
                                    <input type="submit" value="subscribe" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-bottom-text">All Rights Reserved by &copy; LittleDeeds.2020</p>
            </footer>
        );
    }
}
export default Footer;