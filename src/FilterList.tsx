import { useReducer, useState } from "react";

type Item = {
  id: string;
  text: string;
  done: boolean;
};

type State = {
  items: Item[];
  filter: "all" | "open" | "done";
};

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: string }
  | { type: "setFilter"; filter: State["filter"] };

const initialState: State = {
  items: [
    {
      id: "1",
      text: "Learn useState",
      done: false,
    },
    {
      id: "2",
      text: "Learn useReducer",
      done: true,
    },
  ],
  filter: "all",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: crypto.randomUUID(),
            text: action.text,
            done: false,
          },
        ],
      };

    case "toggle":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, done: !item.done }
            : item
        ),
      };

    case "setFilter":
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}

export default function FilterList() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [text, setText] = useState<string>("");

  const filteredItems = state.items.filter((item) => {
    if (state.filter === "open") {
      return !item.done;
    }

    if (state.filter === "done") {
      return item.done;
    }

    return true;
  });

  function handleAdd() {
    if (text.trim() === "") {
      return;
    }

    dispatch({
      type: "add",
      text: text.trim(),
    });

    setText("");
  }

  return (
    <div>
      <h2>Filter List</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter an item"
        onChange={(event) => setText(event.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>

      <div>
        <button
          onClick={() =>
            dispatch({
              type: "setFilter",
              filter: "all",
            })
          }
        >
          All
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "setFilter",
              filter: "open",
            })
          }
        >
          Open
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "setFilter",
              filter: "done",
            })
          }
        >
          Done
        </button>
      </div>

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() =>
                  dispatch({
                    type: "toggle",
                    id: item.id,
                  })
                }
              />

              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}