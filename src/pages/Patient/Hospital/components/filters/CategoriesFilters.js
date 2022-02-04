import React, { useEffect, useState } from 'react'
import { getSpecialities } from '../../../../../store/actions/specialitiesActions'
import { connect } from 'react-redux'
import HospitalApi from '../../../../../api/Hospital'
import { toast } from 'react-toastify'
import { useTranslation } from "react-i18next"

function CategoriesFilter({ onCategoriesCheckboxChanged, checkedCategories }) {

    const [categories, setCategories] = useState([])
    const { t, i18n } = useTranslation()

    useEffect(() => {
        if (categories.length < 1) {
            HospitalApi.getAllHospitalCategories().then(categories => {
                setCategories(categories.data.data)
            }).catch(err => {
                toast.error("Problem while fetching the categories")
            })
        }
    }, [])

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                {t("category")} <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample1">
                {categories?.map((spec, index) => (
                    <div key={index} class="form-group form-check">
                        <input type="checkbox" checked={checkedCategories.includes(spec._id)} onChange={onCategoriesCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec.name_en} />
                        <label class="form-check-label" for={spec.name_en}>{i18n.language === "ar" ? spec.name_ar : spec.name_en}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesFilter