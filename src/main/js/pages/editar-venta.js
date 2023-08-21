const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');





const PageEditarVenta = ()=>{
    const {id} = useParams();
    const [venta, setVenta] = useState({});
    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/ventas/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setGenero(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/ventas/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: venta
        }).done(()=>window.location = "/")
    }



    return(
        <>
            <div className="form-container">
                <h1>Editar Venta: {id}</h1>
                <form onSubmit={handleSubmit}>
                <label className="form-label">Total</label>
                <input
                    type="Number"
                    name="total"
                    value={venta.total}
                    onChange={(e) => {
                    setGenero({ ...venta, total: e.target.value });
                    }}
                    className="form-input"
                />
                <br />
                <input type="submit" value={`Editar Venta ${id}`} className="form-button" />
                </form>
                <Link to="/" className="form-link">Volver</Link>
            </div>
        </>
    )

}








module.exports = PageEditarVenta;