import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "../Context";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(!showCart);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      {showCart && <CartDetails onClose={handleCloseCart} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src="./assets/ring.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={
                  darkMode
                    ? "../assets/icons/sun.svg"
                    : "./assets/icons/moon.svg"
                }
                width="24"
                height="24"
                alt=""
                onClick={() => setDarkMode(!darkMode)}
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src="./assets/shopping-cart.svg"
                width="24"
                height="24"
                alt=""
                onClick={handleCloseCart}
              />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
