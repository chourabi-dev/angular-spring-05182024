package com.ttc.springapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.springapp.dto.GeneralReponse;
import com.ttc.springapp.dto.ProductModel;
import com.ttc.springapp.entites.Product;
import com.ttc.springapp.repositories.CategoryRepository;
import com.ttc.springapp.repositories.ProductInterface;

@RestController
@RequestMapping("/api/products")
@CrossOrigin( value="*" )
public class ProductController {

	
	@Autowired
	private ProductInterface repo;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	
	// LIST OF PRODUCTS 
	@GetMapping("/list")
	public ResponseEntity<?> getAllProduct(){
		List<Product> products = this.repo.findAll();
		
		return ResponseEntity.ok(products);
	}
	
	
	
	
	@GetMapping("/find-by-id/{id}")
	public ResponseEntity<?> findByID( @PathVariable long id ){
		Product p = this.repo.findById(id).get();
		
		ProductModel model = new ProductModel();
		model.setTitle(p.getTitle());
		model.setPrice(p.getPrice());
		model.setCategory(p.getCategory().getId());
		model.setStock(p.getStock());
		
		return ResponseEntity.ok(model);
	}
	
	
	
	@GetMapping("/filter/price")
	public ResponseEntity<?> filterByPrice( @RequestParam() float price ){
		
		List<Product> tmp = this.repo.findByPriceLessThan(price);
		
		return ResponseEntity.ok(tmp);
	}
	
	
	@GetMapping("/filter/name")
	public ResponseEntity<?> filterByName( @RequestParam() String title ){ 
		List<Product> tmp = this.repo.findByTitleContaining(title); 
		return ResponseEntity.ok(tmp);
	}
	
	
	
	
	
	// add product !!
	@PostMapping("/add")
	public ResponseEntity<?> addProduct( @RequestBody ProductModel model ){
		// create the entity
		Product p = new Product();
		
		// fill the entity !!
		p.setTitle(model.getTitle());
		p.setPrice(model.getPrice());
		p.setStock(model.getStock());
		p.setCategory( this.categoryRepository.findById(model.getCategory()).get()  );
		
		// save the entity !!
		this.repo.save(p);
		
		// let the user know that the product is saved !!
		
		return ResponseEntity.ok( new GeneralReponse(true,"product inserted successfully.") );
		
		
	}
	
	
	// UPDATE !! 
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateProduct( @PathVariable(name="id") long id,  @RequestBody ProductModel model ){
		
		try {
			Product p = this.repo.findById(id).get();
			
			// fill the entity !!
			p.setTitle(model.getTitle());
			p.setPrice(model.getPrice());
			p.setStock(model.getStock());
			p.setCategory( this.categoryRepository.findById(model.getCategory()).get()  );
			
			// save the entity !!
			this.repo.save(p); 
			
			// let the user know that the product is saved !!
			
			return ResponseEntity.ok( new GeneralReponse(true,"product updated successfully.") );
		
		}catch(Exception e) {
			return ResponseEntity.status(404).body( new GeneralReponse(false,"product not found.") );
			
		}
		
	}
	
	
	
	// UPDATE !! 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProduct( @PathVariable(name="id") long id ){
		
		try {
			Product p = this.repo.findById(id).get();
			
			 
			
			// save the entity !!
			this.repo.delete(p) ;
			
			// let the user know that the product is deleted !!
			
			return ResponseEntity.ok( new GeneralReponse(true,"product deleted successfully.") );
		
		}catch(Exception e) {
			return ResponseEntity.status(404).body( new GeneralReponse(false,"product not found.") );
			
		}
		
	}
	
	
	
}
