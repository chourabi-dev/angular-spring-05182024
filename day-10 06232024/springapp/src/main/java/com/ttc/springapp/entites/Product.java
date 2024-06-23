package com.ttc.springapp.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table( name="products" )
public class Product {
	
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	@Column( unique=true, nullable=false, length=255 )
	private String title;
	
	@Column(nullable=false)
	private float price;
	
	@Column(nullable=false)
	private int stock;
	
	
	@ManyToOne
	@JsonIgnore
	private Category category;
	
	
	
	
	
	
	

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
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

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Product() {
		super();
	}
	
	
	

}
