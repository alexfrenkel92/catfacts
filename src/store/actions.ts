import axios from 'axios';

const apiKey = '1605229a-1f15-4def-812b-624fb50e93df';

export const fetchMovies = ({ commit } : { commit: any }) => {
    axios.get('https://ghibliapi.herokuapp.com/films')
        .then(response => {
            commit('FETCH_MOVIES', response.data)
        })
}

export const fetchCatfacts = ({ commit } : { commit: any }) => {
    axios.get('https://cat-fact.herokuapp.com/facts')
        .then(response => {
            commit('FETCH_CATFACTS', response.data)
        })
}

// export const fetchBreeds = ({ commit } : { commit: any }) => {
//     Vue.http.get(`https://api.thecatapi.com/v1/breeds`, {
//             headers: {
//                 "x-api-key": apiKey
//             }
//         })
//         .then(response => {
//             commit('FETCH_BREEDS', response.data)
//         })
// }