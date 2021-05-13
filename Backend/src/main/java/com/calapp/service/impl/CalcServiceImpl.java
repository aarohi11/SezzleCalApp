package com.calapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.calapp.domain.Calculations;
import com.calapp.repository.CalcRepository;
import com.calapp.service.CalcService;

@Service
public class CalcServiceImpl implements CalcService
{
	@Autowired
	CalcRepository calRepo;
	
	@Override
	public List<Calculations> getLast10Calculations() 
	{
		//System.out.println("\n Last 10 calculations:"+calRepo.findByOrderByCalStringDesc());
		//return calRepo.findByOrderByCalStringDesc();
		//calRepo.findAll(PageRequest.of(0, 2, Sort.by("calId").descending())));
		System.out.println("Inside Service:"+calRepo.findAll(PageRequest.of(0, 10, Sort.by("calId").descending())).toList());
		return calRepo.findAll(PageRequest.of(0, 10, Sort.by("calId").descending())).toList();
	}

	@Override
	public Integer getTotalCalculations() 
	{
		System.out.println("\n Total calculations:"+calRepo.getTotalCalc());
		return calRepo.getTotalCalc();
	}

}
