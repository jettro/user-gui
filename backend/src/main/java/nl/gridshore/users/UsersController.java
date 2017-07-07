package nl.gridshore.users;

import nl.gridshore.ResponseMessage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    private List<User> users = new ArrayList<>(Arrays.asList(new User().setUsername("One").setFullName("One Flll"),
            new User().setUsername("Two").setFullName("Two Flll")));

    @GetMapping
    public List<User> users() {
        return Collections.unmodifiableList(this.users);
    }

    @PostMapping
    public ResponseMessage newUser(@RequestBody User user) {
        users.add(user);
        return new ResponseMessage(String.format("Create new user %s", user.getFullName()));
    }
}
