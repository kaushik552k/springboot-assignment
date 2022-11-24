package Details;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {
	
	@Autowired
	private Serviceuser servicestask;
	
	@RequestMapping(method = RequestMethod.POST,value="/add")
	@CrossOrigin(origins = "http://localhost:3000")
	public void storing(@RequestBody Modeluser user) {
		servicestask.Store_data(user);
	}
	@RequestMapping(value="/fetchdata")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Modeluser> fetchdata() {
		return servicestask.Fetch();
	}
}


