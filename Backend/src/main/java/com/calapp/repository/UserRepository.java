package com.calapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.calapp.domain.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User,Long>
{

}
