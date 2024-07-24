import ReactDOM from 'react-dom/client';
import F1 from './first';
import Summ from './sumOfTwo';
import Details from './mydetails.js';
import All from './allThree.js';
import Print from './arrayList.js';
import Condition from './conditionalComponents.js';
import Review from './assignment.js';
import Day1 from './day1assgn.js';
import CardUIList from './CardList.js';
import ClassEx from './classComponentEx.js';
import FunComEx from './functionalCompEx.js';
import Increanddec from './IncrAndDecr.js';
import Reviews from './Review.js';
import SvesCommerce from './day2assgn.js';
import UseRefEx from './useRefhookEx.js';
import Login from './loginpage.js';
import Toggle from './toggleViews.js'
import Register from './registerpage.js';
import DataFetching from './dataFetching.js';
import DataFetchingCard from './day3assgn.js';


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
rootRef.render(<DataFetchingCard/>)
