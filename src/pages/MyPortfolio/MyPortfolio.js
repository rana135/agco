import React from 'react';
import myPic from '../../assets/Rana photo (1).JPG';
import MyProjects from './MyProjects/MyProjects';




const MyPortfolio = () => {
    return (
        <div>
            <div class="avatar online lg:mx-96 mx-20 mt-8">
                <div class="w-52 rounded-full text-center">
                    <img src={myPic} alt='' />
                </div>
            </div>
            <div className='lg:flex'>
                <div class="mockup-phone mt-12">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <h1 className='text-xl mt-2'><span className='font-bold'>list of skills:-</span>
                                <li>HTMl</li>
                                <li>CSS</li>
                                <li>Bootstarp</li>
                                <li>Tailwind</li>
                                <li>Daisyui</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Firebase</li>
                                <li>Node</li>
                                <li>Mongodb</li>
                                <li>GITHUB</li>
                                <li>React Others Library</li>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='lg:w-96 mr-20 mt-56'>
                    <h1 className='text-primary text-center font-bold text-4xl'>Md Rana Hossain</h1>
                    <h1 className='text-center text-xl'><span className='font-bold'>Email:-</span>rana286090@gmail.com</h1>
                    <h1 className='text-center text-xl mt-2'><span className='font-bold'>Educational Background:-<br /></span>
                        <li>I'm studying in BBA 2nd year at KABI NAGRUL GOVT COLLEGE in Accounting Department</li>
                    </h1>
                    <div className='ml-12'>
                        <h1 className='text-primary font-bold text-xl'>My Projects:-</h1>
                        <li>
                            <a target="blank" href="https://food-house-assignment.netlify.app/" class="text-blue-600 visited:text-purple-600 link-hover">
                                Food House
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://health-check-df55d.firebaseapp.com/" class="text-blue-600 visited:text-purple-600 link-hover">
                                Health Coach
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://star-furniture-63cf3.web.app/" class="text-blue-600 visited:text-purple-600 link-hover">
                                Star Furniture
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <MyProjects></MyProjects>
        </div>
    );
};

export default MyPortfolio;
