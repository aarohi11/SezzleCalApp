package com.calapp.service;

import java.util.List;

import com.calapp.domain.Calculations;

public interface CalcService 
{

	List<Calculations> getLast10Calculations();

	Integer getTotalCalculations();

}
