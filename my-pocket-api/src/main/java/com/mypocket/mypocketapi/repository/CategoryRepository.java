package com.mypocket.mypocketapi.repository;

import com.mypocket.mypocketapi.model.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource() //path = "categories", collectionResourceRel = "XABARACUNAIA"
public interface CategoryRepository extends CrudRepository<Category, Long> {

}
