import styles from "./Review.module.css";

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  return (
    <li className={styles["review--item"]}>
      <img
        src={review.photoURL}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold">{review.name}</h4>
        <div className="text-yellow-500">{"⭐".repeat(review.rating)}</div>
        <p className="text-gray-700 mt-1">{review.text}</p>
      </div>
    </li>
  );
};

export default ReviewCard;
