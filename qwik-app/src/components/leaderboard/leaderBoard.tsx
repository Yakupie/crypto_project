import { component$, useSignal, useComputed$ } from "@builder.io/qwik";
import { VisibleCoin } from "../visibleCoin/visibleCoin";
import "./leaderBoard.css";

export default component$((props: { coins: any[] }) => {

  const search = useSignal("");
  const sort = useSignal("asc");

  const filteredCoins = useComputed$(() => {

    let result = props.coins ?? [];

    if (search.value.trim()) {

      const q = search.value.toLowerCase();

      result = result.filter((coin) =>
        (coin.name ?? "").toLowerCase().includes(q)
      );

    }

    if (sort.value === "asc") {

      result = [...result].sort(
        (a, b) => (b.change24h ?? 0) - (a.change24h ?? 0)
      );

    }

    if (sort.value === "desc") {

      result = [...result].sort(
        (a, b) => (a.change24h ?? 0) - (b.change24h ?? 0)
      );

    }

    if (sort.value === "popular") {

      result = [...result].sort(
        (a, b) => (a.marketCapRank ?? 999999) - (b.marketCapRank ?? 999999)
      );

    }

    return result;

  });

  return (
    <div class="leaderBoard">

      <div class="leaderBoardTop">

        <div class="leaderBoardTopLeft">

          <div class="pillGroup">

            <button
              aria-label="Artan"
              class={`pill ${sort.value === "asc" ? "active" : ""}`}
              onClick$={() => (sort.value = "asc")}
            >
              Artan
            </button>

            <button
              aria-label="Azalan"
              class={`pill ${sort.value === "desc" ? "active" : ""}`}
              onClick$={() => (sort.value = "desc")}
            >
              Azalan
            </button>

            <button
              aria-label="Popüler"
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
  <div class="tableHeaderRow">
    <div class="th">Fiyat</div>
    <div class="th">Change</div>
    <div class="th">Vol</div>
    <div class="th">Market Cap</div>
    <div class="th">P/E</div>
  </div>
</div>

      </div>

      <div class="leaderBoardContent">

        {filteredCoins.value.map((coin) => (

          <VisibleCoin
            key={coin.id}
            coin={coin}
          />

        ))}

      </div>

    </div>
  );
});