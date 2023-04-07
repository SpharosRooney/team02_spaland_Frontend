import configDev from "./config.dev";
import configLocal from "./config.local";

const Config = () => {
  switch (process.env.NEXT_PUBLIC_RUN_MODE) {
    case "local":
      return configLocal;
    case "dev":
      return configDev;
    default:
      return configLocal;
  }
};

export default Config;
