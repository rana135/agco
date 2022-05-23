import React from 'react';
import './BusinessSummary.css'
// import AnimatedNumber from 'react-animated-number';
import CountUp from 'react-countup';
import summery from '../../../assets/images/summery.webp'




const BusinessSummary = () => {
    return (
        <div>
            <section className="our-facts">
                <div>
                    <div>
                        <h2 className='text-center'>A Few Facts About Our Company</h2>
                        <div className='flex m-14'>
                            <div>
                                <div>
                                    <div className="grid lg:grid-cols-4 gap-5">
                                        <div>
                                            <div className="count-area-content percentage">
                                                <div className="count-digit">
                                                    <CountUp end={100} delay={2} duration={5} />
                                                </div>
                                                <div className="count-title">Succesed Deals
                                                    <br /><span className='text-4xl'>🤝</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="count-area-content">
                                                <div className="count-digit"><CountUp end={66} delay={1} duration={5} /></div>
                                                <div className="count-title">Feedbacks
                                                    <br /><span className='text-4xl'>👍</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid lg:grid-cols-4 gap-5">
                                        <div>
                                            <div className="count-area-content new-students">
                                                <div className="count-digit"><CountUp end={2178} delay={1} duration={7} /></div>
                                                <div className="count-title text-4xl">Happy Clients <br /> <span className='text-4xl'>😊</span> </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="count-area-content">
                                                <div className="count-digit"><CountUp end={25} delay={1} duration={3} /></div>
                                                <div className="count-title">Awards <br /><span className='text-4xl'>🏆</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <img className='w-96 mt-24 hidden lg:block' src={summery} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessSummary;