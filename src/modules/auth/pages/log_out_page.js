const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};

const LogoutPage = ({history}) => {
  logout();
  history.push('/');
  window.location.reload();

  return null;
};

export default LogoutPage;
