import dotenv from "dotenv"
import app from "./app.js"

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`)
})

export default app
