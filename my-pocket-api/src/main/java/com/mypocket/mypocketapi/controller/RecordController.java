package com.mypocket.mypocketapi.controller;

import com.mypocket.mypocketapi.model.Record;
import com.mypocket.mypocketapi.service.RecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Api(tags = "Registros")
@RestController
@RequestMapping("/records")
@CrossOrigin
public class RecordController {

    @Autowired
    private RecordService service;

    @ApiOperation("Lista todos os registros")
    @GetMapping
    Flux<Record> findAll() {
        return this.service.findAll();
    }

    @ApiOperation("Busca o registro pelo id")
    @GetMapping("/{id}")
    Mono<Record> findById(@ApiParam("id") @PathVariable("id") Long id) {
        return this.service.findById(id);
    }

    @ApiOperation("Busca todos os registros por categoria")
    @GetMapping("/{id}/category")
    Flux<Record> findByCategory(@ApiParam("id") @PathVariable("id") Long id) {
        return this.service.findByCategory(id);
    }

    @ApiOperation("Insere um registro pra uma determinada categoria")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    Mono<Record> save(@ApiParam @RequestBody Record r) {
        return this.service.save(r);
    }

    @ApiOperation("Atualiza um registro")
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    Mono<Record> update(@ApiParam("id") @PathVariable("id")  Long id,
                        @ApiParam @RequestBody Record r) {
        return this.service.update(id, r);
    }

    @ApiOperation("Deleta o registro pelo id")
    @DeleteMapping("/{id}")
    void delete(@ApiParam("id") @PathVariable("id") Long id) {
        this.service.delete(id);
    }

}
