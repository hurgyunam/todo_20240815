

// it("가 between 나", () => {
//     const length = '나'.charCodeAt(0) - '가'.charCodeAt(0);

//     for(let i = 0; i < length; i++) {
//         console.log(String.fromCharCode('가'.charCodeAt(0) + i))
//     }
// });

it("basis formula", () => {
    const length = '까'.charCodeAt(0) - '가'.charCodeAt(0);

    const results = [];
    for(let i = 0; i < 19; i++) {
        results.push(String.fromCharCode('가'.charCodeAt(0) + i * length))
    }

    const expected = ['가', '까', '나', '다','따', '라', '마', '바','빠', '사', '싸', '아','자', '짜', '차', '카', '타', '파', '하'];

    for(let i = 0; i < expected.length; i++) {
        expect(results[i]).toBe(expected[i])
    }

});

// it("between 가 and 갸", () => {
//     const length = '갸'.charCodeAt(0) - '가'.charCodeAt(0);

//     const results = [];
//     for(let i = 0; i < length; i++) {
//         results.push(String.fromCharCode('가'.charCodeAt(0) + i))
//     }

//     console.log(results);
// });


it("secondary formula", () => {
    const length = '개'.charCodeAt(0) - '가'.charCodeAt(0);

    const results = [];
    for(let i = 0; i < 21; i++) {
        results.push(String.fromCharCode('가'.charCodeAt(0) + i * length))
    }

    const expected = 
    [
        '가', '개', '갸', '걔',
        '거', '게', '겨', '계',
        '고', '과', '괘', '괴',
        '교', '구', '궈', '궤',
        '귀', '규', '그', '긔',
        '기'
    ]

    for(let i = 0; i < expected.length; i++) {
        expect(results[i]).toBe(expected[i])
    }
});

it("final formula", () => {
    const length = '개'.charCodeAt(0) - '가'.charCodeAt(0);

    const results = [];
    for(let i = 0; i < length; i++) {
        results.push(String.fromCharCode('가'.charCodeAt(0) + i))
    }

    const expected = [
      '가', '각', '갂', '갃', '간', '갅', '갆',
      '갇', '갈', '갉', '갊', '갋', '갌', '갍',
      '갎', '갏', '감', '갑', '값', '갓', '갔',
      '강', '갖', '갗', '갘', '같', '갚', '갛',
    ]

    for(let i = 0; i < expected.length; i++) {
        expect(results[i]).toBe(expected[i])
    }
});

it("map control", () => {
    const test = "ㄷㅐ";

    const consonant = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const vowel = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ','ㅓ', 'ㅔ', 'ㅕ', 'ㅖ','ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ','ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const finalConsonant = ['가', '각', '갂', '갃', '간', '갅', '갆','갇', '갈', '갉', '갊', '갋', '갌', '갍','갎', '갏', '감', '갑', '값', '갓', '갔','강', '갖', '갗', '갘', '같', '갚', '갛'];

    
    const consonantIndex = consonant.indexOf(test[0]);

    expect(consonantIndex).toBe(3);

    const result = '가'.charCodeAt(0) + consonantIndex * ('까'.charCodeAt(0) - '가'.charCodeAt(0));

    expect(String.fromCharCode(result)).toBe('다')

    const vowelIndex = vowel.indexOf(test[1]);

    expect(vowelIndex).toBe(1);

    const result2 = result + vowelIndex * ('개'.charCodeAt(0) - '가'.charCodeAt(0));

    expect(String.fromCharCode(result2)).toBe('대');
})