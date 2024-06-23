package com.ttc.springapp.entites;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table( name="categories" )
public class Category {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	@Column( unique=true, nullable=false, length=255 )
	private String title;
	
	
	
	
	@OneToMany( mappedBy="category" )
	private List<Product> products;
	
	
	

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Category() {
		super();
	}
	
	
}
