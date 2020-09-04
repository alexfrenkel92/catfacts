export const FETCH_RANDOM_BREEDS = (state: any, randomBreeds: []) => {
    state.randomBreeds = randomBreeds;
}

export const FETCH_CATFACTS = (state: any, catfacts: []) => {
    state.catfacts = catfacts;
}

export const FETCH_BREEDS = (state: any, breeds: []) => {
    state.breeds = breeds;
}