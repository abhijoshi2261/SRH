package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.Users;
import com.Ecommerce.Ecommerce.web.application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpL implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Users saveUser(Users users) {
        return userRepository.save(users);
    }

    @Override
    public List<Users> fetchUserList() {
        return userRepository.findAll();
    }

    @Override
    public Users fatchUserById(Long user_id) {
        return userRepository.findById(user_id).get();
    }

    @Override
    public void deleteUserById(Long user_id) {
        userRepository.deleteById(user_id);
    }

    @Override
    public Users updateUser(Long user_id, Users users) {
        Users usersDB = userRepository.findById(user_id).get();

        if(Objects.nonNull(users.getUser_id()) &&
        !"".equalsIgnoreCase(String.valueOf(users.getUser_id()))){
            usersDB.setUser_id(users.getUser_id());
        }
        if(Objects.nonNull(users.getFirstName()) &&
                !"".equalsIgnoreCase(users.getFirstName())){
            usersDB.setFirstName(users.getFirstName());
        }

        if(Objects.nonNull(users.getLastName()) &&
                !"".equalsIgnoreCase(users.getLastName())){
            usersDB.setLastName(users.getLastName());
        }




        if(Objects.nonNull(users.getEmail()) &&
                !"".equalsIgnoreCase(users.getEmail())){
            usersDB.setEmail(users.getEmail());
        }
        if(Objects.nonNull(users.getGender()) &&
                !"".equalsIgnoreCase(users.getGender())){
            usersDB.setGender(users.getGender());

        }if(Objects.nonNull(users.getDOB()) &&
                !"".equalsIgnoreCase(String.valueOf(users.getDOB()))){
            usersDB.setDOB(users.getDOB());
        }
        if(Objects.nonNull(users.getPhone()) &&
                !"".equalsIgnoreCase(users.getPhone())){
            usersDB.setPhone(users.getPhone());
        }
        if(Objects.nonNull(users.getROle()) &&
                !"".equalsIgnoreCase(users.getROle())){
            usersDB.setROle(users.getROle());
        }


        return userRepository.save(usersDB);

    }
}
