import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

function FriendListItem({ isOnline, avatar, name }) {
    const statusClass = isOnline ? s.active : s.notActive;
    return (
        <>
            <span className={statusClass}>{ isOnline }</span>
            <img className={s.avatar} src={ avatar } alt="User avatar" width="48" />
            <p className={s.name}>{ name }</p>
        </> 
    );
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,    
};

export default FriendListItem;