import { createSelector } from "reselect";
import { getQuerySelector } from "@redux-requests/core";
import { GET_RANDOM_JOKE } from "./actions";

const slice = getQuerySelector<{ icon_url: string }>({ type: GET_RANDOM_JOKE });

export const iconUrl = createSelector(slice, ({ data }) => {
  return data.icon_url;
});
