import fetchData from "../Fetch/Fetch";
import Card from "../Card/Card";

export default function renderFetchedCards({ characters }) {
  return characters.forEach((char) => Card(char));
}
