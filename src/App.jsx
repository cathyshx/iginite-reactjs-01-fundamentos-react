import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Catharine Isabel"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ea nulla cupiditate minima corrupti at quis ab eius fugiat debitis, facere quam non accusantium culpa est, unde voluptatibus neque quas?"
          />
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ea nulla cupiditate minima corrupti at quis ab eius fugiat debitis, facere quam non accusantium culpa est, unde voluptatibus neque quas?"
          />
        </main>
      </div>
    </div>
  )
}
