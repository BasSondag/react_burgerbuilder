import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://basburgerbuilder.firebaseio.com/'
});


export default instance
