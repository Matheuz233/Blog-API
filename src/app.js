import express from "express"
import categoryRoutes from "./routes/category-routes.js"
import postRoutes from "./routes/post-routes.js"
import userRoutes from "./routes/user-routes.js"

const app = express()

app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/posts", postRoutes)

export default app
