import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import { RecommendComponent } from "~/components/recommend/recommend";
import LeaderBoard from "~/components/leaderboard/leaderBoard";
import "./index.css";

export default component$(() => {

  const coinsData = useSignal<any>(null);
  const loading = useSignal(true);

  useVisibleTask$(async () => {
    const res = await fetch("https://cryptoproject-production-0c1f.up.railway.app/coins");
    coinsData.value = await res.json();
    loading.value = false;
  });

  if (loading.value || !coinsData.value) {
    return (
      <div class="container">
        <Navbar />
        <div>Loading...</div>
      </div>
    );
  }

  const data = coinsData.value;

  return (
    <div class="container">
      <Navbar />

      <div class="bestContainer">

        <RecommendComponent
          title="En Çok Kazandıran Coinler"
          text="Son 24 saatte en yüksek yükseliş"
          icon="/images/photo1.webp"
          coins={(data.top_gainers ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            price: c.price,
            degisim: c.change24h ?? 0,
            image: c.image
          }))}
        />

        <RecommendComponent
          title="En Popüler Kriptolar"
          text="Market cap’e göre sıralama"
          icon="/images/photo2.webp"
          coins={(data.top_marketcap ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            price: c.price,
            degisim: c.change24h ?? 0,
            image: c.image
          }))}
        />

        <RecommendComponent
          title="En Çok Değişen Coinler"
          text="24 saatte en volatil coinler"
          icon="/images/photo3.webp"
          coins={(data.top_movers ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            price: c.price,
            degisim: c.change24h ?? 0,
            image: c.image
          }))}
        />

      </div>

      <div class="containerTwo">
        <LeaderBoard coins={data.all ?? []} />
      </div>
    </div>
  );
});