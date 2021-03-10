import axios from 'axios';

require('dotenv').config();

const { REACT_APP_HAWKINS_URL } = process.env;

const DEFAULT_TIMEOUT = 30000;

class CharactersService {
  constructor({ url = REACT_APP_HAWKINS_URL, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
