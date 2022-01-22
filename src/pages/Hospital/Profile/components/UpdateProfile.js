import React, { useEffect, useState } from 'react'
import HospitalApi from '../../../../api/Hospital'
import { getTimesArray } from '../../../../Utills/functions'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import SelectInput from '../../../../components/forms/SelectInput'
import TextArea from '../../../../components/forms/TextArea'
import { CLINIC, HOSPITAL } from '../../../../constants/Roles'
// import MultiSelect from 'react-multiple-select-dropdown-lite'
// import 'react-multiple-select-dropdown-lite/dist/index.css'

const UpdateHospitalProfile = ({ hospitalId, hospital }) => {

    const [services, setServices] = useState([])
    const [categories, setCategories] = useState([])
    const [value, setvalue] = useState('')

    useEffect(() => {
        HospitalApi.getAllHospitalServices().then(res => {
            setServices(res.data.data)
        })

        HospitalApi.getAllHospitalCategories().then(res => {
            setCategories(res.data.data)
            // const categoryOptions = []

            // res.data.data.map(category => {
            //     categoryOptions.push({
            //         label: category.name,
            //         value: category._id
            //     })
            // })
            // setCategories(categoryOptions)
        })
    }, [])

    const timesArray = getTimesArray()

    const handleOnchange = val => {
        setvalue(val)
    }

    return (
        <>
            <Formik
                initialValues={{
                    openingTime: hospital?.hospital?.openingTime,
                    closingTime: hospital?.hospital?.closingTime,
                    PCRDPI: hospital?.hospital?.PCRDPI,
                    about: hospital?.hospital?.about,
                    services: hospital?.hospital?.services[0],
                    type: hospital?.hospital?.type,
                    category: hospital?.hospital?.category
                }}
                validationSchema={Yup.object({
                    openingTime: Yup.string().required('Required'),
                    closingTime: Yup.string().required('Required'),
                    PCRDPI: Yup.boolean().required('Required'),
                    services: Yup.string().required('Required'),
                    about: Yup.string().required('Required'),
                    type: Yup.string().required('Required'),
                    category: Yup.string().required('Required').nullable(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    const newValues = JSON.parse(JSON.stringify(values))
                    newValues.services = [newValues.services]
                    HospitalApi.updateHospitalProfile(hospitalId, newValues).then(result => {
                        toast.success("Hospital Profile Updated")
                        setTimeout(() => {
                            localStorage.clear()
                            window.location.reload()
                        }, 2000)
                    })
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
                                                <SelectInput name="type">
                                                    <option value="">Hospital Type</option>
                                                    <option value={CLINIC}>Clinic</option>
                                                    <option value={HOSPITAL}>Hospital</option>
                                                </SelectInput>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="category">
                                                    <option value="">Category</option>
                                                    {categories?.map(category => (
                                                        <option value={category._id}>{category.name}</option>
                                                    ))}
                                                </SelectInput>
                                                {/* <MultiSelect
                                                    onChange={handleOnchange}
                                                    options={categories}
                                                    style={{ width: '100%', border: 'none' }}
                                                /> */}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="openingTime">
                                                    <option value="">Opening Time</option>
                                                    {timesArray?.map(time => (
                                                        <option value={time}>{time}</option>
                                                    ))}
                                                </SelectInput>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="closingTime">
                                                    <option value="">Closing Time</option>
                                                    {timesArray?.map(time => (
                                                        <option value={time}>{time}</option>
                                                    ))}
                                                </SelectInput>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="services">
                                                    <option value="">Services</option>
                                                    {services?.map(item => (
                                                        <option value={item._id}>{item.name}</option>
                                                    ))}
                                                </SelectInput>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <SelectInput name="PCRDPI">
                                                    <option value="">PCR/DPI</option>
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </SelectInput>
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
