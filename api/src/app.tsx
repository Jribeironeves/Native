import express, { Application } from "express";

// Routes
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/post.routes";

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.routes();
    }

    private settings() {
        this.app.set("port", this.port || process.env.PORT || 3000);
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use("/posts", PostRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get("port"));
        console.log("Server on port", this.app.get("port"));
    }

}