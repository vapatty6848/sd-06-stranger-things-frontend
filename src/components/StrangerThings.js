import React from 'react';
import CharactersService from '../services/charactersAPI';

const getRealityClass = (hereIsTheUpsideDownWorld) => (
  hereIsTheUpsideDownWorld ? 'upside-down' : 'stranger-things'
);

const strangerThingsConfig = {
  url: process.env.REACT_APP_HAWKINS_URL,
  timeout: parseInt(process.env.REACT_APP_HAWKINS_TIMEOUT, 10),
};

const upsideDownConfig = {
  url: process.env.REACT_APP_UPSIDEDOWN_URL,
  timeout: parseInt(process.env.REACT_APP_UPSIDEDOWN_TIMEOUT, 10),
};

const charactersService = new CharactersService(strangerThingsConfig);
const charactersUpsideDownService = new CharactersService(upsideDownConfig);

const developmentEnvironment = process.env.REACT_APP_ENVIRONMENT === 'development';
const devTag = () => {
  return (
    <div>
      <h2>Em desenvolvimento</h2>
    </div>
  );
};

class StrangerThings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hereIsTheUpsideDownWorld: false,
      characterName: '',
      characters: [],
      page: 1,
    };

    this.handleInput = this.handleInput.bind(this);
    this.changeRealityClick = this.changeRealityClick.bind(this);

    this.searchClick = this.searchClick.bind(this);
    this.searchCharacter = this.searchCharacter.bind(this);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    this.searchCharacter();
  }

  // componentDidUpdate() {
  //   this.searchCharacter();
  // }

  handleInput(event) {
    this.setState({
      characterName: event.target.value,
    });
  }

  changeRealityClick() {
    const { hereIsTheUpsideDownWorld } = this.state;
    this.setState({
      hereIsTheUpsideDownWorld: !hereIsTheUpsideDownWorld,
      characters: [],
    }, () => {
      this.searchCharacter();
    });
  }

  searchClick() {
    this.setState(
      {
        page: 1,
      },
      this.searchCharacter(1),
    );
  }

  searchCharacter(pages) {
    const { characterName, hereIsTheUpsideDownWorld, page } = this.state;
    const service = hereIsTheUpsideDownWorld
      ? charactersUpsideDownService
      : charactersService;

    const numberOfPages = 10;
    service
      .getCharacters(characterName, pages || page, numberOfPages)
      .then(({ data: characters }) => {
        this.setState({
          characters,
        });
      });
  }

  nextPage() {
    const { page, characters } = this.state;

    if (!characters.length) return;
    this.setState(
      {
        page: page + 1,
      },
      () => this.searchCharacter(),
    );
  }

  previousPage() {
    const { page } = this.state;
    if (page <= 1) return;

    this.setState(
      {
        page: page - 1,
      },
      () => this.searchCharacter(),
    );
  }

  render() {
    const {
      hereIsTheUpsideDownWorld, characterName, characters, page,
    } = this.state;
    return (
      <div
        className={ `reality ${getRealityClass(
          hereIsTheUpsideDownWorld,
        )}` }
      >
        <div className="content strangerfy">
          { developmentEnvironment && devTag() }
          <div className="change-reality">
            <button type="button" onClick={ this.changeRealityClick }>
              {' '}
              Mudar de Realidade
            </button>
          </div>

          <div>
            <input
              placeholder="Nome do Personagem"
              onChange={ this.handleInput }
              value={ characterName }
            />
            <button type="button" onClick={ this.searchClick }>Pesquisar</button>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Origem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {console.log(characters)}
                {characters.map((char) => (
                  <tr key={ char.name }>
                    <td>{char.name}</td>
                    <td>{char.origin}</td>
                    <td>{char.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p>
              Página atual:
              {page}
            </p>
          </div>
          <div>
            <button type="button" onClick={ this.previousPage }>Anterior</button>
            <button type="button" onClick={ this.nextPage }>Próximo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StrangerThings;
