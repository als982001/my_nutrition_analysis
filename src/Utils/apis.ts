import axios from "axios";
import { ISearchResult } from "./types";

export const getNutrition = async (sentences: string[]) => {
  const encodedIngr = sentences.map(encodeURIComponent);
  const ingrQueryString = encodedIngr.join(",");

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_ACCESS_POINT}?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&nutrition-type=cooking&ingr=${ingrQueryString}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.data as ISearchResult;
  } catch (error) {
    console.error(error);
    return null;
  }
};
