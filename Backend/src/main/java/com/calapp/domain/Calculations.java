package com.calapp.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "calculations")
public class Calculations 
{
	public Calculations() {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cal_id")
	private Long calId;
	
	@Column(name = "calstr")
	private String calString;

	public Long getCalId() {
		return calId;
	}

	public void setCalId(Long calId) {
		this.calId = calId;
	}

	public String getCalString() {
		return calString;
	}

	public void setCalString(String calString) {
		this.calString = calString;
	}
}
