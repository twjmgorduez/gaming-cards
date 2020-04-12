
"product-gallery".createCollection( "card",
    {
      _id: number,
      name: string,
      _v: number
    }
 )

const cursor = "product-gallery".find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}