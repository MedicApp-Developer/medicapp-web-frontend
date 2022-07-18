import React, { useEffect, useState } from 'react'
import HospitalApi from '../../../../api/Hospital'
import { getTimesArray } from '../../../../Utills/functions'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import SelectInput from '../../../../components/forms/SelectInput'
import TextArea from '../../../../components/forms/TextArea'
import { CLINIC, HOSPITAL } from '../../../../constants/Roles'
import MultipleSelect from '../../../../components/forms/MultipleSelect'
// import MultiSelect from 'react-multiple-select-dropdown-lite'
// import 'react-multiple-select-dropdown-lite/dist/index.css'

const UpdateHospitalProfile = ({ hospitalId, hospital, categories, setCategories, services, setServices, insurances, setInsurances }) => {

    const [categoriesError, setCategoriesError] = useState(false)
    const [servicesError, setServicesError] = useState(false)

    const timesArray = getTimesArray()

    return (
        <>
            <Formik
                initialValues={{
                    name: hospital?.hospital?.name,
                    openingTime: hospital?.hospital?.openingTime,
                    closingTime: hospital?.hospital?.closingTime,
                    about: hospital?.hospital?.about,
                    type: hospital?.hospital?.type
                }}
                validationSchema={Yup.object({
                    openingTime: Yup.string().required('Required'),
                    closingTime: Yup.string().required('Required'),
                    about: Yup.string().required('Required'),
                    type: Yup.string().required('Required')
                })}
                onSubmit={(values, { setSubmitting }) => {

                    if (categories.selectedCategories.length === 0) {
                        setCategoriesError(true)
                    } if (services.selectedServices.length === 0) {
                        setServicesError(true)
                    } else {
                        setSubmitting(true)
                        setCategoriesError(false)
                        setServicesError(false)

                        const newValues = JSON.parse(JSON.stringify(values))

                        const categoriesId = []

                        categories.selectedCategories.map(item => {
                            categoriesId.push(item.value)
                        })

                        const servicesId = []

                        services.selectedServices.map(item => {
                            servicesId.push(item.value)
                        })

                        const insurancesId = []

                        insurances.selectedInsurances.map(item => {
                            insurancesId.push(item.value)
                        })

                        newValues.services = servicesId
                        newValues.category = categoriesId
                        newValues.insurances = insurancesId
                        HospitalApi.updateHospitalProfile(hospitalId, newValues).then(result => {
                            toast.success("Hospital Profile Updated")
                            setTimeout(() => {
                                localStorage.clear()
                                window.location.reload()
                            }, 2000)
                        })
                    }

                }}
                enableReinitialize={true}
            >

                <div className="modal fade" id="updateHospital" tabindex="-1" aria-labelledby="updateHospitalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="icon-close"></span>
                                </button>
                                <h4 className="text-center">Update Hospital Profile</h4>
                                <Form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="type" style={{ height: "50px" }}>
                                                    <option value="">Hospital Type</option>
                                                    <option value={CLINIC}>Clinic</option>
                                                    <option value={HOSPITAL}>Hospital</option>
                                                </SelectInput>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {categories.selectedCategories.length > 0 ? (
                                                    <MultipleSelect
                                                        options={categories.categories}
                                                        value={categories.selectedCategories}
                                                        changeHandler={(e) => { setCategories({ ...categories, selectedCategories: e }); e.length > 0 ? setCategoriesError(false) : setCategoriesError(true) }}
                                                        hasError={categoriesError}
                                                        label={"Select Categories"}
                                                        errorMessage={"Category is required"}
                                                    />
                                                ) : (
                                                    <MultipleSelect
                                                        options={categories.categories}
                                                        value={categories.selectedCategories}
                                                        changeHandler={(e) => { setCategories({ ...categories, selectedCategories: e }); e.length > 0 ? setCategoriesError(false) : setCategoriesError(true) }}
                                                        hasError={categoriesError}
                                                        label={"Select Categories"}
                                                        errorMessage={"Category is required"}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="openingTime" style={{ height: "50px" }}>
                                                    <option value="">Opening Time</option>
                                                    {timesArray?.map(time => (
                                                        <option value={time}>{time}</option>
                                                    ))}
                                                </SelectInput>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="closingTime" style={{ height: "50px" }}>
                                                    <option value="">Closing Time</option>
                                                    {timesArray?.map(time => (
                                                        <option value={time}>{time}</option>
                                                    ))}
                                                </SelectInput>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {services.selectedServices.length > 0 ? (
                                                    <MultipleSelect
                                                        options={services.services}
                                                        value={services.selectedServices}
                                                        changeHandler={(e) => { setServices({ ...services, selectedServices: e }); e.length > 0 ? setServicesError(false) : setServicesError(true) }}
                                                        hasError={servicesError}
                                                        label={"Select Services"}
                                                        errorMessage={"Services are required"}
                                                    />
                                                ) : (
                                                    <MultipleSelect
                                                        options={services.services}
                                                        value={services.selectedServices}
                                                        changeHandler={(e) => { setServices({ ...services, selectedServices: e }); e.length > 0 ? setServicesError(false) : setServicesError(true) }}
                                                        hasError={servicesError}
                                                        label={"Select Services"}
                                                        errorMessage={"Services are required"}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {insurances.selectedInsurances.length > 0 ? (
                                                    <MultipleSelect
                                                        options={insurances.insurances}
                                                        value={insurances.selectedInsurances}
                                                        changeHandler={(e) => { setInsurances({ ...insurances, selectedInsurances: e }) }}
                                                        label={"Select supported insurances (optional)"}
                                                        errorMessage={"Services are required"}
                                                    />
                                                ) : (
                                                    <MultipleSelect
                                                        options={insurances.insurances}
                                                        value={insurances.selectedInsurances}
                                                        changeHandler={(e) => { setInsurances({ ...insurances, selectedInsurances: e }) }}
                                                        label={"Select supported insurances (optional)"}
                                                        errorMessage={"Services are required"}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <TextArea
                                                    name="about"
                                                    rows="5"
                                                    placeholder="About Hopital"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center mb-0">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default UpdateHospitalProfile
