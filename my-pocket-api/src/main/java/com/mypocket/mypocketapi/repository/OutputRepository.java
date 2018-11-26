package com.mypocket.mypocketapi.repository;

import org.springframework.data.repository.CrudRepository;

import com.mypocket.mypocketapi.model.Output;

public interface OutputRepository extends CrudRepository<Output, Long> {
	
}
