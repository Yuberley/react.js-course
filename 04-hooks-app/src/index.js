import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Momorize } from './components/06-memos/Momorize';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Message } from './components/02-useEffect/Message';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<TodoApp />);

