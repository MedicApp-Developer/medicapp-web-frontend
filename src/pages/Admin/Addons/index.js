import React, { useEffect } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import AddAddons from './components/AddAddons'
import { getAddons, deleteAddon } from '../../../store/actions/addonActions'
import { connect } from 'react-redux'
import CATEGORY_PLACEHOLDER_IMAGE from '../../../assets/images/cateogries_placeholder.png'
import { useState } from 'react'

function Addons({ getAddons, addons, deleteAddon }) {
    const { addons: allAddons } = addons && addons
    const [selectedAddon, setSelectedAddon] = useState(null);

    useEffect(() => {
        getAddons()
    }, [getAddons])

    const deleteAddonHandler = (addon) => {
        deleteAddon(addon._id)
    }

    return (
        <div>
            <DashboardLayout>
                <div className="row align-items-center add-list">
                    <div className="col-6">
                        <h4>Addon Services</h4>
                    </div>
                    <div className="col-6 text-right">
                        <a href={href} onClick={() => { setSelectedAddon(null) }} data-toggle="modal" data-target="#addAddon" className="btn btn-primary px-3">+ ADD Addon</a>
                    </div>
                </div>
                <div className="row list-block">
                    {allAddons?.map((cat, key) => (
                        <div key={key} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="pointer" src={CATEGORY_PLACEHOLDER_IMAGE} alt="Addons" />
                                        <div className="media-body">
                                            <h5 className="mt-0">{cat.name_en}</h5>
                                            <p className="mt-0">{cat.name_ar}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon-dots"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteAddonHandler(cat) }}>Delete</a>
                                        <a className="dropdown-item delete-item" style={{ backgroundColor: "#417EBF" }} href={href} onClick={(e) => { e.preventDefault(); setSelectedAddon(cat) }} data-toggle="modal" data-target="#addAddon">Update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Add Doctor Modal */}
                <AddAddons selectedAddon={selectedAddon} />
                {/* Set Doctor Schedule */}
            </DashboardLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
    addons: state.addons
})

const mapDispatchToProps = {
    getAddons,
    deleteAddon,
}

export default connect(mapStateToProps, mapDispatchToProps)(Addons)
