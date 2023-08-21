const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');





const NuevoVentaDetallePage = () => {



    
    
    let { id } = useParams();
    const [productos, setProductos] = useState([])
    const [idProducto, setIdProducto] = useState('')


    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventadetalle',
            entity: {
                genero: 'http://localhost:8080/api/ventas/'+id,
                libro: 'http://localhost:8080/api/productos/'+idProducto
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            let productos2 = [];
            response.entity._embedded.productos.map(producto => {
                productos2.push({value: producto._links.self.href.split('/').slice(-1), label: producto.nombre})
            })
            setProductos(productos2)
        })
    },[])

    return (
        <>
            <div className="page-container">
                <h1>Nuevo Producto</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='producto' className="form-label">Producto</label>
                    <br />
                    <select name="producto" id="producto" onChange={(e)=>{setIdProducto(e.target.value)}} className="form-select">
                        {productos.map(producto => {	
                            return (
                                <option key={producto.value} value={producto.value}>{producto.label}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <input type="submit" value="Nuevo Producto"/>
                </form>
                <Link to="/" className="form-link">Volver</Link>
            </div>
        </>
    )
}






module.exports = NuevoVentaDetallePage;