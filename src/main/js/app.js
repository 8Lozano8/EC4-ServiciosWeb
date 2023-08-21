const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');




const PageVerGenero = require('./pages/ver-genero');
const PageNuevoLisAuto = require ('./pages/nuevo-liauto');
const PageEditarGenero = require('./pages/editar-genero');
const PageNuevoGenero = require ('./pages/nuevo-genero')





const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-venta/:id', element: <PageVerVenta />},
	{path: '/ver-venta/:id/nuevo-ventadetalle', element: <PageNuevoVentasDetalle />},
	{path: '/editar-venta/:id', element: <PageEditarVenta />},
	{path: '/nuevo-venta', element: <PageNuevoVenta />},

])











ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)