import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <div className="summary">
          <Balance transactions={transactions} />
          <IncomeExpenses transactions={transactions} />
          <AddTransaction addTransaction={addTransaction} />
        </div>
        <div className="separator"></div>
        <div className="history">
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default App;
