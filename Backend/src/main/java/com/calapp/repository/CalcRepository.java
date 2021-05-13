package com.calapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.calapp.domain.Calculations;

@Transactional
@Repository
public interface CalcRepository extends JpaRepository<Calculations,Long>
{
	
	@Query("From Calculations c")
	List <Calculations> findByOrderByCalStringDesc();
	
	@Query("Select count(*) from Calculations c")
	Integer getTotalCalc();
}
