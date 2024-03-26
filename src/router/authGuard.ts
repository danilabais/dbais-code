import { useAuth } from "@/composables";
import type { NavigationGuard } from "vue-router";

export const authGuard: NavigationGuard = (_, from) => {
  const { isAuth } = useAuth();
  if (!isAuth.value) {
    return from;
  }
  return true;
};
