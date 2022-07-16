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
  loaderUrl: "/games/final_coding_game/Build/final_coding_game.loader.js",
  dataUrl: "/games/final_coding_game/Build/final_coding_game.data",
  frameworkUrl: "/games/final_coding_game/Build/final_coding_game.framework.js",
  codeUrl: "/games/final_coding_game/Build/final_coding_game.wasm",
  id: "2",
  title: "Coding",
  imagePath: "/games/final_coding_game/code.jpeg",
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

const config = {
  games: [
    pirilGame,
    finalCodingGame,
    pirilGame,
    game,
    spaceGame,
    pirilGame,
    finalCodingGame,
    game,
    spaceGame,
    finalCodingGame,
  ],
};

export default config;
