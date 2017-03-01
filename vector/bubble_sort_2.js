function bubble2(arr, lo=0, hi=arr.length) {
    while(!bubble(arr, lo, hi--)) {
    }
    function bubble(arr, lo, hi) {
        let sorted = true;
        while(++lo < hi) {
            if(arr[lo-1] > arr[lo]) {
                [arr[lo-1], arr[lo]] = [arr[lo], arr[lo-1]];
                sorted = false;
            }
        }
        return sorted;
    }
    return arr;
}
