import FriendListItem from 'components/FriendList/FriendListItem';
import s from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList ({friends}) {
    return (
        <ul className={s.FriendList}>
            {friends.map(friend => (
                    <FriendListItem 
                        key={friend.id}
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />)
            )}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape).isRequired
}