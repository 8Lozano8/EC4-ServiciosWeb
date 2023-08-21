package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final VentaRepository repositoryV;
	private final ProductoRepository repositoryP;
	private final VentaDetalleRepository repositoryVD;

	@Autowired
	public DatabaseLoader(
		VentaRepository repositoryV,
		 ProductoRepository repositoryP,
		 VentaDetalleRepository repositoryVD) {
		this.repositoryV = repositoryV;
		this.repositoryP = repositoryP;
		this.repositoryVD = repositoryVD;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Venta venta1 = new Venta(10);
		this.repositoryV.save(venta1);
		this.repositoryV.save(new Venta(20));
		this.repositoryV.save(new Venta(30));
		this.repositoryV.save(new Venta(40));
		this.repositoryV.save(new Venta(50));

		Producto producto1 = new Producto("Swtich pro controller", 320);
		this.repositoryP.save(producto1);
		this.repositoryP.save(new Producto("Dualshock 4", 300));
		this.repositoryP.save(new Producto("Joy cons", 400));
		this.repositoryP.save(new Producto("Xbox Controller", 260));
		this.repositoryP.save(new Producto("PS5", 3000));

		this.repositoryVD.save(new VentaDetalle(venta1, producto1));

	}

	
}