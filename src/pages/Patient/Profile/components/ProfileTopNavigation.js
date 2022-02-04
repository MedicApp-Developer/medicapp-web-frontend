import React from 'react'
import classNames from 'classnames'
import { ACCOUNT, APPOINTMENTS, FAMILY_MEMBERS, LAB_RESULTS, MEDICAL_PROFILE, QR_PRESCRIPTION, SICK_LEAVES } from '../../../../constants/patientProfile'
import { useTranslation } from "react-i18next"

function ProfileTopNavigation({ selectedTab, setSelectedTab }) {
    const { t } = useTranslation()

    const href = ""

    return (
        <section class="nav-tab-section">
            <div class="container-fluid">
                <div class="row nav-tab-link">
                    <div class="col-md-12">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(MEDICAL_PROFILE) }} className={classNames('nav-link', { active: selectedTab === MEDICAL_PROFILE })} href={href}>{t("medical_profile")}</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(FAMILY_MEMBERS) }} className={classNames('nav-link', { active: selectedTab === FAMILY_MEMBERS })} href={href}>{t("family_members")}</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(APPOINTMENTS) }} className={classNames('nav-link', { active: selectedTab === APPOINTMENTS })} href={href}>{t("appointments")}</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(SICK_LEAVES) }} className={classNames('nav-link', { active: selectedTab === SICK_LEAVES })} href={href}>{t("sick_leaves")}</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(QR_PRESCRIPTION) }} className={classNames('nav-link', { active: selectedTab === QR_PRESCRIPTION })} href={href}>{t("QR_Prescriprion")}</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(LAB_RESULTS) }} className={classNames('nav-link', { active: selectedTab === LAB_RESULTS })} href={href}>{t("lab_results")}</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={(e) => { e.preventDefault(); setSelectedTab(ACCOUNT) }} className={classNames('nav-link', { active: selectedTab === ACCOUNT })} href={href}>{t("account")}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileTopNavigation
