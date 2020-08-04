import React, {useState} from 'react'; // подключение библиотеки React и функцию useState
import Counter from './Counter'; // подключение компонента Counter

function App() { // функции родительского компонента или задаем функцию родительскому компоненту
    const [counters, setCounters] = useState([0, 1, 2]); // создаем две переменных

    const r = Math.round(Math.random() * 10) // создаем переменную r и задаем рандомное число с помощью Math.random
    const addCounter = () => {
        setCounters([...counters, r]) // задаем функцию которая раскрывает массив и выводит значение переменной к
    };

    const resetAll = () => { // создаем функцию для кнопки обнуления все значения счетчика 
        const updateCounters = counters.map((el, i) => el = 0)
        setCounters(updateCounters)
    };

    const plusOne = (index, value) => {
        const newCounters = [...counters];
        newCounters[index] += value;
        setCounters(newCounters);
    };

    const deleteCounter = (index) => {
        const newCounters = counters.filter((el, i) => {

            return i !== index
        })
        setCounters(newCounters);
    };

    const reset = (index) => {
        const newCounters = [...counters];
        newCounters[index] = 0;
        setCounters(newCounters);
    };


    return (
        <div className="App">
            Counter

            {counters.map((el, i) =>
                <Counter
                    count={el}
                    kay={i}
                    index={i}
                    plus={plusOne}
                    delete={deleteCounter}
                    reset={reset}
                />)}
            <button onClick={addCounter}> Add</button>
            <button onClick={resetAll}> ResetAll</button>
        </div>
    );
}

export default App;
