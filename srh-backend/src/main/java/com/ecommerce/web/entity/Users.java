package com.ecommerce.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Users {

    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long user_id;
    private String FirstName;
    private String LastName;
    private String Email;
    private String UserName;
    private String Password;
    private Date DOB;
    private String Gender;

    public String getROle() {
        return ROle;
    }

    public void setROle(String ROle) {
        this.ROle = ROle;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public Date getDOB() {
        return DOB;
    }

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long User_id) {
        user_id = User_id;
    }

    private String Phone;
    private String ROle;

    public Users(Long User_id, String firstName, String lastName, String email, String userName, String password,
            Date DOB, String gender, String phone, String ROle) {
        user_id = User_id;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        UserName = userName;
        Password = password;
        this.DOB = DOB;
        Gender = gender;
        Phone = phone;
        this.ROle = ROle;
    }

    public Users() {
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id='" + user_id + '\'' +
                ", FirstName='" + FirstName + '\'' +
                ", LastName='" + LastName + '\'' +
                ", Email='" + Email + '\'' +
                ", UserName='" + UserName + '\'' +
                ", Password='" + Password + '\'' +
                ", DOB='" + DOB + '\'' +
                ", Gender='" + Gender + '\'' +
                ", Phone='" + Phone + '\'' +
                ", ROle='" + ROle + '\'' +
                '}';
    }

}
