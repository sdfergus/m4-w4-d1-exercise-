const mongoose = require( 'mongoose' );
// mongoose.connect( 'mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.set( "strictQuery", true );
mongoose.connect( 'mongodb://127.0.0.1:27017/test1' );

const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', function () {
  // we're connected!
  const fruitSchema = new mongoose.Schema( {
    name: String
  } );
  const Fruit = mongoose.model( 'Fruit', fruitSchema );

  const myapple = new Fruit( { name: 'apple' } );
  console.log( myapple.name ); //'apple'
} );
