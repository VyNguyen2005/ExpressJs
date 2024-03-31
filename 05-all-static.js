

const express = require(`express`);
const path = require(`path`);

// phục vụ tệp tĩnh từ thư mục `./public`
// phục vụ HTML/CSS/JS/IMAGE... mà không cần tạo route riêng
const app = express();

app.use(express.static(`./public`));

// app.get(`/`, (req, res) => {
//     res.sendFile(path.resolve(__dirname, `./node-express-course/02-express-tutorial/navbar-app/index.html`));
// });

app.all(`*`, (req, res) => {
    res.status(404).send(`resource not found`);
});

app.listen(5000, () => {
    console.log(`server islistening on port 5000....`);
});
