import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import LookupApi from '../../../../../api/lookups'
import { useTranslation } from "react-i18next"

function InsuranceFilters({ onInsuranceCheckboxChanged, checkedInsurances }) {

    const [search, setSearch] = useState("")
    const [fullList, setFullList] = useState([])
    const [list, setList] = useState([])
    const { t, i18n } = useTranslation()

    useEffect(() => {
        console.log('Checked Insurances', checkedInsurances);
        LookupApi.getInsurances().then(res => {
            setFullList(res.data.data)
            setList(res.data.data.slice(0, 5))
        }).catch(err => {
            toast.error("Problem while fetching lookups")
        })
    }, [])

    const onSearchInsurance = (e) => {
        setSearch(e.target.value)
        setList(fullList.filter(s => s.name_en.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())).slice(0, 5))
    }

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                {t('insurance')} <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample2">
                <form className="form-group">
                    <input placeholder={t("search_insurance")} type="text" className="form-control" value={search} onChange={onSearchInsurance} />
                </form>
                {list?.map((lang, index) => (
                    <div key={index} class="form-group form-check">
                        <input type="checkbox" checked={checkedInsurances.includes(lang._id)} onChange={onInsuranceCheckboxChanged.bind(this, lang._id)} class="form-check-input" id={lang._id} />
                        <label class="form-check-label" for={lang._id}>{i18n.language === "ar" ? lang.name_ar : lang.name_en}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InsuranceFilters
