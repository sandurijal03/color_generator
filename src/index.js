import { render } from 'react-dom';

const Main = () => {
  return (
    <div>
      <h1>Color Generator</h1>
    </div>
  );
};

const root = document.getElementById('root');

render(<Main />, root);
