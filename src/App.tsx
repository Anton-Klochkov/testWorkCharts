import { Charts } from './charts/Charts';
import { Card } from './card/Card';
import styles from './App.module.scss';

function App() {
  const data = [
    {
      name: 'НИТ',
      value: {
        current: 234840,
        pending: 246051,
      },
    },
    {
      name: 'Прогноз',
      value: {
        current: 272289,
        pending: 283500,
      },
    },
  ];

  return (
    <div className={styles.appContainer}>
      <div className={styles.chartWrapper}>
        <Charts data={data} />
        <div className={styles.cardWrapper}>
          <Card data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
