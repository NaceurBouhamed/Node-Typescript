import express from "express";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d",
        app.get("port")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;