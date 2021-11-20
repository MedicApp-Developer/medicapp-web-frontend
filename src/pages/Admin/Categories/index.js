import React, { useEffect } from 'react'
import { href } from '../../../constants/extra';
import DashboardLayout from '../../../layout/DashboardLayout'
import AddCategories from './components/AddCategory';
import { getCategories, deleteCategory } from '../../../store/actions/categoriesActions';
import { connect } from 'react-redux';
import CATEGORY_PLACEHOLDER_IMAGE from '../../../assets/images/cateogries_placeholder.png';

function Categories({ getCategories, categories, deleteCategory }) {
    const { categories: allCategories } = categories && categories;

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const deleteCategoryHandler = (category) => {
        deleteCategory(category._id);
    }

    return (
        <div>
            <DashboardLayout>
                <div className="row align-items-center add-list">
                    <div className="col-6">
                        <h4>Categories</h4>
                    </div>
                    <div className="col-6 text-right">
                        <a href={href} data-toggle="modal" data-target="#addCategory" className="btn btn-primary px-3">+ ADD Category</a>
                    </div>
                </div>
                <div className="row list-block">
                    { allCategories?.map((cat, key) => (
                        <div key={key} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                    <img className="pointer" src={CATEGORY_PLACEHOLDER_IMAGE} alt="Category" />
                                    <div className="media-body">
                                        <h5 className="mt-0">{cat.name}</h5>
                                    </div>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon-dots"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteCategoryHandler(cat)}}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Add Doctor Modal */}
                <AddCategories />
                {/* Set Doctor Schedule */}
            </DashboardLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

const mapDispatchToProps = {
    getCategories,
    deleteCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
