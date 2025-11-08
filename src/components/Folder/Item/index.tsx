import styles from './styles.module.css';

type ItemProps = {
  name: string;
  date: string;
  size: string;
  type: string;
  onClick?: () => void;
}

function Item({ name, date, size, type, onClick }: ItemProps) {
  return (
    <>
      <a onClick={onClick} data-type={type}>
        <section className={styles.item}>
          <h2 className={styles.item__name}>{name}</h2>
          {/* <image></image> */}
          <p className={styles.item__date}>{date}</p>
          <p className={styles.item__size}>{size}</p>
        </section>
      </a>
    </>
  )
}

export default Item