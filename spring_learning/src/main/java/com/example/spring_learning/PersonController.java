package com.example.spring_learning;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.*;


@RestController
@RequestMapping("api/people")
public class PersonController {

    private final PersonService service;

    private List<Person> people = new ArrayList<>();
    private Long nextId=1L;

    public PersonController(PersonService service)
    {
        this.service=service;
    }

    @GetMapping
    public List<Person> getAll()
    {

        return service.getAll();
    }

    @GetMapping("{id}")
    public Person getById(@PathVariable Long id )
    {

        return service.getById(id);

    }

    @PostMapping
    public Person create(@Valid @RequestBody Person person)
    {
        return  service.create(person);
    }
    @DeleteMapping("{id}")
    public  String delete(@PathVariable Long id)
    {
       service.delete(id);
        return "Deleted person with id: "+id;
    }

}

