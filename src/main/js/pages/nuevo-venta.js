const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevoVenta = () => {


    const [total, setTotal] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventas',
            entity: { total: total },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });

    }

    return (
        <>
            <div className="page-container">
                <h1>Nueva Venta</h1>
                <form onSubmit={handleSubmit}>
                <label className="form-label">Total</label>
                <br />
                <input
                    type="number"
                    id="total"
                    name="total"
                    onChange={(e) => setTotal(e.target.value)}
                    className="form-input"
                />
                <br />
                <input type="submit" value="Nuevo Venta" className="form-button" />
                </form>
                <Link to="/" className="form-link">
                Volver
                </Link>
            </div>
        </>
    )
}




module.exports = PageNuevoVenta;