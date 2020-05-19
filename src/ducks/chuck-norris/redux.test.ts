import { getRandomJoke, GET_RANDOM_JOKE } from "./actions";
import { iconUrl } from "./selectors";
import mocks from "./mocks";

describe("Store", () => {
  describe("Actions", () => {
    test("Random joke", () => {
      const actual = getRandomJoke();
      expect(actual.request.url).toEqual(
        "https://api.chucknorris.io/jokes/random"
      );
      expect(actual.type).toEqual("@@chuck-norris/getRandomJoke");
    });
  });

  describe("Selectors", () => {
    const state = {
      requests: {
        queries: {
          [GET_RANDOM_JOKE]: mocks[GET_RANDOM_JOKE](),
        },
      },
    };

    expect(iconUrl(state)).toEqual(
      "https://assets.chucknorris.host/img/avatar/chuck-norris.png"
    );
  });
});
