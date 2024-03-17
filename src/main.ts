import App from "./app/App.vue";
import { createApp } from "vue";
import { createRouter } from "./router";
import { createAuth0 } from "@auth0/auth0-vue";
import { authConfig } from "@/app/config";
import "@/app/styles/main.scss";

const app = createApp(App);

app
  .use(createRouter())
  .use(
    createAuth0({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  )

  .mount("#app");
