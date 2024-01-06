import GiftBox from 'src/components/giftBox/GiftBox';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Le cadeau</h1>
      <GiftBox />
    </main>
  );
}
