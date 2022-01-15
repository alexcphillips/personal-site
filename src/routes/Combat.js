import axios from "axios";

axios.get("/keybinds");
// get keys from mongo, changekeybind

export default function Combat() {
  const keybindMenu = [];
  const keybinds = [
    {
      keyAction: "up",
      currentKeybind: ""
    }
  ];

  const result = keybinds.forEach((keybind) => {
    const { keyText, currentKeybind } = keybind;
    keybinds.push(
      <div
        className="setKeybind"
        onClick={() => {
          changeKeybind(keyAction);
        }}
      >
        <p className="keyAction">{keyText}</p>
        <p className="keybind">{keyText}</p>
      </div>
    );
  });

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
