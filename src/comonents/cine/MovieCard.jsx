/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../Context";
import { toast } from "react-toastify";
import tag from "../../assets/tag.svg";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const { state, dispatch } = useContext(MovieContext);
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      dispatch({ type: "ADD_TO_CART", payload: movie });
      // setCartData([...state.cartData, movie]);
      toast.success(`Added  ${movie.title} to Cart !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <button href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </button>
      </figure>
    </>
  );
}
