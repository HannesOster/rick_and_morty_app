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
          <Card card={cards[0]} />
          <Card card={cards[1]} />
          <Card card={cards[2]} />
          <Card card={cards[3]} />
          <Card card={cards[4]} />
          <Card card={cards[0]} />
          <Card card={cards[0]} />
          <Card card={cards[0]} />
          <Card card={cards[0]} />
          <Card card={cards[0]} />
        </CardContainer>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
