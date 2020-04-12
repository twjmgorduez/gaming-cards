
//const arr = [{_id: 1,name: "Card 1",_v: 0},{_id: 2,name: "Card 2",_v: 0},{_id: 3,name: "Card 3",_v: 0},{_id: 4,name: "Card 4",_v: 0}];
//db.card.insertMany(arr);

const cursor = db.card.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}