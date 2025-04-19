import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import { UserContext } from "@/contexts/UserContext";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const userContext = useContext(UserContext);

  // const [currentUser, setCurrentUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await authService.getCurrentUser();
  //       setCurrentUser(data.user);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  if (userContext.isLoading) {
    return <div>Loading...</div>;
  }

  // if (!currentUser) {
  //   const path = encodeURIComponent(location.pathname);
  //   return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  // }

  if (!userContext.user) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
