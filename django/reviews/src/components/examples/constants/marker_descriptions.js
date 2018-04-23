/*
 * marker visual parameters
 * image param is more prior than imageClass if both defined
 */

const markerDescriptions = [
  {
    size: {width: 62, height: 60},
    origin: {x: 15 / 62, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_text_red.svg')
  },
  {
    size: {width: 62, height: 60},
    origin: {x: 15 / 62, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_text_indigo.svg')
  },
  {
    size: {width: 44, height: 62},
    origin: {x: 0.37, y: 1},
  },
  {
    size: {width: 44, height: 62},
    origin: {x: 0.37, y: 1},
  },
  {
    size: {width: 61, height: 65},
    origin: {x: 24 / 61, y: 63 / 65},
    hintType: 'hint--error'
  },
  {
    size: {width: 49, height: 64},
    origin: {x: 0.5, y: 1},
  },
  {
    size: {width: 49, height: 64},
    origin: {x: 0.5, y: 1},
  }
];

export default markerDescriptions;
