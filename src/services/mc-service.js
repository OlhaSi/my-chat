
async function getRandomJoke() {
    return await fetch(`https://api.chucknorris.io/jokes/random`);
}

export {getRandomJoke};
