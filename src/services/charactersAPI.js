import axios from 'axios';

const {REACT_APP_HAWKINS_URL} = process.env;

const DEFAULT_TIMEOUT = 30000;
const DEFAULT_URL = REACT_APP_HAWKINS_URL;

class CharactersService {
  constructor({ url = DEFAULT_URL, timeout = DEFAULT_TIMEOUT }) {
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
