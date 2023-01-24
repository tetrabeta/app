'use strict'
const numberOfFilms = +prompt ('Cкільки фільмів Ви вже бачили?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt ('Яке останнє переглянуте кіно?', ''),
        b = prompt ('Яку оцінку дасте?', ''),
        с = prompt ('Яке останнє переглянуте кіно?', ''),
        в = prompt ('Яку оцінку дасте?', '');

personalMovieDB.movies[a] = b,
personalMovieDB.movies[c] = d;
