import { component$ } from "@builder.io/qwik";
import { CoinSnippet } from "~/components/snippetComponent/snippetComponent";
import './recommend.css'

export default component$(() => {
    return (
        <div class="recommend">
            <div class="recommendTop">
                <div class="recommendTopLeft">
                    <div class="photo"></div>
                </div>
                <div class="recommendTopRight">
                    <div class="recommendHeader">Deneme Header Yazı</div>
                    <div class="recommendText">Deneme Text Yazı</div>
                </div>
            </div>
            <div class="recommendBottom">   
                <CoinSnippet name="Bitcoin" price={67000} degisim={2.4} icon="/icons/btc.svg" />
                <CoinSnippet name="Ethereum" price={3500} degisim={-1.2} icon="/icons/eth.svg" />
                <CoinSnippet name="Solana" price={142} degisim={5.6} icon="/icons/sol.svg" />
                <CoinSnippet name="XRP" price={0.62} degisim={-0.8} icon="/icons/xrp.svg" />
                <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="/icons/ada.svg" />
            </div>
        </div>
    )
})