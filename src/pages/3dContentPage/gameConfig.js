const pirilGame = {
	loaderUrl: "/games/PirilGame/Build/PirilGame.loader.js",
	dataUrl: "/games/PirilGame/Build/PirilGame.data",
	frameworkUrl: "/games/PirilGame/Build/PirilGame.framework.js",
	codeUrl: "/games/PirilGame/Build/PirilGame.wasm",
	id: "1",
	title: "Animals",
	imagePath: "/games/PirilGame/animals.jpeg",
};

const finalCodingGame = {
	loaderUrl: "/games/efso_coding_game/Build/efso_coding_game.loader.js",
	dataUrl: "/games/efso_coding_game/Build/efso_coding_game.data",
	frameworkUrl: "/games/efso_coding_game/Build/efso_coding_game.framework.js",
	codeUrl: "/games/efso_coding_game/Build/efso_coding_game.wasm",
	id: "2",
	title: "Coding",
	imagePath: "/games/efso_coding_game/code.jpeg",
};

const spaceGame = {
	loaderUrl: "/games/Space_game/Build/Space_game.loader.js",
	dataUrl: "/games/Space_game/Build/Space_game.data",
	frameworkUrl: "/games/Space_game/Build/Space_game.framework.js",
	codeUrl: "/games/Space_game/Build/Space_game.wasm",
	id: "3",
	title: "Planets & Astronaut",
	imagePath: "/games/Space_game/space.jpeg",
};

const game = {
	loaderUrl: "/games/Game/Build/Game.loader.js",
	dataUrl: "/games/Game/Build/Game.data",
	frameworkUrl: "/games/Game/Build/Game.framework.js",
	codeUrl: "/games/Game/Build/Game.wasm",
	id: "4",
	title: "Planets",
	imagePath: "/games/Game/space.jpeg",
};

const pirilCodingGame = {
	loaderUrl: "/games/piril_coding/Build/Desktop.loader.js",
	dataUrl: "/games/piril_coding/Build/Desktop.data",
	frameworkUrl: "/games/piril_coding/Build/Desktop.framework.js",
	codeUrl: "/games/piril_coding/Build/Desktop.wasm",
	id: "5",
	title: "Treasure Hunt",
	imagePath: "/games/piril_coding/treasureHunt.jpeg",
};

const config = {
	games: [
		pirilGame,
		finalCodingGame,
		pirilGame,
		game,
		spaceGame,
		pirilCodingGame,
		pirilGame,
		finalCodingGame,
		game,
		spaceGame,
		finalCodingGame,
		pirilCodingGame,
	],
};

export default config;
