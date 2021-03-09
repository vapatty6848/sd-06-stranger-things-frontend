import axios from 'axios';

const URL = process.env.REACT_APP_HAWKINS_URL;
const DEFAULT_TIMEOUT = 30000;

class CharactersService {
  constructor({ url = URL, timeout = DEFAULT_TIMEOUT }) {
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
