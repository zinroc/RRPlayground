import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>Sergei's React / Redux  Playground</h1>
        <footer className={footer}>
            <Link to="/">Home</Link>
            <Link to="/filter">Filterable Table</Link>
            <Link to="/about">About</Link>
            <Link to="/todo">TODO List</Link>
            <Link to="/currency">Currency Converter</Link>
        </footer>
        { Routes }

    </div>;

export default App;
