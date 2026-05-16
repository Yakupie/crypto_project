import { component$ } from "@builder.io/qwik";
import { CoinSnippet } from "../snippetComponent/snippetComponent";
import "./leaderBoard.css";

export default component$(() => {
  return (
    <div class="leaderBoard">

      <div class="leaderBoardTop">

        <div class="leaderBoardTopLeft">

          <div class="pillGroup">
            <button class="pill active">Artan</button>
            <button class="pill">Azalan</button>
            <button class="pill">Popüler</button>
            <button class="pill">Hacim</button>
          </div>

          <input class="myInput" placeholder="Kripto varlık ara..." />
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
        <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
        <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
        <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
        <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
        <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
        <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
      </div>

    </div>
  );
});