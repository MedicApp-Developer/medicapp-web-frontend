import React from 'react'
import { countryList } from '../../../../../constants/extra';

function NationalityFilters({ onCountryCheckboxChanged }) {
    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                Nationality <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse show" id="collapseExample3">
                {countryList?.map(spec => (
                    <div class="form-group form-check">
                        <input type="checkbox" onChange={onCountryCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec} />
                        <label class="form-check-label" for={spec}>{spec}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NationalityFilters
