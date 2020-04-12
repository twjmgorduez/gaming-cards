
db.createCollection( "card")

const cursor = db.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}