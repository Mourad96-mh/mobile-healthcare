import styles from "./Testimonials.module.css";
import ReviewCard from "./UI/ReviewCard";

const dummyReviews = [
  {
    name: "Sarah M.",
    photoURL: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "Fantastic service! The nurse was professional and caring.",
  },
  {
    name: "Ali B.",
    photoURL: "https://i.pravatar.cc/150?u=ali",
    rating: 4,
    text: "Very responsive team and helpful support throughout.",
  },
  {
    name: "Mourad M'h.",
    photoURL: "https://i.pravatar.cc/150?u=ali",
    rating: 4,
    text: "Very responsive team and helpful support throughout.",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h4 className={`center-text ${styles["testimonial--heading"]}`}>
        Testimonials
      </h4>
      <p className={`center-text ${styles["testimonial--intro"]}`}>
        Hear what our happy clients have to say about our home care services.
      </p>

      <ul className={styles["review--list"]}>
        {dummyReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </ul>
      <div className={styles["review--action"]}>
        <button className={styles["review--btn"]}>Get a Quote</button>
      </div>
    </section>
  );
}

export default Testimonials;
