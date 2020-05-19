import { GET_RANDOM_JOKE } from "./actions";

const mocks = {
  [GET_RANDOM_JOKE]: () => ({
    data: {
      categories: [],
      created_at: "2020-01-05 13:42:19.104863",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "_oMaqyzrRSGnFykoSEmoDg",
      updated_at: "2020-01-05 13:42:19.104863",
      url: "https://api.chucknorris.io/jokes/_oMaqyzrRSGnFykoSEmoDg",
      value: "Chuck Norris can chew AIR!!!!",
    },
    // pending: false,
    // error: false,
    // normalized: false,
    // usedKeys: [],
    // multiple: false,
    // defaultData: {},
    ref: {},
  }),
};

export default mocks;
