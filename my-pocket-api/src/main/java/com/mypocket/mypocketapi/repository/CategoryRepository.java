package com.mypocket.mypocketapi.repository;

import org.springframework.data.repository.CrudRepository;

import com.mypocket.mypocketapi.model.Category;


public interface CategoryRepository extends CrudRepository<Category, Long> {

}
