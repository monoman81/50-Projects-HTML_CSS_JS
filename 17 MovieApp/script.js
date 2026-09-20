const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5232dafdac64f15af2fdd63f65812af9&page=1';
const API_IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=5232dafdac64f15af2fdd63f65812af9&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getMovieAverageCSSClass = (average) => {
    return average >= 8 ? 'green' : (average >=6 && average < 8 ? 'orange' : 'red');
}

const showMovies = (movies) => {
    main.innerHTML = '';
    const moviesEl = movies.map(movie => {
        return `
            <div class="movie">
                <img src="${API_IMG_URL}${movie.poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="${getMovieAverageCSSClass(movie.vote_average)}">${movie.vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${movie.overview}
                </div>
            </div>
        `
    });
    main.innerHTML = moviesEl.join('');
}

const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(API_SEARCH_URL + searchTerm);
        search.value = '';
    }
    else
        window.location.reload();
})

getMovies(API_URL);