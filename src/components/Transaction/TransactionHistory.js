import s from 'components/Transaction/TransactionHistory.module.css';
import PropTypes from 'prop-types';

// const getTableItemColor = function () {

// }

export default function TransactionHistory ({items}) {
    return (
        <table className={s.TransactionHistory}>
            <thead className={s.Thead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => 
                        <tr key={item.id} style={{backgroundColor: index % 2 === 0 && '#e6e6fa'}}>
                        <td className={s.Type}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                        </tr>
                
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired
}