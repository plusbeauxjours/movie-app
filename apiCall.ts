const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "01da2a336a604956c260900d1835847f";

const apiCall = (path, query) =>
  `${API_URL}/${path}?api_key=${API_KEY}&${query}`;

export default apiCall;
