
const arr = [{_id: 1,name: "Card 1"},{_id: 2,name: "Card 2"},{_id: 3,name: "Card 3"},{_id: 4,name: "Card 4"}];
db.collection.insertMany(arr);

cursor = db.collection.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}