import React from 'react'
import FOOTER_LOGO from '../../assets/images/footer-logo.png';

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                    <img class="img-fluid mb-4" src={FOOTER_LOGO} alt="logo" />
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <div class="media align-items-center mb-3">
                        <i class="icon-phone mr-3"></i>
                        <div class="media-body">
                            <p class="mb-0">+971 561 512 221 <br />
                            info@abc.com
                            </p>
                        </div>
                    </div>
                    <div class="media align-items-center">
                        <i class="icon-map mr-3"></i>
                        <div class="media-body">
                            <p class="mb-0">Dubai
                            <br />
                            United Arab Emirates
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-8 col-lg-7 offset-lg-1 col-xl-6 offset-xl-2 mt-md-5 pt-3 pt-md-5">
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <h4>Menu</h4>
                            <ul>
                            <li>
                                <a href="javascript:void(0)">Hospital</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Pharmacy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Insurance</a>
                            </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <h4>Learn More</h4>
                            <ul>
                            <li>
                                <a href="javascript:void(0)">Contact Us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">FAQs</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Responsibility Hub</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <h4>Careers</h4>
                            <ul>
                            <li>
                                <a href="javascript:void(0)">Work with us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Culture</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Vacancies</a>
                            </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <h4>Legal</h4>
                            <ul>
                            <li>
                                <a href="javascript:void(0)">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Privacy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Regulatory</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center text-md-right mt-4 pr-4">
                            <a class="mx-2" href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                            <a class="mx-2" href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                            <a class="mx-2" href="javascript:void(0)"><i class="fa fa-instagram"></i></a>
                            <a class="mx-2" href="javascript:void(0)"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
