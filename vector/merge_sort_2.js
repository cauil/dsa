function merge_sort_2(nums, lo=0, hi=nums.length) {
    if(hi - lo < 2) {return;}
    const mi = (lo + hi) >> 1;

    merge_sort_2(nums, lo, mi);
    merge_sort_2(nums, mi, hi);
    merge(lo, mi, hi);

    function merge(lo, mi, hi) {
        const arrb = [];
        let lb = mi - lo;

        for(let i = 0; i < lb; i++) {
            arrb[i] = nums[i+lo];
        }
        for(let i = lo, j = 0, k = mi; j < lb; ) {
            if(hi <= k || arrb[j] <= nums[k]) {nums[i++] = arrb[j++];}
            if(k < hi && arrb[j] > nums[k]) {nums[i++] = nums[k++];}
        }
    }
}
