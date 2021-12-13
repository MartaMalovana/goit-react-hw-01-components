import PropTypes from "prop-types";
import './social-profile.css';

export default function SocialProfile ({avatar, username,tag, location, followers, views, likes}) {
    return (
        <div className="Profile">
            <div className="Description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="Avatar"
                />
                <p className="Name">{username}</p>
                <p className="Tag">@{tag}</p>
                <p className="Location">{location}</p>
            </div>
    
            <ul className="Stats">
                <li className="Stat">
                    <span className="Label">Followers</span>
                    <span className="Quantity">{followers}</span>
                </li>
                <li className="Stat">
                    <span className="Label">Views</span>
                    <span className="Quantity">{views}</span>
                </li>
                <li className="Stat">
                    <span className="Label">Likes</span>
                    <span className="Quantity">{likes}</span>
                </li>
            </ul>
        </div>
  );
}

SocialProfile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string,
}