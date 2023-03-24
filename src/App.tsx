import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display";
import SuperButton from "./components/SuperButton";

export type ButtonNamesFilterType = 'inc' | 'reset' | 'dec'

function App() {
   const [count, setCount] = useState<number>(0)

   const CounterFc = (name: ButtonNamesFilterType) => {
      if (name === 'inc') setCount(count + 1)
      if (name === 'dec') setCount(count - 1)
      if (name === 'reset') setCount(0)
   }

   const minCount: number = 0
   const maxCount: number = 5
   const isMax = count >= maxCount
   const isDisable = count === minCount


    return(
       <div className={'main-counter-block'}>
          <div className={'table-block'}>
             <Display count={count}/>
          </div>
          <div className={'buttons-group-block'}>
             <SuperButton name={'inc'} callBack={CounterFc} disabled={isMax}/>
             <SuperButton name={'dec'} callBack={CounterFc} disabled={isDisable}/>
             <SuperButton name={'reset'} callBack={CounterFc} disabled={isDisable}/>
          </div>
       </div>
    )
}
export default App