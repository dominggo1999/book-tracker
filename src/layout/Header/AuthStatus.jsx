export const Authenticated = ({ children, isLogin }) => {
  return isLogin ? children : null;
};

export const NotAuthenticated = ({ children, isLogin }) => {
  return !isLogin ? children : null;
};
