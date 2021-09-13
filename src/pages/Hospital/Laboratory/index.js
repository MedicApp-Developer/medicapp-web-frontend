import React, { useEffect, useState } from 'react'
import { href } from '../../../constants/extra';
import DashboardLayout from '../../../layout/DashboardLayout'
import PLACEHOLDER_LAB_IMAGE from '../../../assets/images/laboratory.png'
import AddLaboratory from './components/AddLaboratory';
import LaboratoryApi from '../../../api/Laboratory';
import { toast } from 'react-toastify';

function Laboratory() {

    const [laboratories, setLaboratories] = useState([]);

    useEffect(() => {
        LaboratoryApi.getAllLaboratories().then(res => {
            setLaboratories(res.data.data)
        });
    }, []);

    const deleteLab = (lab) => {
        LaboratoryApi.deleteLab(lab._id).then(res => {
            toast.success("Successfully deleted the Laboratory");
        }).catch(err => {
            toast.error("Problem while deleting the laboratory");
        })
    }

    return (
        <div>
            <DashboardLayout>
                <div class="row align-items-center add-list">
                    <div class="col-6">
                        <h4>Laboratory List</h4>
                    </div>
                    <div class="col-6 text-right">
                        <a href={href} data-toggle="modal" data-target="#addLaboratory" class="btn btn-primary px-3">+ ADD Laboratory</a>
                    </div>
                </div>
                <div class="row list-block">
                    { laboratories?.map(laboratory => (
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="media">
                                    <img src={laboratory?.image ? laboratory?.image : PLACEHOLDER_LAB_IMAGE} alt="laboratory" />
                                    <div class="media-body">
                                        <h5 class="mt-0">{laboratory.firstName + " " + laboratory.lastName}</h5>
                                        <p>Laboratory</p>
                                    </div>
                                    </div>
                                    <div class="contact-info">
                                        <a href={href}><span class="icon-email"></span></a>
                                        <a href={href}><span class="icon-phone"></span></a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="icon-dots"></span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a href={href} class="dropdown-item delete-item" onClick={(e) => { e.preventDefault(); deleteLab(laboratory) }}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div class="row">
                    <div class="col-md-12">
                            <nav>
                                <ul class="pagination justify-content-center align-items-center my-md-2">
                                    <li class="page-item"><a href="#">Prev</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                {/* Add laboratory Modal */}
                <AddLaboratory />
            </DashboardLayout>
        </div>
    )
}

export default Laboratory

