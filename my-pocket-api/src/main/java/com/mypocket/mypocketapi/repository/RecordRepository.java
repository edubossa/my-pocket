package com.mypocket.mypocketapi.repository;

import com.mypocket.mypocketapi.model.Record;
import org.springframework.data.repository.CrudRepository;

public interface RecordRepository extends CrudRepository<Record, Long> {
	
}
