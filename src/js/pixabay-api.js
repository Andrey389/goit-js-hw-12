import axios from 'axios';

export async function getapiImges(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '43244961-2cc0a4f4473f9c50538fea30b',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };
  const url = `${BASE_URL}?${params}`;

  const res = await axios.get(url, { params });
  return res.data;
}
