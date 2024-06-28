import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BudgetForm = ({
  addBudget,
  editBudget,
  budgetToEdit,
  setBudgetToEdit,
}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (budgetToEdit !== null) {
      setAmount(budgetToEdit.amount);
      setCategory(budgetToEdit.category);
      setDate(budgetToEdit.date);
      setNotes(budgetToEdit.notes);
    }
  }, [budgetToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    const newBudget = { amount, category, date, notes };

    if (budgetToEdit !== null) {
      editBudget(budgetToEdit.index, newBudget);
      setBudgetToEdit(null);
    } else {
      addBudget(newBudget);
    }
    setAmount('');
    setCategory('');
    setDate('');
    setNotes('');
  };

  return (
    <form className='flex flex-col gap-3 mb-5' onSubmit={handleSubmit}>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Amount:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='number'
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
      </div>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Category:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='text'
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
      </div>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Date:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      </div>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Notes:</label>
        <textarea
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
      </div>
      <button className='p-3 w-5/12 bg-blue-600 mb-7' type='submit'>
        {budgetToEdit !== null ? 'Edit' : 'Add'} Budget
      </button>
    </form>
  );
};

BudgetForm.propTypes = {
  addBudget: PropTypes.func.isRequired,
  editBudget: PropTypes.func.isRequired,
  budgetToEdit: PropTypes.object,
  setBudgetToEdit: PropTypes.func.isRequired,
};

export default BudgetForm;
