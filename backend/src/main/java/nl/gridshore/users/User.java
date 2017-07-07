package nl.gridshore.users;

/**
 * Created by jettrocoenradie on 07/07/2017.
 */
public class User {
    private String username;
    private String fullName;

    public String getUsername() {
        return username;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getFullName() {
        return fullName;
    }

    public User setFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}
