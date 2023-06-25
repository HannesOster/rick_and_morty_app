export default function SearchBar() {
  return (
    <>
      <ul className="search__list">
        <li>
          <label htmlFor="searchbar">Search for Characters</label>
        </li>
        <li>
          <input className="search__input" id="searchbar" />
        </li>
      </ul>
    </>
  );
}
