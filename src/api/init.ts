import { config } from '@config';
import axios from 'axios';

axios.defaults.baseURL = config.VITE_API_DOMAIN;
