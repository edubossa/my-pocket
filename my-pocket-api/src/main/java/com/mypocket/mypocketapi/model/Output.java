package com.mypocket.mypocketapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Output {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "ID_CATEGORY", referencedColumnName = "ID")
	private Category category;
	
	@Column(name = "DESCRIPTION", length = 120)
	private String description;
	
	//@Column(name = "DATE")
	//private LocalDate date;
	
	//@Column(name = "value")
	//private BigDecimal value;

}
