import React, { useEffect, useState } from 'react'
import LookupApi from '../../../../../api/lookups'
import { useTranslation } from "react-i18next"

function GenderFilters({ onGenderCheckboxChanged, checkedGenders }) {
    const [genderList, setGendersList] = useState([])
    const { t, i18n } = useTranslation()
    useEffect(() => {
        LookupApi.getGenders().then(res => {
            setGendersList(res.data.data)
        })
    }, [])

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                {t('gender')} <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample4">
                {genderList?.map(spec => (
                    <div class="form-group form-check">
                        <input type="checkbox" checked={checkedGenders.includes(spec._id)} onChange={onGenderCheckboxChanged.bind(this, spec._id)} class="form-check-input" id={spec._id} />
                        <label class="form-check-label" for={spec._id}>{i18n.language === "ar" ? spec.name_ar : spec.name_en}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GenderFilters
