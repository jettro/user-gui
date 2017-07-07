package nl.gridshore;

/**
 * Created by jettrocoenradie on 07/07/2017.
 */
public class ResponseMessage {
    private String message;

    public ResponseMessage() {
    }

    public ResponseMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public ResponseMessage setMessage(String message) {
        this.message = message;
        return this;
    }
}
