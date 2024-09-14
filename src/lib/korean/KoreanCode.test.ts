import KoreanCode from "./KoreanCode";



it("test consonant last", () => {
    const last = 'ㅎ'.charCodeAt(0);
    const lastNext = String.fromCharCode(last + 1);

    expect(lastNext).toBe('ㅏ');

})

it("test vowel order", () => {
    const code = 'ㅏ'.charCodeAt(0);
    const expected = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ'];

    for(let i = 0; i < expected.length; i++) {
        const nextText = String.fromCharCode(code + i);

        console.log(i, nextText, expected[i]);
        
        expect(nextText).toBe(expected[i]);
    }
})

it("test vowel last", () => {
    const last = 'ㅣ'.charCodeAt(0);
    const lastNext = String.fromCharCode(last + 1);

    expect(lastNext).toBe('ㅤ');
})

it("test last consonant mixture last", () => { // 받침 테스트
    const params = ['ㄱ', 'ㄱ', 'ㅏ', 'ㅏ', 'ㄱ', 'ㅅ', 'ㄹ', 'ㅁ'];

    const codes = params.map(param => new KoreanCode(param));

    const canMerges = [];

    for(let i = 0; i < codes.length - 1; i++) {
        canMerges.push(codes[i].canMerge(codes[i+1]));
    }

    expect(canMerges).toStrictEqual([true, true, false, true, true, false, true])
})


it("test char split no final consonant raw version", () => {
    const params = ['ㄴ', 'ㅏ', 'ㅁ', 'ㅜ'].map(param => new KoreanCode(param));

    expect(params[0].consonantStart).toBe('나');
    expect(params[3].origin).toBe("ㅜ");
    
    expect(params[2].mergeConsonant(params[3].vowelIndex)).toBe('무');
})