import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import { RecommendComponent } from "~/components/recommend/recommend";
import LeaderBoard from "~/components/leaderboard/leaderBoard";
import type { DocumentHead } from "@builder.io/qwik-city";
import "./index.css";

export const head: DocumentHead = {
  title: "Kripto Verileri",
  meta: [
    {
      name: "description",
      content: "Modern crypto dashboard built with Qwik",
    },
  ],
};

export default component$(() => {
  const coinsData = useSignal<any>(null);
  const loading = useSignal(true);
  const error = useSignal(false);

  const nav = useNavigate();

  useVisibleTask$(async () => {
    try {
      const res = await fetch(
        "https://cryptoproject-production-0c1f.up.railway.app/coins"
      );

      if (!res.ok) {
        throw new Error("API response not ok");
      }

      const data = await res.json();

      if (!data) {
        throw new Error("No data received");
      }

      coinsData.value = data;
    } catch (err) {
      console.error("API Error:", err);
      error.value = true;
    } finally {
      loading.value = false;
    }
  });

  useVisibleTask$(() => {
    if (!loading.value && (error.value || !coinsData.value)) {
      nav("/hata");
    }
  });

  if (loading.value) {
    return (
      <main class="container">
        <Navbar />
        <div style={{ padding: "20px" }}>Yükleniyor...</div>
      </main>
    );
  }

  if (!coinsData.value) {
    return null;
  }

  const data = coinsData.value;

  return (
    <main class="container">
      <Navbar />

      <div class="bestContainer">
        <RecommendComponent
          title="En Çok Kazandıran Coinler"
          text="Son 24 saatte en yüksek yükseliş"
          icon="/images/photo1.webp"
          coins={(data?.top_gainers ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            price: c.price,
            degisim: c.change24h ?? 0,
            image: c.image,
          }))}
        />

        <RecommendComponent
          title="En Popüler Kriptolar"
          text="Market cap’e göre sıralama"
          icon="/images/photo2.webp"
          coins={(data?.top_marketcap ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            price: c.price,
            degisim: c.change24h ?? 0,
            image: c.image,
          }))}
        />

        <RecommendComponent
          title="En Çok Değişen Coinler"
          text="24 saatte en volatil coinler"
          icon="/images/photo3.webp"
          coins={(data?.top_movers ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            price: c.price,
            degisim: c.change24h ?? 0,
            image: c.image,
          }))}
        />
      </div>

      <div class="containerTwo">
        <LeaderBoard coins={data?.all ?? []} />
      </div>
    </main>
  );
});