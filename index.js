let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
    }
   
];
console.log(myCollection);

function describeItem(item) {
    console.log(item.name,item.count)
}

// Array.forEach

function describeCollection (collection) {
    collection.forEach(describeItem)
}
describeCollection(myCollection);

