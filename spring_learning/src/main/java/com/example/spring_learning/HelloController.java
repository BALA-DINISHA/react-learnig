package com.example.spring_learning;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/hello")
public class HelloController {

    @GetMapping
    public String HelloContoller()
    {
        return "Hello from Spring Boot";
    }

    @GetMapping("/person")
    public Person getPerson()
    {
        return new Person("Dinisha","Developer");
    }
    @PostMapping
    public String create(@RequestBody Person person)
    {
        return "Created "+person.getName()+ " as "+person.getRole();
    }
    @GetMapping("/{id}")
    public String getById(@PathVariable Long id) {
        return "You asked for ID: " + id;
    }

    @GetMapping("/search")
    public String search(@RequestParam String name)
    {
        return "Searching for:"+name;
    }


}
