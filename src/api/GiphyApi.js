import axios from "axios";

const ApiKey = "Q3Uv1P06bTTnt8Xf9erzb3PtnG1sxsm3";
export const getTrendy = (limit = 24, offset = 0) => {
  try {
    return axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&limit=${limit}&offset=${offset}&rating=g`
      );
  } catch (error) {
    console.log(error);
  }
};
