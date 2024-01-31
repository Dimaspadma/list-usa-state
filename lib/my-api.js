import { numberWithCommas } from "./NumberFormat";

export async function fetchStates() {
  const res = await fetch(
    "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
  );
  const data = await res.json();

  const newData = await Promise.all(data.data.map(async (item) => {
    const newItem = { ...item };
    newItem.Population = numberWithCommas(newItem.Population);
    newItem.image = await fetchThumbnail(newItem.State);
    return newItem;
  }));

  // console.log(newData);

  return newData;
}

export async function fetchThumbnail(title) {
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cpageimages%7Crevisions&titles=${title}%20|%20${title}_(country)%20|%20${title}_(state)&redirects=1&formatversion=2&exsentences=2&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=50&rvprop=timestamp`
  );
  const data = await res.json();

  const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/50px-Flag_of_Alabama.svg.png';

  // Get the first page object that has a thumbnail
  const pageKeys = Object.keys(data.query.pages);
  let page;
  for (let i = 0; i < pageKeys.length; i++) {
    if (data.query.pages[pageKeys[i]].thumbnail) {
      page = data.query.pages[pageKeys[i]];
      break;
    }
  }

  const imageUrl = page && page.thumbnail ? page.thumbnail.source : defaultImage;

  return imageUrl;
}