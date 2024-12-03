const express = require('express');
const { createUserRoutes, userRouter } = require('./routes/user');
const { createCourseRoutes, courseRouter } = require('./routes/course'); // Fixed 'require' and missing export
const app = express();

// Fixed parentheses to use round brackets instead of curly braces
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

// Properly initializing the routes
// createUserRoutes(app);
// createCourseRoutes(app);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
