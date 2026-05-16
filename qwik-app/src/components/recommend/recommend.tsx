import { component$ } from "@builder.io/qwik";
import { CoinSnippet } from "~/components/snippetComponent/snippetComponent";
import './recommend.css'

interface RecommendProps {
    title: string;
    text: string;
    icon: any;
}

export const RecommendComponent = component$<RecommendProps>(({title , text , icon}) => {
    return(
        <div class="recommend">
            <div class="recommendTop">
                <div class="recommendTopLeft">
                    <div class="photo">{icon}</div>
                </div>
                <div class="recommendTopRight">
                    <div class="recommendHeader">{title}</div>
                    <div class="recommendText">{text}</div>
                </div>
            </div>
            <div class="recommendBottom">   
                <CoinSnippet name="Bitcoin" price={67000} degisim={2.4} icon="" />
                <CoinSnippet name="Ethereum" price={3500} degisim={-1.2} icon="" />
                <CoinSnippet name="Solana" price={142} degisim={5.6} icon="" />
                <CoinSnippet name="XRP" price={0.62} degisim={-0.8} icon="" />
                <CoinSnippet name="Cardano" price={0.45} degisim={1.1} icon="" />
            </div>
        </div>
    )
})