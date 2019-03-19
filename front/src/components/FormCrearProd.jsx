/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React from 'react';
const categorias = [];
const addCat = (cat) => {
  categorias.push(cat);
};
const Formulario = ({ onChange, onChange2, onSubmit, title, array }) => (

  <form className='formProdAm' onSubmit={(e) => onSubmit(e, categorias)} >
    <h1 style={{ textAlign: 'center', marginBottom: '50px', borderBottom: '1px solid black', paddingBottom: '20px' }}>{title} Crear un Nuevo Producto</h1>
    <div className="row">
      <h3>Marca: </h3>
      <div className="dropdown form-group col-lg-9 " >
        <div className="form-check form-check-inline">
          <input onChange={onChange} className="form-check-input" type="radio" name="Marca" id="iPhone" value="iPhone" />
          <label className="form-check-label" htmlFor="iPhone">iPhone</label>
        </div>

        <div className="form-check form-check-inline">
          <input onChange={onChange} className="form-check-input" type="radio" name="Marca" id="Samsung" value="Samsung" />
          <label className="form-check-label" htmlFor="Samsung">Samsung</label>
        </div>

        <div className="form-check form-check-inline">
          <input onChange={onChange} className="form-check-input" type="radio" name="Marca" id="Motorola" value="Motorola" />
          <label className="form-check-label" htmlFor="Motorola">Motorola</label>
        </div>
        <div className="form-check form-check-inline">
          <input onChange={onChange} className="form-check-input" type="radio" name="Marca" id="Xiaomi" value="Xiaomi" />
          <label className="form-check-label" htmlFor="Xiaomi">Xiaomi</label>
        </div>
        <div className="form-check form-check-inline">
          <input onChange={onChange} className="form-check-input" type="radio" name="Marca" id="LG" value="LG" />
          <label className="form-check-label" htmlFor="LG">LG</label>
        </div>
        <div className="form-check form-check-inline">
          <input onChange={onChange} className="form-check-input" type="radio" name="Marca" id="Huawei" value="Huawei" />
          <label className="form-check-label" htmlFor="Huawei">Huawei</label>
        </div>
      </div>

      <div id='modelo' className="form-group col-lg-12">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Modelo :</span>
          </div>
          <input name='Modelo' onChange={onChange} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" required />
        </div>
      </div>

    </div>

    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">URL Imagenes</span>
      </div>
      <input onChange={onChange} name="Imagen" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" required />
    </div>
    <h6 style={{ marginTop: '10px' }}>* Separar las URL con coma (',')</h6>

    <div className="input-group input-group-lg" style={{ margin: '15px 0' }}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">Precio</span>
      </div>
      <input name='Precio' onChange={onChange} type="text" className="form-control" id="inputAddress" placeholder="Precio" required />
    </div>

    <div className="input-group input-group-lg" style={{ margin: '15px 0' }}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">Unidades</span>
      </div>
      <input name='Stock' onChange={onChange} type="text" className="form-control" id="inputAddress" placeholder="Unid." required/>
    </div>

    <div className="form-group">
      <h3 id='modelo' className="form-group"> * Seleccionar Categorias:</h3>

      {array.map((categoria) => (
        <div key= {categoria.id} className="form-check form-check-inline">
          <input className="form-check-input" name='categoriesId' type="checkbox" id="inlineCheckbox1" value={categoria.id} onChange={(e) => addCat(e.target.value)}/>
          <label className="form-check-label" htmlFor="inlineCheckbox1">{categoria.name}</label>
        </div>
      )
      )}
    </div>
    <div className="form-group ">
      <label><h3>* Descripcion: </h3>
        <textarea onChange={onChange} name='Descripcion' rows="4" cols="50" required></textarea>
      </label>
    </div>

    <button onSubmit={onSubmit} className='btn btn-lg btn-success'>SUBMIT</button>

  </form >
);

export default Formulario;
