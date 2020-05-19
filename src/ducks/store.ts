import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import axios from "axios";
import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios"; // or another driver

const logger = createLogger({});

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios),
});

const reducers = combineReducers({
  requests: requestsReducer,
});

export default createStore(
  reducers,
  applyMiddleware(...requestsMiddleware, logger)
);
