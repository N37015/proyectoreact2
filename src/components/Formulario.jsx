const Formulario = () => {
    return (
      <form action="">
        <div className="col-md-5 mt-2">
        </div>
        <div className="card">
          <div className="card-header">Formulario</div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Documento</span>
              <input type="number" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre:</span>
              <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Apellido Paterno:</span>
              <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Teléfono:</span>
              <input type="tel" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Correo:</span>
              <input type="email" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
            
          </div>
          <button type="reset" className="btn btn-primary">Restablecer</button>
        </div>
        
      </form>
    );
  }
  
  export default Formulario;