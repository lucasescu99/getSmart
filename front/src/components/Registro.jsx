import React from 'react'

const Registro = (props) => (
        <form>
            <h3 className="FRUstitle"> Completa tus datos... </h3>
            <div className='FRUsuarios'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Nombre</label>
                        <input name='nombre' onChange={props.onChange} type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">E-mail</label>
                        <input name='email' onChange={props.onChange} type="text" className="form-control" id="inputEmail4" placeholder="E-mail" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSurname">Apellido</label>
                        <input name='apellido' onChange={props.onChange} type="text" className="form-control" placeholder="Apellido" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input name='password' type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Domicilio</label>
                    <input name='domicilio' onChange={props.onChange} type="text" className="form-control" id="inputAddress" placeholder="Domicilio" />
                </div>
                <div className="form-row">
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={props.handleSubmit}>Registro</button>
                </div>
        </form>);


export default Registro