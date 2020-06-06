import axios from 'axios';
const API_URL = 'https://restcountries.eu/rest/v2/all';

class Api {
	async loadMoviesData() {
		try {
			const apiResponse = await axios({
				url: API_URL,
				type: "GET",
			});
			let movieList = apiResponse.data.map((country) => {
				return {
					name: country.name,
					capital: country.capital,
					population: country.population,
					flag: country.flag,
				};
			});
			return movieList;
		} catch (error) {
			console.log(error);
			return [];
		}
	}
}

export default new Api();
