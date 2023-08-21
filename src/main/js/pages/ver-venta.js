const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');





const PageVerVenta = () => {

    let { id } = useParams();
    const [venta, setVenta] = useState({});
    const [ventadetalle, setVentadetalle] = useState([]);

    useEffect(() => {
        url_venta = '/api/ventas/' + id

        client({
            method: 'GET',
            path: url_venta
        }).done(response => setVenta(response.entity));

        client({
            method: 'GET',
            path: url_genero + '/detalle'
        }).done(response => setVentadetalle(response.entity))
        
    }, []);




    return (
        <>
            <div className="page-container">
                
                <h1 className="page-header">Venta</h1>

                <table className="page-table">
                <tbody>
                    <tr>
                    <th>Total</th>
                    <td>{venta.total}</td>
                    </tr>
                </tbody>
                </table>

                <hr />

                <h2 className="page-header">Producto</h2>

                <table className="page-table">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventadetalle.map((ventadetalle) => (
                        <tr key={ventadetalle.ID}>
                            <td>{ventadetalle.NOMBRE}</td>
                            <td>{ventadetalle.PRECIO}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                <Link to={`/ver-venta/${id}/nuevo-ventadetalle`} className="form-link">Agregar Producto</Link>
                <Link to="/" className="form-link">Volver</Link>
            </div>
        </>
    )




}



module.exports = PageVerVenta;