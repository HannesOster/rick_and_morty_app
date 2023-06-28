import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/Card";
import CardContainer from "./components/CardContainer/CardContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchData from "./components/Fetch/Fetch";
import { useEffect, useState } from "react";

function App() {
  // jedes mal wenn sich der state ändert wird die gesamte Componete neu gerendert
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);

  // Wird ausgeführt beim initialen rendern der Componente und wenn sich
  // der wert im dependency Array ändert
  useEffect(() => {
    async function getCards() {
      const data = await fetchData(name);
      // ?? bedeutet, der wert dahinter wird gesetzt falls data.results undefined oder null ist
      setCards(data.results ?? []);
    }
    getCards();
    // hier ist das depenendy array
  }, [name]);

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar setName={setName} />
        <CardContainer>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </CardContainer>
      </main>
      <Navigation />
    </div>
  );
}
function GetCardElements({ characters }) {
  characters.forEach((card) => {
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
