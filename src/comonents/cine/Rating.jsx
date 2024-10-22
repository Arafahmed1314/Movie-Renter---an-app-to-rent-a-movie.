/* eslint-disable react/prop-types */
import star from "../../assets/star.svg";

export default function Rating({ value }) {
  const starts = Array(value).fill(star);
  return (
    <>
      {starts.map((star, index) => {
        return <img key={index} src={star} alt="star" className="h-4 w-4" />;
      })}
    </>
  );
}
