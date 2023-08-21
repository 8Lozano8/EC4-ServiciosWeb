package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path="/api/ventadetalle/{id}/detalle")
	public @ResponseBody List<Map<String, Object>> cantidad(@PathVariable Integer id){
		String sql = "SELECT ventadetalle.id as ID, venta.total as TOTAL, producto.nombre as NOMBRE, producto.precio as PRECIO " +
             "FROM ventadetalle " +
             "JOIN venta ON ventadetalle.id_venta = venta.id " +
             "JOIN producto ON ventadetalle.id_producto = producto.id " +
             "WHERE id_venta = ?";
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}