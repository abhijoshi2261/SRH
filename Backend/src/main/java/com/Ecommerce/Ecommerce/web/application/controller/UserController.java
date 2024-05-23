package com.Ecommerce.Ecommerce.web.application.controller;
import com.Ecommerce.Ecommerce.web.application.entity.Users;
import com.Ecommerce.Ecommerce.web.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public Users saveUser(@RequestBody Users users){
        return userService.saveUser(users);
    }


    @GetMapping("/users")
    public List<Users> fetchUserList() {
        return userService.fetchUserList();
    }

    @GetMapping("/users/{id}")
    public Users fatchUserById(@PathVariable("id")Long user_id){
    return userService.fatchUserById(user_id);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable("id")Long user_id){
        userService.deleteUserById(user_id);
        return "The Data will removed!!!";
    }

    @PutMapping("/users/{id}")
    public Users updateUser(@PathVariable("id") Long user_id,
                            @RequestBody Users users){
        return userService.updateUser(user_id, users);
    }
}
