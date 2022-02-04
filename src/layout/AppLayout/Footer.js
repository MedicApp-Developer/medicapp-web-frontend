import React from 'react'
import FOOTER_LOGO from '../../assets/images/footer-logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

function Footer() {
    const { t } = useTranslation()

    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                        <img class="img-fluid mb-4" src={FOOTER_LOGO} alt="logo" />
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
                                <p class="mb-0">{t("dubai")}
                                    <br />
                                    {t("united_arab_emirates")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-lg-7 offset-lg-1 col-xl-6 offset-xl-2 mt-md-5 pt-3 pt-md-5">
                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <h4>{t("menu")}</h4>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">{t("hospital")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("pharmacy")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("insurance")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <h4>{t("learn_more")}</h4>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">{t("contact_us")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("FAQs")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("responsibility_hub")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("blog")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <h4>{t("careers")}</h4>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">{t("work_with_us")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("culture")}</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("vacancies")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <h4>{t("legal")}</h4>
                                <ul>
                                    <li>
                                        <Link to="/terms-of-use">{t("terms_of_use")}</Link>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("cookies_policy")}</a>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">{t("privacy_policy")}</Link>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">{t("regulatory")}</a>
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
