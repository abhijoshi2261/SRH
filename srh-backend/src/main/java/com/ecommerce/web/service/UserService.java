
package com.ecommerce.web.service;

import com.ecommerce.web.entity.Users;

import java.util.List;

public interface UserService {
    public Users saveUser(Users users);

    public List<Users> fetchUserList();

    public Users fatchUserById(Long user_id);

    public void deleteUserById(Long user_id);

    public Users updateUser(Long user_id, Users users);
}
