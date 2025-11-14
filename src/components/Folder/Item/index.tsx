import styles from './styles.module.css';

type ItemProps = {
  onClick: () => void;
  type: string;
  imageSrc: string;
  name: string;
  date?: string;
  size?: string;
}

function Item({ name, date, size, type, imageSrc, onClick }: ItemProps) {

  const dateInfo = date ? <p className={styles.item__date}>{date}</p> : <></>;
  const sizeInfo = size ? <p className={styles.item__size}>{size}</p> : <></>;

  return (
    <a onClick={onClick} data-type={type}>
      <section className={styles.item}>
        <img className={styles.item__image} src={imageSrc} alt={name} />
        <p className={styles.item__name}>{name}</p>
        {dateInfo}
        {sizeInfo}
      </section>
    </a>
  )
}

export default Item