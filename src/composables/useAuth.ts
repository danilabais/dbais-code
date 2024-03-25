import { useAuth0 } from "@auth0/auth0-vue";
import { useStorage } from '@vueuse/core'
import { computed } from "vue";
import type { role, user } from "@/types";


const questUser = {
  email: 'anonymous',
  picture: '/assets/user/anonymous.jpeg'
}

export const useAuth = () => {
  const { user:authUser,isAuthenticated, loginWithRedirect, logout:authLogout } = useAuth0();
  const isQuest = useStorage('isQuest', false)
  const role = useStorage<role>('userRole', 'user')
 
  const loginAsQuest = () => {
    role.value  = 'user'
    isQuest.value = true
  }
  
  const logout = () => {
    isQuest.value = false
    authLogout()
  }

  const login = ({ userRole }: { userRole: role }) => {
    role.value  = userRole
    loginWithRedirect()
  }

  const user = computed(() => {
    if (isQuest.value) {
      return questUser
    }
  
    return (authUser as user).value
  })

  const userRole = computed(() => role.value)


  const isAuth = computed(() => {
    if (isQuest.value) {
      return true
    }
      
    return isAuthenticated.value
  })

  
  return {
    isAuth,
    userRole,
    user,
    login,
    loginAsQuest,
    logout,
  };
};
