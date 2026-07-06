package com.cognizant.spring_rest.controller;

import com.cognizant.spring_rest.model.Country;
import com.cognizant.spring_rest.service.CountryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    CountryController(CountryService service) {
        this.service = service;
    }

    @GetMapping("/country")
    public Country getCountryIndia() {

        ApplicationContext context =new ClassPathXmlApplicationContext("country.xml");

        return context.getBean("country", Country.class);

    }
    private final CountryService service;

@GetMapping("/countries/{code}")
public Country getCountry(@PathVariable String code) {

    return service.getCountry(code);

}

}