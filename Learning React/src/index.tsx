import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
//                                               ^ "non-null assertion": le dices a TS
//                                                 "confía, sé que existe"
const root = createRoot(container);
root.render(<App />);