import axios from "axios";

const API_KEY = "yKi-8J4ha9gjRRLZm1ghSIq5uOUwpuSfCXNXabEag4M";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
axios.defaults.params = {
  client_id: API_KEY,
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async <T>(query: string, page: number): Promise<T> => {
  const { data } = await axios.get<T>(`?query=${query}&page=${page}`);

  return data;
};
