import { component$ } from "@builder.io/qwik";
import "./snippetComponent.css";

interface CoinProps {
  name: string;
  price: number;
  degisim: number;
  icon: string;

  volume?: number;
  marketCap?: number;
  peRatio?: number;
}

export const CoinSnippet = component$<CoinProps>(
  ({ name, price, degisim, icon, volume, marketCap, peRatio }) => {

    const isPositive = degisim >= 0;

    return (
      <div class="coinSnippet">

        <div class="coinLeft">
          <div class="coinIcon">
            <img src={icon} alt={name} />
          </div>

          <div class="coinInfo">
            <div class="coinName">{name}</div>
          </div>
        </div>

        <div class="coinCell">
          ${price}
        </div>

        <div class={`coinCell ${isPositive ? "up" : "down"}`}>
          {isPositive ? "+" : ""}{degisim}%
        </div>

        <div class="coinCell">
          {volume ? `$${volume.toLocaleString()}` : "-"}
        </div>

        <div class="coinCell">
          {marketCap ? `$${marketCap.toLocaleString()}` : "-"}
        </div>

        <div class="coinCell">
          {peRatio ? peRatio.toFixed(2) : "-"}
        </div>

      </div>
    );
  }
);