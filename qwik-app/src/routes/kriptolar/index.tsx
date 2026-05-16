import { component$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import { RecommendComponent } from "~/components/recommend/recommend";
import LeaderBoard from "~/components/leaderboard/leaderBoard";
import './index.css';

export default component$(() => {
    return(
        <div class="container">
            <Navbar/>
            <div class="bestContainer">
                <RecommendComponent title="En Çok Kazandıran Coinler" text="Gerçek zamanlı piyasa verileriyle son 24 saatte en yüksek yükselişi gösteren kripto para birimlerini anlık takip edin." icon=""/>
                <RecommendComponent title="En Popüler Kriptolar" text="Yatırımcıların en çok ilgi gösterdiği, işlem hacmi ve trend verileriyle öne çıkan coinleri keşfedin." icon="" />
                <RecommendComponent title="Piyasada Öne Çıkanlar" text="Ani fiyat hareketleri, yükselen hacimler ve dikkat çeken performanslarla gündemdeki coinleri kaçırmayın." icon="" />
            </div>
            <div class="containerTwo">
                <LeaderBoard/>
            </div>
        </div>
    )
})