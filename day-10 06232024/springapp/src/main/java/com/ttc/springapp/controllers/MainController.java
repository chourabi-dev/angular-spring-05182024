package com.ttc.springapp.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.springapp.dto.EmployeeModel;

@RestController
@CrossOrigin( value="*" )
public class MainController {
	
	
	// BONUS !!
	// GET
	/*@GetMapping("/")
	public String helloWorldPage(Model model) {
		model.addAttribute("title","bonjour");
		return "index";
	}*/
	
	
	
	// somme !!  /somme?x=5&y=10  =>  15
	
	@GetMapping("/somme")
	public int somme( @RequestParam( name="x", required= true ) int x, @RequestParam( name="y", required= true ) int y ) {
		return (x+y);
	}
	
	
	@GetMapping("/employee/{id}")
	public String somme( @PathVariable( name="id" ) int employedID ) {
		return "searching for employee N°".concat( Integer.toString(employedID) ) ;
	}
	
	
	
	// POST !!
	@PostMapping("/employee/add")
	public EmployeeModel addEmmployee(  @RequestBody EmployeeModel model  ) {
		System.out.println(model.getEmail());
		
		return model;
	}
	
	@PutMapping("/employee/update")
	public EmployeeModel updateEmployee(  @RequestBody EmployeeModel model  ) {
		System.out.println(model.getEmail());
		
		return model;
	}
	
	
	
	// ResponseEntity
	
	@GetMapping("/list/employee")
	public ResponseEntity<?> list( ) {
		
		List<EmployeeModel> employees = new ArrayList<EmployeeModel>();
		
		EmployeeModel e1 = new EmployeeModel();
		e1.setFullname("demo");
		e1.setEmail("demo@demo.com");
		
		
		employees.add(e1);
		employees.add(e1);
		employees.add(e1);
		employees.add(e1);
		employees.add(e1);
		
		// success
		
		// return ResponseEntity.status(400).body(employees);
		
		HashMap<String,String> map = new HashMap<String,String>();
		
		map.put("success", "false");
		map.put("message", "bad request !!!");
		
		return ResponseEntity.status(400).body(map);
		
		
	}
	
	
	
	

}
