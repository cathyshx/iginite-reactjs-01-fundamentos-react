import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
      />

      <div className={styles.profile}>
        <strong>Catharine Isabel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar ser perfil
        </a>
      </footer>
    </aside>
  );
}