import Header from '../Header/Header';
import Container from '../Container/Container';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;