const express = require('express');
const {  userRouter } = require('./routes/user');
const {  courseRouter } = require('./routes/course'); // Fixed 'require' and missing export
const {  adminRouter } = require('./routes/admin'); 
const app = express();

// Fixed parentheses to use round brackets instead of curly braces
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

// Properly initializing the routes
// createUserRoutes(app);
// createCourseRoutes(app);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
