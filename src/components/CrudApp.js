import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { create } from '../reducers/crudReducers'


export const CrudApp = () => {

    const { db, dataToEdit } = useSelector((state) => state.main)

    const dispatch = useDispatch();

    const createData = (data) => {
        data.id = Date.now();
        dispatch(create(data))
    }

    const updateData = (data) => {
        // dispatch({ type: types.update, payload: data })
    }

    const deleteData = (data) => {
        // dispatch({ type: types.delete, payload: data })
    }

    return (
        <div>
            <h2>Tripulacion Mugiwara</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={() => { }} />
            <CrudTable data={db} setDataToEdit={() => { }} deleteData={deleteData} />
        </div>

    )
}

export default CrudApp;

