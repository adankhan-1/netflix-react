import { NetflixSeries } from './components/NetflixSeries';
import './components/Netflix.css';

const App = () => {
  return (
  <section className="container">
    <h1 className="card-heading">List of Best Netflix Series</h1>
    <NetflixSeries />;
  </section>
  )
}

export default App
