const forest = {
  color: "green",
  biome: "forest"
};

const plains = {
  color: "lime",
  biome: "plains"
};

const lava = {
  color: "red",
  biome: "volcano",
  damage: 1
};

const wallMountain = {
  color: "darkgrey",
  isWall: true,
  wallType: "mountain"
};

const coastline = {
  color: "cyan",
  isWall: true,
  wallType: "coastline"
};

const forestIsland = {
  color: "green",
  isWall: true,
  wallType: "forestIsland"
};

const ocean = {
  color: "blue",
  isWall: true,
  wallType: "ocean"
};

const forestDungeon = {
  color: "darkgreen",
  biome: "forest",
  hasDungeon: true
};

const mountainCave = {
  color: "gray",
  biome: "mountain",
  hasDungeon: true
};

const map = [
  [
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline
  ],
  [
    coastline,
    wallMountain,
    wallMountain,
    plains,
    forest,
    forest,
    forest,
    forest,
    coastline
  ],
  [
    coastline,
    wallMountain,
    lava,
    plains,
    forest,
    forest,
    forestDungeon,
    forest,
    coastline
  ],
  [coastline, lava, lava, plains, plains, forest, forest, forest, coastline],
  [
    coastline,
    lava,
    wallMountain,
    wallMountain,
    wallMountain,
    forest,
    forest,
    forest,
    coastline
  ],
  [
    coastline,
    lava,
    wallMountain,
    mountainCave,
    wallMountain,
    forest,
    forest,
    plains,
    coastline
  ],
  [
    coastline,
    plains,
    plains,
    plains,
    wallMountain,
    plains,
    plains,
    plains,
    coastline
  ],
  [
    coastline,
    plains,
    plains,
    plains,
    plains,
    plains,
    plains,
    plains,
    coastline
  ],
  [
    coastline,
    plains,
    plains,
    plains,
    wallMountain,
    plains,
    forest,
    forest,
    coastline
  ],
  [
    coastline,
    plains,
    wallMountain,
    wallMountain,
    wallMountain,
    forest,
    forest,
    forest,
    coastline
  ],
  [
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline,
    coastline
  ]
];

export default map;
