import axios from '../../axios';
import { CATEGORY_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const CategoriesApi = {
    getAllCategories() {
        return trackPromise(axios.get(`/${CATEGORY_REQUEST_NAMESPACE}`));
    },
    deleteCategory(id) {
        return trackPromise(axios.delete(`${CATEGORY_REQUEST_NAMESPACE}/${id}`));
    },
    getSingleCategory(id) {
        return trackPromise(axios.get(`/${CATEGORY_REQUEST_NAMESPACE}/${id}`));
    },
    createCategory(data) {
        return trackPromise(axios.post(`/${CATEGORY_REQUEST_NAMESPACE}`, data));
    },
    updateCategory(id, data) {
        return trackPromise(axios.put(`/${CATEGORY_REQUEST_NAMESPACE}/${id}`, data));
    }
}

export default CategoriesApi;