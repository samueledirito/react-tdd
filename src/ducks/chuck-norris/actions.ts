export const GET_RANDOM_JOKE = "@@chuck-norris/getRandomJoke";

export const getRandomJoke = () => ({
  type: GET_RANDOM_JOKE,
  request: {
    url: "https://api.chucknorris.io/jokes/random",
  },
});
