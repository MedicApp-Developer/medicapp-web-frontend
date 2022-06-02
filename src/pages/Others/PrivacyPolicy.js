import React, { useContext } from 'react'
import { href } from '../../constants/extra'
import AppLayout from '../../layout/AppLayout'
import { isMobileOnly } from "react-device-detect";
import { RootContext } from '../../contextApi';

function PrivacyPolicy() {
    const { user } = useContext(RootContext);
    return (
        <>
            {isMobileOnly || !user ? (
                <>
                    <section class="search-block pt-4">
                        <div class="container">
                            <div class="row">
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href={href}>Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page"> Privacy Policy</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="user-dashboard pb-5">
                        <div class="container">
                            <h4 style={{ fontWeight: 'bold' }}>Privacy Policy</h4>
                            <p style={{ marginTop: '-5px' }}>Last Updated: 3 Jan 2022</p>
                            <hr />
                            <span style={{ color: 'grey' }}>INTRODUCTION</span>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> Medicapp stands with protecting </span> your privacy and personal data. This policy will help you to acknowledge how we use and protect your personal data which you provide to us and which we gather through our application or our website (www.medicappae.com)  when you use and access our platform and our services that are available on our platform to help ease the process and the functionality of our application and website.
                                The privacy policy sets out the basis on which any personal data we collect from you or other sources or that you provide us with your personal data will be processed by us in connection with your access and use of the platform and the services. We understand the importance you place on the personal data, and we are committed to protect and respect your privacy. Please read the following carefully to understand our practices regarding your information. By using our platform and services, you agree to the handling of your personal data in accordance with this privacy policy.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> References in this privacy </span> policy to “we” , “our”, “us” (or similar) are references to MEDICAPP LLC (our address). References to “user” or “you” (or similar) are references to you as an individual or legal entity as the case may be. If you have any queries in relation to our privacy policy or your personal data please contact us support@medicappae.com
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> Here at MEDICAPP we keep </span> our privacy policy under regular review.  This version was last updated on XX/XX/XXXX. Our privacy policy may change due to future updates and changes. You will be informed if any changes may occur to this policy. We may email periodic reminders of our notices and conditions, but you should check our platform frequently to see recent changes. Your continued use of the platform following any such change constitutes your agreement to this privacy policy as so modified.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> It is very important that </span> the personal data we hold about you is current and accurate. Please keep us informed if your personal data changes during your relationship with us.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> If you use our platform, </span> you consent to the collection, use and sharing of your personal data under this privacy policy which includes all other documents referenced in this privacy policy and agree to the terms of use for the platform. We created this privacy policy to give you confidence as you use the platform and services and to demonstrate our commitment to the protection of privacy.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> The platform may include </span> links to third party websites, plug-ins and applications including those of healthcare providers. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and applications and are not responsible for their privacy statements. When you leave our platform, we advise you to read the privacy notice of every website and application you visit.
                            </p>
                            <div style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: "grey" }}>The data we collect from you:</span>
                                <p style={{ marginLeft: '25px', fontSize: '0.9rem' }}>
                                    1. Identity data: includes first name, last name, date of birth, gender
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    2. Collect data: includes email address and/or telephone numbers
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    3. Healthcare provider data: includes title and full name, clinic locations, relevant expertise, symptoms and procedures, languages spoken. In addition, healthcare providers that enter with us go under a separate agreement.
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    4. Technical data: include IP address, your login data, browser type and version, make and model (mobile phones only), operating system, hardware version, platform, device settings and other technology identification on the devices used to access our Platform, file and software names and types, device identifiers, time zone setting and location, device locations such as through GPS, Bluetooth or WiFi signals, browser plug-in types and versions, operating system and platform, connection information such as the name of your mobile operator or ISP, browser type, language and time zone, mobile phone number and IP address
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    5. Profile data: includes your password, and bookings made by you
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    6. Usage data: include, information about how you use our platform, products and services.
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    7. Financial and transaction data: as for now, there is no payment needed on our platform.
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    8. Marketing and communication data: includes your preferences in receiving marketing from us and our third parties and your communication preferences.
                                </p>
                            </div>
                            <span style={{ color: 'grey' }}>Aggregated Data</span>
                            <p>
                                We do not collect other Special Categories of Personal Data
                                We do not collect any other Special Categories of Personal Data about you (this includes details about your political opinions, trade union membership, information about your health and genetic and biometric data). Nor do we collect any information about criminal convictions and offenses.
                            </p>
                            <span style={{ color: 'grey' }}>Minors</span>
                            <p>
                                By accessing, using and/or submitting information to or through the Platform and the Services, you represent that you are not a child (minor). If we learn that we have received any information directly from a child without his/her parent’s written consent, we will use that information only to respond directly to that child (or his/her parent or legal guardian) to inform the child that he/she cannot use the Services, and we will subsequently delete that information. If you are a parent or legal guardian of a minor child, you may, in compliance with the Terms of Use, use the Services on behalf of such minor child. Any information that you provide us while using the Services on behalf of your minor child will be treated as Personal Data as otherwise provided herein.

                                <div style={{ color: 'grey', fontWeight: 'bolder' }} className="mt-2 mb-2">If you fail to provide personal data</div>

                                Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with booking services). In this case, we may have to cancel an appointment you have booked through the Platform but we will notify you if this is the case at the time.
                            </p>
                            <span style={{ color: 'grey' }}>Passwords and Confidentiality</span>
                            <p>
                                If you are provided with a password or any other piece of information as part of our security procedures for a registration-only section of our Platform, you are responsible for maintaining the confidentiality of your password and user name for the Platform and you are responsible for all activities that are carried out under them. We do not have the means to check the identities of people using the Platform and we will not be liable where your password or user name is used by someone else. You agree to Contact us immediately of any unauthorized use of your password or user name of which you become aware. We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion, you have failed to comply with any of the provisions of these terms or the Terms of Use.
                            </p>
                            <span style={{ color: 'grey' }}>How is your personal data collected?</span>
                            <p>
                                We use different methods to collect data from and about you including through:

                                Direct interactions. You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
                                apply for our products or services;
                                fill in forms or create an account on our Platform;
                                subscribe to our service or publications;
                                request further information to be sent to you;
                                enter a competition, promotion or survey; or
                                give us feedback or contact us.

                                Automated technologies or interactions. As you interact with our Platform, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs] and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our cookie policy for further details.
                            </p>
                            <span style={{ color: 'grey' }}>Please see our cookie policy for further details.</span>
                            <p>
                                Third parties or publicly available sources. We may receive personal data about you from various third parties and public sources as set out below:
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">1.Technical Data from the following parties:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>A) analytics providers</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>B) advertising networks and</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>C) search information providers</p>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">2. Contact, Financial or Transaction Data from providers of technical and payment services.</div>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">3. Healthcare Provider Data from publicly available sources and regulatory authorities.</div>
                            </p>
                            <span style={{ color: 'grey' }}> How we use your Personal Data </span>
                            <p>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>1. where we need to perform the contract we are about to enter into or have entered into with you</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>2. where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>3. where we need to comply with a legal obligation.</p>
                            </p>
                            <span style={{ color: 'grey' }}>Legitimate Interest</span>
                            <p>
                                Legitimate Interest means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us.
                            </p>
                            <span style={{ color: 'grey' }}>Comply with a legal obligation</span>
                            <p>
                                Comply with a legal obligation means processing your personal data where it is necessary for compliance with a legal obligation that we are subject to.
                            </p>
                            <span style={{ color: 'grey' }}>Generally, we do not rely on consent</span>
                            <p>
                                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
                            </p>
                            <span style={{ color: 'grey' }}>We have set out in the table below a summary of the circumstances in which we will use your Personal Data</span>
                            <p>
                                We have set out in the table below a summary of the circumstances in which we will use your Personal Data, the type of Personal Data we will use and the grounds on which we will be permitted to use such Personal Data in such circumstances.
                            </p>
                            <span style={{ color: 'grey' }}>Marketing </span>
                            <p>
                                We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.

                                Promotional offers from us
                                We may use your identity, contact, technical, usage and profile data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).

                                You will receive marketing communications from us if you have requested information from us or purchased [goods or services] from us and you have not opted out of receiving that marketing.
                            </p>
                            <span style={{ color: 'grey' }}>Third-party marketing </span>
                            <p>
                                We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.
                            </p>
                            <span style={{ color: 'grey' }}>Opting out </span>
                            <p>
                                You can ask us or third parties to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by contacting us at any time by sending an email to support@medicappae.com .
                                Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a product/service experience or other transactions.
                            </p>
                            <span style={{ color: 'grey' }}>Change of purpose</span>
                            <p>
                                We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.

                                If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.

                                Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
                            </p>
                            <span style={{ color: 'grey' }}>Disclosures of your Personal Data</span>
                            <p>
                                <div style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">We may share your Personal Data with the parties set out below for the purposes set out below:</div>
                                <div style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">Internal Third Parties being companies in our group and provide IT and system administration, product development, business development and back office services and undertake leadership reporting</div>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">External Third Parties being:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>1. in the case of Healthcare Provider Data, to our users through our Platform</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>2. in the case of Identity and Contact Data, to Healthcare Providers with whom you have booked appointments through our Platform</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>3. in the case of Identity, Contact, Financial Data and Transaction Data, to Healthcare Providers with whom you have booked appointments for online consultations through our Platform</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>4. service providers acting as processors based in the United Arab Emirates who provide IT, system administration and payment processing services.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>5. Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers based in in the United Arab Emirates who provide consultancy, banking, legal, insurance and accounting services.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>6. Regulators and other authorities acting as processors or joint controllers based in the United Arab Emirates who require reporting of processing activities in certain circumstances.</p>
                            </p>
                            <span style={{ color: 'grey' }}>Legal requirements</span>
                            <p>
                                We reserve the right to disclose any personal information we have concerning you if we are compelled to do so by a court of law, requested to do so by a governmental entity, or if we determine it is necessary or desirable to comply with the law or to protect or defend our rights or property in accordance with applicable laws. We also reserve the right to retain personal information collected and to process such personal information to comply with accounting, tax rules, regulations and any specific record retention laws.
                                We require all third parties to respect the security of your personal information and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal information for their own purposes and only permit them to process your personal information for specified purposes and in accordance with our instructions.

                                Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.

                                We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                            </p>
                            <span style={{ color: 'grey' }}>Data Security</span>
                            <p>
                                We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Personal Data is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Personal Data. We may, for example, use encryption technology to secure your Personal Data during transmission to our Platform as well as external firewall and on-host firewall technology to prevent network level attacks. Only those authorized employees, contractors, and agents who need to know your Personal Data in connection with the performance of their services are allowed to access this Personal Data.
                                <div>
                                    It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.
                                </div>
                                <div>
                                    Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Data, we cannot guarantee the security of your Personal Data transmitted to our Platform and any transmission is at your own risk.
                                </div>
                            </p>
                            <span style={{ color: 'grey' }}>COOKIE POLICY</span>
                            <p>
                                We collect data about how you interact with our website and mobile application through the use of cookies and similar technology.
                                Cookies are small text files which are downloaded to your computer or mobile device when you access a website or mobile application. Cookies are widely used in order to make such websites or mobile applications work, or work more efficiently, as well as to store some information about your preferences or past actions. You can find out more information about cookies at www.allaboutcookies.org.
                                We use cookies to enhance the online experience of our users (for example, by remembering your language and/or product preferences) and to better understand how our site is used. Cookies may tell us, for example, whether you have visited our site before or whether you are a new visitor. They can also help to ensure that adverts you see online are more relevant to you and your interests.
                                Most browsers are initially set to accept cookies. You have the right to choose whether or not to accept cookies. However, please note that if you do not accept our cookies, you may not be able to use the full functionality of our website or mobile applications.
                                You can find more information about how to manage and remove cookies (including how to opt-out) at allaboutcookies.org/manage-cookies/ or by visiting the website relevant to the browser you are using.
                            </p>
                            <span style={{ color: 'grey' }}>Data Retention</span>
                            <p>
                                <div>
                                    We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                                </div>
                                <div>
                                    To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                                </div>
                                <div>
                                    In some circumstances we will make your information as anonymous  (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
                                </div>
                            </p>
                            <span style={{ color: 'grey' }}>Your legal rights</span>
                            <p>
                                <div style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">Under certain circumstances, you have rights under data protection laws in relation to your personal data. In particular, you have the right to:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>1. Request access to your personal data (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>2. Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>3. Request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>4. Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>5. Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>a. If you want us to establish the data's accuracy.</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>b. Where our use of the data is unlawful but you do not want us to erase it.</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>c. Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims.</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>d. You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>6. Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>7. Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</p>
                            </p>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">If you wish to exercise any of the rights set out above, please contact us by email support@medicappae.com .</div>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</div>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</div>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</div>
                            <span style={{ color: 'grey' }}>CHANGES TO THIS PRIVACY NOTICE</span>
                            <p>We keep this Privacy Notice under regular review and we will place any updates on this webpage. This Privacy Notice was last updated on January 3, 2022.</p>
                        </div>
                    </section>
                </>
            ) : (
                <AppLayout>
                    <section class="search-block pt-4">
                        <div class="container">
                            <div class="row">
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href={href}>Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page"> Privacy Policy</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="user-dashboard pb-5">
                        <div class="container">
                            <h4 style={{ fontWeight: 'bold' }}>Privacy Policy</h4>
                            <p style={{ marginTop: '-5px' }}>Last Updated: 3 Jan 2022</p>
                            <hr />
                            <span style={{ color: 'grey' }}>INTRODUCTION</span>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> Medicapp stands with protecting </span> your privacy and personal data. This policy will help you to acknowledge how we use and protect your personal data which you provide to us and which we gather through our application or our website (www.medicappae.com)  when you use and access our platform and our services that are available on our platform to help ease the process and the functionality of our application and website.
                                The privacy policy sets out the basis on which any personal data we collect from you or other sources or that you provide us with your personal data will be processed by us in connection with your access and use of the platform and the services. We understand the importance you place on the personal data, and we are committed to protect and respect your privacy. Please read the following carefully to understand our practices regarding your information. By using our platform and services, you agree to the handling of your personal data in accordance with this privacy policy.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> References in this privacy </span> policy to “we” , “our”, “us” (or similar) are references to MEDICAPP LLC (our address). References to “user” or “you” (or similar) are references to you as an individual or legal entity as the case may be. If you have any queries in relation to our privacy policy or your personal data please contact us support@medicappae.com
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> Here at MEDICAPP we keep </span> our privacy policy under regular review.  This version was last updated on XX/XX/XXXX. Our privacy policy may change due to future updates and changes. You will be informed if any changes may occur to this policy. We may email periodic reminders of our notices and conditions, but you should check our platform frequently to see recent changes. Your continued use of the platform following any such change constitutes your agreement to this privacy policy as so modified.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> It is very important that </span> the personal data we hold about you is current and accurate. Please keep us informed if your personal data changes during your relationship with us.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> If you use our platform, </span> you consent to the collection, use and sharing of your personal data under this privacy policy which includes all other documents referenced in this privacy policy and agree to the terms of use for the platform. We created this privacy policy to give you confidence as you use the platform and services and to demonstrate our commitment to the protection of privacy.
                            </p>
                            <p style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: 'grey', fontWeight: 'bolder' }}> The platform may include </span> links to third party websites, plug-ins and applications including those of healthcare providers. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and applications and are not responsible for their privacy statements. When you leave our platform, we advise you to read the privacy notice of every website and application you visit.
                            </p>
                            <div style={{ marginTop: '3px', fontSize: '0.9rem' }}>
                                <span style={{ color: "grey" }}>The data we collect from you:</span>
                                <p style={{ marginLeft: '25px', fontSize: '0.9rem' }}>
                                    1. Identity data: includes first name, last name, date of birth, gender
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    2. Collect data: includes email address and/or telephone numbers
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    3. Healthcare provider data: includes title and full name, clinic locations, relevant expertise, symptoms and procedures, languages spoken. In addition, healthcare providers that enter with us go under a separate agreement.
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    4. Technical data: include IP address, your login data, browser type and version, make and model (mobile phones only), operating system, hardware version, platform, device settings and other technology identification on the devices used to access our Platform, file and software names and types, device identifiers, time zone setting and location, device locations such as through GPS, Bluetooth or WiFi signals, browser plug-in types and versions, operating system and platform, connection information such as the name of your mobile operator or ISP, browser type, language and time zone, mobile phone number and IP address
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    5. Profile data: includes your password, and bookings made by you
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    6. Usage data: include, information about how you use our platform, products and services.
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    7. Financial and transaction data: as for now, there is no payment needed on our platform.
                                </p>
                                <p style={{ marginTop: '-0.8rem', marginLeft: '25px', fontSize: '0.9rem' }}>
                                    8. Marketing and communication data: includes your preferences in receiving marketing from us and our third parties and your communication preferences.
                                </p>
                            </div>
                            <span style={{ color: 'grey' }}>Aggregated Data</span>
                            <p>
                                We do not collect other Special Categories of Personal Data
                                We do not collect any other Special Categories of Personal Data about you (this includes details about your political opinions, trade union membership, information about your health and genetic and biometric data). Nor do we collect any information about criminal convictions and offenses.
                            </p>
                            <span style={{ color: 'grey' }}>Minors</span>
                            <p>
                                By accessing, using and/or submitting information to or through the Platform and the Services, you represent that you are not a child (minor). If we learn that we have received any information directly from a child without his/her parent’s written consent, we will use that information only to respond directly to that child (or his/her parent or legal guardian) to inform the child that he/she cannot use the Services, and we will subsequently delete that information. If you are a parent or legal guardian of a minor child, you may, in compliance with the Terms of Use, use the Services on behalf of such minor child. Any information that you provide us while using the Services on behalf of your minor child will be treated as Personal Data as otherwise provided herein.

                                <div style={{ color: 'grey', fontWeight: 'bolder' }} className="mt-2 mb-2">If you fail to provide personal data</div>

                                Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with booking services). In this case, we may have to cancel an appointment you have booked through the Platform but we will notify you if this is the case at the time.
                            </p>
                            <span style={{ color: 'grey' }}>Passwords and Confidentiality</span>
                            <p>
                                If you are provided with a password or any other piece of information as part of our security procedures for a registration-only section of our Platform, you are responsible for maintaining the confidentiality of your password and user name for the Platform and you are responsible for all activities that are carried out under them. We do not have the means to check the identities of people using the Platform and we will not be liable where your password or user name is used by someone else. You agree to Contact us immediately of any unauthorized use of your password or user name of which you become aware. We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion, you have failed to comply with any of the provisions of these terms or the Terms of Use.
                            </p>
                            <span style={{ color: 'grey' }}>How is your personal data collected?</span>
                            <p>
                                We use different methods to collect data from and about you including through:

                                Direct interactions. You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
                                apply for our products or services;
                                fill in forms or create an account on our Platform;
                                subscribe to our service or publications;
                                request further information to be sent to you;
                                enter a competition, promotion or survey; or
                                give us feedback or contact us.

                                Automated technologies or interactions. As you interact with our Platform, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs] and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our cookie policy for further details.
                            </p>
                            <span style={{ color: 'grey' }}>Please see our cookie policy for further details.</span>
                            <p>
                                Third parties or publicly available sources. We may receive personal data about you from various third parties and public sources as set out below:
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">1.Technical Data from the following parties:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>A) analytics providers</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>B) advertising networks and</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>C) search information providers</p>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">2. Contact, Financial or Transaction Data from providers of technical and payment services.</div>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">3. Healthcare Provider Data from publicly available sources and regulatory authorities.</div>
                            </p>
                            <span style={{ color: 'grey' }}> How we use your Personal Data </span>
                            <p>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>1. where we need to perform the contract we are about to enter into or have entered into with you</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>2. where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</p>
                                <p style={{ marginLeft: '5rem', marginTop: '-1rem', fontSize: '0.9rem' }}>3. where we need to comply with a legal obligation.</p>
                            </p>
                            <span style={{ color: 'grey' }}>Legitimate Interest</span>
                            <p>
                                Legitimate Interest means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us.
                            </p>
                            <span style={{ color: 'grey' }}>Comply with a legal obligation</span>
                            <p>
                                Comply with a legal obligation means processing your personal data where it is necessary for compliance with a legal obligation that we are subject to.
                            </p>
                            <span style={{ color: 'grey' }}>Generally, we do not rely on consent</span>
                            <p>
                                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
                            </p>
                            <span style={{ color: 'grey' }}>We have set out in the table below a summary of the circumstances in which we will use your Personal Data</span>
                            <p>
                                We have set out in the table below a summary of the circumstances in which we will use your Personal Data, the type of Personal Data we will use and the grounds on which we will be permitted to use such Personal Data in such circumstances.
                            </p>
                            <span style={{ color: 'grey' }}>Marketing </span>
                            <p>
                                We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.

                                Promotional offers from us
                                We may use your identity, contact, technical, usage and profile data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).

                                You will receive marketing communications from us if you have requested information from us or purchased [goods or services] from us and you have not opted out of receiving that marketing.
                            </p>
                            <span style={{ color: 'grey' }}>Third-party marketing </span>
                            <p>
                                We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.
                            </p>
                            <span style={{ color: 'grey' }}>Opting out </span>
                            <p>
                                You can ask us or third parties to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by contacting us at any time by sending an email to support@medicappae.com .
                                Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a product/service experience or other transactions.
                            </p>
                            <span style={{ color: 'grey' }}>Change of purpose</span>
                            <p>
                                We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.

                                If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.

                                Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
                            </p>
                            <span style={{ color: 'grey' }}>Disclosures of your Personal Data</span>
                            <p>
                                <div style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">We may share your Personal Data with the parties set out below for the purposes set out below:</div>
                                <div style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">Internal Third Parties being companies in our group and provide IT and system administration, product development, business development and back office services and undertake leadership reporting</div>
                                <div style={{ marginLeft: '2.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">External Third Parties being:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>1. in the case of Healthcare Provider Data, to our users through our Platform</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>2. in the case of Identity and Contact Data, to Healthcare Providers with whom you have booked appointments through our Platform</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>3. in the case of Identity, Contact, Financial Data and Transaction Data, to Healthcare Providers with whom you have booked appointments for online consultations through our Platform</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>4. service providers acting as processors based in the United Arab Emirates who provide IT, system administration and payment processing services.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>5. Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers based in in the United Arab Emirates who provide consultancy, banking, legal, insurance and accounting services.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>6. Regulators and other authorities acting as processors or joint controllers based in the United Arab Emirates who require reporting of processing activities in certain circumstances.</p>
                            </p>
                            <span style={{ color: 'grey' }}>Legal requirements</span>
                            <p>
                                We reserve the right to disclose any personal information we have concerning you if we are compelled to do so by a court of law, requested to do so by a governmental entity, or if we determine it is necessary or desirable to comply with the law or to protect or defend our rights or property in accordance with applicable laws. We also reserve the right to retain personal information collected and to process such personal information to comply with accounting, tax rules, regulations and any specific record retention laws.
                                We require all third parties to respect the security of your personal information and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal information for their own purposes and only permit them to process your personal information for specified purposes and in accordance with our instructions.

                                Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.

                                We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                            </p>
                            <span style={{ color: 'grey' }}>Data Security</span>
                            <p>
                                We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Personal Data is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Personal Data. We may, for example, use encryption technology to secure your Personal Data during transmission to our Platform as well as external firewall and on-host firewall technology to prevent network level attacks. Only those authorized employees, contractors, and agents who need to know your Personal Data in connection with the performance of their services are allowed to access this Personal Data.
                                <div>
                                    It is important for you to protect yourself against unauthorized access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.
                                </div>
                                <div>
                                    Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Data, we cannot guarantee the security of your Personal Data transmitted to our Platform and any transmission is at your own risk.
                                </div>
                            </p>
                            <span style={{ color: 'grey' }}>COOKIE POLICY</span>
                            <p>
                                We collect data about how you interact with our website and mobile application through the use of cookies and similar technology.
                                Cookies are small text files which are downloaded to your computer or mobile device when you access a website or mobile application. Cookies are widely used in order to make such websites or mobile applications work, or work more efficiently, as well as to store some information about your preferences or past actions. You can find out more information about cookies at www.allaboutcookies.org.
                                We use cookies to enhance the online experience of our users (for example, by remembering your language and/or product preferences) and to better understand how our site is used. Cookies may tell us, for example, whether you have visited our site before or whether you are a new visitor. They can also help to ensure that adverts you see online are more relevant to you and your interests.
                                Most browsers are initially set to accept cookies. You have the right to choose whether or not to accept cookies. However, please note that if you do not accept our cookies, you may not be able to use the full functionality of our website or mobile applications.
                                You can find more information about how to manage and remove cookies (including how to opt-out) at allaboutcookies.org/manage-cookies/ or by visiting the website relevant to the browser you are using.
                            </p>
                            <span style={{ color: 'grey' }}>Data Retention</span>
                            <p>
                                <div>
                                    We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                                </div>
                                <div>
                                    To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                                </div>
                                <div>
                                    In some circumstances we will make your information as anonymous  (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
                                </div>
                            </p>
                            <span style={{ color: 'grey' }}>Your legal rights</span>
                            <p>
                                <div style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }} className="mt-2 mb-2">Under certain circumstances, you have rights under data protection laws in relation to your personal data. In particular, you have the right to:</div>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>1. Request access to your personal data (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>2. Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>3. Request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>4. Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>5. Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>a. If you want us to establish the data's accuracy.</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>b. Where our use of the data is unlawful but you do not want us to erase it.</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>c. Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims.</p>
                                <p style={{ marginLeft: '7rem', fontSize: '0.9rem' }}>d. You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>6. Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</p>
                                <p style={{ marginLeft: '5rem', fontSize: '0.9rem' }}>7. Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</p>
                            </p>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">If you wish to exercise any of the rights set out above, please contact us by email support@medicappae.com .</div>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</div>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</div>
                            <div style={{ fontSize: '0.9rem' }} className="mt-2 mb-2">We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</div>
                            <span style={{ color: 'grey' }}>CHANGES TO THIS PRIVACY NOTICE</span>
                            <p>We keep this Privacy Notice under regular review and we will place any updates on this webpage. This Privacy Notice was last updated on January 3, 2022.</p>
                        </div>
                    </section>
                </AppLayout>
            )}
        </>
    )
}

export default PrivacyPolicy
