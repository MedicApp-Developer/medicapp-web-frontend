import React, { useState } from 'react'
import { countryList } from '../../../../../constants/extra';

function NationalityFilters({ onCountryCheckboxChanged, checkedNationalities }) {
    
    const [search, setSearch] = useState("");
    const [list, setList] = useState(countryList?.slice(0, 5));

    const href = "";

    const onSearchLanguage = (e) => {
        setSearch(e.target.value);
        setList(countryList.filter(s => s.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())).slice(0, 5));
    }
    
    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                Nationality <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample3">
                <form className="form-group">
                    <input placeholder="Search Nationality" type="text" className="form-control" value={search} onChange={onSearchLanguage} />
                </form>
                {list?.map(spec => (
                    <div class="form-group form-check">
                        <input type="checkbox" checked={checkedNationalities.includes(spec)} onChange={onCountryCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec} />
                        <label class="form-check-label" for={spec}>{spec}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NationalityFilters
