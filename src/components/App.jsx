import { useState, useEffect } from 'react';

export const App = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(100500);

  const LocalKey = 'isFollowing';
  const LocalKeyNumber = 'followersCount';

  useEffect(() => {
    const localIsFollowing = window.localStorage.getItem(LocalKey);
    const localFollowersCount = window.localStorage.getItem(LocalKeyNumber);
    if (localIsFollowing && localFollowersCount) {
      setIsFollowing(localIsFollowing === 'true');
      setFollowersCount(parseInt(localFollowersCount));
    }
  }, []);

  const handleFollowClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount(followersCount - 1);
      window.localStorage.clear();
    } else {
      setIsFollowing(true);
      setFollowersCount(followersCount + 1);
      window.localStorage.setItem(LocalKey, 'true');
      window.localStorage.setItem(LocalKeyNumber, followersCount + 1);
    }
  };

  const formatNumber = number => {
    return number.toLocaleString('en-US');
  };

  const formattedFollowersCount = formatNumber(followersCount);

  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <p className="text">777 tweets</p>
        <p className="text">{formattedFollowersCount} Followers</p>
        <button
          onClick={handleFollowClick}
          className={isFollowing ? 'button button__active' : 'button'}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};
