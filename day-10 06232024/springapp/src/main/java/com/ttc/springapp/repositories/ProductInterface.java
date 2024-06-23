package com.ttc.springapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ttc.springapp.entites.Product;

public interface ProductInterface extends JpaRepository<Product,Long> {

	List<Product> findByPriceLessThan( float price );
	
	
	List<Product> findByTitleContaining( String title );
	
	
	
	
	 
	
	/*
	@Query( nativeQuery=true, value="SLEECT * FROM PRODUCTS ..." )
	List<Product> findByPriceLessThan( float price );*/
	
}
