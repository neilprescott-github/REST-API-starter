const app = require('./app').app;

const PORT = process.env.PORT || 5000;

// app listener
app.listen(PORT, () => {
    console.log(`API Listening on http://localhost:${PORT}`);
});
