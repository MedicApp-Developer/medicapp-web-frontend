import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import LookupApi from '../../../../../api/lookups'
import { useTranslation } from "react-i18next"

function NationalityFilters({ onCountryCheckboxChanged, checkedNationalities }) {

    const [search, setSearch] = useState("")
    const [fullList, setFullList] = useState([])
    const [list, setList] = useState([])
    const { t, i18n } = useTranslation()

    const href = ""

    const onSearchLanguage = (e) => {
        setSearch(e.target.value)
        setList(fullList.filter(s => s.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())).slice(0, 5))
    }

    useEffect(() => {
        LookupApi.getCountries().then(res => {
            setFullList(res.data.data)
            setList(res.data.data.slice(0, 5))
        }).catch(err => {
            toast.error("Problem while fetching lookups")
        })
    }, [])

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                {t('nationality')} <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample3">
                <form className="form-group">
                    <input placeholder={t('search_nationality')} type="text" className="form-control" value={search} onChange={onSearchLanguage} />
                </form>
                {list?.map(spec => (
                    <div class="form-group form-check">
                        <input type="checkbox" checked={checkedNationalities.includes(spec._id)} onChange={onCountryCheckboxChanged.bind(this, spec._id)} class="form-check-input" id={spec._id} />
                        <label class="form-check-label" for={spec._id}>{i18n.language === "ar" ? spec.name_ar : spec.name_en}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NationalityFilters
