package com.ttc.springapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttc.springapp.entites.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
