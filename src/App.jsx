import { useState } from 'react';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      {loaded && <Home />}
    </>
  );
}
