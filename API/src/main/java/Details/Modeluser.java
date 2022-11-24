package Details;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Modeluser {
	@Id
	private String id;
	private String username;
	private String email;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

}
