import { useState, useEffect } from 'react';
import {
  picture,
  logo,
  elipse,
  rectangle,
  elipseX,
  pictureX,
  logoX,
} from 'images';

export const App = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(100500);

  const LocalKeyBtn = 'isFollowing';
  const LocalKeyNumber = 'followersCount';

  useEffect(() => {
    const localIsFollowing = window.localStorage.getItem(LocalKeyBtn);
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
      window.localStorage.setItem(LocalKeyBtn, 'true');
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
        <div className="logo__box">
          <picture>
            <source srcSet={`${logo} 1x,${logoX} 2x`} />
            <img src={logo} alt="logo" width="76" height="20" />
          </picture>
        </div>
        <div className="picture_box">
          <picture>
            <source srcSet={`${picture} 1x,${pictureX} 2x`} />
            <img src={picture} alt="message" width={307} />
          </picture>
        </div>
        <div className="wrapper__box">
          <div className="avatar__wrapper">
            <source srcSet={`${elipse} 1x,${elipseX} 2x`} />
            <img src={elipse} alt="message" width={80} className="elipse" />
            <picture>
              <img src={elipse} alt="avatar" width={62} className="avatar" />
            </picture>

            <img
              src={rectangle}
              alt="message"
              className="rectangle"
              width="380"
              height="8"
            />
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
    </div>
  );
};
