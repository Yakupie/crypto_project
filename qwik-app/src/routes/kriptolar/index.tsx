import { component$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import Recommend from "~/components/recommend/recommend";
import LeaderBoard from "~/components/leaderboard/leaderBoard";
import './index.css';

export default component$(() => {
    return(
        <div class="container">
            <Navbar/>
            <div class="bestContainer">
                <Recommend/>
                <Recommend/>
                <Recommend/>
            </div>
            <div class="containerTwo">
                <LeaderBoard/>
            </div>
        </div>
    )
})