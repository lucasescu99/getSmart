/* eslint-disable no-unused-vars */
import React from 'react';

const Formulario = ({ productoAnterior, onChange, onSubmit, title }) => (

  <form className='formProdAm' onSubmit={onSubmit} >
    <h1 style={{ textAlign: 'center', marginBottom: '50px', borderBottom: '1px solid black', paddingBottom: '20px' }}>{title} Crear Categoria:  </h1>
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
          <input name='Modelo' onChange={onChange} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div>
      </div>
      {/* value={producto && producto.modelo} */}
    </div>

    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">URL Imagenes</span>
      </div>
      <input onChange={onChange} name="Imagen" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    </div>
    <h6 style={{ marginTop: '10px' }}>* Separar las URL con coma (',')</h6>

    <div className="input-group input-group-lg" style={{ margin: '15px 0' }}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">Precio</span>
      </div>
      <input name='Precio' onChange={onChange} type="text" className="form-control" id="inputAddress" placeholder="Precio" />
    </div>

    <div className="input-group input-group-lg" style={{ margin: '15px 0' }}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">Unidades</span>
      </div>
      <input name='Stock' onChange={onChange} type="text" className="form-control" id="inputAddress" placeholder="Unid." />
    </div>

    <div className="form-group">
      <h3 id='modelo' className="form-group"> * Seleccionar Categorias:</h3>
      <h4>* Linea:</h4>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Linea" id="Liberado" value="Liberado" />
        <label className="form-check-label" htmlFor="Liberado">Liberado</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Linea" id="Movistar" value="Movistar" />
        <label className="form-check-label" htmlFor="Movistar">Movistar</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Linea" id="Claro" value="Claro" />
        <label className="form-check-label" htmlFor="Claro">Claro</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Linea" id="Personal" value="Personal" />
        <label className="form-check-label" htmlFor="Personal">Personal</label>
      </div>

    </div>

    <div className="form-group">
      <h4>* Gama</h4>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Gama" id="Alta" value="Alta" />
        <label className="form-check-label" htmlFor="Alta">Alta</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Gama" id="Media" value="Media" />
        <label className="form-check-label" htmlFor="Media">Media</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Gama" id="Baja" value="Baja" />
        <label className="form-check-label" htmlFor="Baja">Baja</label>
      </div>
    </div>

    <div className="form-group">
      <h4>* Sistema operativo :</h4>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Sistema Operativo" id="iOS" value="iOS" />
        <label className="form-check-label" htmlFor="iOS">iOS</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={onChange} className="form-check-input" type="radio" name="Sistema Operativo" id="Android" value="Android" />
        <label className="form-check-label" htmlFor="Android">Android</label>
      </div>
    </div>

    <div className="form-group ">
      <label><h3>* Descripcion: </h3>
        <textarea onChange={onChange} name='Descripcion' rows="4" cols="50"></textarea>
      </label>
    </div>

    <button onSubmit={onSubmit} className='btn btn-lg btn-success'>SUBMIT</button>

  </form >
);

export default Formulario
;
