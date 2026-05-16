import {
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";

import { CoinSnippet } from "../snippetComponent/snippetComponent";

export const VisibleCoin = component$((props: { coin: any }) => {

  const visible = useSignal(false);
  const containerRef = useSignal<Element>();

  useVisibleTask$(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          visible.value = true;
          observer.disconnect();
        }

      },
      {
        rootMargin: "200px",
      }
    );

    if (containerRef.value) {
      observer.observe(containerRef.value);
    }

    return () => observer.disconnect();

  });

  return (
    <div ref={containerRef}>

      {visible.value ? (
        <CoinSnippet
          key={props.coin.id}
          name={props.coin.name}
          price={props.coin.price}
          degisim={props.coin.change24h}
          icon={props.coin.image}
        />
      ) : (
        <div
          style={{
            height: "70px",
          }}
        />
      )}

    </div>
  );
});