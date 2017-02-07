var express = require('express');

var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

// app.engine('.hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');

// app.set('views', 'some/path/');

var data = {
    currency: {
        name: 'United States dollars',
        abbrev: 'USD'
    }, tours: [
        { name: 'Hood River', price: '$99.95' },
        { name: 'Oregon Coast', price: '$159.95' }
    ],
    specialsUrl: '/january-specials',
    currencies: [ 'USD', 'GBP', 'BTC', 'UAH' ]
};

app.get('/', function (req, res) {
    res.render('home', data);
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('listening on http://localhost:'+app.get('port'));
});
