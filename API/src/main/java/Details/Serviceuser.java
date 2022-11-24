package Details;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class Serviceuser {
	@Autowired
	private Repositoryuser rep;
	public void Store_data(Modeluser mu) {
		rep.save(mu);
		
	}
	public List<Modeluser> Fetch() {
		List<Modeluser> data = new ArrayList<>();
		rep.findAll().forEach(data::add);
		return data;
	}

}
