// @ts-ignore
import Amadeus from "amadeus";
import { API_KEY, API_SECRET } from "../constants";

export const amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET,
});
