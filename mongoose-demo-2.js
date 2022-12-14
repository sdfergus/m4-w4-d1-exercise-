const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true } );

const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', function () {
  // we're connected!
  const kittySchema = new mongoose.Schema( {
    name: String
  } )

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log( greeting );
  }

  const myKitten = mongoose.model( 'Kitten', kittySchema );

  //create an object
  const fluffy = new myKitten( { name: 'fluffy' } );
  fluffy.speak(); //Meow name is fluffy

} );


