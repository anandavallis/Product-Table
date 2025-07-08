import axios from 'axios';

const API_URL = 'http://localhost:3001/products';

export const fetchProducts = () => axios.get(API_URL);
