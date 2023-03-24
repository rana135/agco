import React from 'react';
import { Link } from 'react-router-dom';
import titleLogo from '../../assets/logo/agco.png'
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src={titleLogo} class="mr-5 h-6 sm:h-9" alt="logo" />
                        <p class="max-w-xs mt-4 text-sm text-gray-600">
                        AGCO is a global leader in the design, manufacture and distribution of agricultural machinery and precision ag technology
                        </p>
                        <div class="flex mt-8 space-x-6 text-gray-600">
                            <a class="hover:opacity-75" href='https://www.facebook.com/RanaHossainShimul' target="_blank" rel="noreferrer">
                                <span class="sr-only"> Facebook </span>
                                <BsFacebook className='text-xl'/>
                            </a>
                            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                <span class="sr-only"> Instagram </span>
                                <BsInstagram className='text-xl'/>                               
                            </a>
                            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                <span class="sr-only"> Twitter </span>
                                <FaTwitter className='text-xl'/>
                            </a>
                            <a class="hover:opacity-75" href='https://github.com/rana135' target="_blank" rel="noreferrer">
                                <span class="sr-only"> GitHub </span>
                                <BsGithub className='text-xl'/>
                            </a>
                            <a class="hover:opacity-75" href='https://www.linkedin.com/in/md-rana-hossain1/' target="_blank" rel="noreferrer">
                                <span class="sr-only"> Linkedin </span>
                                <FaLinkedin className='text-xl'/>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p class="font-medium">
                                Company
                            </p>
                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a class="hover:opacity-75" href> About </a>
                                <a class="hover:opacity-75" href> Meet the Team </a>
                                <a class="hover:opacity-75" href> History </a>
                                <a class="hover:opacity-75" href> Careers </a>
                            </nav>
                        </div>
                        <div>
                            <p class="font-medium">
                                Services
                            </p>
                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a class="hover:opacity-75" href> 1on1 Coaching </a>
                                <a class="hover:opacity-75" href> Company Review </a>
                                <a class="hover:opacity-75" href> Accounts Review </a>
                                <a class="hover:opacity-75" href> HR Consulting </a>
                                <a class="hover:opacity-75" href> SEO Optimisation </a>
                            </nav>
                        </div>
                        <div>
                            <p class="font-medium">
                                Helpful Links
                            </p>
                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a class="hover:opacity-75" href> Contact </a>
                                <a class="hover:opacity-75" href> FAQs </a>
                                <a class="hover:opacity-75" href> Live Chat </a>
                            </nav>
                        </div>
                        <div>
                            <p class="font-medium">
                                Legal
                            </p>
                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a class="hover:opacity-75" href> Privacy Policy </a>
                                <a class="hover:opacity-75" href> Terms &amp; Conditions </a>
                                <a class="hover:opacity-75" href> Returns Policy </a>
                                <a class="hover:opacity-75" href> Accessibility </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <p class="mt-8 text-xs text-gray-800">
                    © {currentYear} Agco Manufacturer
                </p>
            </div>
        </footer>
    );
};

export default Footer;