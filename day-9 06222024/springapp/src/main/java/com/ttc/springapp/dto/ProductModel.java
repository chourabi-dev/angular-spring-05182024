package com.ttc.springapp.dto;

public class ProductModel {
	private String title;
	private float price;
	private int stock;
	private long category;
	
	
	
	
	
	public long getCategory() {
		return category;
	}
	public void setCategory(long category) {
		this.category = category;
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
	public ProductModel() {
		super();
	}
	
	
	
}
