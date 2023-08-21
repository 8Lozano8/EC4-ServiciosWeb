const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { instrumentos: [], musicos: [], bandas: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/ventas' }).done(response => {
			this.setState({ ventas: response.entity._embedded.ventas });
		});
	}
	render() {
		return (
			<>
				<h1>Ventas</h1>

				<div style={{"width":"100%", "display":"flex"}}>
					<div style={{"width":"calc(100% / 3"}}>
						<Titulo entidad="venta" emoji="👍" />
						<VentaList generos={this.state.ventas} />
						<Link to="/nuevo-venta">Nueva Venta</Link>
					</div>
				</div>




			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class VentaList extends React.Component {
	render() {
		const ventas = this.props.ventas.map(venta =>
			<Venta key={venta._links.self.href} venta={venta} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{ventas}
				</tbody>
			</table>
		)
	}
}

class Venta extends React.Component {
	render(){
		const id = this.props.venta.links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.venta.total}</td>
				<td>
					<Link to={`/ver-venta/${id}`}>Ver</Link> | <Link to={`/editar-venta/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}



module.exports = PageHome;