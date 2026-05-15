import {
  component$,
  useSignal,
  useVisibleTask$
} from "@builder.io/qwik";

import Navbar from "~/components/navbar/navbar";
import MainPageTextComponent from '~/components/mainPageTextComponent/mainPageTextComponent';

import './index.css';

export default component$(() => {

  const mouseX = useSignal(0);
  const mouseY = useSignal(0);

  useVisibleTask$(() => {

    const move = (e: MouseEvent) => {
      mouseX.value = e.clientX;
      mouseY.value = e.clientY;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  return (
    <div class="container">

      <div
        class="mouseGlow"
        style={{
          left: `${mouseX.value}px`,
          top: `${mouseY.value}px`,
        }}
      ></div>

      <Navbar/>
      <MainPageTextComponent/>

    </div>
  );
});