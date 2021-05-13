package com.calapp.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.calapp.domain.Calculations;
import com.calapp.repository.CalcRepository;
import com.calapp.service.CalcService;

import net.bytebuddy.asm.Advice.OffsetMapping.Sort;




@CrossOrigin(origins = {"http://54.81.15.205:4200","http://localhost:4200"},allowedHeaders="*")
@RestController
@RequestMapping("/calculate")
public class CalcController 
{
	@Autowired
	CalcRepository calcRepo;
	
	@Autowired
	CalcService calcSer;
	
	@CrossOrigin(origins = {"http://localhost:4200"},allowedHeaders="*")
	@RequestMapping(value="/postresult",method=RequestMethod.POST)
	//@ResponseBody
	public @ResponseBody String create(@RequestBody Calculations cal) 
	{
		System.out.println("Inside Calc Controller:"+cal.getCalId());
		try 
		{
			calcRepo.save(cal);
		}
		catch (Exception ex) 
		{
		    return "Error creating the company: " + ex.toString();
		}
		return "Company succesfully created! (id = "+cal.getCalId()+ ")";
	}
	
	@RequestMapping(value = "/getLast10Calculations", method = RequestMethod.GET)
	@ResponseBody // to send list of objects in JSON form
	public List<Calculations> getLast10Calculations() 
	{
		System.out.println("Inside getLast10Calculations");
		return calcSer.getLast10Calculations();
	}
	
	/*@RequestMapping(value = "/getTotalCalculations", method = RequestMethod.GET)
	@ResponseBody // to send list of objects in JSON form
	public Integer getTotalCalculations() 
	{
		System.out.println("Inside getTotalCalculations");
		return calcSer.getTotalCalculations();
	}*/
}
