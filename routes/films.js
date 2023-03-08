const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));


const toShow = [];
const filmsRouter = express.Router();

filmsRouter
    .get('/films', async (req, res) => {

        const url = `https://swapi.dev/api/films/`;

        try {
            const data = await fetch(url);
            const read = await data.json();
            const foundData = read.results;
            const count = Number(read.count);


            for (let i = 0; i < count; i++) {

                const {
                    title: title1,
                    episode_id: id,
                    release_date: date,
                    characters: char,

                } = foundData[i];
                const arr = []
                arr[0] = ` ${foundData[i].title}`
                arr[1] = `${foundData[i].release_date}`
                arr[2] = `${foundData[i].episode_id} `
                toShow.push(arr)

                // console.log(`Title: ${foundData[i].title}`);
                // console.log(foundData[i].episode_id);
                // console.log(foundData[i].release_date);

                // `Title: ${foundData[i].title} Release Date:${foundData[i].release_date}  ID:${foundData[i].episode_id} `)


            }

        } catch (err) {
            console.log(err);
        }

        res.render('layouts/main')

    });


module.exports = {
    filmsRouter,
}