import s from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem ({isOnline, avatar, name}) {
    return (
        <li className={s.Item}>
            <span className={s.Status} style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
            <img className={s.Avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.Name}>{name}</p>
        </li>
    ); 
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}