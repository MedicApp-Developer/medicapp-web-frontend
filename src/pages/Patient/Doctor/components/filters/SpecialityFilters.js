import React, { useEffect } from 'react'
import { getSpecialities } from '../../../../../store/actions/specialitiesActions'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next"

function SpecialityFilters({ getSpecialities, specialities, onSpecialityCheckboxChanged, checkedSpecialities }) {
    const { t, i18n } = useTranslation()

    const { specialities: allSpecialities } = specialities && specialities

    useEffect(() => {
        if (allSpecialities.length < 1) {
            getSpecialities()
        }
    }, [getSpecialities])

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                {t("speciality")} <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample1">
                {allSpecialities?.map((spec, index) => (
                    <div key={index} class="form-group form-check">
                        <input type="checkbox" checked={checkedSpecialities.includes(spec._id)} onChange={onSpecialityCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec.name_en} />
                        <label class="form-check-label" for={spec.name_en}>{i18n.language === "ar" ? spec.name_ar : spec.name_en}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    specialities: state.specialities
})

const mapDispatchToProps = {
    getSpecialities
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialityFilters)