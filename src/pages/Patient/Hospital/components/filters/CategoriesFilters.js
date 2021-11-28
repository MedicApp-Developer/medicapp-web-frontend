import React, { useEffect, useState } from 'react'
import { getSpecialities } from '../../../../../store/actions/specialitiesActions';
import { connect } from 'react-redux';
import HospitalApi from '../../../../../api/Hospital';
import { toast } from 'react-toastify';

function CategoriesFilter({ onCategoriesCheckboxChanged, checkedCategories }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if(categories.length < 1) {
            HospitalApi.getAllHospitalCategories().then(categories => {
                setCategories(categories.data.data);
            }).catch(err => {
                toast.error("Problem while fetching the categories");
            })
        }
    }, []);

    return (
        <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                    Category <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse" id="collapseExample1">
                                    {categories?.map((spec, index) => (
                                        <div key={index} class="form-group form-check">
                                            <input type="checkbox" checked={checkedCategories.includes(spec._id)} onChange={onCategoriesCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec.name} />
                                            <label class="form-check-label" for={spec.name}>{spec.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
    )
}

export default CategoriesFilter;