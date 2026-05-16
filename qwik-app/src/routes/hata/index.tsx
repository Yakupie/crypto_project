import { component$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import "./index.css";

export default component$(() => {
  return (
    <div class="errorContainer">

      <Navbar />

      <div class="errorWrapper">

        <div class="errorMessage">

          <div class="left">
            <div class="leftArea">
              <img
                src="/images/error.gif"
                alt="Error GIF"
              />
            </div>
          </div>

          <div class="right">

            <div class="rightArea">

              <div class="errorTitle">
                API’ye <span>erişemiyoruz</span>
              </div>

              <div class="errorText">
                Üzgünüm, şu anda verileri getiremiyorum.
                <br />
                <br />
                Proje ödevi için ücretsiz bir servis kullandığım için
                zaman zaman kısa süreli kesintiler yaşanabiliyor.
                <br />
                Lütfen birkaç dakika sonra tekrar deneyin.
              </div>

              <button
                class="retryButton"
                onClick$={() => window.location.reload()}
              >
                Tekrar Dene
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
});