
import getConfigs from "./config.common";

const baseUrl = "http://10.10.10.51:8080";
const mode = 'local';

const configLocal = getConfigs({
  baseUrl,
  mode,
});

export default configLocal;