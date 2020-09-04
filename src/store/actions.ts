require("dotenv").config();
import axios from "axios";

const apiKey = process.env.API_KEY;

export const fetchRandomBreeds = ({ commit }: { commit: any }) => {
    axios
        .get(`https://api.thecatapi.com/v1/breeds`, {
            headers: {
                "x-api-key": apiKey,
            },
        })
        .then((response) => {
            const result = [];
            const randomNrArray: number[] = [];
            while (randomNrArray.length < 10) {
                const randomNr: number = Math.floor(Math.random() * (response.data.length - 1)) + 1;
                if (!randomNrArray.includes(randomNr)) {
                    randomNrArray.push(randomNr);
                    result.push(response.data[randomNr]);
                }
            }
            return result;
        })
        .then((response) => {
            commit("FETCH_RANDOM_BREEDS", response);
        });
};

export const fetchBreeds = ({ commit }: { commit: any }) => {
	axios
		.get(`https://api.thecatapi.com/v1/breeds`, {
			headers: {
				"x-api-key": apiKey,
			},
		})
		.then((response) => {
			commit("FETCH_BREEDS", response.data);
		});
};

export const fetchCatfacts = ({ commit }: { commit: any }) => {
	axios.get("https://cat-fact.herokuapp.com/facts").then((response) => {
		commit("FETCH_CATFACTS", response.data);
	});
};
