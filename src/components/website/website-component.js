import React from 'react';
import './website-component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor,faChartBar,faGem,faCalendar,faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare,faLinkedin,faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export function WebsiteComponent() {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 id="logo">Company Name</h1>
                        </div>
                        <div className="col-md-8">
                            <ul id="menu">
                                <li><a href="home">Home</a></li>
                                <li><a href="about-us">About Us</a></li>
                                <li><a href="gallery">Gallery</a></li>
                                <li><a href="products">Products</a></li>
                                <li><a href="contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="banner" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-title">
                                <h1 className="title">Some Heading Goes Here</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quis, architecto quasi. Iste excepturi veniam ea maxime libero officia, nesciunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-head">Some Heading Goes Here</h2>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="service-box">
                            <FontAwesomeIcon className="icon" icon={faAnchor} />
                            <h3>Some Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, provident.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="service-box">
                            <FontAwesomeIcon className="icon" icon={faChartBar} />
                            <h3>Some Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, provident.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="service-box">
                            <FontAwesomeIcon className="icon" icon={faGem} />
                            <h3>Some Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, provident.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-head text-white">Testimonials</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae reprehenderit autem inventore, nemo, maxime tempore.</p>
                                <img src="bill-gates.jpg" alt="" />
                                <div className="author">Bill Gates</div>
                                <div className="author-company">Microsoft</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae reprehenderit autem inventore, nemo, maxime tempore.</p>
                                <img src="steve-jobs.jpg" alt="" />
                                <div className="author">Steve Jobs</div>
                                <div className="author-company">Apple</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="news" className="container section">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-head">Recent News</h2>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src="post-1.jpg" alt="" />
                            <h3><a href="recent-news">News Heading Here</a></h3>
                            <div className="post-date"><FontAwesomeIcon icon={faCalendar} /> February 18, 2024</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                            <a href="recent-news" className="readmore">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src="post-2.jpg" alt="" />
                            <h3><a href="recent-news">News Heading Here</a></h3>
                            <div className="post-date"><FontAwesomeIcon icon={faCalendar} /> February 18, 2024</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                            <a href="recent-news" className="readmore">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src="post-3.jpg" alt="" />
                            <h3><a href="recent-news">News Heading Here</a></h3>
                            <div className="post-date"><FontAwesomeIcon icon={faCalendar} /> February 18, 2024</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                            <a href="recent-news" className="readmore">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="news-post">
                            <img src="post-4.jpg" alt="" />
                            <h3><a href="recent-news">News Heading Here</a></h3>
                            <div className="post-date"><FontAwesomeIcon icon={faCalendar} /> February 18, 2024</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                            <a href="recent-news" className="readmore">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-sidebar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="footer-widget">
                                <h4>About Company</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro praesentium, doloremque, aperiam recusandae rem aliquam.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, molestias.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="footer-widget">
                                <h4>Latest News</h4>
                                <ul className="latest-news">
                                    <li><a href="latest-news"><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet, consectetur.</a></li>
                                    <li><a href="latest-news"><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet, consectetur.</a></li>
                                    <li><a href="latest-news"><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet, consectetur.</a></li>
                                    <li><a href="latest-news"><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet, consectetur.</a></li>
                                    <li><a href="latest-news"><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet, consectetur.</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="footer-widget">
                                <h4>Company Address</h4>
                                <address>
                                    <b>Company, Inc.</b><br />
                                    455 Company Road, Indira Nagar<br />
                                    LUCKNOW, INDIA 133001<br />
                                    P : (123) 456-7890
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">copyright@2024 company name.</div>
                        <div className="col-md-6">
                            <ul id="social-icons">
                                <li><a href="facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                                <li><a href="twitter"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                                <li><a href="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}