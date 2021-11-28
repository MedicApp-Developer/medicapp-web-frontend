import React, { useEffect, useState } from 'react'
import { getSpecialities } from '../../../../../store/actions/specialitiesActions';
import { connect } from 'react-redux';
import HospitalApi from '../../../../../api/Hospital';
import { toast } from 'react-toastify';

function AddonsFilter({ onAddonsCheckboxChanged, checkedAddons }) {

    const [addonsList, setAddonsList] = useState([]);

    useEffect(() => {
        if(addonsList.length < 1) {
            HospitalApi.getAllHospitalServices().then(services => {
                setAddonsList(services.data.data);
            }).catch(err => {
                toast.error("Problem while fetching the addons");
            })
        }
    }, []);

    return (
        <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                    Add-Ons <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse" id="collapseExample2">
                                    {addonsList?.map((spec, index) => (
                                        <div key={index} class="form-group form-check">
                                            <input type="checkbox" checked={checkedAddons.includes(spec._id)} onChange={onAddonsCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec.name} />
                                            <label class="form-check-label" for={spec.name}>{spec.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
    )
}

export default AddonsFilter;