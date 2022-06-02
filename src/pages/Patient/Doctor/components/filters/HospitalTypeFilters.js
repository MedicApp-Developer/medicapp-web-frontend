import React from 'react'
import { hospitalList } from '../../../../../constants/extra'
import { useTranslation } from "react-i18next"

function HospitalTypeFilters({ onHospitalCheckboxChange, hospitalTypes }) {
    const { i18n } = useTranslation()

    return (
        <>
            {hospitalList?.map(type => (
                <div class="form-group form-check">
                    <input type="checkbox" checked={hospitalTypes.includes(type.name_en)} onChange={onHospitalCheckboxChange.bind(this, type.name_en)} class="form-check-input" id={type.name_en} />
                    <label class="form-check-label" for={type.name_en}>{i18n.language === "ar" ? type.name_ar : type.name_en}</label>
                </div>
            ))}
        </>
    )
}

export default HospitalTypeFilters
