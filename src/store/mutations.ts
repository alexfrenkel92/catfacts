export const FETCH_MOVIES = (state: any, movies: any) => {
    state.movies = movies;
}

export const FETCH_CATFACTS = (state: any, catfacts: any) => {
    state.catfacts = catfacts;
}

export const FETCH_BREEDS = (state: any, breeds: any) => {
    state.breeds = breeds;
}

// export const FETCH_DETAILS = (state, movie) => {
//     state.movie = movie
// }

// export const EMPTY_DETAILS = (state, movie) => {
//     state.movie = null;
// }