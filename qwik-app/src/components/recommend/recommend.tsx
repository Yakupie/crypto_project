import { component$ } from "@builder.io/qwik";
import { MiniCoinSnippet } from "~/components/miniCoinSnippet/miniCoinSnippet";
import "./recommend.css";

interface Coin {
  name: string;
  price: number;
  degisim: number;
  image: string;
}

interface RecommendProps {
  title: string;
  text: string;
  icon: string;
  coins: Coin[];
}


export const RecommendComponent = component$<RecommendProps>(
  ({ title, text, icon, coins }) => {
    return (
      <div class="recommend">
        <div class="recommendTop">
          <div class="recommendTopLeft">
            <div class="photo">
              <img src={icon} alt="recommend icon" loading="lazy" decoding="async" width={100} height={100}></img>
            </div>
          </div>

          <div class="recommendTopRight">
            <div class="recommendHeader">{title}</div>
            <div class="recommendText">{text}</div>
          </div>
        </div>

        <div class="recommendBottom">
          {coins.map((coin) => (
            <MiniCoinSnippet
              key={coin.name}
              name={coin.name}
              price={coin.price}
              degisim={coin.degisim}
              icon={coin.image}
            />
          ))}
        </div>
      </div>
    );
  }
);