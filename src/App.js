import Login from './components/login/login';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();
function App() {
  return (
    <>
      <Login/>
    </>
  );
}

export default App;
