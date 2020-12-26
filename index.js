const customExpress = require("./config/customExpress");
const app = customExpress();

// eslint-disable-next-line no-console
app.listen(3001, () => console.log("servidor rodando na porta 3001"));
