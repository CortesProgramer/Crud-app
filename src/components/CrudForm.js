import React, { useState, useEffect } from 'react'


const initialForm = {
    name: "",
    nickname: "",
    id: null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
      if(dataToEdit) {
        setForm(dataToEdit)
      } else {
        setForm(initialForm)
      }
    }, [dataToEdit])

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!form.name || !form.nickname) {
        alert("datos incompletos");
        return;
      }

      if(form.id === null) {
        createData(form);
      } else{
        updateData(form)
      }

      handleReset();
    }

    const handleReset = (e) => {
      setForm(initialForm);
      setDataToEdit(null);
    }
  return (
    <div>
        <h3>{dataToEdit ? "editar" : "agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='nombre' onChange={handleChange} value={form.name}/>
            <input type='text' name='nickname' placeholder='apodo'onChange={handleChange} value={form.nickname}/>
            <input type='submit' value='enviar' onChange={handleSubmit}/>
            <input type='reset' value='limpiar' onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm
