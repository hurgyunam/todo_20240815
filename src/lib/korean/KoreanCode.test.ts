import KoreanCode from "./KoreanCode";



it("test consonant last", () => {
    const last = 'ㅎ'.charCodeAt(0);
    const lastNext = String.fromCharCode(last + 1);

    expect(lastNext).toBe('ㅏ');

})

it("test vowel last", () => {
    const last = 'ㅣ'.charCodeAt(0);
    const lastNext = String.fromCharCode(last + 1);

    expect(lastNext).toBe('ㅤ');
})

it("test last consonant mixture last", () => { // 받침 테스트
    const params = ['ㄱ', 'ㄱ', 'ㅏ', 'ㅏ', 'ㄱ', 'ㅅ', 'ㄹ', 'ㅁ'];

    const codes = params.map(param => new KoreanCode(param.charCodeAt(0)));

    const canMerges = [];

    for(let i = 0; i < codes.length - 1; i++) {
        canMerges.push(codes[i].canMerge(codes[i+1]));
    }

    expect(canMerges).toStrictEqual([true, true, false, true, true, false, true])
})