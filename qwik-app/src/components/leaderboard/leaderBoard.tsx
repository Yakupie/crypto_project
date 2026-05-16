import { component$, useSignal, useComputed$ } from "@builder.io/qwik";
import { VisibleCoin } from "../visibleCoin/visibleCoin";
import "./leaderBoard.css";

export default component$((props: { coins: any[] }) => {

  const search = useSignal("");
  const sort = useSignal("asc");

  const filteredCoins = useComputed$(() => {

    let result = props.coins ?? [];

    // SEARCH
    if (search.value.trim()) {

      const q = search.value.toLowerCase();

      result = result.filter((coin) =>
        (coin.name ?? "").toLowerCase().includes(q)
      );

    }

    // SORT ASC
    if (sort.value === "asc") {

      result = [...result].sort(
        (a, b) => (b.change24h ?? 0) - (a.change24h ?? 0)
      );

    }

    // SORT DESC
    if (sort.value === "desc") {

      result = [...result].sort(
        (a, b) => (a.change24h ?? 0) - (b.change24h ?? 0)
      );

    }

    // SORT POPULAR
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

          <div class="timeGroup">

            <button aria-label="1 Gün" class="timePill active">
              1G
            </button>

            <button aria-label="1 Hafta" class="timePill">
              1H
            </button>

            <button aria-label="1 Ay" class="timePill">
              1A
            </button>

            <button aria-label="3 Ay" class="timePill">
              3A
            </button>

            <button aria-label="1 Yıl" class="timePill">
              1Y
            </button>

            <button aria-label="5 Yıl" class="timePill">
              5Y
            </button>

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