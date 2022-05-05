import styles from './app.scss';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

const App: React.FC = () => {
  return (
    <>
      <h1 className={styles.home}>Hello August</h1>
      <Button>button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        button
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
        button
      </Button>
      <Button btnType={ButtonType.Link} href="#">
        link
      </Button>
      <input />
    </>
  );
};
export default App;
