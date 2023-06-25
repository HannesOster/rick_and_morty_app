import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/Card";
import renderFetchedCards from "./components/renderCards/renderCards";
import CardContainer from "./components/CardContainer/CardContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchData from "./components/Fetch/Fetch";

const data = await fetchData();
const cards = data.results;
console.log(cards[0].name);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
        <CardContainer>
          <GetCardElements cards={cards} />
        </CardContainer>
      </main>
      <Navigation />
    </div>
  );
}
function GetCardElements({ cards }) {
  cards.forEach((card) => {
    return (
      <li className="card">
        <div className="card__image-container">
          <img className="card__image" src={card.image} alt={card.name} />
          <div className="card__image-gradient"></div>
        </div>
        <div className="card__content">
          <h2 className="card__title">{card.name}</h2>
          <dl className="card__info">
            <dt className="card__info-title">Status</dt>
            <dd className="card__info-description">{card.status}</dd>
            <dt className="card__info-title">Species</dt>
            <dd className="card__info-description">{card.species}</dd>
            <dt className="card__info-title">Type</dt>
            <dd className="card__info-description">{card.type}</dd>
            <dt className="card__info-title"></dt>
            <dd className="card__info-description">{card.type}</dd>
            <dt className="card__info-title">Occurrences</dt>
            <dd className="card__info-description">{card.episode.length}</dd>
          </dl>
        </div>
      </li>
    );
  });
}

export default App;
