import React from 'react'
import { genderList } from '../../../../../constants/extra';

function GenderFilters({ checkedGenders, setCheckedGenders }) {

    const onGenderCheckboxChanged = (spec) => {
        if (checkedGenders.filter(item => item === spec).length > 0) {
            setCheckedGenders(checkedGenders.filter(item => item !== spec))
        } else {
            setCheckedGenders([...checkedGenders, spec]);
        }
    }

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                Gender <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse show" id="collapseExample4">
                {genderList?.map(spec => (
                    <div class="form-group form-check">
                        <input type="checkbox" onChange={onGenderCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec} />
                        <label class="form-check-label" for={spec}>{spec}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GenderFilters
