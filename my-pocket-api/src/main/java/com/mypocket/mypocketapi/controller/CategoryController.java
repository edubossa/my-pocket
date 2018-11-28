package com.mypocket.mypocketapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mypocket.mypocketapi.model.Category;
import com.mypocket.mypocketapi.service.CategoryService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

//https://www.baeldung.com/spring-webflux
@Api(tags= "Categorias")
@RestController
@RequestMapping("/categories")
@CrossOrigin
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
	Mono<Category> save(@ApiParam @RequestBody Category c) throws Exception {
		if (c.getName().equals("error")) {
			throw new Exception("Sua solicitação não pode ser concluida!");
		}
		return this.service.saveOrUpdate(c);
	}

	@ApiOperation(value = "Atualiza uma categoria na base de dados", code = 200)
	@PutMapping("/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	Mono<Category> update(@ApiParam("id") @PathVariable("id") Long id, @ApiParam @RequestBody Category c) {
		return this.service.saveOrUpdate(id, c);
	}
	
	@ApiOperation(value = "Deleta a categoria pelo id")
	@DeleteMapping("/{id}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	Mono<Void> delete(@ApiParam("id") @PathVariable("id") Long id) {
		return this.service.delete(id);
	}
}
