import PropTypes from "prop-types";
import s from './Social-profile.module.css';

export default function SocialProfile ({avatar, username, tag, location, followers, views, likes}) {
    return (
        <div className={s.Profile}>
            <div className={s.Description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={s.Avatar}
                />
                <p className={s.Name}>{username}</p>
                <p className={s.Tag}>@{tag}</p>
                <p className={s.Location}>{location}</p>
            </div>
    
            <ul className={s.Stats}>
                <li className={s.Stat}>
                    <span className={s.Label}>Followers</span>
                    <span className={s.Quantity}>{followers}</span>
                </li>
                <li className={s.Stat}>
                    <span className={s.Label}>Views</span>
                    <span className={s.Quantity}>{views}</span>
                </li>
                <li className={s.Stat}>
                    <span className={s.Label}>Likes</span>
                    <span className={s.Quantity}>{likes}</span>
                </li>
            </ul>
        </div>
  );
}

SocialProfile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}