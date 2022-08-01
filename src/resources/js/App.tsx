import React from 'react';
import  ReactDOM  from 'react-dom';

const App: React.FC = () => {
    const title: string = 'TypeScript'
    return (
        <h1>{ title }</h1>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

export default App;
