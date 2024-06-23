package com.ttc.springapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.springapp.entites.Category;
import com.ttc.springapp.entites.Product;
import com.ttc.springapp.repositories.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin( value="*" )
public class CategoryController {

	@Autowired
	private CategoryRepository repo;
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		List<Category> tmp = this.repo.findAll();
		
		return ResponseEntity.ok(tmp);
	}
}
