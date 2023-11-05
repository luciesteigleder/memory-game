const selectRandomNumbers = () => {
  let numbers = new Set(); //prevent duplicates

  while (numbers.size < 8) {
    let randomNum = Math.floor(Math.random() * 30); // Generates a random number between 0 and 29
    numbers.add(randomNum);
  }
  const orderMovies = Array.from(numbers);

  return orderMovies;
};

const getMovieData = (array, data) => {
  const moviesArray = [];

  for (let i = 0; i < array.length; i++) {
    moviesArray.push(data[array[i]]);
  }
  // console.log(moviesArray);
  return moviesArray;
};

const createDuos = (array) => {
  let cardDuos = [];
  array.forEach((movie) => {
    const moviePicture = {};
    moviePicture.type = "picture";
    moviePicture.URL = movie.movieURL;
    moviePicture.movieKey = movie.movieKey;

    const movieObject = {};
    movieObject.type = "object";
    movieObject.URL = movie.objectSVG;
    movieObject.comment = movie.objectSVGComment;
    movieObject.movieKey = movie.movieKey;
    cardDuos.push(moviePicture, movieObject);
  });

  return cardDuos;
};

const randomizeCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getFinalOrder = (data) => {
  const orderMovies = selectRandomNumbers();
  const moviesArray = getMovieData(orderMovies, data);
  const cardDuos = createDuos(moviesArray);
  const cardsOrder = randomizeCards(cardDuos);
  console.log(cardsOrder);
  return cardsOrder;
};

export default getFinalOrder;
