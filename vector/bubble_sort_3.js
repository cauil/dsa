function bubble3(arr, lo=0, hi=arr.length) {
    while(lo < (hi=bubble(arr, lo, hi))) {
    }
    function bubble(arr, lo, hi) {
        let last = lo;
        while(++lo < hi) {
            if(arr[lo-1] > arr[lo]) {
                [arr[lo-1], arr[lo]] = [arr[lo], arr[lo-1]];
                last = lo;
            }
        }
        return last;
    }
    return arr;
}
