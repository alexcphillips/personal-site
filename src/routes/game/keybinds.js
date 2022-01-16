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
