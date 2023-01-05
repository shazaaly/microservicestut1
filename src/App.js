import logo from './logo.svg';
import './App.css';
import { PostCreate } from './components/posts/PostCreate';
import { PostsList } from './components/posts/PostsList';

function App() {
  return (
    <div className='container'>
      <PostCreate />
      <hr />
      <h3>Posts</h3>
      <PostsList />

    </div>
  );
}

export default App;
