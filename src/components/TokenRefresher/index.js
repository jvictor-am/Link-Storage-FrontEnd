import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../helpers/account';
import { getTokenExpire } from '../../helpers/jwt';
// import { secondsToReadableTime } from '../../helpers/datetime';
import { getRefreshToken } from '../../actions/AccountActions';

const TokenRefresher = ({ getRefreshToken }) => {
  const TRESHOLD = 30;
  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpire(token);
    const secondsToExpire = expires - Date.now() / 1000;
    // const readableTime = secondsToReadableTime(secondsToExpire);

    // console.log('***TokenRefresher.readableTime', readableTime);

    return secondsToExpire;
  };

  useEffect(() => {
    const secondsToExpire = calculate() - TRESHOLD;
    // const readableTime = secondsToReadableTime(secondsToExpire);
    // console.log('***TokenRefresher.readableTime', readableTime);
    const id = setTimeout(getRefreshToken, secondsToExpire * 1000);

    return () => {
      clearTimeout(id);
    };
  }, [getRefreshToken]);

  return null;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getRefreshToken })(TokenRefresher);
