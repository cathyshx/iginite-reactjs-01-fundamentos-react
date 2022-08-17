import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Catharine Isabel"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ea nulla cupiditate minima corrupti at quis ab eius fugiat debitis, facere quam non accusantium culpa est, unde voluptatibus neque quas?"
      />
      <Post 
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ea nulla cupiditate minima corrupti at quis ab eius fugiat debitis, facere quam non accusantium culpa est, unde voluptatibus neque quas?"
      />
    </div>
  )
}
