import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequireAuth = ({ user, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
  }, [user]);
  return children;
};
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
RequireAuth.propTypes = {
  user: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(RequireAuth);
