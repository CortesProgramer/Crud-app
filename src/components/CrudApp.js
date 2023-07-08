import React, {  useReducer } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import {  reducer, initialState } from '../reducers/crudReducers';
import { types } from '../actions/crudActions';



export const CrudApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {db, dataToEdit} = state;

    const createData = (data) => {
        data.id = Date.now();
        dispatch({ type: types.create, payload: data })
    }
    
    const updateData = (data) => {
        dispatch({ type: types.update, payload: data })
    }
    
    const deleteData = (data) => {
        dispatch({ type: types.delete, payload: data })
    }
    
  return (
    <div>
        <h2>Tripulacion Mugiwara</h2>
        <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </div>

  )
}

export default CrudApp;

