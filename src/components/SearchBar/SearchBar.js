export default function SearchBar({ setName }) {
  return (
    <div className="search__wrapper">
      <label htmlFor="searchbar">Search for Characters</label>

      <input
        onChange={(event) => setName(event.target.value)}
        className="search__input"
        id="searchbar"
      />
    </div>
  );
}
