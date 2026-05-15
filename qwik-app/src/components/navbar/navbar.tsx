import { component$, useSignal } from "@builder.io/qwik";
import './navbar.css';

export default component$(() => {
    const isOpen = useSignal(false);
    return(
        <div class="navbar">
            <div class="logoArea">
                <div class="logo">Crypto<span id="logoSpan">Stats</span></div>
            </div>
            <div class="ulArea">
                <ul>
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="kriptolar">Kriptolar</a></li>
                    <li><a href="a">Hakkımda</a></li>
                </ul>
            </div>
            <div class="buttonArea">
                <button id="githubButton"><GithubIcon /> Github</button>
            </div>
            <div class="hamburgerMenuArea">
                <button id="hamburgerMenu" onClick$={() => (isOpen.value = !isOpen.value)}>
                    <MenuIcon />
                </button>
            </div>
            {isOpen.value &&(
                <div class="mobileMenu">
                    <div class="hamburgerMenuOpenArea">
                        <button id="hamburgerMenuOpen" onClick$={() => (isOpen.value = !isOpen.value)}>
                            <CloseIcon />
                        </button>
                    </div>
                    <ul>
                        <li><a href="/">Ana Sayfa</a></li>
                        <li><a href="/">Kriptolar</a></li>
                        <li><a href="/">Hakkımda</a></li>
                    </ul>
                    <button id="hamburgerMenuButton"><GithubIcon /> Github</button>
                </div>
            )}
        </div>
    )
})

export const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008 10.938c.584.108.797-.254.797-.566 0-.278-.01-1.017-.016-1.996-3.25.707-3.938-1.566-3.938-1.566-.531-1.35-1.297-1.71-1.297-1.71-1.06-.724.08-.71.08-.71 1.172.082 1.789 1.203 1.789 1.203 1.04 1.781 2.73 1.266 3.395.969.105-.754.406-1.266.738-1.558-2.594-.296-5.32-1.297-5.32-5.773 0-1.274.454-2.316 1.2-3.133-.12-.296-.52-1.488.113-3.102 0 0 .977-.313 3.2 1.196a11.15 11.15 0 015.828 0c2.223-1.509 3.2-1.196 3.2-1.196.633 1.614.234 2.806.114 3.102.746.817 1.199 1.859 1.199 3.133 0 4.488-2.73 5.473-5.332 5.762.418.36.79 1.074.79 2.164 0 1.563-.015 2.824-.015 3.207 0 .315.21.68.804.565A11.502 11.502 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};