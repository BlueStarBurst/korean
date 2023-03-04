import * as hangul from 'hangul-js';

var flip = false;
var flip2 = false;

const check3letters = (str, i) => {
    var test = str[i] + str[i + 1] + str[i + 2];
    if (phonetics[test] === undefined) {
        return "";
    } else {
        flip = true;
        flip2 = true;
        return phonetics[test];
    }
}

const check2letters = (str, i) => {
    var test = str[i] + str[i + 1];
    if (phonetics[test] === undefined) {
        return "";
    } else {
        flip = true;
        return phonetics[test];
    }
}

export default function getHangul(str) {
    var hangul = require('hangul-js');
    var hangulStr = hangul.disassemble(str);

    var hangulStr = hangulStr.map((x, i) => {
        if (flip2) {
            flip2 = false;
            return "";
        }
        if (flip) {
            flip = false;
            return "";
        }

        var test = check3letters(hangulStr, i);
        if (test !== "") {
            return test;
        }

        test = check2letters(hangulStr, i);
        if (test !== "") {
            return test;
        }

        if (phonetics[x] === undefined) {
            return x;
        }

        return phonetics[x];
    })

    return hangul.assemble(hangulStr);
}

const phonetics = {
    "g": "ㄱ",
    "gg": "ㄲ",
    "n": "ㄴ",
    "d": "ㄷ",
    "dd": "ㄸ",
    "r": "ㄹ",
    "m": "ㅁ",
    "b": "ㅂ",
    "bb": "ㅃ",
    "s": "ㅅ",
    "ss": "ㅆ",
    "ng": "ㅇ",
    "j": "ㅈ",
    "jj": "ㅉ",
    "ch": "ㅊ",
    "k": "ㅋ",
    "t": "ㅌ",
    "p": "ㅍ",
    "h": "ㅎ",
    "a": "ㅏ",
    "ae": "ㅐ",
    "ya": "ㅑ",
    "yae": "ㅒ",
    "eo": "ㅓ",
    "e": "ㅔ",
    "yeo": "ㅕ",
    "ye": "ㅖ",
    "o": "ㅗ",
    "wa": "ㅘ",
    "wae": "ㅙ",
    "oe": "ㅚ",
    "yo": "ㅛ",
    "u": "ㅜ",
    "wo": "ㅝ",
    "we": "ㅞ",
    "wi": "ㅟ",
    "yu": "ㅠ",
    "eu": "ㅡ",
    "ui": "ㅢ",
    "i": "ㅣ",
    "": " ",
    " ": " "
}