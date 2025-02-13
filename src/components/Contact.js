import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
 

const Contact = () => {
    return (
        <div className="container-flued">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div>
                <div className="ffbox mb-5 card_align contect_info"> 
                    <div className="ffbox1"> 
                        <h2 className="gfg">For Contact</h2> 
                        <p>St. Anne's Church<br />
                        Gnanam Nagar, Marungai,<br />
                        Thanjavur District,<br />
                        PIN – 613501,<br />
                        Tamil Nadu,<br />
                        South India.<br />
                        </p>
                        <p>Email : santhanamatha09@gmail.com
                        </p>
                        <p>Rev.Fr. A. Victor Dass<br />
                        Parochial Administrator,<br />
                        Tel: +91-99768 67070<br />
                        </p>
                        <div className="bot_icon" style={{fontSize: 'x-large', textAlign: 'center'}}>
                        <a href="http://www.youtube.com/@santhanamatha7134" target="_blank">
                            <svg style={{fill: '#9e052b'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
                            <path d="M23.6 7.6s-.2-1.7-1-2.4c-.9-.8-1.9-.8-2.4-.9C17.7 4 12 4 12 4s-5.7 0-7.2.3c-.5.1-1.5.1-2.4.9-.8.7-1 2.4-1 2.4S1 9.3 1 11.1v1.8c0 1.8.2 3.5.2 3.5s.2 1.7 1 2.4c.9.8 2.1.9 2.6 1C6.3 20 12 20 12 20s5.7 0 7.2-.3c.5-.1 1.5-.1 2.4-.9.8-.7 1-2.4 1-2.4s.2-1.7.2-3.5v-1.8c0-1.8-.2-3.5-.2-3.5zM9.5 15.5V8.5l6 3-6 4z" />
                            </svg>
                        </a>
                        <a className="ml-3" href="https://www.facebook.com/profile.php?id=61557010090837" target="_blank"><svg style={{fill: '#9e052b'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg></a>
                        <a className="ml-3" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsczmDjhkCFrFFMhTnSkmdpnzdLNjJNFvmMljzmKctCRPNTgFfqrmwLwBzFqPJzmpzDhFRNG" target="_blank"><svg style={{fill: '#9e052b'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg></a>
                        <a className="ml-3" href="https://wa.me/9976867070" target="_blank"><svg style={{fill: '#9e052b'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
                            </svg></a>
                        </div>
                    </div> 
                    <div className="map-div map-wrap"> 
                        <iframe style={{width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.133392265162!2d79.1819562!3d10.7778156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab90006986ccf%3A0xdcc7347fc48130c9!2sSt.%20Anne's%20Church!5e0!3m2!1sen!2sin!4v1647576997505!5m2!1sen!2sin" width={410} height="99%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"> 
                        </iframe> 
                    </div> 
                </div>
                <div className="ffbox mb-5 card_align" style={{marginTop: '-2% !important'}}> 
                    <div className="ffbox1"> 
                        <h2 className="gfg">Donation Us</h2>
                        <p className="ml-3">ACCOUNT NAME : PARISH PRIEST ST. ANNE'S CHURCH GNANAM NAGAR,<br />
                        ACCOUNT NO : 206510100033157<br />
                        IFSC CODE : UBIN 0820652<br />
                        BANK : UNION BANK OF INDIA, THANJAVUR<br />
                        BRANCH : THANJAVUR<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;