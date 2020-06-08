import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
   const sign = transaction.amount < 0 ? '-' : '+';
   const color = transaction.amount < 0 ? 'minus' : 'plus';
   const { deleteTransaction } = useContext(GlobalContext);

   return (
      <li className={color}>
         {transaction.text}
         <span>
            {sign}${numberWithCommas(Math.abs(transaction.amount))}
         </span>
         <button
            className='delete-btn'
            onClick={() => deleteTransaction(transaction._id)}
         >
            x
         </button>
      </li>
   );
};

export default Transaction;
