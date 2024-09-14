import KoreanChar from "./KoreanChar";
import KoreanCode from "./KoreanCode";

// it("test char split no final consonant", () => {
//     const params = ['ㄴ', 'ㅏ', 'ㄹ', 'ㅏ'].map(param => new KoreanCode(param));

//     let result = "";
//     const koreanChar: KoreanChar = new KoreanChar();

//     for(let i = 0; i < params.length; i++) {
//         const param = params[i];

//         koreanChar.append(param);

//         if(param.isVowel) {
//             result += koreanChar.build();

//             koreanChar.clear();
//         }
//     }

//     expect(result).toBe("나라");
// })