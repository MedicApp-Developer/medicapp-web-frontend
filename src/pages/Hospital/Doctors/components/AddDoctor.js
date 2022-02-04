import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { addDoctor } from '../../../../store/actions/doctorActions'
import { connect } from 'react-redux'
import SelectInput from '../../../../components/forms/SelectInput'
import DoctorApi from '../../../../api/Doctors'
import TextInput from '../../../../components/forms/TextInput'
import { countryList, genderList, languagesList } from '../../../../constants/extra'
import LookupApi from '../../../../api/lookups'
import NumberFormatInput from '../../../../components/forms/NumberFormat'
import MultipleSelect from '../../../../components/forms/MultipleSelect'

function AddDoctor({ addDoctor }) {

    const [allSpecialities, setAllSpecialities] = useState([])
    const [countries, setCountries] = useState([])
    const [genders, setGenders] = useState([])
    const [languages, setLanguages] = useState([])
    const [selectedSpeciality, setSelectedSpeciality] = useState([])
    const [specialityError, setSpecialityError] = useState(false)

    useEffect(() => {
        DoctorApi.getAllSpecialities("undefined").then(res => {
            const data = []

            res.data.data.map(item => {
                data.push({
                    label: item.name_en,
                    value: item._id
                })
            })
            setAllSpecialities(data)
        })
        LookupApi.getCountries().then(res => {
            setCountries(res.data.data)
        })
        LookupApi.getGenders().then(res => {
            setGenders(res.data.data)
        })
        LookupApi.getLanguages().then(res => {
            setLanguages(res.data.data)
        })
    }, [])
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                experience: "",
                gender: "",
                country: "",
                language: ""
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                email: Yup.string().required('Required').email(),
                mobile: Yup.string().required('Required'),
                experience: Yup.string().required('Required'),
                gender: Yup.string().required('Required'),
                country: Yup.string().required('Required'),
                language: Yup.string().required('Required')
            })}
            onSubmit={(values, { resetForm }) => {
                if (selectedSpeciality.length === 0) {
                    setSpecialityError(true)
                } else {
                    setSpecialityError(false)

                    const specialityIds = []
                    selectedSpeciality.map(item => {
                        specialityIds.push(item.value)
                    })

                    addDoctor({ ...values, specialityId: specialityIds })
                    resetForm()
                }

            }}
            enableReinitialize={true}
        >
            <div className="modal fade" id="addDoctor" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="icon-close"></span>
                            </button>
                            <h4 className="text-center">Add Doctor</h4>
                            <Form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextInput type="text" name="firstName" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextInput type="text" name="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextInput type="text" name="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <NumberFormatInput
                                                format={"+971-## ### ####"}
                                                mask={"_"}
                                                name="mobile" placeholder="Mobile"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextInput type="text" name="experience" placeholder="Experience" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <MultipleSelect
                                                options={allSpecialities}
                                                value={selectedSpeciality}
                                                changeHandler={(e) => { setSelectedSpeciality(e); e.length > 0 ? setSpecialityError(false) : setSpecialityError(true) }}
                                                hasError={specialityError}
                                                label={"Select Speciality"}
                                                errorMessage={"Speciality is required"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <SelectInput name="gender">
                                                <option value="">Select Gender</option>
                                                {genders?.map(gender => (
                                                    <option value={gender._id}>{gender.name_en}</option>
                                                ))}
                                            </SelectInput>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <SelectInput name="country">
                                                <option value="">Select Country</option>
                                                {countries?.map(country => (
                                                    <option value={country._id}>{country.name_en}</option>
                                                ))}
                                            </SelectInput>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <SelectInput name="language">
                                                <option value="">Select Language</option>
                                                {languages?.map(lang => (
                                                    <option value={lang._id}>{lang.name_en}</option>
                                                ))}
                                            </SelectInput>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center mb-0">
                                    <button type="submit" className="btn btn-primary">Confirm</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    addDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor)
