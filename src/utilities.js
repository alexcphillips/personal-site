export function isActive({ isActive }) {
  return isActive ? "active" : "";
}

const random = (max) => {
  return Math.floor(Math.random() * max);
};

const getAxiosError = (err) => {
  // console.log(err.config);
  if (err.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(`${err.response.status}: ${err.response.data}`);
    return err.response.data;
  } else if (err.request) {
    // The request was made but no response was received
    // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(err.request);
    return err.request;
  } else {
    // Something happened in setting up the request that triggered an err
    console.log("err", err.message);
    return err.message;
  }
};

const deepCopy = (original) => {
  return JSON.parse(JSON.stringify(original));
};

function setStateKeyVal(state, key, val, updateState) {
  const newState = deepCopy(state);
  newState[key] = val;
  if (updateState) {
    return updateState(newState);
  }
  return newState;
}

function handleError(err, state, updateState) {
  const error = getAxiosError(err);
  console.log(error);
  setStateKeyVal(state, "error", error, updateState);
}

function removeError(state, updateState) {
  if (state.error) {
    setStateKeyVal(state, "error", null, updateState);
  }
}

const { useState, useEffect } = require("react");
function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}

export {
  random,
  deepCopy,
  getAxiosError,
  handleError,
  removeError,
  setStateKeyVal,
  useDeviceDetect
};
