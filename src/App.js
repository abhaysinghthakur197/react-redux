import './App.css';
import Count from './Count'
import { useDispatch } from 'react-redux';
import { addItem } from './redux/slice/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const cart = [
    {
      title: 'card1',
      desp: 'card1 decription',
      price: 20
    },
    {
      title: 'card2',
      desp: 'card2 decription',
      price: 10
    },
    {
      title: 'card3',
      desp: 'card3 decription',
      price: 30
    }
  ]
  return (
    <div>
      <div>
      <Count />
      </div>
        {cart.map((c) => (
          <div key={c.title} style={{border: '2px solid black', width: '50%'}}>
            <h2>{c.title}</h2>
            <p>{c.desp}</p>
            <p>{c.price}</p>
            <button onClick={(e) => dispatch(addItem({name: c.title, price: c.price}))}>Add card</button>
          </div>
        ))}
      {/* <button onClick={(e) => dispatch({ type: "increment" })}>increment</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>decrement</button> */}
    </div>
  )
}

export default App;
