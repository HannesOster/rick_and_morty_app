export default async function fetchData(name) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${name}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}
