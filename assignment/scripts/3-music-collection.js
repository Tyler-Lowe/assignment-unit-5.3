console.log('***** Music Collection *****')

let collection = [];

function addToCollections (title, artist, yearPublished) {
    let collectionObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(collectionObject);
    return console.log(collectionObject);
}

addToCollections('Hells Bells', 'AC/DC', '1968');
addToCollections('Achy Breaky Heart', 'Billy Ray', '1990');
addToCollections('Highway To Hell', 'AC/DC', '1971');
addToCollections('Afroman', 'Colt-45', '2003');
addToCollections('Weezer', 'Beverly Hills', '2007');
addToCollections('50 Cent', 'Wanksta', '2007');

console.log(collection);

function showCollection (arr) {
    console.log(arr.length);
    for (let item of arr) {
        console.log(`${item.title} by ${item.artist} published in ${item.yearPublished}`);
    }
}

showCollection(collection) 
// it works

function findByArtist(artist) {
    let artistFound = [];
    for (let item of collection) {
        if (item.artist.toLowerCase() === artist.toLowerCase()) {
            artistFound.push(item)
        }
    }
    return console.log(artistFound);
}

findByArtist('harry')