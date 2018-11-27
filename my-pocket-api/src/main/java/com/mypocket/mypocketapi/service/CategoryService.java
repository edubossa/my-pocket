package com.mypocket.mypocketapi.service;

import com.mypocket.mypocketapi.model.Record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mypocket.mypocketapi.model.Category;
import com.mypocket.mypocketapi.repository.CategoryRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Optional;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;

	public Mono<Category> saveOrUpdate(Long id, Category c) {
		c.setId(id);
		return Mono.just(this.repository.save(c));
	}

	public Mono<Category> saveOrUpdate(Category c) {
		return saveOrUpdate(null, c);
	}
	
	public Mono<Category> findById(Long id) {
		return Mono.justOrEmpty(this.repository.findById(id));
	}
	
	public Flux<Category> findAll() {
		return Flux.fromIterable(this.repository.findAll());
	}
	
}
