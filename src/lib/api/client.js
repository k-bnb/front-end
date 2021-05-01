import axios from 'axios';

const client = axios.create({
  baseURL: 'https://kbnb.buil-dup.link',
});

export default client;
