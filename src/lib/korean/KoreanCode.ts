
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
    private code: number;

    constructor(code: number) {
        this.code = code;
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
            const map = {
                'ㄱㄱ': 'ㄲ',
                'ㄱㅅ': 'ㄳ',
                'ㄴㅈ': 'ㄵ',
                'ㄴㅎ': 'ㄶ',
                'ㄷㄷ': 'ㄸ',
                'ㄹㄱ': 'ㄺ',
                'ㄹㅁ': 'ㄻ',
                'ㄹㅂ': 'ㄼ',
                'ㄹㅅ': 'ㄽ',
                'ㄹㅌ': 'ㄾ',
                'ㄹㅍ': 'ㄿ',
                'ㄹㅎ': 'ㅀ',
                'ㅂㅂ': 'ㅃ',
                'ㅂㅅ': 'ㅄ',
                'ㅅㅅ': 'ㅆ',
                'ㅈㅈ': 'ㅉ',
                'ㅗㅏ': 'ㅘ',
                'ㅗㅐ': 'ㅙ',
                'ㅗㅣ': 'ㅚ',
                'ㅜㅓ': 'ㅝ',
                'ㅜㅔ': 'ㅞ',
                'ㅜㅣ': 'ㅟ',
                'ㅡㅣ': 'ㅢ',
            }
    
            return String.fromCharCode(this.code, nextCode.code) in map;
        }
    }
}