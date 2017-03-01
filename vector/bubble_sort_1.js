function bubble1(arr, lo=0, hi=arr.length) {
    while(hi) {
        bubble(arr, lo, hi);
        hi--;
    }
    function bubble(arr, lo, hi) {
        while(++lo < hi) {
            if(arr[lo-1] > arr[lo]) {
                [arr[lo-1], arr[lo]] = [arr[lo], arr[lo-1]];
            }
        }
    }
    return arr;
}
