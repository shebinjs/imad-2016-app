var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne: {
    title: 'Article One - Shebin John Samuel',
    heading: 'Article One',
    date: '18 September 2016',
    content: `<p>
                This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai. This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.
            </p>
            <p>
                This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai. This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.
            </p>
            <p>
                This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai. This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.
            </p>`
    },
    articleTwo: {
        title: 'Article Two - Shebin John Samuel',
        heading: 'Article Two',
        date: '19 September 2016',
        content: `<p>
                    This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai. This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.
                </p>
                <p>
                    This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai. This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.
                </p>`
    },
    articleThree: {
        title: 'Article Three - Shebin John Samuel',
        heading: 'Article Three',
        date: '19 September 2016',
        content: `<p>
                    This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai. This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.This is the content for this article. I am learning how to write an html page and getting its bits and pieces from Tanmai.
                </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <!doctype html>
        <html>
            <head>
                <link href="/ui/style.css" rel="stylesheet" />
                <title>
                    ${title}
                </title>
                <meta name="viewpart" content="width-device-width, initial-scale=1"/>
            </head>
            <body>
                <div class="fullBody">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    ${content}
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/shebin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shebin.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
