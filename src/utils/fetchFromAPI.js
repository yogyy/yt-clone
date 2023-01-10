import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY_RAPID_API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// fetch

// const url =
//   "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "eda2accd55msh8e4a071a5451ba1p13c51cjsnf1df4925ceeb",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
// fetch(url, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
