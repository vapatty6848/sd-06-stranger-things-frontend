import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url = 'https://higoramorim-ft.herokuapp.com/', timeout = DEFAULT_TIMEOUT }) {
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
    console.log(params);
    return this.http.get('/', { params });
  }
}

export default CharactersService;
