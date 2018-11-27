package com.mypocket.mypocketapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@ToString
public class Record {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "ID_CATEGORY", referencedColumnName = "ID")
	private Category category;

	@Enumerated(EnumType.STRING)
	private DataType type;
	
	@Column(name = "DESCRIPTION", length = 120)
	private String description;
	
	@Column(name = "DATE")
	private LocalDateTime date;
	
	@Column(name = "value")
	private BigDecimal value;

}
