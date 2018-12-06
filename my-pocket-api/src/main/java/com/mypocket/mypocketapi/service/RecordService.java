package com.mypocket.mypocketapi.service;

import com.mypocket.mypocketapi.model.Category;
import com.mypocket.mypocketapi.model.Record;
import com.mypocket.mypocketapi.repository.CategoryRepository;
import com.mypocket.mypocketapi.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class RecordService {

    @Autowired
    private RecordRepository recordRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Flux<Record> findAll() {
        return Flux.fromIterable(this.recordRepository.findAll());
    }

    public Mono<Record> findById(Long id) {
        return Mono.justOrEmpty(this.recordRepository.findById(id));
    }

    public Flux<Record> findByCategory(Long categoryId) {
        Optional<Category> category = this.categoryRepository.findById(categoryId);
        if (category.isPresent()) {
            return Flux.fromIterable(category.get().getRecords());
        }
        return Flux.empty();
    }

    public Mono<Record> save(Record r) {
        r.setDate(LocalDateTime.now());
        return Mono.just(this.recordRepository.save(r));
    }

    public Mono<Record> update(Long id, Record r) {
        Record entity = this.recordRepository.findById(id).orElseGet(null);
        entity.setCategory(r.getCategory());
        entity.setDescription(r.getDescription());
        entity.setType(r.getType());
        entity.setValue(r.getValue());
        return Mono.just(this.recordRepository.save(entity));
    }

    public void delete(Long id) {
        this.recordRepository.deleteById(id);
    }
}
