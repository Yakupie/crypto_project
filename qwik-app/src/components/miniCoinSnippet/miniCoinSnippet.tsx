import { component$ } from "@builder.io/qwik";
import "./miniCoinSnippet.css";

interface CoinProps {
  name: string;
  price: number;
  degisim: number;
  icon: string;

  volume?: number;
  marketCap?: number;
  peRatio?: number;
}

export const MiniCoinSnippet = component$<CoinProps>(
  ({ name, price, degisim, icon }) => {

    const isPositive = degisim >= 0;

    return (
      <div class="coin-card">

        <div class="coin-card__left">
          <div class="coin-card__icon">
            <img src={icon} alt={name} />
          </div>

          <div class="coin-card__info">
            <div class="coin-card__name">{name}</div>
          </div>
        </div>

        <div class="coin-card__price">
          ${price}
        </div>

        <div class={`coin-card__change ${isPositive ? "coin-card__change--up" : "coin-card__change--down"}`}>
          {isPositive ? "+" : ""}{degisim}%
        </div>

      </div>
    );
  }
);