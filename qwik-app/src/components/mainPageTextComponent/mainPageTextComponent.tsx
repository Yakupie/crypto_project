import { component$ } from "@builder.io/qwik";
import './mainPageTextComponent.css'
import { StatCard } from "../mainPageStatComponent/mainPageStatComponent";

export default component$(() =>{
    return(
        <div class="mainPage">
            <div class="mainPageArea">
                <div class="mainPageTextArea">
                    <div class="header"><span class="headerSpan">Gerçek Zamanlı</span> Kripto Piyasa Takibi</div>
                    <div class="text">Kripto para piyasalarındaki verileri anlık grafiklerle izleyerek profesyonel analiz yapmanıza olanak sağlayan bir platform.</div>
                    <div class="mainPageButtonArea">
                        <button id="mainPageButtonRepo">Github Repo</button>
                        <button id="mainPageButtonCrypto">Kripto Varlıklar</button>
                    </div>
                </div>
                <div class="mainPageStatsArea">
<StatCard
    text="Market Hacmi"
    number="$2.4T"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M3 17l6-6 4 4 7-7"
            />
        </svg>
    }
/>

<StatCard
    text="Hizmet Süresi"
    number="24/7"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M12 8v4l3 3"
            />
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width="1.8"
            />
        </svg>
    }
/>

<StatCard
    text="Kripto Varlık"
    number="100"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M12 3v18M8 7h6a3 3 0 010 6H10a3 3 0 000 6h6"
            />
        </svg>
    }
/>
                </div>
            </div>
        </div>
    )
})