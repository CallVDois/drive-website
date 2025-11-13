import styles from './styles.module.css';

type ItemProps = {
  name: string;
  date: string;
  size: string;
  type: string;
  imageSrc: string;
  onClick?: () => void;
}

function Item({ name, date, size, type, imageSrc, onClick }: ItemProps) {
  return (
    <>
      <a onClick={onClick} data-type={type}>
        <section className={styles.item}>
          <img src={imageSrc} alt={name} className={styles.item__image} />
          <p className={styles.item__name}>{name}</p>
          <p className={styles.item__date}>{date}</p>
          <p className={styles.item__size}>{size}</p>
        </section>
      </a>
    </>
  )
}

export default Item