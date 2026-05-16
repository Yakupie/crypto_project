import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { CoinSnippet } from "../snippetComponent/snippetComponent";
import "./leaderBoard.css";

export default component$(() => {
  const coins = useSignal<any[]>([]);
  const search = useSignal("");
  const sort = useSignal("asc");

  useVisibleTask$(async () => {
    const res = await fetch("https://cryptoproject-production-0c1f.up.railway.app/coins");
    const data = await res.json();
    coins.value = data.all;
  });

  const getFilteredCoins = () => {
    let result = [...coins.value];

    if (search.value.trim()) {
      result = result.filter((coin) =>
        coin.name.toLowerCase().includes(search.value.toLowerCase())
      );
    }

switch (sort.value) {
  case "asc":
    result.sort((a, b) => (b.change24h ?? 0) - (a.change24h ?? 0));
    break;

  case "desc":
    result.sort((a, b) => (a.change24h ?? 0) - (b.change24h ?? 0));
    break;

  case "popular":
    result.sort((a, b) => (a.marketCapRank ?? 999999) - (b.marketCapRank ?? 999999));
    break;

}

    return result;
  };

  const filteredCoins = getFilteredCoins();

  return (
    <div class="leaderBoard">

      <div class="leaderBoardTop">
        <div class="leaderBoardTopLeft">

          <div class="pillGroup">
            <button
              class={`pill ${sort.value === "asc" ? "active" : ""}`}
              onClick$={() => (sort.value = "asc")}
            >
              Artan
            </button>

            <button
              class={`pill ${sort.value === "desc" ? "active" : ""}`}
              onClick$={() => (sort.value = "desc")}
            >
              Azalan
            </button>

            <button
              class={`pill ${sort.value === "popular" ? "active" : ""}`}
              onClick$={() => (sort.value = "popular")}
            >
              Popüler
            </button>

          </div>

          <input
            class="myInput"
            placeholder="Kripto varlık ara..."
            value={search.value}
            onInput$={(e) =>
              (search.value = (e.target as HTMLInputElement).value)
            }
          />
        </div>

        <div class="leaderBoardTopRight">
          <div class="timeGroup">
            <button class="timePill active">1G</button>
            <button class="timePill">1H</button>
            <button class="timePill">1A</button>
            <button class="timePill">3A</button>
            <button class="timePill">1Y</button>
            <button class="timePill">5Y</button>
          </div>
        </div>
      </div>

      <div class="leaderBoardContent">
        {filteredCoins.map((coin) => (
          <CoinSnippet
            key={coin.id}
            name={coin.name}
            price={coin.price}
            degisim={coin.change24h}
            icon={coin.image}
          />
        ))}
      </div>

    </div>
  );
});