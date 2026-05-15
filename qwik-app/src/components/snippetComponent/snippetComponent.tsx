import { component$ } from "@builder.io/qwik";
import "./snippetComponent.css";

interface CoinProps {
    name: string;
    price: number;
    degisim: number;
    icon: string;
}

export const CoinSnippet = component$<CoinProps>(
({ name, price, degisim, icon }) => {

    const isPositive = degisim >= 0;

    return (
        <div class="coinSnippet">

            <div class="coinIcon">
                <img src={icon} alt={name} />
            </div>

            <div class="coinInfo">
                <div class="coinName">{name}</div>
                <div class="coinPrice">${price}</div>
            </div>

            <div class={`coinChange ${isPositive ? "up" : "down"}`}>
                {isPositive ? "+" : ""}{degisim}%
            </div>

        </div>
    );
});