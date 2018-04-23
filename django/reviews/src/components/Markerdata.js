export const generateMarkers = ({ data }) =>
  data.map(el => ({
    // fill(0) for loose mode
    id: el.id,
    text: el.title,
    lat: el.lat,
    lng: el.lng,
}));
