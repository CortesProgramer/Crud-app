import React from 'react'

const CrudTableRow = ({element, setDataToEdit, deleteData}) => {
  let { name, nickname, id } = element;
  return (
    <tr>
        <td>{name}</td>
        <td>{nickname}</td>
        <td>
            <button onClick={() => setDataToEdit(element)}>Editar</button>
            <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow