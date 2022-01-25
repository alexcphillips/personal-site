const forest = {
  biome: "forest"
};

const plains = {
  biome: "plains"
};

const lava = {
  biome: "volcano",
  damage: 1
};

const wallMountain = {
  isWall: true,
  wallType: "mountain"
};

const coastline = {
  isWall: true,
  wallType: "coastline"
};

const forestIsland = {
  isWall: true,
  wallType: "forestIsland"
};

const ocean = {
  isWall: true,
  wallType: "ocean"
};

const forestDungeon = {
  biome: "forest",
  hasDungeon: true
};

const mountainCave = {
  biome: "mountain",
  hasDungeon: true
};

// exports.map = [
//   [
//     wallMountain,
//     wallMountain,
//     forestDungeon,
//     coastline,
//     forestIsland,
//     coastline
//   ],
//   [wallMountain, lava, plains, forest, plains, coastline],
//   [lava, lava, plains, forest, forest, coastline],
//   [lava, plains, wallMountain, wallMountain, coastline, ocean],
//   [plains, plains, mountainCave, wallMountain, coastline, ocean],
//   [plains, wallMountain, wallMountain, wallMountain, ocean, ocean]
// ];

exports.map = [
  [plains, plains, plains],
  [plains, plains, plains],
  [plains, plains, plains]
];
