package com.calapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.calapp.domain.User;
import com.calapp.repository.UserRepository;
import com.calapp.service.UserService;


@CrossOrigin(origins = {"http://54.81.15.205:4200","http://localhost:4200"},allowedHeaders="*")
@RestController
@RequestMapping("/users")
public class UserController 
{
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	UserService userSer;
	
	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	@ResponseBody // to send list of objects in JSON form
	public List<User> getAllUsers() 
	{
		System.out.println("Inside getAllUsers");
		return userSer.getAllUsers();
	}
}
