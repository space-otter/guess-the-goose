function init() {}

function Game(spec: {
	attempts: number;
	time: number;
	players: Array<string>;
}) {
	const { players: playerNames } = spec;
	const config = { attempts: spec.attempts, time: spec.time };
	const players = playerNames.map((name) => Player({ name, game: { config } }));

	return {
		config,
		players,
	};
}

function Gooser(player: ReturnType<typeof Player>) {
	const { game } = player;

	const guessedLetters = new Set<string>();
	let misses = 0;

	function addMiss() {
		if (misses >= game.config.attempts) {
		} else {
			misses++;
		}
	}

	function guess(guess: { letter: string; missed: boolean }) {
		const { letter, missed } = guess;

		if (guessedLetters.has(letter)) {
			return false;
		}

		if (missed) {
			addMiss();
		}

		guessedLetters.add(letter);

		return true;
	}
}

function Fox(player: Player) {}

function Action() {}

type Player = ReturnType<typeof Player>;

function Player(spec: {
	name: string;
	game: { config: { attempts: number } };
}) {
	const { name, game } = spec;

	return {
		name,
		game,
	};
}

function simpleGoose() {
	const secret = "Banana";
	const attempts = 6;
	const time = 60_000;

	return {};
}
