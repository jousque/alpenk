import axios from 'axios';
import store from '@/store';
import router from '@/router';

import { useToastService } from '@/plugins/useToaster';

const { showToast } = useToastService();
// { withCredentials: true }
const getAllResources = async (tableName, data = {}) => {
    const response = await axios({
        method: 'GET',
        url: "/" + tableName,
        headers: {
            Authorization: `Bearer ${store.getters.getToken}`
        },
        params: data
    });

    return response.data;
};


const getResourceById = async (tableName, id) => {
    data["column_set_id"] = store.getters.getUserData.auths.tables[tableName].shows[0]

    return await axios.post(store.getters.getToken + "/tables/" + tableName + "/" + id)
    .catch((error) => {
        Object.keys(error.response.data.data.errors).forEach(key => {
            showToast('error', error.response.data.data.errors[key][0]);
        });
    })
}

const getEditData = async (tableName, id) => {
    const defaultData = {
        column_set_id: store.getters.getUserData.auths.tables[tableName].edits[0]
    }

    try {
        const response = await axios.post(store.getters.getToken + "/tables/" + tableName + "/" + id + "/edit", {
            params: JSON.stringify(defaultData),
        });

        const responseData = {};
        Object.entries(response.data.data.record).forEach(([key, value]) => {
            responseData[key] = (value === null || value === undefined)
                ? ""
                : (typeof value === 'object' && value?.[0]?.source)
                    ? value[0].source
                    : value;
        });

        return responseData;
    } catch (error) {
        throw error;
    }
}

const getSelectColumnData = async (tableName, columnName, id, search = '***') => {
    const formData = new FormData();
    formData.append('limit', 1000000)
    formData.append('search', search === '' ? '***' : search)
    id === !undefined && formData.append('editRecordId', id)

    return await axios.post(store.getters.getToken + "/tables/" + tableName + "/getSelectColumnData/" + columnName, formData)
    .catch((error) => {
        Object.keys(error.response.data.data.errors).forEach(key => {
            showToast('error', error.response.data.data.errors[key][0]);
        });
    })
}

const createResource = async (tableName, data) => {
    data["column_set_id"] = store.getters.getUserData.auths.tables[tableName].creates[0]
    const formData = new FormData();

    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'boolean') {
            formData.append(key, data[key] ? 1 : 0);
        } else {
            formData.append(key, data[key]);
        }
    });

    return await axios.post(store.getters.getToken + "/tables/" + tableName + "/store", formData)
        .catch((error) => {
            Object.keys(error.response.data.data.errors).forEach(key => {
                showToast('error', error.response.data.data.errors[key][0]);
            });
        })
}

const createMultipleResource = async (tableNameFirst, tableNameSecond, dataFirst, dataSecond) => {
    dataFirst[0]["column_set_id"] = store.getters.getUserData.auths.tables[tableNameFirst].creates[0]
    dataSecond[0]["column_set_id"] = store.getters.getUserData.auths.tables[tableNameSecond].creates[0]

    const lastData = {
        [tableNameFirst]: dataFirst,
        [tableNameSecond]: dataSecond
    }

    return await axios.post(store.getters.getToken + "/multipleTables/store", lastData)
        .catch((error) => {
            Object.keys(error.response.data.data.errors).forEach(key => {
                showToast('error', error.response.data.data.errors[key][0]);
            });
        })
}

const updateResourceById = async (tableName, id, data) => {
    data["column_set_id"] = store.getters.getUserData.auths.tables[tableName].edits[0]
    const formData = new FormData();

    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'boolean') {
            formData.append(key, data[key] ? 1 : 0);
        } else {
            formData.append(key, data[key]);
        }
    });

    return await axios.post(store.getters.getToken + "/tables/" + tableName + "/" + id + "/update", formData)
        .catch((error) => {
            Object.keys(error.response.data.data.errors).forEach(key => {
                showToast('error', error.response.data.data.errors[key][0]);
            });
        });
}

const updateMultipleResource = async (tableNameFirst, tableNameSecond, dataFirst, dataSecond) => {
    dataFirst[0]["column_set_id"] = store.getters.getUserData.auths.tables[tableNameFirst].edits[0]
    dataSecond[0]["column_set_id"] = store.getters.getUserData.auths.tables[tableNameSecond].edits[0]

    const lastData = {
        [tableNameFirst]: dataFirst,
        [tableNameSecond]: dataSecond
    }
    
    return await axios.post(store.getters.getToken + "/multipleTables/update", lastData)
        .catch((error) => {
            Object.keys(error.response.data.data.errors).forEach(key => {
                showToast('error', error.response.data.data.errors[key][0]);
            });
        })
}

const updateByCell = async (tableName, id, data) => {
    data["column_set_id"] = store.getters.getUserData.auths.tables[tableName].edits[0]
    return await axios.post(store.getters.getToken + "/tables/" + tableName + "/" + id + "/update", data)
}

const deleteResourceById = async (tableName, id) => {
    return await axios.post(store.getters.getToken + "/tables/" + tableName + "/" + id + "/delete")
}

const deleteMultipleResource = async (tableName, data) => {
    return await axios.post(store.getters.getToken + "/" + tableName + "/multipleDelete", data)
}


export default {
    getAllResources,
    getResourceById,
    getEditData,
    getSelectColumnData,
    createResource,
    createMultipleResource,
    updateResourceById,
    updateMultipleResource,
    updateByCell,
    deleteResourceById,
    deleteMultipleResource,
}