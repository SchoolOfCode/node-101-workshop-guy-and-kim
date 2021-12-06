import chalk from "chalk"

import { myCollection } from "./collection.js"

function describeItem(item) {
    console.log(item.name,item.count)
}

// Array.forEach

function describeCollection (collection) {
    collection.forEach(describeItem)
}
describeCollection(myCollection);

