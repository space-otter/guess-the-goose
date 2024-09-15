import { createSignal, For, type Component } from "solid-js";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const Gooser: Component = (props) => {
  const [guessed, SetGuessed] = createSignal<Array<string>>([]);

  return (
    <section>
      <h2>Gamepad</h2>
      <form>
        <ol>
          <For each={letters}>
            {(letter) => (
              <li>
                <label>{letter}</label>
                <input type="button" value={letter} />
              </li>
            )}
          </For>
        </ol>
      </form>
      <h3>Perks</h3>
    </section>
  );
};

const Competitor: Component<{ name: string; attempts: number }> = (props) => {
  return (
    <section>
      <h2>Other players</h2>
      <p>Name: {props.name}</p>
      <p>Attemps: {props.attempts}</p>
    </section>
  );
};

export const Game: Component = () => {
  return (
    <main>
      <section>
        <h2>Overview</h2>
        <p>
          Time left: <time>00:20</time>
        </p>
        <p>Guess the word before the fox catches your goose friend!</p>
        <p>_ _ _ _ _ _ _</p>
      </section>
      <Gooser />
      <For
        each={[
          { name: "Player 1", attempts: 3 },
          { name: "Player 2", attempts: 5 },
        ]}
      >
        {(player) => <Competitor {...player} />}
      </For>
    </main>
  );
};
