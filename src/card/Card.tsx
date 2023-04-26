import type { CardDataProps } from './Card.interface';
import styles from './Card.module.scss';

export const Card = (props: CardDataProps) => {
  const { data } = props;

  const prettify = (num: number) => {
    let newRows = num.toString();
    return newRows.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
  };

  return (
    <div className={styles.cardContainer}>
      {data.map((el, index) => (
        <div key={index} className={styles.cardContent}>
          <span className={styles.titleValue}>{el.name}</span>
          <div className={styles.value}>
            <span>{prettify(el.value.current)}</span>
            <span className={styles.predictValue}>
              {`/${prettify(el.value.pending)}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
