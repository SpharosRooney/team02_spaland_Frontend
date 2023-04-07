
import getConfigs from "./config.common";

const baseUrl = 'https://localhost:3000';
const mode = 'local';

const configLocal = getConfigs({
  baseUrl,
  mode,
});

export default configLocal;