import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
// import loader from "../../../public/games/PirilGame/Build/PirilGame.loader"
// import data from "../../../public/games/PirilGame/Build/PirilGame.data"
// import framework from "../../../public/games/PirilGame/Build/PirilGame.framework"
//import code from "../../games/PirilGame/Build/PirilGame.wasm"

import config from "./gameConfig";

export const Game = () => {
	const unityContext = new UnityContext({
		...config.pirilGame,
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
