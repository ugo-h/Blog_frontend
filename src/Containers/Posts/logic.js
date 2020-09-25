
function createEqualSubarrays(arr, numOfElements) {
    const n = Math.ceil(arr.length/numOfElements);
    const newArr = [];
    for(let i = 0; i< n; i++) {
        const subArr = []
        for(let j = i*numOfElements; j < i*numOfElements+numOfElements; j++) {
            if(arr[j]) {
                subArr.push(arr[j])
            }
        }
        newArr.push(subArr)
    }       
    return newArr;
}

function sortByDate(items) {
    items.sort((a, b) =>{
        if(a.date < b.date) {
            return 1
        }
        if(a.date > b.date) {
            return -1
        }
        return 0;
    });
    return items;
}

export {
    createEqualSubarrays,
    sortByDate
}
