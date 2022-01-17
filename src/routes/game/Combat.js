import axios from "axios";

axios.get("/keybinds");
// get keybinds from mongo, changekeybind

export default function Combat() {
  return (
    <div id="gameContainer">
      <div id="visualsContainer">
        <div id="player">{/* ... */}</div>
        <div id="enemy">{/* ... */}</div>
      </div>
      <div id="controlContainer">
        <div id="partyContainer">{/* ... */}</div>
        <div id="inventoryContainer">
          <div></div>
        </div>
        <div id="statsContainer">
          <div id="hp">10</div>
          <div id="physAtk">10</div>
          <div id="magicAtk">10</div>
          <div id="physDef">10</div>
          <div id="magicDef">10</div>
          <div id="speed">10</div>
        </div>
        <div id="settingsContainer">
          <div id="controls">
            <div id="setMoveUpKeybind">
              <p className="curentKeybind"></p>
              <div id="currentMoveUpKeybind">{/* get keybind */}</div>
            </div>
            <div id="setMoveDownKeybind"></div>
            <div id="setMoveLeftKeybind"></div>
            <div id="setMoveRightKeybind"></div>
            <div id="setInteractKeybind"></div>
            <div id="setMapKeybind"></div>
            <div id="setInventoryKeybind"></div>
            <div id="setPartyKeybind"></div>
            <div id="setStatsKeybind"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
