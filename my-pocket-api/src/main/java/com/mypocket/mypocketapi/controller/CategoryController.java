package com.mypocket.mypocketapi.controller;

import com.mypocket.mypocketapi.model.Category;
import com.mypocket.mypocketapi.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

//https://www.baeldung.com/spring-webflux
@Api(tags= "Categorias")
@RestController
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService service;

	@ApiOperation(value = "Lista todas as categorias")
	@GetMapping
	Flux<Category> findAll() {
		return this.service.findAll();
	}

	@GetMapping("/{id}")
	Mono<Category> findById(@PathVariable("id") Long id) {
		return this.service.findById(id);
	}
	
	@ApiOperation(value = "Insere uma categoria na base de dados", code = 201)
	@PostMapping
	@ResponseStatus(value = HttpStatus.CREATED)
	Mono<Category> save(@ApiParam @RequestBody Category c) {
		return this.service.saveOrUpdate(c);
	}

	@ApiOperation(value = "Atualiza uma categoria na base de dados", code = 200)
	@PutMapping("/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	Mono<Category> update(@ApiParam("id") @PathVariable("id") Long id, @ApiParam @RequestBody Category c) {
		return this.service.saveOrUpdate(id, c);
	}
}
