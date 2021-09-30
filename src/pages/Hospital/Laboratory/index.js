import React, { useEffect, useState } from 'react'
import { href } from '../../../constants/extra';
import DashboardLayout from '../../../layout/DashboardLayout'
import PLACEHOLDER_LAB_IMAGE from '../../../assets/images/laboratory.png'
import AddLaboratory from './components/AddLaboratory';
import { connect } from 'react-redux';
import { getLabs, deleteLab, setPageNumber, searchLab } from '../../../store/actions/labActions'
import { getPagesArray } from '../../../Utills/functions';
import classNames from 'classnames';

function Laboratory({ getLabs, deleteLab, labs, setPageNumber, searchLab }) {

    const { pageNumber, numberOfPages, labs: allLabs, searchedLabs, searchedText } = labs && labs;

    useEffect(() => {
        if(searchedText !== ""){
            searchLab(pageNumber, searchedText);
        }else {
            getLabs(pageNumber || 0);
        }
    }, [getLabs, pageNumber, searchLab, searchedText]);

    const deleteLabHandler = (lab) => {
        deleteLab(lab._id);
    }

    const pages = getPagesArray(numberOfPages);

    const labsList = searchedLabs.length > 0 ? searchedLabs : allLabs;

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
                    { labsList?.map(laboratory => (
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
                                        <a href={`mailto:${laboratory.email}`}><span className="icon-email"></span></a>
                                        <a href={`tel:${laboratory.mobile}`}><span className="icon-phone"></span></a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="icon-dots"></span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a href={href} class="dropdown-item delete-item" onClick={(e) => { e.preventDefault(); deleteLabHandler(laboratory) }}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div class="row">
                    <div class="col-md-12">
                        {labsList?.length > 0 ? (
                            <nav>
                                <ul class="pagination justify-content-center align-items-center my-md-2">
                                    <li class="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber - 1)}}>Prev</a></li>
                                    {pages.map((pageIndex) => (
                                        <li class={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a class="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                                    ))}
                                    <li class="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber + 1)}}>Next</a></li>
                                </ul>
                            </nav>
                        ): (
                            <p>No laboratory found</p>
                        )}
                            
                        </div>
                    </div>
                {/* Add laboratory Modal */}
                <AddLaboratory />
            </DashboardLayout>
        </div>
    )
}

const mapStateToProps = state => ({
    labs: state.labs
});

const mapDispatchToProps = {
    getLabs,
    deleteLab,
    setPageNumber,
    searchLab
}

export default connect(mapStateToProps, mapDispatchToProps)(Laboratory)

