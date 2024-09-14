import KoreanCode from "./KoreanCode";


export default class KoreanChar {
    private codes: KoreanCode[] = [];

    public append(code: KoreanCode) {
        this.codes.push(code);
    }

    public clear(): boolean {
        if(this.codes.length > 0) {
            this.codes = [];

            return true;
        } else {
            return false;
        }
    }

    // public build(): string {
    //     const nextCount = '나'.charCodeAt(0) - '가'.charCodeAt(0);
    //     const firstConsonant = this.codes[0];
    //     const secondVowel = this.codes[1];

    //     if(firstConsonant.isConsonant === false) {
    //         throw "KoreanChar의 첫번째 KoreanCode는 Consonant여야만 합니다."
    //     }

    //     if(secondVowel.isVowel === false) {
    //         throw "KoreanChar의 두번째 KoreanCode는 Vowel여야만 합니다."
    //     }

    //     const newIndex = '가'.charCodeAt(0) + firstConsonant.index * nextCount + secondVowel.index;

    //     return String.fromCharCode(newIndex);
    // }
}