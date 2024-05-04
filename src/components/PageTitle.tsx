import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  number: string;
  text: string;
}

export const PageTitle = ({ number, text }: PageTitleProps) => {
  return (
    <h1 className={styles.title}>
      <span className={styles.title__number}>{number}</span>{" "}
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={styles.title__letter}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};
