function merge_sort_1(nums, lo=0, hi=nums.length) {
    if(hi - lo < 2) {return;}
    const mi = (lo + hi) >> 1;

    merge_sort_1(nums, lo, mi);
    merge_sort_1(nums, mi, hi);
    merge(lo, mi, hi);

    function merge(lo, mi, hi) {
        const arrb = [];
        const arrc = [];
        let lb = mi - lo;
        let lc = hi - mi;
        for(let i = 0; i < lb; i++) {
            arrb[i] = nums[i+lo];
        }
        for(let i = 0; i < lc; i++) {
            arrc[i] = nums[i+mi];
        }
        for(let i = lo, j = 0, k = 0; (j < lb || k < lc); ) {
            if(j < lb && (lc <= k || arrb[j] <= arrc[k])) {nums[i++] = arrb[j++]}
            if(k < lc && (lb <= j || arrb[j] > arrc[k])) {nums[i++] = arrc[k++]}
        }
    }
}
