package com.mypocket.mypocketapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mypocket.mypocketapi.model.Category;
import com.mypocket.mypocketapi.repository.CategoryRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;
	
	
	public void save(Category c) {
		this.repository.save(c);
	}
	
	public Mono<Category> findById(Long id) {
		return Mono.justOrEmpty(this.repository.findById(id));
	}
	
	public Flux<Category> findAll() {
		return Flux.fromIterable(this.repository.findAll());
	}
	
}
