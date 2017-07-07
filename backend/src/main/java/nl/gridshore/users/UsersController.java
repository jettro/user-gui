package nl.gridshore.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * Created by jettrocoenradie on 07/07/2017.
 */
@RestController
@RequestMapping("/users")
public class UsersController {
    @GetMapping
    public List<User> users() {
        return Arrays.asList(new User().setUsername("One").setFullName("One Flll"),
                new User().setUsername("Two").setFullName("Two Flll"));
    }
}
