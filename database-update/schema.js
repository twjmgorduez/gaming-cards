
"product-gallery".createCollection( "card")

const cursor = "product-gallery".find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}