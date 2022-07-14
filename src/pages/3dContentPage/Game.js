import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
// import loader from "../../../public/games/PirilGame/Build/PirilGame.loader"
// import data from "../../../public/games/PirilGame/Build/PirilGame.data"
// import framework from "../../../public/games/PirilGame/Build/PirilGame.framework"
//import code from "../../games/PirilGame/Build/PirilGame.wasm"

export const Game = ({ gameConfig }) => {
  const unityContext = new UnityContext({
    ...gameConfig,
  });

  return (
    <Unity
      style={{
        width: "75%",
        justifySelf: "center",
        alignSelf: "center",
      }}
      unityContext={unityContext}
    />
  );
};
