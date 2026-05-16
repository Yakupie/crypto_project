import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import { RecommendComponent } from "~/components/recommend/recommend";
import LeaderBoard from "~/components/leaderboard/leaderBoard";
import "./index.css";

export default component$(() => {

  const coinsData = useSignal<any>(null);
  const loading = useSignal(true);

  useVisibleTask$(async () => {
    const res = await fetch("http://127.0.0.1:8000/coins");
    const data = await res.json();

    coinsData.value = data;
    loading.value = false;
  });

  if (loading.value) {
    return (
      <div class="container">
        <Navbar />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div class="container">
      <Navbar />

      <div class="bestContainer">

        {/* 🔥 TOP GAINERS */}
        <RecommendComponent
          title="En Çok Kazandıran Coinler"
          text="Son 24 saatte en yüksek yükseliş"
          icon="/images/photo1.webp"
          coins={coinsData.value.top_gainers.map((c: any) => ({
            name: c.name,
            price: c.price,
            degisim: c.change24h,
            image: c.image
          }))}
        />

        {/* 🏦 MARKET CAP */}
        <RecommendComponent
          title="En Popüler Kriptolar"
          text="Market cap’e göre sıralama"
          icon="/images/photo2.webp"
          coins={coinsData.value.top_marketcap.map((c: any) => ({
            name: c.name,
            price: c.price,
            degisim: c.change24h,
            image: c.image
          }))}
        />

        {/* ⚡ MOVERS */}
        <RecommendComponent
          title="Piyasada Öne Çıkanlar"
          text="En çok hareket eden coinler"
          icon="/images/photo3.webp"
          coins={coinsData.value.top_movers.map((c: any) => ({
            name: c.name,
            price: c.price,
            degisim: c.change24h,
            image: c.image
          }))}
        />

      </div>

      <div class="containerTwo">
        <LeaderBoard />
      </div>
    </div>
  );
});