import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://crypto-news-live3.p.rapidapi.com/news',
//   headers: {
//     'X-RapidAPI-Key': 'cacb08de10msh82a0ee3e5e594e5p1be110jsn82d0fceb513a',
//     'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// const AxiosInstance = axios.create()

axios.defaults.headers.common = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY || '',
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST || ''
};
// set
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default axios