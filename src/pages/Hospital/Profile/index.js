import React, { useEffect, useState, useContext } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import UpdateHospitalProfile from './components/UpdateProfile'
import { href } from '../../../constants/extra'
import HospitalAccount from './components/HospitalAccount'
import HospitalInfo from './components/HospitalInfo'
import classNames from 'classnames'
import HospitalApi from '../../../api/Hospital'
import { RootContext } from '../../../contextApi/index'
import { toast } from 'react-toastify'
import moment from 'moment'
import ShowMap from './components/ShowMap'

function HospitalProfile() {

    const [tabSelected, setTabSelected] = useState("Account")
    const [hospital, setHospital] = useState(null)
    const { user } = useContext(RootContext)
    const [categories, setCategories] = useState({
        categories: [],
        selectedCategories: []
    })

    const [services, setServices] = useState({
        services: [],
        selectedServices: []
    })

    useEffect(() => {
        if (user) {
            HospitalApi.getSingleHospital(user.referenceId).then(res => {
                setHospital(res.data.data)
            }).catch(err => {
                toast.error('Problem while fetching hospital profile')
            })

        }
    }, [user])

    useEffect(() => {
        if (hospital && Object.keys(hospital).length > 0) {
            HospitalApi.getAllHospitalCategories().then(res => {
                const categoryOptions = []
                res.data.data.map(category => {
                    categoryOptions.push({
                        label: category.name_en,
                        value: category._id
                    })
                })
                const prevCategories = []
                categoryOptions.map(outerItem => {
                    hospital?.hospital?.category?.map(innerItem => {
                        if (outerItem.value === innerItem) {
                            prevCategories.push(outerItem)
                        }
                    })
                })
                setCategories({
                    categories: categoryOptions,
                    selectedCategories: prevCategories
                })
            })

            HospitalApi.getAllHospitalServices().then(res => {
                const servicesOptions = []
                res.data.data.map(service => {
                    servicesOptions.push({
                        label: service.name_en,
                        value: service._id
                    })
                })
                const prevServices = []
                servicesOptions.map(outerItem => {
                    hospital?.hospital?.services?.map(innerItem => {
                        if (outerItem.value === innerItem._id) {
                            prevServices.push(outerItem)
                        }
                    })
                })
                setServices({
                    services: servicesOptions,
                    selectedServices: prevServices
                })
            })
        }
    }, [hospital])

    let returnedComponent = null

    if (tabSelected === "Account") {
        returnedComponent = <HospitalAccount hospitalId={user.referenceId} hospital={hospital} />
    } else if (tabSelected === "Profile") {
        returnedComponent = <HospitalInfo hospital={hospital} setHospital={setHospital} />
    } else if (tabSelected === "Location") {
        returnedComponent = <ShowMap hospitalId={user.referenceId} lat={hospital?.hospital?.location?.coordinates[0]} lng={hospital?.hospital?.location?.coordinates[1]} />
    }

    return (
        <>
            <DashboardLayout>
                <div className="row nav-tab-link">
                    <div className="col-md-12">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className={classNames('nav-link', { 'active': tabSelected === "Profile" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Profile") }}>Hospital Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className={classNames('nav-link', { 'active': tabSelected === "Account" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Account") }}>Account</a>
                            </li>
                            <li className="nav-item">
                                <a className={classNames('nav-link', { 'active': tabSelected === "Location" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Location") }}>Location</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {returnedComponent}
                {services?.services?.length > 0 && categories?.categories?.length > 0 && (
                    <UpdateHospitalProfile hospitalId={user.referenceId} hospital={hospital} categories={categories} setCategories={setCategories} services={services} setServices={setServices} />
                )}
            </DashboardLayout>
        </>
    )
}

export default HospitalProfile
