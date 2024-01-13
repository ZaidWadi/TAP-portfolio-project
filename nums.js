function FindNo(nums, range_start) {
    const n = nums.length;
    const RangeSum = ((n * (n + 1)) / 2) + range_start;
    const RealSum = sum(nums);
    const MissingNo = RangeSum - RealSum;
    return MissingNo;
}
/*
    explanation:
        for any array of ordered positive integers, its sum is (((length * (length+1))/2) + range start)
        to find any missing number within the array, we can simply subtract the expected sum based on the formula from the actual answer

    example:
        a = {0,1,2,3,4,5} (len(5), range [0,5])
        a1 = 0+1+2+3+4+5 (sum(a)) 
        a2 = 0+5+4+3+2+1 (this is simply a1 mirrored)
        c = 0+6+6+6+6+6 (this gives us sum(a)*2)
        c = 6*5 + 0 (len(a)*(len(a)+1) + range start)
          = 30 
        sum(a) = sum c /2 + 0 (we divide by 2 since we multiplied earlier)
        sum(a) = 15

        if a* was {0,1,2,4,5}
        we find sum(a*) which is 12
        we subtract sum(a*) from sum(a)
        missing number = 15-12
        = 3
    */
