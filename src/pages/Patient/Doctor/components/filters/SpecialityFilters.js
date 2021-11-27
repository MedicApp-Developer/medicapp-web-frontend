import React, { useEffect } from 'react'
import { getSpecialities } from '../../../../../store/actions/specialitiesActions';
import { connect } from 'react-redux';

function SpecialityFilters({ getSpecialities, specialities, onSpecialityCheckboxChanged }) {

    const { specialities: allSpecialities } = specialities && specialities;

    useEffect(() => {
        if(allSpecialities.length < 1) {
            getSpecialities();
        }
    }, [getSpecialities]);

    return (
        <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                    Speciality <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample1">
                                    {allSpecialities?.map(spec => (
                                        <div class="form-group form-check">
                                            <input type="checkbox" onChange={onSpecialityCheckboxChanged.bind(this, spec)} class="form-check-input" id={spec.name} />
                                            <label class="form-check-label" for={spec.name}>{spec.name}</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialityFilters);