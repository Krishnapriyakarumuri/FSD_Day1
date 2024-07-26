import ReactDOM from 'react-dom/client';
import App from './App';




const rootElement = document.getElementById('root');
//create root for entire DOM --> root reference
const rootRef = ReactDOM.createRoot(rootElement);
// rootRef.render(<h1>Hello World!</h1>)

// let a = 5;
// let b = 6;
// let ans = Summ(a, b);
// rootRef.render(ans)
// rootRef.render(<Summ/>)
// rootRef.render(<Details/>)
rootRef.render(<App/>)
