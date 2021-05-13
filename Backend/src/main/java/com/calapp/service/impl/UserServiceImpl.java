package com.calapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calapp.domain.User;
import com.calapp.repository.UserRepository;
import com.calapp.service.UserService;

@Service
public class UserServiceImpl implements UserService
{
	@Autowired
	UserRepository userRepo;
	
	@Override
	public List<User> getAllUsers() 
	{
		System.out.println("Inside Service:"+userRepo.findAll());
		return userRepo.findAll();	
	}

}
