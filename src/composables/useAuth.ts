import { useAuth0 } from "@auth0/auth0-vue";

export const useAuth = () => {
  const { user, loginWithRedirect, logout } = useAuth0();

  return {
    user,
    login: loginWithRedirect,
    logout,
  };
};
