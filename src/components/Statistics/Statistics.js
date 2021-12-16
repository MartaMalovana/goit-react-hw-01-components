import PropTypes from 'prop-types';
import s from 'components/Statistics/Statistics.module.css';

const getRandomColor = () => Math.floor(Math.random()*1000000); 

export default function Statistics ({stats, title}) {
  return (
    <section className={s.Statistics}>
    <h2 className={s.Title}>{title && 'Upload stats'}</h2>

    <ul className={s.StatList}>
      {stats.map(el => 
        <li className={s.Item} key={el.id} style={{backgroundColor: `#${getRandomColor()}`}}>
        <span className={s.Label}>{el.label}</span>
        <span className={s.Percentage}>{el.percentage}</span>
      </li>)}
    </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
  title: PropTypes.string
}