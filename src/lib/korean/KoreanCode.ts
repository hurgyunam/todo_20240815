
/**
 * 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ',
    'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ',
    'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ',
    'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ',
    'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ',
    'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ', 'ㅤ', 'ㅥ', 'ㅦ',
    'ㅧ', 'ㅨ', 'ㅩ', 'ㅪ', 'ㅫ', 'ㅬ', 'ㅭ', 'ㅮ', 'ㅯ',
    'ㅰ', 'ㅱ', 'ㅲ', 'ㅳ', 'ㅴ', 'ㅵ', 'ㅶ', 'ㅷ', 'ㅸ',
    'ㅹ', 'ㅺ', 'ㅻ', 'ㅼ', 'ㅽ', 'ㅾ', 'ㅿ', 'ㆀ', 'ㆁ',
    'ㆂ', 'ㆃ', 'ㆄ', 'ㆅ', 'ㆆ', 'ㆇ', 'ㆈ', 'ㆉ', 'ㆊ',
    'ㆋ', 'ㆌ'
 */


export default class KoreanCode {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    get origin(): string {
        return this.text;
    }

    /**
     * @returns ascii code if not shift, but if it is shift return -1
     */
    get code(): number {
        if(this.text !== "Shift") {
            return this.text.charCodeAt(0);
        } else {
            return -1;
        }
    }

    get isConsonant() {
        const firstNum = 'ㄱ'.charCodeAt(0);
        const lastNum = 'ㅎ'.charCodeAt(0);

        return firstNum <= this.code && this.code <= lastNum;
    }

    get isVowel() {
        const firstNum = 'ㅏ'.charCodeAt(0);
        const lastNum = 'ㅣ'.charCodeAt(0);

        return firstNum <= this.code && this.code <= lastNum;
    }

    /**
     * 
     * @param nextCode 
     * @returns 
     */
    public canMerge(nextCode: KoreanCode): boolean {
        if(this.isConsonant && nextCode.isVowel) {
            return true;
        } else if(this.isVowel && nextCode.isConsonant) {
            return true;
        } else {
            const map: Map<string, string> = new Map([
                ['ㄱㄱ', 'ㄲ'],
                ['ㄱㅅ', 'ㄳ'],
                ['ㄴㅈ', 'ㄵ'],
                ['ㄴㅎ', 'ㄶ'],
                ['ㄷㄷ', 'ㄸ'],
                ['ㄹㄱ', 'ㄺ'],
                ['ㄹㅁ', 'ㄻ'],
                ['ㄹㅂ', 'ㄼ'],
                ['ㄹㅅ', 'ㄽ'],
                ['ㄹㅌ', 'ㄾ'],
                ['ㄹㅍ', 'ㄿ'],
                ['ㄹㅎ', 'ㅀ'],
                ['ㅂㅂ', 'ㅃ'],
                ['ㅂㅅ', 'ㅄ'],
                ['ㅅㅅ', 'ㅆ'],
                ['ㅈㅈ', 'ㅉ'],
                ['ㅗㅏ', 'ㅘ'],
                ['ㅗㅐ', 'ㅙ'],
                ['ㅗㅣ', 'ㅚ'],
                ['ㅜㅓ', 'ㅝ'],
                ['ㅜㅔ', 'ㅞ'],
                ['ㅜㅣ', 'ㅟ'],
                ['ㅡㅣ', 'ㅢ']
            ]);
    
            
            return map.has(String.fromCharCode(this.code, nextCode.code));
        }
    }

    get consonantStart() {
        const map: Map<string, string> = new Map([
            ['ㄱ', '가'],
            ['ㄲ', '까'],
            ['ㄴ', '나'],
            ['ㄷ', '다'],
            ['ㄸ', '따'],
            ['ㄹ', '라'],
            ['ㅁ', '마'],
            ['ㅂ', '바'],
            ['ㅃ', '빠'],
            ['ㅅ', '사'],
            ['ㅆ', '싸'],
            ['ㅇ', '아'],
            ['ㅈ', '자'],
            ['ㅉ', '짜'],
            ['ㅊ', '차'],
            ['ㅋ', '카'],
            ['ㅌ', '타'],
            ['ㅍ', '파'],
            ['ㅎ', '하']
        ]);
    
        return map.get(String.fromCharCode(this.code));
    }

    get vowelIndex() {
        const vowelList = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ'];

        return vowelList.indexOf(this.text);
    }

    public mergeConsonant(index: number) {
        const consonantStart = this.consonantStart;

        if(consonantStart !== undefined) {
            return String.fromCharCode(consonantStart.charCodeAt(0) + index);
        } else {
            return "";
        }
    }
}