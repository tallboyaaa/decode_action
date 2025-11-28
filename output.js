//Fri Nov 28 2025 04:03:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x6e59g;
const axios = require("axios");
_0x6e59g = 7;
var _0x72cdcd = 12;
const CryptoJS = require("crypto-js");
_0x72cdcd = 14;
var _0xeb1f1d = 8;
const fs = require("fs");
_0xeb1f1d = "hgfegl";
var _0x317f9a;
const JSEncrypt = require("node-jsencrypt");
_0x317f9a = "lmeooi".split("").reverse().join("");
const {
  v4: v4
} = require("uuid");
const nodeRsa = require("node-rsa");
function validateXbkkm(_0x53b524) {
  var _0x47413e = 9;
  const _0x3c9fa4 = process.env.xbkkm;
  _0x47413e = 0;
  _0x53b524 = "QQ群1029832220";
  if (!_0x3c9fa4) {
    console.log("❌ 未设置环境变量xbkkm");
    console.log("0222389201群QQ :为值，mkkbx量变境环置设请 ��".split("").reverse().join(""));
    console.log("💡 例如: xbkkm='QQ群1029832220'");
    return false;
  }
  if (_0x3c9fa4 !== _0x53b524) {
    console.log("败失证验密卡 ❌".split("").reverse().join(""));
    console.log("确正否是值的mkkbx量变境环查检请 ��".split("").reverse().join(""));
    console.log("💡 正确值应为: QQ群1029832220");
    return false;
  }
  console.log("✅ 卡密验证通过");
  return true;
}
(async () => {
  console.log("🚀 脚本启动，开始初始化...");
  if (!validateXbkkm()) {
    process.exit(1);
    return;
  }
  console.log("✅ 卡密验证通过，继续执行脚本...");
})();
function validateDate(_0x6ce4f4) {
  var _0x5c9ec6 = 11;
  const _0x460d1d = new Date();
  _0x5c9ec6 = "opcinb".split("").reverse().join("");
  var _0x27948e = 5;
  const _0x51c1f4 = new Date("2025-11-25");
  _0x27948e = 9;
  _0x6ce4f4 = "npm ERR!code 1\n        npm ERR!path / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!command failed\n        npm ERR!command sh - c node - gyp rebuild ^\n        npm ERR!1 error generated.\n        npm ERR!make: ** * [Release / obj.target / binding / src / binding.o] Error 1\n        npm ERR!gyp ERR!build error\n        npm ERR!gyp ERR!stack Error: \n        failed with exit code: 2\n        npm ERR!gyp ERR!stack at ChildProcess.onExit(/Users/a.aashiq / Desktop / Projects / sdqui / node_modules / node - gyp / lib / build.js: 262: 23)\n        npm ERR!gyp ERR!stack at ChildProcess.emit(node: events: 365: 28)\n        npm ERR!gyp ERR!stack at Process.ChildProcess._handle.onexit(node: internal / child_process: 290: 12)\n        npm ERR!gyp ERR!System Darwin 20.4 .0\n        npm ERR!gyp ERR!command \"/opt/homebrew/Cellar/node/16.2.0/bin/node\"\n        \"/Users/a.aashiq/Desktop/Projects/sdqui/node_modules/.bin/node-gyp\"\n        \"rebuild\"\n        npm ERR!gyp ERR!cwd / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!gyp ERR!node - v v16 .2 .0\n        npm ERR!gyp ERR!node - gyp - v v3 .8 .0\n        npm ERR!gyp ERR!not ok\n\n        npm ERR!A complete log of this run can be found in:";
  return true;
}
async function validateLkey() {
  console.log("✅ Lkey验证已跳过");
  return true;
}
let pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
var _0x97eae;
const decrypt = new JSEncrypt();
_0x97eae = 9;
const mySetTimeout = setTimeout.bind(globalThis);
var encryptRequest = function (_0x52609c, _0x2a3377, _0x44bfac) {
  var _0x526d3d = 5;
  var _0x5c8593 = CryptoJS.enc.Utf8.parse(_0x44bfac);
  _0x526d3d = 1;
  var _0x50bea7 = CryptoJS.enc.Utf8.parse(_0x52609c);
  var _0x369626 = 14;
  var _0x197313 = CryptoJS.TripleDES.encrypt(_0x5c8593, _0x50bea7, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x2a3377)
  });
  _0x369626 = 10;
  return _0x197313.ciphertext.toString();
};
var decryptRequest = function (_0x1a2e05, _0x44a173, _0x435612) {
  var _0x24a0eb = 5;
  var _0x5ef925 = CryptoJS.enc.Utf8.parse(_0x1a2e05);
  _0x24a0eb = 9;
  var _0x57b040 = CryptoJS.enc.Hex.parse(_0x435612);
  var _0x18fddf;
  var _0x5e6e4d = CryptoJS.enc.Base64.stringify(_0x57b040);
  _0x18fddf = 12;
  var _0x2fc7c8 = CryptoJS.TripleDES.decrypt(_0x5e6e4d, _0x5ef925, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x44a173)
  });
  return CryptoJS.enc.Utf8.stringify(_0x2fc7c8).toString();
};
function getTimestampYYYYMMDDHHmmss() {
  let _0x25427e = new Date();
  var _0x44d81a = 0;
  var _0x5d6869 = _0x25427e.getFullYear();
  _0x44d81a = 8;
  var _0x37f5fa = _0x25427e.getMonth() + 1;
  var _0x3c11e8 = 12;
  var _0x1b6804 = _0x25427e.getDate();
  _0x3c11e8 = 9;
  var _0x2ffdd3 = 8;
  var _0x1fc1d9 = _0x25427e.getHours();
  _0x2ffdd3 = 1;
  var _0x5b3257 = 1;
  var _0x1b5d9f = _0x25427e.getMinutes();
  _0x5b3257 = 3;
  var _0x5ca998 = 7;
  var _0x5997fe = _0x25427e.getSeconds();
  _0x5ca998 = "oabdfa";
  _0x37f5fa < 10 && (_0x37f5fa = "0" + _0x37f5fa);
  _0x1b6804 < 10 && (_0x1b6804 = "0" + _0x1b6804);
  _0x1fc1d9 < 10 && (_0x1fc1d9 = "0" + _0x1fc1d9);
  _0x1b5d9f < 10 && (_0x1b5d9f = "0" + _0x1b5d9f);
  _0x5997fe < 10 && (_0x5997fe = "0" + _0x5997fe);
  let _0x4dde2c = _0x5d6869 + "" + _0x37f5fa + "" + _0x1b6804 + "" + _0x1fc1d9 + "" + _0x1b5d9f + "" + _0x5997fe;
  return _0x4dde2c;
}
function formatDateTime(_0x349f27, _0x15db2a = null) {
  const _0x33a903 = _0x15db2a ? new Date(_0x15db2a) : new Date();
  let _0x7c970 = {
    "M+": _0x33a903.getMonth() + 1,
    "d+": _0x33a903.getDate(),
    "H+": _0x33a903.getHours(),
    "m+": _0x33a903.getMinutes(),
    "s+": _0x33a903.getSeconds(),
    "q+": Math.floor((_0x33a903.getMonth() + 3) / 3),
    S: _0x33a903.getMilliseconds()
  };
  new RegExp("(y+)", "").test(_0x349f27) && (_0x349f27 = _0x349f27.replace(RegExp.$1, (_0x33a903.getFullYear() + "").substr(4 - RegExp.$1.length)));
  for (let _0x5da209 in _0x7c970) {
    new RegExp("(" + _0x5da209 + ")").test(_0x349f27) && (_0x349f27 = _0x349f27.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x7c970[_0x5da209] : ("00" + _0x7c970[_0x5da209]).substr(("" + _0x7c970[_0x5da209]).length)));
  }
  return _0x349f27;
}
function maskPhoneNumber(_0x43e8fc) {
  return _0x43e8fc.replace(new RegExp("^(\\d{3})(\\d*)(\\d{4})$", ""), "3$****1$".split("").reverse().join(""));
}
function sleep(_0x5e1cd3) {
  return new Promise(function (_0x250b23) {
    mySetTimeout(_0x250b23, _0x5e1cd3);
  });
}
function getTimestampFormatted() {
  let _0x194f16 = new Date();
  var _0x24b97f;
  var _0x298872 = _0x194f16.getFullYear();
  _0x24b97f = 5;
  var _0x169a16;
  var _0x4a79e1 = _0x194f16.getMonth() + 1;
  _0x169a16 = 11;
  var _0x5f39f5 = _0x194f16.getDate();
  var _0x2c676f = 9;
  var _0x872085 = _0x194f16.getHours();
  _0x2c676f = "lmcepk";
  var _0x2bff23 = 16;
  var _0x25ca79 = _0x194f16.getMinutes();
  _0x2bff23 = 6;
  var _0x4cc505;
  var _0x2d5241 = _0x194f16.getSeconds();
  _0x4cc505 = "aoheqd";
  _0x4a79e1 < 10 && (_0x4a79e1 = "0" + _0x4a79e1);
  _0x5f39f5 < 10 && (_0x5f39f5 = "0" + _0x5f39f5);
  _0x872085 < 10 && (_0x872085 = "0" + _0x872085);
  _0x25ca79 < 10 && (_0x25ca79 = "0" + _0x25ca79);
  _0x2d5241 < 10 && (_0x2d5241 = "0" + _0x2d5241);
  let _0xdf639b = _0x298872 + "-" + _0x4a79e1 + "-" + _0x5f39f5 + " " + _0x872085 + ":" + _0x25ca79 + ":" + _0x2d5241;
  return _0xdf639b;
}
async function sleepBusy(_0x447363) {
  const _0x1ad466 = Date.now();
  while (Date.now() - _0x1ad466 < _0x447363) {
    await new Promise(_0x104efc => process.nextTick(_0x104efc));
  }
}
function generateRandomString(_0x581733) {
  var _0x583c14 = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210".split("").reverse().join("");
  var _0x423d20 = 14;
  var _0x2b28dc = "";
  _0x423d20 = 5;
  for (var _0x3e9e82 = _0x581733; _0x3e9e82 > 0; --_0x3e9e82) {
    _0x2b28dc += _0x583c14[Math.floor(Math.random() * _0x583c14.length)];
  }
  return _0x2b28dc;
}
async function sendLotteryWinMessage(_0x5df3de, _0x4615b6, _0x25795b = "", _0x489775 = "") {
  var _0x2be62c = 3;
  const _0x3b5954 = {
    url: "https://wxpusher.zjiecode.com/api/send/message",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appToken: _0x25795b,
      content: String(_0x5df3de),
      summary: _0x4615b6,
      contentType: 1,
      topicIds: [],
      uids: [_0x489775],
      verifyPayType: "2"
    }
  };
  _0x2be62c = 17;
  try {
    await axios(_0x3b5954);
    console.log("Message sent successfully");
  } catch (_0x5f41a9) {
    console.error("Failed to send message:", _0x5f41a9);
  }
}
async function loginPhone(_0x29de6a, _0x1f9809, _0x44c27e, _0x14c525 = false) {
  const _0x8e94cc = {
    ivQMO: "setPrivateKey",
    QoVka: function (_0x3070ef) {
      return _0x3070ef();
    },
    uIBdM: function (_0x20d3dc, _0x348e72) {
      return _0x20d3dc + _0x348e72;
    },
    HEGZl: function (_0x3299cc, _0x3431c2) {
      return _0x3299cc ^ _0x3431c2;
    },
    egkgC: function (_0x1d6333, _0x418537) {
      return _0x1d6333(_0x418537);
    },
    cNsfR: function (_0x250b69, _0x11c947) {
      return _0x250b69 + _0x11c947;
    },
    RnYxk: function (_0x939892, _0x1b5f87) {
      return _0x939892 ^ _0x1b5f87;
    },
    TJtpj: function (_0x3df9aa, _0x2d3913) {
      return _0x3df9aa ^ _0x2d3913;
    },
    DvzKw: "encrypt",
    miILc: function (_0x1d428c, _0x490985) {
      return _0x1d428c + _0x490985;
    },
    OdqGc: function (_0x16a0ef, _0x29d3d0) {
      return _0x16a0ef + _0x29d3d0;
    },
    pgEpO: ".4.51 41 enohPi",
    KJvso: "substring",
    DOeEV: function (_0x149a71, _0x5eb46e) {
      return _0x149a71 ^ _0x5eb46e;
    },
    dIfeg: function (_0x30eba4, _0xffced7) {
      return _0x30eba4 ^ _0xffced7;
    },
    RAGuA: ".0$$$0",
    eKbQr: function (_0x3af1ff, _0x1df2c5) {
      return _0x3af1ff ^ _0x1df2c5;
    },
    PQtSS: function (_0x1d93e2, _0x3c4e92) {
      return _0x1d93e2 ^ _0x3c4e92;
    },
    hTSzE: function (_0x3931cd, _0x2eeb17) {
      return _0x3931cd <= _0x2eeb17;
    },
    HBnvV: function (_0x3f695b, _0x1052e8) {
      return _0x3f695b(_0x1052e8);
    },
    Afkeh: function (_0x5236ba, _0x56aa72) {
      return _0x5236ba == _0x56aa72;
    },
    mhSYy: function (_0x2526e5, _0x457728) {
      return _0x2526e5 ^ _0x457728;
    },
    xXsPn: "userLoginNormal",
    wXCUb: "#10.5.0#channel50#iPhone 14 Pro Max#",
    vPwyJ: "20002",
    EqBsJ: "110003",
    GESwP: "Sid98s",
    eSQHl: "test",
    EcfaO: "15.4.0",
    bTCXI: "from",
    hnqSe: "map",
    VsYgk: "join",
    XcSvV: function (_0x3c6511, _0x505c9d) {
      return _0x3c6511 + _0x505c9d;
    },
    foWoi: function (_0x1c1487, _0x32318a) {
      return _0x1c1487 ^ _0x32318a;
    },
    MwaFC: function (_0x5091fc, _0x548402) {
      return _0x5091fc || _0x548402;
    },
    ektGa: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
    Httak: "POST",
    qwCZN: function (_0x45d0f1, _0x1ccb19) {
      return _0x45d0f1 ^ _0x1ccb19;
    },
    Hfqsj: "data",
    CHsyU: "responseDa" + "at".split("").reverse().join(""),
    wGhHU: "loginSuccessResult",
    dcxqv: function (_0xc57291, _0x3390e0) {
      return _0xc57291 + _0x3390e0;
    },
    GKzrk: function (_0x39899b, _0x47c027) {
      return _0x39899b ^ _0x47c027;
    },
    XebCT: function (_0x50f311, _0x1f1ffc) {
      return _0x50f311 ^ _0x1f1ffc;
    },
    XyiHj: "token",
    xsCRO: function (_0x29902e, _0x3d340a) {
      return _0x29902e + _0x3d340a;
    },
    pmKmt: function (_0x4558b0, _0x3fa5ef) {
      return _0x4558b0 ^ _0x3fa5ef;
    },
    PmRXQ: "userId",
    xHoXE: function (_0x21899c) {
      return _0x21899c();
    },
    WGdmC: function (_0x2386f6, _0x2ea381) {
      return _0x2386f6 + _0x2ea381;
    },
    iSzFQ: "<Request>\n                                <HeaderInfos>\n                                    <Code>getSingle</Code>\n                                    <Timestam" + ">p".split("").reverse().join(""),
    fyPCW: "</Timestamp>\n                                    <BroadAccount></BroadAccount>\n                                    <BroadToken></BroadToken>\n                                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                                    <ShopId>20002</ShopId>\n                                    <Source>110003</Source>\n                                    <SourcePassword>Sid98s</SourcePassword>\n                                    <Token>",
    kQOgp: ">emaNnigoLresU<                                    \n>nekoT/<",
    GtJaK: "</UserLoginName>\n                                </HeaderInfos>\n                                <Content>\n                                    <Attach>test</Attach>\n                                    <FieldData>\n                                        <TargetI" + ">d".split("").reverse().join(""),
    YPCur: function (_0x2a56f6, _0x17c7a8, _0x2c5c3f, _0x90ebdf) {
      return _0x2a56f6(_0x17c7a8, _0x2c5c3f, _0x90ebdf);
    },
    CaKmB: "1234567`90koiuyhgtfrdewsaqaqsqde",
    quMXW: ">tseuqeR/<                    \n>tnetnoC/<                                \n>ataDdleiF/<                                    \n>lrU/<154b5384722686a4>lrU<                                        \n>dItegraT/<",
    gSSxR: function (_0x164bbe, _0xa1d4f7) {
      return _0x164bbe + _0xa1d4f7;
    },
    EAKEM: "https://appgologin.189.cn:9031/map/clientXML",
    cTUcv: "post",
    BWJxZ: function (_0x592788, _0x13d5c) {
      return _0x592788 + _0x13d5c;
    },
    hWKUo: "headers",
    sldqc: "Content-Type",
    PwLbC: "8-ftu=tesrahc;lmx/noitacilppa",
    aTnJR: function (_0x5756fa, _0x5f1d45) {
      return _0x5756fa(_0x5f1d45);
    },
    oBPpX: function (_0x48d32a, _0x33ab67) {
      return _0x48d32a(_0x33ab67);
    },
    rxWIJ: "includes",
    UldVu: "校验错误",
    SrEOU: function (_0x2a6c88, _0x550cd2, _0x42bdbe, _0x51482f, _0x30b0fc) {
      return _0x2a6c88(_0x550cd2, _0x42bdbe, _0x51482f, _0x30b0fc);
    },
    oBeTA: "split",
    FWSjh: ">tekciT<",
    ArVIP: "</Ticket>",
    lPPdF: function (_0x51aa67, _0x3429c3) {
      return _0x51aa67 ^ _0x3429c3;
    },
    lQqNR: function (_0x55e949, _0x279942, _0x2a6796, _0x4af82a) {
      return _0x55e949(_0x279942, _0x2a6796, _0x4af82a);
    },
    iRLfI: function (_0x1df94e, _0x566b39) {
      return _0x1df94e ^ _0x566b39;
    },
    bYfpp: "uid",
    YcRUl: "password",
    jxDFh: "phoneNbr"
  };
  try {
    decrypt[_0x8e94cc.ivQMO](pubKey);
    let _0x4fab8d = _0x8e94cc.QoVka(getTimestampYYYYMMDDHHmmss);
    var _0x3d6b5e = _0x8e94cc.uIBdM(_0x8e94cc.HEGZl(638154, 638153), _0x8e94cc.HEGZl(504967, 504974));
    let _0x5e4eed = _0x8e94cc.egkgC(generateRandomString, _0x8e94cc.HEGZl(778941, 778925));
    _0x3d6b5e = _0x8e94cc.cNsfR(_0x8e94cc.RnYxk(918857, 918861), _0x8e94cc.TJtpj(998297, 998302));
    let _0x41594f = decrypt[_0x8e94cc.DvzKw](_0x8e94cc.cNsfR(_0x8e94cc.miILc(_0x8e94cc.uIBdM(_0x8e94cc.OdqGc(_0x8e94cc.miILc(_0x8e94cc.pgEpO.split("").reverse().join(""), _0x5e4eed[_0x8e94cc.KJvso](_0x8e94cc.DOeEV(313600, 313600), _0x8e94cc.dIfeg(687027, 687039))), _0x29de6a), _0x4fab8d), _0x1f9809), _0x8e94cc.RAGuA.split("").reverse().join("")));
    var _0x3c3c10 = _0x8e94cc.OdqGc(_0x8e94cc.DOeEV(128288, 128295), _0x8e94cc.eKbQr(385257, 385261));
    let _0x5a283f = "";
    _0x3c3c10 = _0x8e94cc.cNsfR(_0x8e94cc.PQtSS(482313, 482316), _0x8e94cc.dIfeg(174251, 174249));
    for (let _0x8d10e6 of _0x29de6a) {
      _0x8e94cc.hTSzE(_0x8d10e6, _0x8e94cc.PQtSS(244433, 244438)) ? _0x5a283f += _0x8e94cc.HBnvV(String, _0x8e94cc.uIBdM(_0x8e94cc.HBnvV(Number, _0x8d10e6), _0x8e94cc.DOeEV(277452, 277454))) : _0x8e94cc.Afkeh(_0x8d10e6, _0x8e94cc.eKbQr(704497, 704505)) ? _0x5a283f += ":" : _0x8e94cc.Afkeh(_0x8d10e6, _0x8e94cc.mhSYy(397529, 397520)) && (_0x5a283f += ";");
    }
    const _0x17b21b = {
      code: _0x8e94cc.xXsPn,
      timestamp: _0x4fab8d,
      broadAccount: "",
      broadToken: "",
      clientType: _0x8e94cc.wXCUb,
      shopId: _0x8e94cc.vPwyJ,
      source: _0x8e94cc.EqBsJ,
      sourcePassword: _0x8e94cc.GESwP,
      token: "",
      userLoginName: _0x5a283f
    };
    var _0x3f9a96 = _0x8e94cc.cNsfR(_0x8e94cc.DOeEV(424609, 424609), _0x8e94cc.dIfeg(271552, 271556));
    let _0x6bbba3 = {
      headerInfos: _0x17b21b,
      content: {
        attach: _0x8e94cc.eSQHl,
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x41594f,
          deviceUid: _0x5e4eed,
          phoneNum: _0x5a283f,
          isChinatelecom: "0",
          systemVersion: _0x8e94cc.EcfaO,
          authentication: Array[_0x8e94cc.bTCXI](_0x1f9809)[_0x8e94cc.hnqSe](_0x19dfb2 => String["fromCharCo" + "ed".split("").reverse().join("")](_0x19dfb2.charCodeAt(0) + 2))[_0x8e94cc.VsYgk]("")
        }
      }
    };
    _0x3f9a96 = _0x8e94cc.XcSvV(_0x8e94cc.eKbQr(789820, 789819), _0x8e94cc.foWoi(603476, 603473));
    if (_0x8e94cc.MwaFC(!_0x44c27e, _0x14c525)) {
      var _0x22ed62;
      const _0x419448 = {
        url: _0x8e94cc.ektGa,
        method: _0x8e94cc.Httak,
        data: _0x6bbba3
      };
      _0x22ed62 = _0x8e94cc.miILc(_0x8e94cc.eKbQr(966831, 966822), _0x8e94cc.qwCZN(195005, 195000));
      let _0x55f4a7 = await _0x8e94cc.egkgC(axios, _0x419448);
      try {
        const _0x4b5e2f = {
          ..._0x55f4a7[_0x8e94cc.Hfqsj][_0x8e94cc.CHsyU][_0x8e94cc.Hfqsj][_0x8e94cc.wGhHU]
        };
        _0x44c27e = _0x4b5e2f;
      } catch (_0x5ea1ef) {
        return false;
      }
    }
    const _0x2afafa = {
      ..._0x44c27e
    };
    let _0x3214e0 = _0x2afafa;
    var _0x172f3e = _0x8e94cc.dcxqv(_0x8e94cc.GKzrk(655750, 655746), _0x8e94cc.XebCT(257687, 257680));
    let _0x23e3d5 = _0x44c27e[_0x8e94cc.XyiHj];
    _0x172f3e = _0x8e94cc.eKbQr(359758, 359751);
    var _0x3ef008 = _0x8e94cc.xsCRO(_0x8e94cc.pmKmt(513214, 513213), _0x8e94cc.pmKmt(457155, 457156));
    let _0x5513e3 = _0x44c27e[_0x8e94cc.PmRXQ];
    _0x3ef008 = _0x8e94cc.mhSYy(240033, 240039);
    _0x4fab8d = _0x8e94cc.xHoXE(getTimestampYYYYMMDDHHmmss);
    _0x6bbba3 = _0x8e94cc.cNsfR(_0x8e94cc.XcSvV(_0x8e94cc.uIBdM(_0x8e94cc.dcxqv(_0x8e94cc.WGdmC(_0x8e94cc.cNsfR(_0x8e94cc.dcxqv(_0x8e94cc.miILc(_0x8e94cc.iSzFQ, _0x4fab8d), _0x8e94cc.fyPCW), _0x23e3d5), _0x8e94cc.kQOgp.split("").reverse().join("")), _0x29de6a), _0x8e94cc.GtJaK), _0x8e94cc.YPCur(encryptRequest, _0x8e94cc.CaKmB, "", _0x5513e3)), _0x8e94cc.quMXW.split("").reverse().join(""));
    var _0x4cf1ec = _0x8e94cc.gSSxR(_0x8e94cc.pmKmt(549725, 549725), _0x8e94cc.qwCZN(518502, 518500));
    const _0x21e682 = {
      url: _0x8e94cc.EAKEM,
      method: _0x8e94cc.cTUcv,
      data: _0x6bbba3,
      headers: {}
    };
    _0x4cf1ec = _0x8e94cc.BWJxZ(_0x8e94cc.PQtSS(949075, 949076), _0x8e94cc.RnYxk(705398, 705396));
    _0x21e682[_0x8e94cc.hWKUo][_0x8e94cc.sldqc] = _0x8e94cc.PwLbC.split("").reverse().join("");
    let _0x23918d = await _0x8e94cc.aTnJR(axios, _0x21e682);
    if (_0x8e94cc.oBPpX(String, _0x23918d[_0x8e94cc.Hfqsj])[_0x8e94cc.rxWIJ]("过期") || _0x8e94cc.HBnvV(String, _0x23918d[_0x8e94cc.Hfqsj])[_0x8e94cc.rxWIJ](_0x8e94cc.UldVu)) {
      return await _0x8e94cc.SrEOU(loginPhone, _0x29de6a, _0x1f9809, _0x44c27e, true);
    }
    var _0x353b45;
    let _0x5a403e = _0x23918d[_0x8e94cc.Hfqsj][_0x8e94cc.oBeTA](_0x8e94cc.FWSjh.split("").reverse().join(""))[_0x8e94cc.GKzrk(324897, 324896)][_0x8e94cc.oBeTA](_0x8e94cc.ArVIP)[_0x8e94cc.eKbQr(156315, 156315)];
    _0x353b45 = _0x8e94cc.uIBdM(_0x8e94cc.RnYxk(319952, 319961), _0x8e94cc.lPPdF(705707, 705707));
    var _0x2af099;
    let _0x30d38b = _0x8e94cc.lQqNR(decryptRequest, _0x8e94cc.CaKmB, "", _0x5a403e);
    _0x2af099 = _0x8e94cc.iRLfI(497154, 497159);
    _0x3214e0[_0x8e94cc.bYfpp] = _0x30d38b;
    _0x3214e0[_0x8e94cc.YcRUl] = _0x1f9809;
    _0x3214e0[_0x8e94cc.jxDFh] = _0x29de6a;
    return _0x3214e0;
  } catch (_0x1cadc0) {
    return false;
  }
}
async function loginPhoneWithCache(_0x434d31, _0x33206d, _0x9eb6eb, _0x33d430 = "nosj.ehcaC/.".split("").reverse().join(""), _0x406064 = false) {
  const _0x3d282b = {
    aqsMB: "setPrivateKey",
    JNbzG: function (_0x58cc2f) {
      return _0x58cc2f();
    },
    BIZUO: function (_0x5839f6, _0x1e5def) {
      return _0x5839f6(_0x1e5def);
    },
    qigiq: function (_0x1b7872, _0x315677) {
      return _0x1b7872 ^ _0x315677;
    },
    WbzUU: "encrypt",
    fBFuZ: function (_0x538156, _0x3e78c4) {
      return _0x538156 + _0x3e78c4;
    },
    SEpZb: function (_0x1260a2, _0x4fb899) {
      return _0x1260a2 + _0x4fb899;
    },
    jocep: function (_0x1b61d6, _0x590940) {
      return _0x1b61d6 + _0x590940;
    },
    mysCr: function (_0x19ea06, _0x24678c) {
      return _0x19ea06 + _0x24678c;
    },
    OqvNL: "iPhone 14 15.4.",
    EIXuX: "substring",
    YKzhB: function (_0x4182e8, _0x1682ea) {
      return _0x4182e8 ^ _0x1682ea;
    },
    mrMeD: function (_0x19e8d5, _0x3e2de9) {
      return _0x19e8d5 ^ _0x3e2de9;
    },
    KSCer: ".0$$$0",
    NNqWq: function (_0x34e64c, _0x2bab58) {
      return _0x34e64c ^ _0x2bab58;
    },
    osxph: function (_0x408da0, _0x10000a) {
      return _0x408da0 <= _0x10000a;
    },
    NersZ: function (_0x431790, _0x5e108a) {
      return _0x431790(_0x5e108a);
    },
    vBpnK: function (_0x43c403, _0x4fb986) {
      return _0x43c403 + _0x4fb986;
    },
    UTrMF: function (_0xd404ec, _0x4da638) {
      return _0xd404ec == _0x4da638;
    },
    kQoJE: function (_0x512ad4, _0x4cdfe0) {
      return _0x512ad4 ^ _0x4cdfe0;
    },
    cdfcX: function (_0x356c27, _0x29af64) {
      return _0x356c27 ^ _0x29af64;
    },
    NZEiH: "userLoginNormal",
    itKJN: "#10.5.0#channel50#iPhone 14 Pro Max#",
    UvfWG: "20002",
    OMcxf: "110003",
    djIIC: "Sid98s",
    mirup: function (_0x35ea1b, _0x4899a4) {
      return _0x35ea1b ^ _0x4899a4;
    },
    nfMHN: "test",
    JTkIo: "15.4.0",
    EqgyL: "from",
    uYrHJ: "map",
    cDlUI: "join",
    kmBSH: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
    aFtub: "POST",
    mfdvc: function (_0x12bd64, _0x4f0c2b) {
      return _0x12bd64 ^ _0x4f0c2b;
    },
    UuhwU: function (_0x35372d, _0x8b3315) {
      return _0x35372d + _0x8b3315;
    },
    nUzVA: function (_0x54a72a, _0x3339dc) {
      return _0x54a72a + _0x3339dc;
    },
    XyZCT: "data",
    shqzV: "responseData",
    qFyEl: "loginSuccessResult",
    FohCD: "log",
    wOZsG: "写入缓存成功",
    yFjbS: function (_0x4abf24, _0x453668) {
      return _0x4abf24 ^ _0x453668;
    },
    AZwtj: "writeFileSync",
    xkFdN: "stringify",
    IYAYP: "utf8",
    faNxC: function (_0x1d4243, _0x5db4db) {
      return _0x1d4243 + _0x5db4db;
    },
    unEZZ: function (_0x211e88, _0x34879f) {
      return _0x211e88 ^ _0x34879f;
    },
    fbdjZ: "token",
    GyWQr: function (_0x19217b, _0x531955) {
      return _0x19217b ^ _0x531955;
    },
    OUlmd: "userId",
    GnOqG: function (_0x269fad, _0x524973) {
      return _0x269fad + _0x524973;
    },
    SeKPa: function (_0x511308, _0x463257) {
      return _0x511308 + _0x463257;
    },
    lbeup: "<Request>\n\t\t\t\t\t\t\t<HeaderInfos>\n\t\t\t\t\t\t\t\t<Code>getSingle</Code>\n\t\t\t\t\t\t\t\t<Timestamp>",
    INCll: "</Timestamp>\n\t\t\t\t\t\t\t\t<BroadAccount></BroadAccount>\n\t\t\t\t\t\t\t\t<BroadToken></BroadToken>\n\t\t\t\t\t\t\t\t<ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n\t\t\t\t\t\t\t\t<ShopId>20002</ShopId>\n\t\t\t\t\t\t\t\t<Source>110003</Source>\n\t\t\t\t\t\t\t\t<SourcePassword>Sid98s</SourcePassword>\n\t\t\t\t\t\t\t\t<Token>",
    CoBrl: "</Token>\n\t\t\t\t\t\t\t\t<UserLoginNam" + ">e".split("").reverse().join(""),
    MnvfY: "</UserLoginName>\n\t\t\t\t\t\t\t</HeaderInfos>\n\t\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t\t<Attach>test</Attach>\n\t\t\t\t\t\t\t\t<FieldData>\n\t\t\t\t\t\t\t\t\t<TargetId>",
    RgQrZ: function (_0x557292, _0x492573, _0x54e3ec, _0x4b544a) {
      return _0x557292(_0x492573, _0x54e3ec, _0x4b544a);
    },
    SWWTx: "edqsqaqaswedrftghyuiok09`76543" + "12".split("").reverse().join(""),
    OOYwO: "</TargetId>\n\t\t\t\t\t\t\t\t\t<Url>4a6862274835b451</Url>\n\t\t\t\t\t\t\t\t</FieldData>\n\t\t\t\t\t\t\t</Content>\n\t\t\t\t</Reques" + ">t".split("").reverse().join(""),
    Spbwe: "https://appgologin.189.cn:9031/map/clientXML",
    wpMcR: "post",
    HelVN: "headers",
    awPZL: "Content-Type",
    sCdAO: "8-ftu=tesrahc;lmx/noitacilppa",
    ZhORR: function (_0x52f6bd, _0x2c3aad) {
      return _0x52f6bd(_0x2c3aad);
    },
    ZmRnC: "includes",
    SZOBZ: "误错验校",
    IXmWP: function (_0x5de7c3, _0x879f6b, _0x35d4d1, _0x212860, _0x35f65d, _0x2f1219) {
      return _0x5de7c3(_0x879f6b, _0x35d4d1, _0x212860, _0x35f65d, _0x2f1219);
    },
    wQRuM: "split",
    bYLLI: "<Ticket>",
    SltEW: function (_0x394c2f, _0x3f9d28) {
      return _0x394c2f ^ _0x3f9d28;
    },
    AtkkG: "</Ticket>",
    Tmgpm: function (_0x390a42, _0x3ea6c0) {
      return _0x390a42 ^ _0x3ea6c0;
    },
    rrpgh: "1234567`90koiuyhgtfrdewsaqaqsq" + "ed".split("").reverse().join(""),
    DRUoO: "uid",
    MtYIB: "password"
  };
  try {
    decrypt[_0x3d282b.aqsMB](pubKey);
    let _0x4c1c99 = _0x3d282b.JNbzG(getTimestampYYYYMMDDHHmmss);
    let _0x253645 = _0x3d282b.BIZUO(generateRandomString, _0x3d282b.qigiq(652668, 652652));
    let _0x278e80 = decrypt[_0x3d282b.WbzUU](_0x3d282b.fBFuZ(_0x3d282b.SEpZb(_0x3d282b.SEpZb(_0x3d282b.jocep(_0x3d282b.mysCr(_0x3d282b.OqvNL, _0x253645[_0x3d282b.EIXuX](_0x3d282b.YKzhB(341152, 341152), _0x3d282b.mrMeD(928342, 928346))), _0x434d31), _0x4c1c99), _0x33206d), _0x3d282b.KSCer.split("").reverse().join("")));
    var _0x49933c = _0x3d282b.jocep(_0x3d282b.NNqWq(974401, 974405), _0x3d282b.mrMeD(459529, 459534));
    let _0x45cb03 = "";
    _0x49933c = _0x3d282b.NNqWq(758580, 758576);
    for (let _0x4feaa1 of _0x434d31) {
      _0x3d282b.osxph(_0x4feaa1, _0x3d282b.YKzhB(143904, 143911)) ? _0x45cb03 += _0x3d282b.NersZ(String, _0x3d282b.vBpnK(_0x3d282b.NersZ(Number, _0x4feaa1), _0x3d282b.NNqWq(978497, 978499))) : _0x3d282b.UTrMF(_0x4feaa1, _0x3d282b.kQoJE(800500, 800508)) ? _0x45cb03 += ":" : _0x3d282b.UTrMF(_0x4feaa1, _0x3d282b.cdfcX(773093, 773100)) && (_0x45cb03 += ";");
    }
    var _0x45ce4f;
    const _0x5a0c00 = {
      code: _0x3d282b.NZEiH,
      timestamp: _0x4c1c99,
      broadAccount: "",
      broadToken: "",
      clientType: _0x3d282b.itKJN,
      shopId: _0x3d282b.UvfWG,
      source: _0x3d282b.OMcxf,
      sourcePassword: _0x3d282b.djIIC,
      token: "",
      userLoginName: _0x45cb03
    };
    _0x45ce4f = _0x3d282b.mirup(717216, 717218);
    var _0x475ff9;
    let _0x3cc964 = {
      headerInfos: _0x5a0c00,
      content: {
        attach: _0x3d282b.nfMHN,
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x278e80,
          deviceUid: _0x253645,
          phoneNum: _0x45cb03,
          isChinatelecom: "0",
          systemVersion: _0x3d282b.JTkIo,
          authentication: Array[_0x3d282b.EqgyL](_0x33206d)[_0x3d282b.uYrHJ](_0x3f2e42 => String.fromCharCode(_0x3f2e42.charCodeAt(0) + 2))[_0x3d282b.cDlUI]("")
        }
      }
    };
    _0x475ff9 = _0x3d282b.NNqWq(833429, 833431);
    if (!_0x9eb6eb[_0x434d31] || _0x406064) {
      var _0x56cf8c;
      const _0x3cf1dd = {
        url: _0x3d282b.kmBSH,
        method: _0x3d282b.aFtub,
        data: _0x3cc964
      };
      _0x56cf8c = _0x3d282b.mysCr(_0x3d282b.cdfcX(157005, 157006), _0x3d282b.mfdvc(976242, 976241));
      var _0x35a0af = _0x3d282b.UuhwU(_0x3d282b.NNqWq(137860, 137860), _0x3d282b.mirup(517418, 517421));
      let _0x3270c9 = await _0x3d282b.NersZ(axios, _0x3cf1dd);
      _0x35a0af = _0x3d282b.nUzVA(_0x3d282b.NNqWq(749517, 749512), _0x3d282b.NNqWq(144118, 144117));
      const _0x318fc7 = {
        ..._0x3270c9[_0x3d282b.XyZCT][_0x3d282b.shqzV][_0x3d282b.XyZCT][_0x3d282b.qFyEl]
      };
      _0x9eb6eb[_0x434d31] = _0x318fc7;
      console[_0x3d282b.FohCD](_0x3d282b.wOZsG);
    }
    const _0x2019d0 = {
      ..._0x9eb6eb[_0x434d31]
    };
    var _0x3f0250;
    let _0x49b08e = _0x2019d0;
    _0x3f0250 = _0x3d282b.jocep(_0x3d282b.yFjbS(859561, 859566), _0x3d282b.yFjbS(991391, 991386));
    fs[_0x3d282b.AZwtj](_0x33d430, JSON[_0x3d282b.xkFdN](_0x9eb6eb, null, _0x3d282b.yFjbS(261204, 261200)), _0x3d282b.IYAYP);
    var _0x586d1c = _0x3d282b.faNxC(_0x3d282b.unEZZ(979807, 979806), _0x3d282b.mrMeD(417903, 417896));
    let _0x1f694b = _0x9eb6eb[_0x434d31][_0x3d282b.fbdjZ];
    _0x586d1c = _0x3d282b.faNxC(_0x3d282b.GyWQr(115614, 115609), _0x3d282b.NNqWq(871803, 871807));
    let _0x31a21f = _0x9eb6eb[_0x434d31][_0x3d282b.OUlmd];
    _0x4c1c99 = _0x3d282b.JNbzG(getTimestampYYYYMMDDHHmmss);
    _0x3cc964 = _0x3d282b.SEpZb(_0x3d282b.SEpZb(_0x3d282b.vBpnK(_0x3d282b.faNxC(_0x3d282b.UuhwU(_0x3d282b.GnOqG(_0x3d282b.SeKPa(_0x3d282b.faNxC(_0x3d282b.lbeup, _0x4c1c99), _0x3d282b.INCll), _0x1f694b), _0x3d282b.CoBrl), _0x434d31), _0x3d282b.MnvfY), _0x3d282b.RgQrZ(encryptRequest, _0x3d282b.SWWTx.split("").reverse().join(""), "", _0x31a21f)), _0x3d282b.OOYwO);
    const _0x22775d = {
      url: _0x3d282b.Spbwe,
      method: _0x3d282b.wpMcR,
      data: _0x3cc964,
      headers: {}
    };
    _0x22775d[_0x3d282b.HelVN][_0x3d282b.awPZL] = _0x3d282b.sCdAO.split("").reverse().join("");
    let _0x204546 = await _0x3d282b.ZhORR(axios, _0x22775d);
    if (_0x3d282b.BIZUO(String, _0x204546[_0x3d282b.XyZCT])[_0x3d282b.ZmRnC]("期过".split("").reverse().join("")) || _0x3d282b.ZhORR(String, _0x204546[_0x3d282b.XyZCT])[_0x3d282b.ZmRnC](_0x3d282b.SZOBZ.split("").reverse().join(""))) {
      return await _0x3d282b.IXmWP(loginPhone, _0x434d31, _0x33206d, _0x9eb6eb, _0x33d430, true);
    }
    let _0x1994e8 = _0x204546[_0x3d282b.XyZCT][_0x3d282b.wQRuM](_0x3d282b.bYLLI)[_0x3d282b.SltEW(520484, 520485)][_0x3d282b.wQRuM](_0x3d282b.AtkkG)[_0x3d282b.Tmgpm(793758, 793758)];
    let _0x26020e = _0x3d282b.RgQrZ(decryptRequest, _0x3d282b.rrpgh, "", _0x1994e8);
    _0x49b08e[_0x3d282b.DRUoO] = _0x26020e;
    _0x49b08e[_0x3d282b.MtYIB] = _0x33206d;
    return _0x49b08e;
  } catch (_0x4aa485) {
    console[_0x3d282b.FohCD](_0x4aa485);
    return false;
  }
}
var _0x_0x882;
var _0xc88c5d = 10;
let keyContent = "BAQADIwry6othbBwEfpYLPbk3Boa5/NunPU8NsXm0ZtqES1tZyzMKA+K6quE36W8o59OoqJpolcJAEKLX5Hcezws1DEhbiNzMAYiOIKHJPsUxI4HSal98qQKlqmyFZwvEWmcplcy+8C6UbEcd/BJ4TyvEkYsSE+xrvFplTs4p6sjtHOPIDQgBKQiBCDANG4AAUQABEQD3bISGqSCG0AMfGIM".split("").reverse().join("");
_0xc88c5d = "qeodom";
_0x_0x882 = "obdqmf".split("").reverse().join("");
let resKey = "-----BEGIN PUBLIC KEY-----\n" + keyContent + "-----YEK CILBUP DNE-----\n".split("").reverse().join("");
let rsaJiami = new nodeRsa(resKey);
var _0x6f71ad = 7;
var _0x78c;
const rsaOptions = {
  encryptionScheme: "pkcs1"
};
_0x78c = "mfnibp".split("").reverse().join("");
_0x6f71ad = 10;
rsaJiami.setOptions(rsaOptions);
function retryDecorator(_0x54674b = 3, _0x1731f8 = 1000) {
  return function (_0x448c40) {
    return async function (..._0x29d9f1) {
      let _0x53eeda;
      for (let _0x1019d8 = 0; _0x1019d8 < _0x54674b; _0x1019d8++) {
        try {
          return await _0x448c40.apply(this, _0x29d9f1);
        } catch (_0x42c3b1) {
          _0x53eeda = _0x42c3b1;
          console.log(" 法方 ️⚠".split("").reverse().join("") + (_0x448c40.name || "suomynona".split("").reverse().join("")) + " 第 " + (_0x1019d8 + 1) + " 次重试, 错误: " + _0x42c3b1.message);
          await new Promise(_0x1934f6 => setTimeout(_0x1934f6, _0x1731f8 * (_0x1019d8 + 1)));
        }
      }
      throw _0x53eeda;
    };
  };
}
async function getUserCode(_0x376e4a) {
  console.log("🔑 开始获取usercode（ticket: " + _0x376e4a.substring(0, 8) + "）...".split("").reverse().join(""));
  return retryDecorator(5, 2000)(getUserCodeImpl).call(this, _0x376e4a);
}
async function getUserCodeImpl(_0x22f253, _0x2ecd90) {
  const _0x3ed89b = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/api/auth/jump",
    params: {},
    headers: {}
  };
  _0x3ed89b.params.userID = _0x22f253;
  _0x3ed89b.params.version = "0.5.01".split("").reverse().join("");
  _0x3ed89b.params.type = "moor".split("").reverse().join("");
  _0x3ed89b.params.l = "renwu";
  _0x3ed89b.headers["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
  let _0x4c1a2c = await axios(_0x3ed89b);
  let _0x2a25bb = _0x4c1a2c.request.path;
  let _0x28699a = _0x2a25bb.split("?")[1].split("&");
  _0x2ecd90 = "";
  _0x28699a.map(_0x2ee3d8 => {
    _0x2ee3d8.split("=")[0] == "edocresu".split("").reverse().join("") && (_0x2ecd90 = _0x2ee3d8.split("=")[1]);
  });
  console.log(" :edocresu（功成edocresu取获 ✅".split("").reverse().join("") + _0x2ecd90.substring(0, 8) + "...）");
  return _0x2ecd90;
}
async function getAccessToken(_0x238fe9) {
  console.log("🔑 开始获取token（usercode: " + _0x238fe9.substring(0, 8) + "...）");
  return retryDecorator(5, 2000)(getAccessTokenImpl).call(this, _0x238fe9);
}
async function getAccessTokenImpl(_0x508bd0) {
  var _0x293150 = 7;
  const _0x2b85ba = {
    usercode: _0x508bd0
  };
  _0x293150 = 1;
  var _0x4247ad;
  const _0x245eb5 = {
    method: "post",
    url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
    data: _0x2b85ba
  };
  _0x4247ad = "qppdce";
  let _0x1f7f5b = await axios(_0x245eb5);
  console.log(" :nekot（功成nekot取获 ✅".split("").reverse().join("") + _0x1f7f5b.data.data.token.substring(0, 8) + "...）");
  return _0x1f7f5b.data.data.token;
}
var _0x6ee52g = 5;
let cacheLive = [];
_0x6ee52g = 9;
async function initLiveRoomFloor(_0x379c14, _0x1e53ea, _0x59529a, _0x10eaee) {
  console.log(" :份省（据数间播直载加始开 ��".split("").reverse().join("") + _0x379c14 + ", 页码: " + _0x1e53ea + " :dhk ,".split("").reverse().join("") + _0x59529a + "）");
  return retryDecorator(3, 3000)(initLiveRoomFloorImpl).call(this, _0x379c14, _0x1e53ea, _0x59529a, _0x10eaee);
}
async function initLiveRoomFloorImpl(_0x509562, _0x5cacee, _0x105200, _0xd26d11) {
  const _0x1a84b0 = {
    CKQoQ: function (_0x5631ac, _0x5f0947) {
      return _0x5631ac == _0x5f0947;
    },
    ZhgRR: "liveType",
    CKNTC: function (_0x4fa008, _0x403ba0) {
      return _0x4fa008 ^ _0x403ba0;
    },
    yitIZ: function (_0x483348, _0x5f15f6) {
      return _0x483348 ^ _0x5f15f6;
    },
    KoMbg: "liveStartTime",
    XAKWJ: "replace",
    bJazU: "valueOf",
    upBXK: function (_0x1a1138, _0x3cae9d) {
      return _0x1a1138 < _0x3cae9d;
    },
    pPJZB: function (_0x16d0b3, _0x57b1b2) {
      return _0x16d0b3 - _0x57b1b2;
    },
    oCOUx: "push",
    eboSx: "pojeel",
    yPCyx: "log",
    Vpwal: function (_0x5660d1, _0x55e246) {
      return _0x5660d1 + _0x55e246;
    },
    fPuRN: function (_0x1b44ae, _0xbdccdf) {
      return _0x1b44ae + _0xbdccdf;
    },
    SGdTx: function (_0x2aa033, _0x27260d) {
      return _0x2aa033 + _0x27260d;
    },
    HuuxB: function (_0x2899c0, _0x36ed9c) {
      return _0x2899c0 + _0x36ed9c;
    },
    NmyOR: "份省：据数间播直载加 ��",
    JgURt: "get",
    qkjrz: function (_0x41a3ea, _0xd25e76) {
      return _0x41a3ea + _0xd25e76;
    },
    WNKTx: function (_0x280bd2, _0x5d2a7e) {
      return _0x280bd2 + _0x5d2a7e;
    },
    PnIha: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=",
    FBzNK: function (_0x4bbbf1, _0x4aa0f5) {
      return _0x4bbbf1 < _0x4aa0f5;
    },
    HGUZA: "&pageType=1&page=",
    MjpQV: "=dhk&",
    FpWWx: "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
    MwmnP: function (_0x4c45ff, _0x12742e) {
      return _0x4c45ff + _0x12742e;
    },
    axGIH: "Bearer ",
    LGTpB: "encrypt",
    QTNyW: "base64",
    xTVrZ: function (_0x273f18, _0x1065ea) {
      return _0x273f18(_0x1065ea);
    },
    GsZdH: "jhoieb",
    eRdvB: function (_0x501d1c, _0x504c1c) {
      return _0x501d1c ^ _0x504c1c;
    },
    TDPjD: function (_0x20625e, _0x294ed1) {
      return _0x20625e + _0x294ed1;
    },
    ZTcTx: function (_0x2c4280, _0x116dcb) {
      return _0x2c4280 + _0x116dcb;
    },
    yFvac: function (_0x592b9a, _0x4d728d) {
      return _0x592b9a + _0x4d728d;
    },
    LyHMM: function (_0x5a79a3, _0x1cb030) {
      return _0x5a79a3 + _0x1cb030;
    },
    kDzOi: function (_0x575fe0, _0x1f75b0) {
      return _0x575fe0 + _0x1f75b0;
    },
    YLcur: "🏠 第",
    KdAax: "页加载完成，新增",
    fBvFr: "个有效直播间，累计",
    fbLrv: "length",
    oaUcE: function (_0x308ceb, _0x3ab902) {
      return _0x308ceb > _0x3ab902;
    },
    TXjKN: function (_0x535054, _0x442c69, _0x3ce37b, _0x528c31, _0x46d57d) {
      return _0x535054(_0x442c69, _0x3ce37b, _0x528c31, _0x46d57d);
    },
    GLFUn: function (_0x2c511b, _0x16f399) {
      return _0x2c511b + _0x16f399;
    },
    ejliL: "🏠 省份",
    NkENG: "的khd=1加载完成，开始加载khd=2",
    hOhAh: function (_0x2a5c1c, _0x311d0e) {
      return _0x2a5c1c ^ _0x311d0e;
    },
    dCZVH: function (_0x15f0e8, _0x20e91c) {
      return _0x15f0e8(_0x20e91c);
    },
    SDzds: function (_0x167741, _0x5105c7, _0x15210a, _0x1320a7, _0x2b7f87) {
      return _0x167741(_0x5105c7, _0x15210a, _0x1320a7, _0x2b7f87);
    },
    NhewM: function (_0x32e20a, _0x464a22) {
      return _0x32e20a ^ _0x464a22;
    },
    sTowX: function (_0x237e19, _0x2669bc) {
      return _0x237e19 == _0x2669bc;
    },
    aytkd: function (_0x133582, _0x1c22b7) {
      return _0x133582 ^ _0x1c22b7;
    },
    ynwhI: "份省 ��",
    lGePm: "的khd=2加载完成，开始处理数据",
    fldaM: function (_0x3072dc, _0x51f3fb) {
      return _0x3072dc(_0x51f3fb);
    },
    VKXnc: "sort",
    VBiEe: function (_0x3a2c7a, _0x471790) {
      return _0x3a2c7a + _0x471790;
    },
    LxdaG: "✅ 直播间数据加载完成，共",
    tkjCV: "个有效直播间（仅使用省份1数据）",
    kGCON: "writeFileSync",
    yHhmw: "./liveList.json",
    DpcSA: "stringify",
    jEoRD: "utf8",
    NXISZ: "parse",
    STeWY: "readFileSy" + "cn".split("").reverse().join(""),
    UFqnH: " :量数，件文地本入写已据数间播直 ��",
    ESCoi: "error",
    xXrwQ: "❌ 加载下一页直播间数据失败:",
    vkHLS: "message",
    GFxau: function (_0xb28128, _0x9a69d, _0x3ea6da, _0x1f2871, _0x3c4e4c) {
      return _0xb28128(_0x9a69d, _0x3ea6da, _0x1f2871, _0x3c4e4c);
    },
    CbJFd: function (_0x130c28, _0x42590f) {
      return _0x130c28 + _0x42590f;
    },
    zVfaZ: "=edoCecnivorp?roolf/xedni/moor/ipa/ipakbx/nc.981.kbx//:sptth",
    RDajC: function (_0xab7727, _0x112cde) {
      return _0xab7727 ^ _0x112cde;
    },
    hnczm: "=egap&1=epyTegap&",
    uwHej: "&khd=",
    ByhBX: function (_0x762aa6, _0x49b6a3) {
      return _0x762aa6 + _0x49b6a3;
    },
    oDvQS: " reraeB",
    bWGKC: "46esab",
    mYxTa: function (_0x2fcfcd, _0x2a951d) {
      return _0x2fcfcd(_0x2a951d);
    },
    MMuAk: ":败失据数间播直化始初 ❌",
    GaddV: function (_0x3457af, _0x4817b0, _0x5976a3, _0x2e3dad, _0x514c22) {
      return _0x3457af(_0x4817b0, _0x5976a3, _0x2e3dad, _0x514c22);
    },
    UXkhO: function (_0x148800, _0x24df79) {
      return _0x148800 ^ _0x24df79;
    },
    TioOz: function (_0xa4cffd, _0x21fa2e) {
      return _0xa4cffd == _0x21fa2e;
    },
    wgtaX: function (_0xba965e, _0x4a5c21) {
      return _0xba965e ^ _0x4a5c21;
    },
    XVDQE: "...据数的1份省载加始开：据数间播直化始初 ��"
  };
  _0x1a84b0.CKQoQ(_0x509562, _0x1a84b0.UXkhO(358457, 358456)) && _0x1a84b0.TioOz(_0x5cacee, _0x1a84b0.UXkhO(764115, 764114)) && _0x1a84b0.TioOz(_0x105200, _0x1a84b0.wgtaX(162190, 162191)) && (cacheLive = [], console[_0x1a84b0.yPCyx](_0x1a84b0.XVDQE.split("").reverse().join("")));
  return new Promise(async (_0x2ce743, _0x3e41da) => {
    try {
      const _0x423462 = {
        method: _0x1a84b0.JgURt,
        url: _0x1a84b0.TDPjD(_0x1a84b0.TDPjD(_0x1a84b0.CbJFd(_0x1a84b0.qkjrz(_0x1a84b0.VBiEe(_0x1a84b0.zVfaZ.split("").reverse().join(""), _0x1a84b0.FBzNK(_0x509562, _0x1a84b0.RDajC(454871, 454877)) ? _0x1a84b0.Vpwal("0", _0x509562) : _0x1a84b0.fPuRN(_0x509562, "")), _0x1a84b0.hnczm.split("").reverse().join("")), _0x5cacee), _0x1a84b0.uwHej), _0x105200),
        headers: {
          "User-Agent": _0x1a84b0.FpWWx,
          Authorization: _0x1a84b0.ByhBX(_0x1a84b0.oDvQS.split("").reverse().join(""), rsaJiami[_0x1a84b0.LGTpB](_0xd26d11, _0x1a84b0.bWGKC.split("").reverse().join("")))
        }
      };
      let _0x376d7f = await _0x1a84b0.mYxTa(axios, _0x423462);
      let _0x32e271 = new Date()[_0x1a84b0.bJazU]();
      _0x376d7f?.["data"]?.["data"]?.["map"](_0x3fcc14 => {
        if (_0x1a84b0.CKQoQ(_0x3fcc14[_0x1a84b0.ZhgRR], _0x1a84b0.CKNTC(398535, 398533)) || _0x1a84b0.CKQoQ(_0x3fcc14[_0x1a84b0.ZhgRR], _0x1a84b0.yitIZ(832905, 832904))) {
          let _0x5e35d7 = new Date(_0x3fcc14[_0x1a84b0.KoMbg][_0x1a84b0.XAKWJ](new RegExp("-", "g"), "/"))[_0x1a84b0.bJazU]();
          _0x1a84b0.upBXK(_0x1a84b0.pPJZB(_0x32e271, 604800000), _0x5e35d7) && cacheLive[_0x1a84b0.oCOUx](_0x3fcc14);
        }
      });
      async function _0x84bg3c(_0x4c4682, _0x165070, _0x3a4af9, _0xcc43c0) {
        const _0x1d1a8c = {
          oDvsd: function (_0x3a72d3, _0x33dc21) {
            return _0x1a84b0.CKQoQ(_0x3a72d3, _0x33dc21);
          },
          YAaAO: _0x1a84b0.ZhgRR,
          ICwWq: function (_0xe5cf0f, _0x4821e6) {
            return _0x1a84b0.yitIZ(_0xe5cf0f, _0x4821e6);
          },
          mFBmC: _0x1a84b0.KoMbg,
          evHYd: _0x1a84b0.XAKWJ,
          kDIgE: _0x1a84b0.bJazU,
          eCXJn: function (_0x2f69d2, _0x3f98f7) {
            return _0x1a84b0.upBXK(_0x2f69d2, _0x3f98f7);
          },
          NOnTZ: function (_0x4abf81, _0x3bfc65) {
            return _0x1a84b0.pPJZB(_0x4abf81, _0x3bfc65);
          },
          QzBNr: _0x1a84b0.oCOUx,
          FbOjv: _0x1a84b0.eboSx
        };
        try {
          _0x165070++;
          console[_0x1a84b0.yPCyx](_0x1a84b0.Vpwal(_0x1a84b0.fPuRN(_0x1a84b0.SGdTx(_0x1a84b0.HuuxB(_0x1a84b0.NmyOR.split("").reverse().join(""), _0x4c4682), "，第"), _0x165070), "页"));
          const _0x53c8e4 = {
            method: _0x1a84b0.JgURt,
            url: _0x1a84b0.HuuxB(_0x1a84b0.qkjrz(_0x1a84b0.Vpwal(_0x1a84b0.WNKTx(_0x1a84b0.qkjrz(_0x1a84b0.PnIha, _0x1a84b0.FBzNK(_0x4c4682, _0x1a84b0.CKNTC(944853, 944863)) ? _0x1a84b0.SGdTx("0", _0x4c4682) : _0x1a84b0.qkjrz(_0x4c4682, "")), _0x1a84b0.HGUZA), _0x165070), _0x1a84b0.MjpQV.split("").reverse().join("")), _0x3a4af9),
            headers: {
              "User-Agent": _0x1a84b0.FpWWx,
              Authorization: _0x1a84b0.MwmnP(_0x1a84b0.axGIH, rsaJiami[_0x1a84b0.LGTpB](_0xcc43c0, _0x1a84b0.QTNyW))
            }
          };
          let _0x4b5a2a = await _0x1a84b0.xTVrZ(axios, _0x53c8e4);
          var _0x3374a2;
          let _0x165845 = new Date()[_0x1a84b0.bJazU]();
          _0x3374a2 = _0x1a84b0.GsZdH;
          let _0x43677f = _0x1a84b0.eRdvB(162508, 162508);
          _0x4b5a2a?.["data"]?.["data"]?.["map"](_0x596132 => {
            if (_0x1d1a8c.oDvsd(_0x596132[_0x1d1a8c.YAaAO], _0x1d1a8c.ICwWq(110710, 110708)) || _0x1d1a8c.oDvsd(_0x596132[_0x1d1a8c.YAaAO], _0x1d1a8c.ICwWq(829024, 829025))) {
              let _0x237758 = new Date(_0x596132[_0x1d1a8c.mFBmC][_0x1d1a8c.evHYd](new RegExp("-", "g"), "/"))[_0x1d1a8c.kDIgE]();
              _0x1d1a8c.eCXJn(_0x1d1a8c.NOnTZ(_0x165845, 604800000), _0x237758) && (cacheLive[_0x1d1a8c.QzBNr](_0x596132), _0x43677f++);
            }
          });
          console[_0x1a84b0.yPCyx](_0x1a84b0.TDPjD(_0x1a84b0.ZTcTx(_0x1a84b0.yFvac(_0x1a84b0.HuuxB(_0x1a84b0.LyHMM(_0x1a84b0.kDzOi(_0x1a84b0.YLcur, _0x165070), _0x1a84b0.KdAax), _0x43677f), _0x1a84b0.fBvFr), cacheLive[_0x1a84b0.fbLrv]), "个"));
          if (_0x1a84b0.oaUcE(_0x43677f, _0x1a84b0.CKNTC(103171, 103171))) {
            await _0x1a84b0.TXjKN(_0x84bg3c, _0x4c4682, _0x165070, _0x3a4af9, _0xcc43c0);
          } else {
            if (_0x1a84b0.CKQoQ(_0x3a4af9, _0x1a84b0.yitIZ(629115, 629114))) {
              console[_0x1a84b0.yPCyx](_0x1a84b0.GLFUn(_0x1a84b0.ZTcTx(_0x1a84b0.ejliL, _0x4c4682), _0x1a84b0.NkENG));
              _0x3a4af9 = _0x1a84b0.hOhAh(654765, 654767);
              _0x1a84b0.dCZVH(_0x2ce743, await _0x1a84b0.SDzds(initLiveRoomFloor, _0x4c4682, _0x1a84b0.NhewM(661729, 661728), _0x3a4af9, _0xcc43c0));
            } else {
              if (_0x1a84b0.sTowX(_0x3a4af9, _0x1a84b0.aytkd(338308, 338310))) {
                console[_0x1a84b0.yPCyx](_0x1a84b0.SGdTx(_0x1a84b0.kDzOi(_0x1a84b0.ynwhI.split("").reverse().join(""), _0x4c4682), _0x1a84b0.lGePm));
                cacheLive = _0x1a84b0.fldaM(deduplicateLiveRooms, cacheLive);
                cacheLive[_0x1a84b0.VKXnc]((_0xb57aba, _0x549233) => {
                  let _0x2771ad = new Date(_0xb57aba[_0x1d1a8c.mFBmC][_0x1d1a8c.evHYd](new RegExp("-", "g"), "/"))[_0x1d1a8c.kDIgE]();
                  var _0x246cec;
                  let _0x16c0ee = new Date(_0x549233[_0x1d1a8c.mFBmC][_0x1d1a8c.evHYd](new RegExp("-", "g"), "/"))[_0x1d1a8c.kDIgE]();
                  _0x246cec = _0x1d1a8c.FbOjv.split("").reverse().join("");
                  return _0x1d1a8c.NOnTZ(_0x2771ad, _0x16c0ee);
                });
                cacheLive[_0x1a84b0.VKXnc]((_0x407c5c, _0x5ce167) => {
                  return _0x1d1a8c.NOnTZ(_0x5ce167[_0x1d1a8c.YAaAO], _0x407c5c[_0x1d1a8c.YAaAO]);
                });
                console[_0x1a84b0.yPCyx](_0x1a84b0.VBiEe(_0x1a84b0.VBiEe(_0x1a84b0.LxdaG, cacheLive[_0x1a84b0.fbLrv]), _0x1a84b0.tkjCV));
                fs[_0x1a84b0.kGCON](_0x1a84b0.yHhmw, JSON[_0x1a84b0.DpcSA](cacheLive), _0x1a84b0.jEoRD);
                var _0x31e175;
                let _0x2234a2 = JSON[_0x1a84b0.NXISZ](fs[_0x1a84b0.STeWY](_0x1a84b0.yHhmw, _0x1a84b0.jEoRD));
                _0x31e175 = _0x1a84b0.eRdvB(443295, 443291);
                console[_0x1a84b0.yPCyx](_0x1a84b0.HuuxB(_0x1a84b0.UFqnH.split("").reverse().join(""), _0x2234a2[_0x1a84b0.fbLrv]));
                _0x1a84b0.xTVrZ(_0x2ce743, cacheLive);
              }
            }
          }
        } catch (_0x24e69e) {
          console[_0x1a84b0.ESCoi](_0x1a84b0.xXrwQ, _0x24e69e[_0x1a84b0.vkHLS]);
          await _0x1a84b0.GFxau(_0x84bg3c, _0x4c4682, _0x165070, _0x3a4af9, _0xcc43c0);
        }
      }
      await _0x1a84b0.GFxau(_0x84bg3c, _0x509562, _0x5cacee, _0x105200, _0xd26d11);
    } catch (_0x3df92b) {
      console[_0x1a84b0.ESCoi](_0x1a84b0.MMuAk.split("").reverse().join(""), _0x3df92b[_0x1a84b0.vkHLS]);
      _0x1a84b0.dCZVH(_0x2ce743, await _0x1a84b0.GaddV(initLiveRoomFloor, _0x509562, _0x5cacee, _0x105200, _0xd26d11));
    }
  });
}
async function getGoodsList(_0x122435, _0xd6de88, _0x3f5a24) {
  console.log("🛒 获取直播间商品：liveId=" + _0x122435 + "第，".split("").reverse().join("") + _0xd6de88 + "页");
  return retryDecorator(3, 2000)(getGoodsListImpl).call(this, _0x122435, _0xd6de88, _0x3f5a24);
}
async function getGoodsListImpl(_0x519b38, _0xb7db90, _0x19f5e8) {
  try {
    var _0x407740 = 6;
    const _0x578714 = {
      method: "get",
      url: "https://xbk.189.cn/xbkapi/lteration/room/getLiveGoodsList?liveId=" + _0x519b38 + "&list_type=ordinary&page=" + _0xb7db90,
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x19f5e8, "base64")
      }
    };
    _0x407740 = "qnmhgc";
    let _0x56425b = await axios(_0x578714);
    console.log("=dIevil：功成取获品商间播直 ��".split("").reverse().join("") + _0x519b38 + "，第" + _0xb7db90 + "页，共" + (_0x56425b.data?.["data"]?.["count"] || 0) + "品商个".split("").reverse().join(""));
    return _0x56425b.data;
  } catch (_0xa3df6a) {
    console.error("❌ 获取直播间商品列表失败:", _0xa3df6a.message);
    throw _0xa3df6a;
  }
}
function deduplicateLiveRooms(_0x5bb9c2) {
  let _0x5bbc4b = [];
  let _0x175f2b = {};
  for (let _0x10a346 = 0; _0x10a346 < _0x5bb9c2.length; _0x10a346++) {
    !_0x175f2b[_0x5bb9c2[_0x10a346].liveId] && (_0x5bbc4b.push(_0x5bb9c2[_0x10a346]), _0x175f2b[_0x5bb9c2[_0x10a346].liveId] = true);
  }
  return _0x5bbc4b;
}
async function getCaptchaImage() {
  console.log("📷 开始获取验证码图片");
  return retryDecorator(5, 1000)(getCaptchaImageImpl).call(this);
}
async function getCaptchaImageImpl() {
  const _0x5ed3f8 = {
    TPzsX: function (_0x4535e3) {
      return _0x4535e3();
    },
    roZYH: function (_0x3df4ce, _0x5eaa16) {
      return _0x3df4ce + _0x5eaa16;
    },
    QEjOh: function (_0x23c1d0, _0x48a28e) {
      return _0x23c1d0 ^ _0x48a28e;
    },
    juiki: function (_0xf40c41, _0x26be43) {
      return _0xf40c41 + _0x26be43;
    },
    UYcEj: "https://xbk.189.cn/xbkapi/api/auth/captcha?guid=",
    JYMkO: "GET",
    MnGQj: "arraybuffer",
    kKGqK: function (_0x581587, _0x50b484) {
      return _0x581587 ^ _0x50b484;
    },
    dRBKc: function (_0x1295f3, _0x416322) {
      return _0x1295f3(_0x416322);
    },
    JNQjf: function (_0x472303, _0x1a34c2) {
      return _0x472303 ^ _0x1a34c2;
    },
    NVYDL: function (_0x454dea, _0x12820c) {
      return _0x454dea ^ _0x12820c;
    },
    raqXA: "from",
    jyGJc: "data",
    qlcOX: "yranib",
    gJzGa: "toString",
    huuDD: "base64",
    KxGUn: function (_0x48ee3c, _0xdcaaa4) {
      return _0x48ee3c ^ _0xdcaaa4;
    },
    gaptk: "log",
    MiUWQ: "功成取获片图码证验 ��",
    vnRZE: ",46esab;gnp/egami:at" + "da".split("").reverse().join("")
  };
  const _0x151c91 = _0x5ed3f8.TPzsX(v4);
  var _0x280c17 = _0x5ed3f8.roZYH(_0x5ed3f8.QEjOh(224585, 224585), _0x5ed3f8.QEjOh(847786, 847779));
  const _0x78b4ef = {
    url: _0x5ed3f8.juiki(_0x5ed3f8.UYcEj, _0x151c91),
    method: _0x5ed3f8.JYMkO,
    responseType: _0x5ed3f8.MnGQj
  };
  _0x280c17 = _0x5ed3f8.juiki(_0x5ed3f8.QEjOh(798558, 798553), _0x5ed3f8.kKGqK(992178, 992180));
  let _0x5a8190 = await _0x5ed3f8.dRBKc(axios, _0x78b4ef);
  var _0x2e3cc9 = _0x5ed3f8.roZYH(_0x5ed3f8.JNQjf(490272, 490275), _0x5ed3f8.NVYDL(199886, 199884));
  const _0x20c4e3 = Buffer[_0x5ed3f8.raqXA](_0x5a8190[_0x5ed3f8.jyGJc], _0x5ed3f8.qlcOX.split("").reverse().join(""))[_0x5ed3f8.gJzGa](_0x5ed3f8.huuDD);
  _0x2e3cc9 = _0x5ed3f8.KxGUn(269319, 269314);
  console[_0x5ed3f8.gaptk](_0x5ed3f8.MiUWQ.split("").reverse().join(""));
  return {
    file: _0x5a8190[_0x5ed3f8.jyGJc],
    base64: _0x5ed3f8.roZYH(_0x5ed3f8.vnRZE.split("").reverse().join(""), _0x20c4e3),
    uuid: _0x151c91
  };
}
async function recognizeCaptcha(_0x1b37ca) {
  console.log("🔍 开始识别验证码");
  return retryDecorator(5, 1000)(recognizeCaptchaImpl).call(this, _0x1b37ca);
}
async function recognizeCaptchaImpl(_0xe03e88) {
  var _0x3ef87e = 9;
  let _0x40ad05 = await getCaptchaImage();
  _0x3ef87e = 16;
  const _0x27cfba = process?.["env"]?.["dxocr"] || "http://45.15.124.106:7777/";
  console.log("🔍从环境变量dxocr获取OCR服务URL，如果没有设置则默认使用我的！");
  const _0x3fb4bb = {
    image: _0x40ad05.base64,
    userName: _0xe03e88
  };
  const _0x1dcbf5 = {
    url: "" + _0x27cfba,
    method: "post",
    headers: {},
    data: _0x3fb4bb
  };
  _0x1dcbf5.headers["Content-Type"] = "application/x-www-form-urlencoded";
  let _0x52f54d = await axios(_0x1dcbf5);
  if (_0x52f54d.data.code == 200) {
    let _0x288920 = _0x52f54d.data.data;
    let _0x3addb8 = _0x288920.split("=");
    var _0x47f5b3;
    let _0x5e3378 = "";
    _0x47f5b3 = 6;
    _0x3addb8.length > 1 ? _0x5e3378 = _0x3addb8[0] : _0x5e3378 = _0x288920.split("x")[0] + "+" + _0x288920.split("x")[1];
    let _0x4b25a4 = eval("" + _0x5e3378);
    console.log("=果结算计：功成别识码证验 ��".split("").reverse().join("") + _0x4b25a4);
    const _0x32f8c1 = {
      data: _0x4b25a4,
      uuid: _0x40ad05.uuid
    };
    return _0x32f8c1;
  }
  throw new Error("败失别识RCO".split("").reverse().join(""));
}
async function doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6) {
  console.log("🎰 开始抽奖：liveId=" + _0x99bfd3 + "，active_code=" + _0x1362dd + "，手机号=" + maskPhoneNumber(_0x46eb9d));
  try {
    var _0x4fc482;
    let _0x529c27 = await recognizeCaptcha(process?.["env"]?.["dxUserName1"] || "aaabbb");
    _0x4fc482 = "dknkmm";
    var _0x58a838 = 3;
    const _0x23858b = {
      active_code: _0x1362dd,
      captcha: _0x529c27.data,
      guid: _0x529c27.uuid,
      liveId: _0x99bfd3,
      period: "1"
    };
    _0x58a838 = 14;
    let _0x4a3fb9 = {
      method: "post",
      url: "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x1cc36b, "base64")
      },
      data: _0x23858b
    };
    var _0x4d4d55;
    let _0x4ed6cc = await axios(_0x4a3fb9);
    _0x4d4d55 = 1;
    if (_0x4ed6cc?.["data"]?.["msg"] === "sseccus".split("").reverse().join("")) {
      var _0x2231f8 = 12;
      const _0x7b18aa = _0x4ed6cc?.["data"]?.["data"]?.["title"];
      _0x2231f8 = 1;
      console.log(" :号机手！功成奖抽 ��".split("").reverse().join("") + maskPhoneNumber(_0x46eb9d) + ", 获得: " + _0x7b18aa);
      return {
        success: true,
        phone: _0x46eb9d,
        prize: _0x7b18aa,
        uid: _0x18dea6
      };
    } else {
      return _0x4ed6cc?.["data"]?.["msg"] === "抽奖机会不足" ? (console.log("⚠️ 抽奖机会不足：手机号=" + maskPhoneNumber(_0x46eb9d)), {
        success: false,
        reason: "no_chance"
      }) : _0x4ed6cc?.["data"]?.["msg"] === "图形验证码校验未通过" ? (console.log("=号机手：试重，过通未验校码证验形图 ️⚠".split("").reverse().join("") + maskPhoneNumber(_0x46eb9d)), await sleep(6000), await doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6)) : _0x4ed6cc?.["data"]?.["msg"]?.["includes"]("繁频于过作操".split("").reverse().join("")) ? (console.log("⚠️ 操作过于频繁，重试：手机号=" + maskPhoneNumber(_0x46eb9d)), await sleep(6000), await doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6)) : (console.log("：果结奖抽 ��".split("").reverse().join("") + (_0x4ed6cc?.["data"]?.["data"]?.["title"] || _0x4ed6cc?.["data"]?.["msg"]) + "，手机号=" + maskPhoneNumber(_0x46eb9d)), {
        success: false,
        reason: "other",
        message: _0x4ed6cc?.["data"]?.["msg"]
      });
    }
  } catch (_0x2b7980) {
    console.error("❌ 抽奖过程错误：" + _0x2b7980.message + "，手机号=" + maskPhoneNumber(_0x46eb9d));
    await sleep(6000);
    return await doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6);
  }
}
async function getPrizeList(_0x2a5bb6, _0x1eafac, _0x52600f) {
  console.log("=edoc_evitca：表列品奖动活取获 ��".split("").reverse().join("") + _0x1eafac);
  return retryDecorator(3, 1000)(getPrizeListImpl).call(this, _0x2a5bb6, _0x1eafac, _0x52600f);
}
async function getPrizeListImpl(_0x4697e8, _0x50380f, _0x3145fa, _0x199666) {
  var _0x5f2ed0;
  const _0x567ef0 = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/active/v2/lottery/prizeList?active_code=" + _0x50380f + "&liveId=" + _0x3145fa + "1=doirep&".split("").reverse().join(""),
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x4697e8, "base64")
    }
  };
  _0x5f2ed0 = 7;
  var _0x59729a = 15;
  let _0x5203ba = await axios(_0x567ef0);
  _0x59729a = 9;
  _0x199666 = 0;
  _0x5203ba?.["data"]?.["data"]?.["map"](_0x2d1eba => {
    var _0x17d159 = 13;
    let _0x2423b2 = _0x2d1eba.text.match(new RegExp("+d\\".split("").reverse().join(""), "g"));
    _0x17d159 = 2;
    _0x2423b2 && _0x199666 < Number(_0x2423b2[0]) && (_0x199666 = Number(_0x2423b2[0]));
  });
  console.log("：额金品奖大最动活 ��".split("").reverse().join("") + _0x199666 + "元");
  return _0x199666;
}
async function getLotteryChances(_0x3341f5, _0x3bf9ca) {
  console.log("=edoc_evitca：数次奖抽询查 ��".split("").reverse().join("") + _0x3bf9ca);
  return retryDecorator(3, 1000)(getLotteryChancesImpl).call(this, _0x3341f5, _0x3bf9ca);
}
async function getLotteryChancesImpl(_0x4bd297, _0x33112c) {
  const _0x4ba75a = {
    method: "get",
    url: "=edoc_evitca?ecnahCyrettoLteg/yrettol/2v/evitca/ipakbx/nc.981.kbx//:sptth".split("").reverse().join("") + _0x33112c,
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: "Bearer " + rsaJiami.encrypt(_0x4bd297, "base64")
    }
  };
  let _0x488d05 = await axios(_0x4ba75a);
  var _0x1a7588 = 8;
  const _0x4daa8e = _0x488d05.data?.["data"] || 0;
  _0x1a7588 = 12;
  console.log("：果结询查数次奖抽 ��".split("").reverse().join("") + _0x4daa8e + "次");
  return _0x4daa8e;
}
async function getMyWinList(_0x149f64) {
  console.log("录记奖中月本询查 ��".split("").reverse().join(""));
  return retryDecorator(3, 1000)(getMyWinListImpl).call(this, _0x149f64);
}
async function getMyWinListImpl(_0x1f9258) {
  const _0x3dd852 = {
    eVQWX: "win_time",
    amRjy: function (_0x5bd7ca, _0x44299d) {
      return _0x5bd7ca ^ _0x44299d;
    },
    ehHbK: function (_0x269a4d, _0x476811) {
      return _0x269a4d === _0x476811;
    },
    swXOo: "getFullYear",
    xzYpl: function (_0x5e2d4d, _0x2c49a3) {
      return _0x5e2d4d === _0x2c49a3;
    },
    bCrFw: "getMonth",
    vJdjw: function (_0x3c703f, _0x2acc6f) {
      return _0x3c703f + _0x2acc6f;
    },
    NOFyc: function (_0x57f612, _0x45bdc8) {
      return _0x57f612(_0x45bdc8);
    },
    REqhC: "title",
    mVoer: "includes",
    ZPPvl: "get",
    tuAWF: "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=200&activeCode=",
    CCXps: "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
    keQUS: " reraeB",
    rlMVB: "encrypt",
    GeZGS: "46esab",
    DmQFJ: function (_0x3a96fd, _0x598e14) {
      return _0x3a96fd ^ _0x598e14;
    },
    bRSBJ: function (_0x25720b, _0x1976b1) {
      return _0x25720b ^ _0x1976b1;
    },
    YuPLm: function (_0x11b980, _0xeaa1f6) {
      return _0x11b980 ^ _0xeaa1f6;
    },
    ZXrVD: function (_0x2396b1, _0x21109a) {
      return _0x2396b1 ^ _0x21109a;
    },
    ChDVx: function (_0x22d8af, _0x4f4f07) {
      return _0x22d8af ^ _0x4f4f07;
    },
    szMJQ: function (_0x52bba0, _0x179948) {
      return _0x52bba0 + _0x179948;
    },
    AssoH: function (_0x5a9f0b, _0x2017d5) {
      return _0x5a9f0b ^ _0x2017d5;
    },
    Klldf: function (_0x31438d, _0x5d35cd) {
      return _0x31438d ^ _0x5d35cd;
    },
    mpzkn: "log",
    YLQPS: "🏆 本月话费中奖次数：",
    RwVYu: "次（超过4次将限制抽" + "）奖".split("").reverse().join(""),
    sZuVc: function (_0x3a8d79, _0x40ef1f) {
      return _0x3a8d79 >= _0x40ef1f;
    },
    cdtvR: "error",
    zLdJU: "❌ 获取中奖记录失败:",
    EPXvj: "message"
  };
  try {
    var _0x5d1395;
    const _0x5c5478 = {
      method: _0x3dd852.ZPPvl,
      url: _0x3dd852.tuAWF,
      headers: {
        "User-Agent": _0x3dd852.CCXps,
        Authorization: _0x3dd852.vJdjw(_0x3dd852.keQUS.split("").reverse().join(""), rsaJiami[_0x3dd852.rlMVB](_0x1f9258, _0x3dd852.GeZGS.split("").reverse().join("")))
      }
    };
    _0x5d1395 = _0x3dd852.vJdjw(_0x3dd852.DmQFJ(618511, 618502), _0x3dd852.bRSBJ(942774, 942772));
    let _0x45ab62 = await _0x3dd852.NOFyc(axios, _0x5c5478);
    var _0x199929 = _0x3dd852.vJdjw(_0x3dd852.YuPLm(771197, 771196), _0x3dd852.ZXrVD(941232, 941239));
    let _0x1f7006 = _0x3dd852.ZXrVD(412910, 412910);
    _0x199929 = _0x3dd852.ChDVx(323313, 323313);
    var _0x3ae021 = _0x3dd852.szMJQ(_0x3dd852.amRjy(632299, 632301), _0x3dd852.AssoH(900413, 900410));
    const _0x938759 = new Date();
    _0x3ae021 = _0x3dd852.Klldf(666778, 666770);
    _0x45ab62?.["data"]?.["data"]?.["map"](_0x1c9189 => {
      var _0x23cbf6;
      const _0x787ea5 = new Date(_0x1c9189[_0x3dd852.eVQWX]);
      _0x23cbf6 = _0x3dd852.amRjy(800238, 800233);
      var _0x483d84;
      const _0x2610c5 = _0x3dd852.ehHbK(_0x787ea5[_0x3dd852.swXOo](), _0x938759[_0x3dd852.swXOo]()) && _0x3dd852.xzYpl(_0x787ea5[_0x3dd852.bCrFw](), _0x938759[_0x3dd852.bCrFw]());
      _0x483d84 = _0x3dd852.vJdjw(_0x3dd852.amRjy(378563, 378565), _0x3dd852.amRjy(250403, 250401));
      _0x2610c5 && _0x3dd852.NOFyc(String, _0x1c9189[_0x3dd852.REqhC])[_0x3dd852.mVoer]("费话".split("").reverse().join("")) && (_0x1f7006 += _0x3dd852.amRjy(871714, 871715));
    });
    console[_0x3dd852.mpzkn](_0x3dd852.vJdjw(_0x3dd852.szMJQ(_0x3dd852.YLQPS, _0x1f7006), _0x3dd852.RwVYu));
    return _0x3dd852.sZuVc(_0x1f7006, _0x3dd852.DmQFJ(753543, 753539));
  } catch (_0x46b7c1) {
    console[_0x3dd852.cdtvR](_0x3dd852.zLdJU, _0x46b7c1[_0x3dd852.EPXvj]);
    return true;
  }
}
var _0x1732a = 12;
let liveListAll = [];
_0x1732a = 7;
let isGetLive = false;
let pushArr = {};
var _0x89d9f = 5;
let sendTxt = {};
_0x89d9f = "jalcge".split("").reverse().join("");
var _0xcae53a = 9;
let runGameId = [];
_0xcae53a = 7;
var _0xg2824d = 1;
let isStart = false;
_0xg2824d = 8;
async function sendMsg(_0x4c6109, _0x4f1b93) {
  const _0x2df2e8 = {
    Aqyme: "log",
    PMZQs: function (_0x5af025, _0x35dce3) {
      return _0x5af025 + _0x35dce3;
    },
    MXcim: "📤 准备推送消息到uuid: ",
    flVbg: "env",
    fytKQ: "pushAppTok" + "ne".split("").reverse().join(""),
    RHCeR: "星播客中奖",
    YCtEP: function (_0x2106f1, _0x3a4e7c) {
      return _0x2106f1 ^ _0x3a4e7c;
    },
    ZySSN: "https://wxpusher.zjiecode.com/api/send/message",
    DfDTy: "post",
    RAQYz: "headers",
    pafgp: "Content-Type",
    ciTHx: "application/json",
    iskLH: function (_0x507eb1, _0x4a5751) {
      return _0x507eb1(_0x4a5751);
    },
    RvRmD: " :果结送推息消 ��",
    lRKDC: "data",
    zULmQ: "success",
    EuAAG: "，响应:",
    yhbfB: "error",
    kgYGq: "❌ 消息推送失败:",
    ULbCj: "message"
  };
  try {
    console[_0x2df2e8.Aqyme](_0x2df2e8.PMZQs(_0x2df2e8.MXcim, _0x4f1b93));
    const _0x4a04e8 = process[_0x2df2e8.flVbg][_0x2df2e8.fytKQ] || "";
    const _0x1c31d0 = {
      appToken: _0x4a04e8,
      content: _0x4c6109,
      summary: _0x2df2e8.RHCeR,
      contentType: 2,
      topicIds: [],
      uids: [_0x4f1b93],
      verifyPayType: "2"
    };
    var _0x2b93de = _0x2df2e8.PMZQs(_0x2df2e8.YCtEP(626144, 626144), _0x2df2e8.YCtEP(302140, 302133));
    const _0x6c0c2f = {
      url: _0x2df2e8.ZySSN,
      method: _0x2df2e8.DfDTy,
      headers: {},
      data: _0x1c31d0
    };
    _0x2b93de = _0x2df2e8.YCtEP(760188, 760180);
    _0x6c0c2f[_0x2df2e8.RAQYz][_0x2df2e8.pafgp] = _0x2df2e8.ciTHx;
    const _0x1852ef = await _0x2df2e8.iskLH(axios, _0x6c0c2f);
    console[_0x2df2e8.Aqyme](_0x2df2e8.PMZQs(_0x2df2e8.PMZQs(_0x2df2e8.RvRmD.split("").reverse().join(""), _0x1852ef[_0x2df2e8.lRKDC][_0x2df2e8.zULmQ] ? "功成".split("").reverse().join("") : "败失".split("").reverse().join("")), _0x2df2e8.EuAAG), _0x1852ef[_0x2df2e8.lRKDC]);
    return _0x1852ef[_0x2df2e8.lRKDC];
  } catch (_0x333348) {
    console[_0x2df2e8.yhbfB](_0x2df2e8.kgYGq, _0x333348[_0x2df2e8.ULbCj]);
    throw _0x333348;
  }
}
function extractNumbersWithDecimalsAndNegatives(_0x10d72f) {
  const _0x172d89 = new RegExp("-?\\d+(\\.\\d+)?", "g");
  const _0x215802 = _0x10d72f.match(_0x172d89);
  return _0x215802 ? _0x215802.map(Number) : [];
}
async function checkAvailableLotteries(_0x57e6b6) {
  const _0x352a4f = {
    FJUEE: "activeCode",
    Htwfh: "includes",
    daokV: "liveId",
    gqIOx: "push",
    clkxZ: "log",
    UoplZ: function (_0x4ff5bd, _0x571965) {
      return _0x4ff5bd + _0x571965;
    },
    RjGxL: function (_0x52f372, _0x32106c) {
      return _0x52f372 + _0x32106c;
    },
    hTCwC: "=dIevil：动活奖抽可的新现发 ��",
    krgbI: "=称名间播直，",
    EkTTo: "title",
    PNqfK: "，activeCode=",
    NeNOr: function (_0x385f0e, _0x97039f) {
      return _0x385f0e + _0x97039f;
    },
    uChld: "ℹ️ 已抽取过的活动，跳过：activeCode=",
    FZJVg: function (_0x1ba79e, _0x552e03, _0x2f8041, _0x553ffd) {
      return _0x1ba79e(_0x552e03, _0x2f8041, _0x553ffd);
    },
    ZNfWi: function (_0x4ce5f7, _0x40a8ee) {
      return _0x4ce5f7 ^ _0x40a8ee;
    },
    XsbOB: function (_0x30e682, _0x28a5f9) {
      return _0x30e682 == _0x28a5f9;
    },
    sbXPw: function (_0xfcf236, _0x55d540) {
      return _0xfcf236 + _0x55d540;
    },
    DJdFQ: function (_0x1c321d, _0x3132fd) {
      return _0x1c321d + _0x3132fd;
    },
    xwLJG: function (_0x44eb86, _0x336647) {
      return _0x44eb86 + _0x336647;
    },
    TTnIo: function (_0x5bc379, _0x5392b4) {
      return _0x5bc379 + _0x5392b4;
    },
    ckfVx: function (_0x350344, _0x55f2bf) {
      return _0x350344 + _0x55f2bf;
    },
    YZGkw: "⚠️ 直播间商品数量不一致：liveId=",
    PoxTs: "回返，",
    MqAvw: function (_0x59a6c7, _0x309145) {
      return _0x59a6c7 ^ _0x309145;
    },
    RBVzC: "个，实际",
    TZnNt: function (_0x433069, _0x51f92a) {
      return _0x433069 ^ _0x51f92a;
    },
    keiwK: function (_0x2c94d2, _0x24e015) {
      return _0x2c94d2 + _0x24e015;
    },
    FlJxU: function (_0x59bd58, _0x4fc05e) {
      return _0x59bd58 ^ _0x4fc05e;
    },
    fpzMf: function (_0x1991b7, _0xe0ed4) {
      return _0x1991b7 + _0xe0ed4;
    },
    NmzCi: "some",
    tPnrD: "动活奖抽可查检始开 " + "��".split("").reverse().join(""),
    ZLbwo: "parse",
    rGniS: "stringify",
    sidFF: function (_0x34611a, _0x8d3838) {
      return _0x34611a + _0x8d3838;
    },
    sFBbp: "🔍 开始检查直播间商品（共",
    qgect: "length",
    MwBxe: "个直播间）",
    oaulm: "map",
    CUTpE: "all",
    GizMD: "reduce",
    WbATB: function (_0x269e9e, _0x56de7e) {
      return _0x269e9e + _0x56de7e;
    },
    DAzUM: "🔍 可抽奖活动检查完成，共发现",
    YaUOv: "个新活动",
    gBNaP: function (_0x2c5cce, _0x431f78) {
      return _0x2c5cce > _0x431f78;
    },
    eTSDr: function (_0x3114b2, _0xf66d90) {
      return _0x3114b2 ^ _0xf66d90;
    },
    ofsKv: function (_0x125245, _0x1472df) {
      return _0x125245(_0x1472df);
    },
    pMhfx: "🔍 未发现新的可抽奖活动",
    WHFvq: "error",
    DxlvE: "❌ 获取可抽奖活动错" + ":误".split("").reverse().join(""),
    KOEun: "message"
  };
  console[_0x352a4f.clkxZ](_0x352a4f.tPnrD.split("").reverse().join(""));
  let _0x4abe6b = [];
  let _0xf22af6 = JSON[_0x352a4f.ZLbwo](JSON[_0x352a4f.rGniS](liveListAll));
  console[_0x352a4f.clkxZ](_0x352a4f.fpzMf(_0x352a4f.sidFF(_0x352a4f.sFBbp, _0xf22af6[_0x352a4f.qgect]), _0x352a4f.MwBxe));
  try {
    let _0x380ea8 = _0xf22af6[_0x352a4f.oaulm](async _0x4b57de => {
      let _0x5b7aa1 = await _0x352a4f.FZJVg(getGoodsList, _0x4b57de[_0x352a4f.daokV], _0x352a4f.ZNfWi(453297, 453296), _0x57e6b6);
      _0x352a4f.XsbOB(_0x5b7aa1?.["data"]?.["list"]?.["length"], _0x5b7aa1?.["data"]?.["count"]) ? _0x5b7aa1?.["data"]?.["list"]?.["map"](async _0xd5db9b => {
        _0xd5db9b[_0x352a4f.FJUEE] && !runGameId[_0x352a4f.Htwfh](_0xd5db9b[_0x352a4f.FJUEE]) ? (_0xd5db9b[_0x352a4f.daokV] = _0x4b57de?.["liveId"], _0x4abe6b[_0x352a4f.gqIOx](_0xd5db9b), console[_0x352a4f.clkxZ](_0x352a4f.UoplZ(_0x352a4f.UoplZ(_0x352a4f.UoplZ(_0x352a4f.UoplZ(_0x352a4f.RjGxL(_0x352a4f.hTCwC.split("").reverse().join(""), _0xd5db9b[_0x352a4f.daokV]), _0x352a4f.krgbI.split("").reverse().join("")), _0x4b57de[_0x352a4f.EkTTo]), _0x352a4f.PNqfK), _0xd5db9b[_0x352a4f.FJUEE])), runGameId[_0x352a4f.gqIOx](_0xd5db9b[_0x352a4f.FJUEE])) : _0xd5db9b[_0x352a4f.FJUEE] && console[_0x352a4f.clkxZ](_0x352a4f.NeNOr(_0x352a4f.uChld, _0xd5db9b[_0x352a4f.FJUEE]));
      }) : console[_0x352a4f.clkxZ](_0x352a4f.sbXPw(_0x352a4f.DJdFQ(_0x352a4f.xwLJG(_0x352a4f.DJdFQ(_0x352a4f.TTnIo(_0x352a4f.ckfVx(_0x352a4f.YZGkw, _0x4b57de[_0x352a4f.daokV]), _0x352a4f.PoxTs.split("").reverse().join("")), _0x5b7aa1?.["data"]?.["list"]?.["length"] || _0x352a4f.MqAvw(532203, 532203)), _0x352a4f.RBVzC), _0x5b7aa1?.["data"]?.["count"] || _0x352a4f.TZnNt(665347, 665347)), "个"));
    });
    await Promise[_0x352a4f.CUTpE](_0x380ea8);
    const _0x241b1c = _0x4abe6b[_0x352a4f.GizMD]((_0x37316a, _0x714065) => {
      var _0x543e28 = _0x352a4f.keiwK(_0x352a4f.FlJxU(199195, 199194), _0x352a4f.FlJxU(566578, 566576));
      const _0x4ca433 = _0x352a4f.fpzMf(_0x352a4f.UoplZ(_0x714065[_0x352a4f.daokV], "-"), _0x714065[_0x352a4f.FJUEE]);
      _0x543e28 = _0x352a4f.FlJxU(525789, 525784);
      !_0x37316a[_0x352a4f.NmzCi](_0x2106d8 => _0x2106d8.liveId + "-" + _0x2106d8.activeCode === _0x4ca433) && _0x37316a[_0x352a4f.gqIOx](_0x714065);
      return _0x37316a;
    }, []);
    console[_0x352a4f.clkxZ](_0x352a4f.UoplZ(_0x352a4f.WbATB(_0x352a4f.DAzUM, _0x241b1c[_0x352a4f.qgect]), _0x352a4f.YaUOv));
    _0x352a4f.gBNaP(_0x241b1c[_0x352a4f.qgect], _0x352a4f.eTSDr(819863, 819863)) ? await _0x352a4f.ofsKv(processAllLotteries, _0x241b1c) : console[_0x352a4f.clkxZ](_0x352a4f.pMhfx);
    return _0x241b1c;
  } catch (_0x533d93) {
    console[_0x352a4f.WHFvq](_0x352a4f.DxlvE, _0x533d93[_0x352a4f.KOEun]);
    return [];
  }
}
async function processAllLotteries(_0x29c2df, _0xa319c4) {
  const _0x1915ba = {
    KUPSs: function (_0x1feb5e, _0xacb2e4) {
      return _0x1feb5e > _0xacb2e4;
    },
    FwNPp: "length",
    VmhrI: function (_0x2b54d7, _0x142e16) {
      return _0x2b54d7 ^ _0x142e16;
    },
    epAtV: function (_0x1a2a97, _0xdb3d88, _0x3c1664) {
      return _0x1a2a97(_0xdb3d88, _0x3c1664);
    },
    BGpHF: "log",
    eUnjU: function (_0x201c76, _0x2c6fb6) {
      return _0x201c76 + _0x2c6fb6;
    },
    JROyT: function (_0x410b6e, _0x493ef2) {
      return _0x410b6e + _0x493ef2;
    },
    fzFgg: "🎯 开始处理抽奖活动（共",
    HIHvw: "）动活个",
    FbJFR: function (_0x70fc55, _0x59b7ed) {
      return _0x70fc55 === _0x59b7ed;
    },
    SrVpQ: function (_0x828feb, _0x5d50d0) {
      return _0x828feb ^ _0x5d50d0;
    },
    AqrHc: "程流束结，动活的奖抽可有没 ��",
    XDIfA: function (_0x352582, _0x31bf86) {
      return _0x352582 + _0x31bf86;
    },
    koJbS: "共，奖抽行执始开 ��",
    lMwcA: "个活动需要处理",
    EORls: function (_0x57563e, _0x26114c) {
      return _0x57563e < _0x26114c;
    },
    HtpIN: "dompbh",
    AoVRJ: function (_0x5e1923, _0x5ded05) {
      return _0x5e1923 + _0x5ded05;
    },
    tyaqg: function (_0x400b4c, _0x4a7de1) {
      return _0x400b4c + _0x4a7de1;
    },
    FsMIT: function (_0x333b75, _0x3a3d83) {
      return _0x333b75 + _0x3a3d83;
    },
    lFSKh: function (_0x164d52, _0x11115a) {
      return _0x164d52 + _0x11115a;
    },
    VfzKS: "🎯 处理第",
    hOKEr: function (_0x2778ca, _0x298de2) {
      return _0x2778ca ^ _0x298de2;
    },
    RkiUf: "=dIevil：动活个",
    oGmoP: "liveId",
    gqpZU: "，activeCode=",
    ddUVB: "activeCode",
    NuDWb: "xbkToken",
    Pfibq: "isDo",
    zwwZE: function (_0x566f50, _0x486f57, _0x39473a) {
      return _0x566f50(_0x486f57, _0x39473a);
    },
    kqeVD: function (_0x51b6d4, _0x28ed9d) {
      return _0x51b6d4 + _0x28ed9d;
    },
    hPXTV: "ℹ️ 账号",
    zdSmQ: function (_0x4fc857, _0x42bf9a) {
      return _0x4fc857(_0x42bf9a);
    },
    mNEXt: "phone",
    muKkg: "次抽奖机会",
    VxIQY: function (_0x4afe87, _0x2e9504) {
      return _0x4afe87 ^ _0x2e9504;
    },
    KXnbB: function (_0x3eeb24, _0x22588e) {
      return _0x3eeb24 + _0x22588e;
    },
    kKhCX: function (_0x5f30a4, _0x128ef0) {
      return _0x5f30a4 + _0x128ef0;
    },
    bakUo: function (_0x3ee914, _0xd78cb7) {
      return _0x3ee914 + _0xd78cb7;
    },
    ZTTyd: function (_0x1d2e41, _0x3d0227) {
      return _0x1d2e41 + _0x3d0227;
    },
    BieBp: function (_0x116840, _0x3d4346) {
      return _0x116840 + _0x3d4346;
    },
    naLjq: function (_0x46c03e, _0x39dfc7) {
      return _0x46c03e + _0x39dfc7;
    },
    qgEkA: "🎰 账号",
    SWSqb: function (_0x156633, _0x20145a) {
      return _0x156633(_0x20145a);
    },
    CGlCd: function (_0x3b9813, _0x3fbfb7) {
      return _0x3b9813 ^ _0x3fbfb7;
    },
    KjDbz: "动活（奖抽次",
    owRLZ: function (_0x2b2b9c, _0x508443) {
      return _0x2b2b9c + _0x508443;
    },
    scHxF: function (_0x500a68, _0x16858b, _0x51513b, _0x2f8d2a, _0x23e86d, _0x173c85) {
      return _0x500a68(_0x16858b, _0x51513b, _0x2f8d2a, _0x23e86d, _0x173c85);
    },
    LjHsf: "uid",
    ciyJO: function (_0x1df54a, _0x9678a1) {
      return _0x1df54a ^ _0x9678a1;
    },
    ekfdv: "success",
    LwTFg: function (_0x2340dd, _0x303221) {
      return _0x2340dd + _0x303221;
    },
    XFagF: "<div>手机号: ",
    AmHJW: function (_0x1360f3, _0x4d1c95) {
      return _0x1360f3(_0x4d1c95);
    },
    PXkTG: ">\";der :roloc\"=elyts naps<:得获 ,功成奖抽,",
    YRNVi: "prize",
    mZEui: "</span></div>",
    AarVL: function (_0x41d48c, _0x5fa942) {
      return _0x41d48c + _0x5fa942;
    },
    wfeIa: function (_0x2d8c3b, _0x3f70fb) {
      return _0x2d8c3b + _0x3f70fb;
    },
    VMFmb: "⚠️ 账号",
    UGumh: function (_0x437c06, _0x366b54) {
      return _0x437c06(_0x366b54);
    },
    uKkAO: "未获取到token，跳过抽奖",
    ogDGg: function (_0x5aa50d, _0x57cdf0) {
      return _0x5aa50d(_0x57cdf0);
    },
    voORQ: "已达抽奖上限，跳过",
    HzICT: "🎯 所有抽奖活动处理完毕，准备推送结果",
    EFTQs: function (_0xf000db, _0x578c80) {
      return _0xf000db ^ _0x578c80;
    },
    FHBFo: function (_0xd766f1, _0x4ae9f7) {
      return _0xd766f1 + _0x4ae9f7;
    },
    McLZR: function (_0x2278af, _0x3dd1ee) {
      return _0x2278af ^ _0x3dd1ee;
    },
    UvUQK: function (_0x4f7b69, _0x5f020d) {
      return _0x4f7b69 + _0x5f020d;
    },
    EUsKi: function (_0xb04490, _0x105dc0) {
      return _0xb04490 ^ _0x105dc0;
    },
    RUUUT: function (_0x2b4a88, _0x26f332) {
      return _0x2b4a88 - _0x26f332;
    },
    mYVRN: function (_0x19a3b4, _0x2c7967) {
      return _0x19a3b4 ^ _0x2c7967;
    },
    pqSyw: function (_0x3513e3, _0x1d8ae0) {
      return _0x3513e3 > _0x1d8ae0;
    },
    fqqJk: function (_0x4961c0, _0x428b7e) {
      return _0x4961c0 + _0x428b7e;
    },
    yMlXx: "元话费",
    VnrHG: "📝 准备推送的中奖结" + "：果".split("").reverse().join(""),
    Gwshx: "substring",
    yCQwT: function (_0x35013d, _0x10d654) {
      return _0x35013d ^ _0x10d654;
    },
    LyadO: "...",
    fJepK: "🎯 所有抽奖活动处理" + "成完".split("").reverse().join(""),
    SPLoQ: "error",
    bFJfM: function (_0x518953, _0x18b203) {
      return _0x518953 + _0x18b203;
    },
    ldmdi: "：误错重严程流奖抽 ❌",
    KVfKy: "message"
  };
  console[_0x1915ba.BGpHF](_0x1915ba.eUnjU(_0x1915ba.JROyT(_0x1915ba.fzFgg, _0x29c2df[_0x1915ba.FwNPp]), _0x1915ba.HIHvw.split("").reverse().join("")));
  try {
    if (_0x1915ba.FbJFR(_0x29c2df[_0x1915ba.FwNPp], _0x1915ba.SrVpQ(576269, 576269))) {
      console[_0x1915ba.BGpHF](_0x1915ba.AqrHc.split("").reverse().join(""));
      return;
    }
    isStart = true;
    console[_0x1915ba.BGpHF](_0x1915ba.XDIfA(_0x1915ba.eUnjU(_0x1915ba.koJbS.split("").reverse().join(""), _0x29c2df[_0x1915ba.FwNPp]), _0x1915ba.lMwcA));
    for (let _0x355067 = _0x1915ba.VmhrI(304523, 304523); _0x1915ba.EORls(_0x355067, _0x29c2df[_0x1915ba.FwNPp]); _0x355067++) {
      var _0x4e0408 = _0x1915ba.JROyT(_0x1915ba.SrVpQ(397094, 397092), _0x1915ba.SrVpQ(929971, 929974));
      const _0x2d9dc7 = _0x29c2df[_0x355067];
      _0x4e0408 = _0x1915ba.HtpIN.split("").reverse().join("");
      console[_0x1915ba.BGpHF](_0x1915ba.AoVRJ(_0x1915ba.AoVRJ(_0x1915ba.tyaqg(_0x1915ba.AoVRJ(_0x1915ba.XDIfA(_0x1915ba.FsMIT(_0x1915ba.lFSKh(_0x1915ba.VfzKS, _0x1915ba.FsMIT(_0x355067, _0x1915ba.hOKEr(373830, 373831))), "/"), _0x29c2df[_0x1915ba.FwNPp]), _0x1915ba.RkiUf.split("").reverse().join("")), _0x2d9dc7[_0x1915ba.oGmoP]), _0x1915ba.gqpZU), _0x2d9dc7[_0x1915ba.ddUVB]));
      for (const _0x1912d6 of _0xa319c4) {
        if (_0x1912d6[_0x1915ba.NuDWb] && _0x1912d6[_0x1915ba.Pfibq]) {
          const _0x394890 = await _0x1915ba.zwwZE(getLotteryChances, _0x1912d6[_0x1915ba.NuDWb], _0x2d9dc7[_0x1915ba.ddUVB]);
          console[_0x1915ba.BGpHF](_0x1915ba.FsMIT(_0x1915ba.kqeVD(_0x1915ba.tyaqg(_0x1915ba.kqeVD(_0x1915ba.hPXTV, _0x1915ba.zdSmQ(maskPhoneNumber, _0x1912d6[_0x1915ba.mNEXt])), "有"), _0x394890), _0x1915ba.muKkg));
          for (let _0x4cc9fc = _0x1915ba.VxIQY(702297, 702297); _0x1915ba.EORls(_0x4cc9fc, _0x394890); _0x4cc9fc++) {
            console[_0x1915ba.BGpHF](_0x1915ba.KXnbB(_0x1915ba.kKhCX(_0x1915ba.bakUo(_0x1915ba.JROyT(_0x1915ba.KXnbB(_0x1915ba.ZTTyd(_0x1915ba.BieBp(_0x1915ba.KXnbB(_0x1915ba.naLjq(_0x1915ba.lFSKh(_0x1915ba.qgEkA, _0x1915ba.SWSqb(maskPhoneNumber, _0x1912d6[_0x1915ba.mNEXt])), "的第"), _0x1915ba.BieBp(_0x4cc9fc, _0x1915ba.CGlCd(646550, 646551))), "/"), _0x394890), _0x1915ba.KjDbz.split("").reverse().join("")), _0x1915ba.owRLZ(_0x355067, _0x1915ba.hOKEr(131729, 131728))), "/"), _0x29c2df[_0x1915ba.FwNPp]), "）"));
            var _0xcc38d9;
            const _0x40fe8e = await _0x1915ba.scHxF(doLottery, _0x2d9dc7[_0x1915ba.oGmoP], _0x2d9dc7[_0x1915ba.ddUVB], _0x1912d6[_0x1915ba.NuDWb], _0x1912d6[_0x1915ba.mNEXt], _0x1912d6[_0x1915ba.LjHsf]);
            _0xcc38d9 = _0x1915ba.ciyJO(759992, 759995);
            _0x40fe8e && _0x40fe8e[_0x1915ba.ekfdv] && (!pushArr[_0x1912d6[_0x1915ba.LjHsf]] && (pushArr[_0x1912d6[_0x1915ba.LjHsf]] = {}), pushArr[_0x1912d6[_0x1915ba.LjHsf]][_0x1912d6[_0x1915ba.mNEXt]] = _0x1915ba.FsMIT(_0x1915ba.owRLZ(_0x1915ba.LwTFg(_0x1915ba.kqeVD(_0x1915ba.XFagF, _0x1915ba.AmHJW(maskPhoneNumber, _0x1912d6[_0x1915ba.mNEXt])), _0x1915ba.PXkTG.split("").reverse().join("")), _0x40fe8e[_0x1915ba.YRNVi]), _0x1915ba.mZEui));
            await _0x1915ba.AmHJW(sleep, _0x1915ba.CGlCd(470975, 466975));
          }
        } else {
          !_0x1912d6[_0x1915ba.NuDWb] ? console[_0x1915ba.BGpHF](_0x1915ba.AarVL(_0x1915ba.wfeIa(_0x1915ba.VMFmb, _0x1915ba.UGumh(maskPhoneNumber, _0x1912d6[_0x1915ba.mNEXt])), _0x1915ba.uKkAO)) : !_0x1912d6[_0x1915ba.Pfibq] && console[_0x1915ba.BGpHF](_0x1915ba.tyaqg(_0x1915ba.AoVRJ(_0x1915ba.VMFmb, _0x1915ba.ogDGg(maskPhoneNumber, _0x1912d6[_0x1915ba.mNEXt])), _0x1915ba.voORQ));
        }
      }
    }
    console[_0x1915ba.BGpHF](_0x1915ba.HzICT);
    for (let _0xa1ff14 in pushArr) {
      let _0x2837e2 = "";
      var _0x4d9ff2;
      let _0x2a9fb9 = _0x1915ba.SrVpQ(720015, 720015);
      _0x4d9ff2 = _0x1915ba.EFTQs(977768, 977768);
      for (let _0x4fdee8 in pushArr[_0xa1ff14]) {
        _0x2837e2 += pushArr[_0xa1ff14][_0x4fdee8];
        var _0x4dd0b8 = _0x1915ba.FHBFo(_0x1915ba.hOKEr(538064, 538070), _0x1915ba.McLZR(859748, 859744));
        let _0x1add21 = _0x1915ba.ogDGg(extractNumbersWithDecimalsAndNegatives, pushArr[_0xa1ff14][_0x4fdee8]);
        _0x4dd0b8 = _0x1915ba.UvUQK(_0x1915ba.EUsKi(818165, 818167), _0x1915ba.EFTQs(388679, 388679));
        _0x2a9fb9 += _0x1add21[_0x1915ba.RUUUT(_0x1add21[_0x1915ba.FwNPp], _0x1915ba.EFTQs(151271, 151270))] || _0x1915ba.mYVRN(131564, 131564);
      }
      _0x1915ba.pqSyw(_0x2a9fb9, _0x1915ba.CGlCd(585145, 585145)) && (_0x2837e2 += _0x1915ba.fqqJk(_0x2a9fb9, _0x1915ba.yMlXx), sendTxt[_0xa1ff14] = _0x2837e2, console[_0x1915ba.BGpHF](_0x1915ba.kqeVD(_0x1915ba.FHBFo(_0x1915ba.VnrHG, _0x2837e2[_0x1915ba.Gwshx](_0x1915ba.yCQwT(698267, 698267), _0x1915ba.hOKEr(500364, 500414))), _0x1915ba.LyadO)));
    }
    pushArr = {};
    isStart = false;
    console[_0x1915ba.BGpHF](_0x1915ba.fJepK);
  } catch (_0x823b77) {
    console[_0x1915ba.SPLoQ](_0x1915ba.bFJfM(_0x1915ba.ldmdi.split("").reverse().join(""), _0x823b77[_0x1915ba.KVfKy]));
    isStart = false;
    _0x1915ba.zwwZE(setTimeout, () => {
      _0x29c2df && _0x1915ba.KUPSs(_0x29c2df[_0x1915ba.FwNPp], _0x1915ba.VmhrI(159575, 159575)) && _0x1915ba.epAtV(processAllLotteries, _0x29c2df, _0xa319c4);
    }, _0x1915ba.ciyJO(818872, 824536));
  }
}
async function getLiveListByPhone(_0x33b3ea, _0x21b3dd, _0x344ae7) {
  const _0x43d1bb = {
    ocfQp: "log",
    LcIll: function (_0x469c5a, _0x6b265c) {
      return _0x469c5a + _0x6b265c;
    },
    vQCxx: function (_0x149c9b, _0x510c0d) {
      return _0x149c9b + _0x510c0d;
    },
    KAmML: "📱 开始获取直播间列表（手机号：",
    cvULu: function (_0x48ad15, _0x52e69f) {
      return _0x48ad15(_0x52e69f);
    },
    iLYLY: function (_0x6eb1e5, _0x415eb8) {
      return _0x6eb1e5 + _0x415eb8;
    },
    mqZAm: function (_0x3fa816, _0x254c45) {
      return _0x3fa816 ^ _0x254c45;
    },
    KApyv: function (_0x50e0f5, _0x1326e1) {
      return _0x50e0f5 ^ _0x1326e1;
    },
    WiQer: function (_0x35630d, _0x3c8b04, _0x4b744a, _0x33b07a) {
      return _0x35630d(_0x3c8b04, _0x4b744a, _0x33b07a);
    },
    oaNVP: function (_0x78bf3d, _0x20879) {
      return _0x78bf3d ^ _0x20879;
    },
    MdZwU: function (_0xa26c93, _0x66c7d6) {
      return _0xa26c93 + _0x66c7d6;
    },
    jGIGW: "：号机手（间播直取获法无，败失录登 ❌",
    NTpXv: function (_0x41a056, _0x2d0105) {
      return _0x41a056(_0x2d0105);
    },
    Bqdvy: "init",
    wMEmz: function (_0x13e2a7, _0x3f3032) {
      return _0x13e2a7(_0x3f3032);
    },
    ooMMR: "uid",
    yjnSw: function (_0x4853a8, _0x390bc4) {
      return _0x4853a8 ^ _0x390bc4;
    },
    HwFPW: function (_0x1aa780, _0xc0994c) {
      return _0x1aa780 ^ _0xc0994c;
    },
    AJhRx: "：号机手（据数间播直化始初始开，功成录登 ✅",
    uNxth: function (_0x2d302b, _0x3057e6) {
      return _0x2d302b(_0x3057e6);
    },
    isAHn: function (_0x55bdc0, _0x940258, _0x11bc47, _0x2198d8, _0x510584) {
      return _0x55bdc0(_0x940258, _0x11bc47, _0x2198d8, _0x510584);
    },
    qQQgo: function (_0x51ed6b, _0x581e5f) {
      return _0x51ed6b ^ _0x581e5f;
    },
    EZuIn: function (_0x3b2cc1, _0x229ed1) {
      return _0x3b2cc1 ^ _0x229ed1;
    },
    HcXZb: "error",
    pdBeB: function (_0x1f28c5, _0x22952d) {
      return _0x1f28c5 + _0x22952d;
    },
    ZfLjb: "❌ 获取直播间列表错" + "：误".split("").reverse().join(""),
    YqVgH: "message",
    jzKZh: "（手机号："
  };
  console[_0x43d1bb.ocfQp](_0x43d1bb.LcIll(_0x43d1bb.vQCxx(_0x43d1bb.KAmML, _0x43d1bb.cvULu(maskPhoneNumber, _0x33b3ea)), "）"));
  try {
    var _0x5ea107 = _0x43d1bb.iLYLY(_0x43d1bb.mqZAm(974698, 974690), _0x43d1bb.KApyv(374745, 374744));
    let _0x532aa8 = await _0x43d1bb.WiQer(loginPhone, _0x33b3ea, _0x21b3dd, _0x344ae7);
    _0x5ea107 = _0x43d1bb.iLYLY(_0x43d1bb.oaNVP(643176, 643179), _0x43d1bb.KApyv(914384, 914384));
    if (!_0x532aa8) {
      console[_0x43d1bb.ocfQp](_0x43d1bb.MdZwU(_0x43d1bb.MdZwU(_0x43d1bb.jGIGW.split("").reverse().join(""), _0x43d1bb.NTpXv(maskPhoneNumber, _0x33b3ea)), "）"));
      _0x43d1bb.cvULu(initLiveList, _0x43d1bb.Bqdvy);
      return;
    }
    var _0x47a23a = _0x43d1bb.MdZwU(_0x43d1bb.oaNVP(348495, 348488), _0x43d1bb.mqZAm(888748, 888741));
    let _0x3d6b3a = await _0x43d1bb.wMEmz(getUserCode, _0x532aa8[_0x43d1bb.ooMMR]);
    _0x47a23a = _0x43d1bb.vQCxx(_0x43d1bb.yjnSw(295665, 295673), _0x43d1bb.HwFPW(162326, 162324));
    let _0x21ce87 = await _0x43d1bb.cvULu(getAccessToken, _0x3d6b3a);
    console[_0x43d1bb.ocfQp](_0x43d1bb.MdZwU(_0x43d1bb.MdZwU(_0x43d1bb.AJhRx.split("").reverse().join(""), _0x43d1bb.uNxth(maskPhoneNumber, _0x33b3ea)), "）"));
    await _0x43d1bb.isAHn(initLiveRoomFloor, _0x43d1bb.qQQgo(484202, 484203), _0x43d1bb.EZuIn(638617, 638616), _0x43d1bb.mqZAm(889574, 889575), _0x21ce87);
  } catch (_0x30ef03) {
    console[_0x43d1bb.HcXZb](_0x43d1bb.pdBeB(_0x43d1bb.pdBeB(_0x43d1bb.pdBeB(_0x43d1bb.LcIll(_0x43d1bb.ZfLjb, _0x30ef03[_0x43d1bb.YqVgH]), _0x43d1bb.jzKZh), _0x43d1bb.cvULu(maskPhoneNumber, _0x33b3ea)), "）"));
  }
}
async function initLiveList(_0x7203a, _0xf6f0dd) {
  console.log("：型类（据数间播直取获始开 ��".split("").reverse().join("") + _0x7203a + "）");
  try {
    if (_0x7203a == "tini".split("").reverse().join("")) {
      console.log("🏠 初始化直播间数据：使用随机账号");
      var _0x134f7b;
      let _0x580eef = Math.floor(Math.random() * _0xf6f0dd.length);
      _0x134f7b = 9;
      let _0x300db5 = _0xf6f0dd[_0x580eef];
      await getLiveListByPhone(_0x300db5.phone, _0x300db5.password, _0x300db5.loginObj);
    } else {
      let _0x1b4de4 = Math.floor(Math.random() * _0xf6f0dd.length);
      let _0x45ca16 = _0xf6f0dd[_0x1b4de4];
      _0x45ca16.xbkToken ? (console.log("：号机手（间播直新更nekot有已用使 ��".split("").reverse().join("") + maskPhoneNumber(_0x45ca16.phone) + "）"), await initLiveRoomFloor(1, 1, 1, _0x45ca16.xbkToken)) : (console.log("🏠 账号token不存在，重新初始化"), initLiveList("init", _0xf6f0dd));
    }
  } catch (_0x1a49f3) {
    console.error("：误错间播直取获 ❌".split("").reverse().join("") + _0x1a49f3.message);
  }
}
async function checkLotteryActivities(_0x4759c9) {
  console.log("⏰ 触发检查可抽奖活动（每10秒一次）");
  try {
    if (isStart) {
      console.log("查检次本过跳，中行进在正程流奖抽 ⏰".split("").reverse().join(""));
      return;
    }
    if (_0x4759c9.length === 0) {
      console.log("❌ 没有可用账号，无法检查抽奖活动");
      return;
    }
    var _0x4d7170;
    let _0x51065b = Math.floor(Math.random() * _0x4759c9.length);
    _0x4d7170 = 1;
    let _0x340ede = _0x4759c9[_0x51065b];
    _0x340ede.xbkToken ? (console.log("🔍 使用账号" + maskPhoneNumber(_0x340ede.phone) + "动活奖抽可查检".split("").reverse().join("")), await checkAvailableLotteries(_0x340ede.xbkToken)) : (console.log("⚠️ 账号" + maskPhoneNumber(_0x340ede.phone) + "未登录，尝试重新登录"), await loginAllAccounts(_0x4759c9), checkLotteryActivities(_0x4759c9));
  } catch (_0x11f340) {
    console.error("：误错动活奖抽查检 ❌".split("").reverse().join("") + _0x11f340.message);
    setTimeout(() => checkLotteryActivities(_0x4759c9), 5000);
  }
}
async function loginAllAccounts(_0x2502bd, _0x113895) {
  console.log("🔐 开始检查所有账号状态（共" + _0x2502bd.length + "个）");
  try {
    let _0x3e5252 = _0x2502bd.map(async (_0x8b580d, _0x30e5ed) => {
      try {
        if (!_0x8b580d.time) {
          console.log("🔐 账号" + maskPhoneNumber(_0x8b580d.phone) + "：首次登录");
          let _0x117b97 = await loginPhoneWithCache(_0x8b580d.phone, _0x8b580d.password, _0x113895);
          _0x2502bd[_0x30e5ed].time = new Date().valueOf();
          if (!_0x117b97) {
            console.log("号账 ❌".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "登录失败");
            _0x2502bd[_0x30e5ed].isLogin = false;
            return;
          }
          var _0x3ac40e = 17;
          let _0x2af1b5 = await getUserCode(_0x117b97.uid);
          _0x3ac40e = 2;
          let _0x49f549 = await getAccessToken(_0x2af1b5);
          _0x2502bd[_0x30e5ed].xbkToken = _0x49f549;
          _0x2502bd[_0x30e5ed].isDo = await getMyWinList(_0x49f549);
          _0x2502bd[_0x30e5ed].isLogin = true;
          console.log("号账 ✅".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "登录成功");
          !isGetLive && liveListAll.length == 0 && (isGetLive = true, console.log("号账用使 ��".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "初始化直播间数据"), await initLiveRoomFloor(1, 1, 1, _0x49f549));
        } else {
          if (_0x8b580d.time && new Date().valueOf() - _0x8b580d.time > 43200000) {
            console.log("🔐 账号" + maskPhoneNumber(_0x8b580d.phone) + "：token过期（>12小时），重新登录");
            let _0x3c46cd = await loginPhoneWithCache(_0x8b580d.phone, _0x8b580d.password, _0x113895);
            _0x2502bd[_0x30e5ed].time = new Date().valueOf();
            if (!_0x3c46cd) {
              console.log("号账 ❌".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "败失录登新重".split("").reverse().join(""));
              _0x2502bd[_0x30e5ed].isLogin = false;
              return;
            }
            var _0x450648;
            let _0xd21921 = await getUserCode(_0x3c46cd.uid);
            _0x450648 = 9;
            let _0x2aa8e7 = await getAccessToken(_0xd21921);
            _0x2502bd[_0x30e5ed].xbkToken = _0x2aa8e7;
            _0x2502bd[_0x30e5ed].isDo = await getMyWinList(_0x2aa8e7);
            _0x2502bd[_0x30e5ed].isLogin = true;
            console.log("号账 ✅".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "功成录登新重".split("").reverse().join(""));
          } else {
            if (_0x8b580d.time && new Date().valueOf() - _0x8b580d.time > 21600000 && !_0x8b580d.isLogin) {
              console.log("号账 ��".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "：未登录（>6小时），尝试登录");
              var _0xfff2e6 = 17;
              let _0x3fdcc9 = await loginPhoneWithCache(_0x8b580d.phone, _0x8b580d.password, _0x113895);
              _0xfff2e6 = "neooeq".split("").reverse().join("");
              _0x2502bd[_0x30e5ed].time = new Date().valueOf();
              if (!_0x3fdcc9) {
                console.log("号账 ❌".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "败失录登".split("").reverse().join(""));
                _0x2502bd[_0x30e5ed].isLogin = false;
                return;
              }
              var _0x1aa588 = 8;
              let _0x408a9c = await getUserCode(_0x3fdcc9.uid);
              _0x1aa588 = "ifbcpb";
              var _0x41772b = 7;
              let _0x56e32c = await getAccessToken(_0x408a9c);
              _0x41772b = 4;
              _0x2502bd[_0x30e5ed].xbkToken = _0x56e32c;
              _0x2502bd[_0x30e5ed].isDo = await getMyWinList(_0x56e32c);
              _0x2502bd[_0x30e5ed].isLogin = true;
              console.log("号账 ✅".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "登录成功");
            } else {
              console.log("ℹ️ 账号" + maskPhoneNumber(_0x8b580d.phone) + "状态正常（无需重新登录）");
            }
          }
        }
      } catch (_0x2a7b21) {
        console.error("❌ 处理账号" + maskPhoneNumber(_0x8b580d.phone) + "：误错".split("").reverse().join("") + _0x2a7b21.message);
      }
    });
    await Promise.all(_0x3e5252);
    var _0x40bd27;
    const _0x11f33a = _0x2502bd.filter(_0x256651 => _0x256651.isLogin && _0x256651.xbkToken);
    _0x40bd27 = "jodkbc".split("").reverse().join("");
    console.log("🔐 所有账号检查完毕，活跃账号数量：" + _0x11f33a.length + "/" + _0x2502bd.length);
    return _0x11f33a.length > 0;
  } catch (_0x2103c7) {
    console.error("：误错录登量批 ❌".split("").reverse().join("") + _0x2103c7.message);
    return false;
  }
}
async function initializeUserData(_0x540906) {
  const _0x5f43a6 = {
    qAdVm: "log",
    BdJQM: "📋 开始初始化用户数据",
    joobq: "parse",
    IOphk: "readFileSy" + "cn".split("").reverse().join(""),
    dJIGc: "./Cache.json",
    FYayh: "utf8",
    xNLTb: "📋 成功加载缓存数据",
    tGStD: "📋 缓存文件不存在，创建新缓存",
    JAoiL: "writeFileSync",
    rIwgL: "stringify",
    Oiyrz: "8ftu",
    InTYn: function (_0x8bf9a6, _0x3f11c4) {
      return _0x8bf9a6 + _0x3f11c4;
    },
    CznRr: function (_0x16ac21, _0x58705c) {
      return _0x16ac21 + _0x58705c;
    },
    xkWQv: "📋 共获取到",
    DQbGP: "length",
    zkkvR: "个账号",
    SITor: function (_0x4fd8ee, _0x2c1dee, _0xf615e0) {
      return _0x4fd8ee(_0x2c1dee, _0xf615e0);
    },
    LRfpl: function (_0x573cc8, _0x5aa0) {
      return _0x573cc8 === _0x5aa0;
    },
    ugiGi: function (_0x36505f, _0xb4cf8) {
      return _0x36505f ^ _0xb4cf8;
    },
    bvzoC: "🏠 本地无直播间数据，开始初始化",
    dobwT: function (_0x4b42bd, _0x39c392) {
      return _0x4b42bd ^ _0x39c392;
    },
    uoTsj: "find",
    SImkG: function (_0x2964a2, _0xc24d9a) {
      return _0x2964a2 ^ _0xc24d9a;
    },
    yBgLZ: function (_0x31db32, _0xdd9f1a, _0x2abf60, _0x424134, _0x23e4ff) {
      return _0x31db32(_0xdd9f1a, _0x2abf60, _0x424134, _0x23e4ff);
    },
    vDgRD: function (_0x190d41, _0x39c024) {
      return _0x190d41 ^ _0x39c024;
    },
    OxqDo: function (_0xdadbe5, _0x3ff63f) {
      return _0xdadbe5 ^ _0x3ff63f;
    },
    KmjJH: function (_0x14958a, _0x1f2cfe) {
      return _0x14958a ^ _0x1f2cfe;
    },
    fCUqO: "xbkToken",
    qGgkK: "❌ 没有可用的已登录账号，无法初始化直播间",
    YVgXu: "error",
    TMtuC: function (_0x52b3be, _0xe4af39) {
      return _0x52b3be + _0xe4af39;
    },
    zcMhw: "❌ 初始化用户数据错误：",
    idrjK: "message"
  };
  console[_0x5f43a6.qAdVm](_0x5f43a6.BdJQM);
  try {
    let _0x4b5a9d = {};
    try {
      _0x4b5a9d = JSON[_0x5f43a6.joobq](fs[_0x5f43a6.IOphk](_0x5f43a6.dJIGc, _0x5f43a6.FYayh));
      console[_0x5f43a6.qAdVm](_0x5f43a6.xNLTb);
    } catch (_0xbb4d5e) {
      console[_0x5f43a6.qAdVm](_0x5f43a6.tGStD);
      fs[_0x5f43a6.JAoiL](_0x5f43a6.dJIGc, JSON[_0x5f43a6.rIwgL]({}), _0x5f43a6.Oiyrz.split("").reverse().join(""));
      _0x4b5a9d = {};
    }
    console[_0x5f43a6.qAdVm](_0x5f43a6.InTYn(_0x5f43a6.CznRr(_0x5f43a6.xkWQv, _0x540906[_0x5f43a6.DQbGP]), _0x5f43a6.zkkvR));
    await _0x5f43a6.SITor(loginAllAccounts, _0x540906, _0x4b5a9d);
    if (_0x5f43a6.LRfpl(liveListAll[_0x5f43a6.DQbGP], _0x5f43a6.ugiGi(978004, 978004)) && !isGetLive) {
      console[_0x5f43a6.qAdVm](_0x5f43a6.bvzoC);
      var _0x5b6875 = _0x5f43a6.CznRr(_0x5f43a6.dobwT(996954, 996955), _0x5f43a6.ugiGi(377809, 377810));
      const _0x54880d = _0x540906[_0x5f43a6.uoTsj](_0x4856aa => _0x4856aa.xbkToken);
      _0x5b6875 = _0x5f43a6.SImkG(522588, 522584);
      _0x54880d ? await _0x5f43a6.yBgLZ(initLiveRoomFloor, _0x5f43a6.vDgRD(969621, 969620), _0x5f43a6.OxqDo(909933, 909932), _0x5f43a6.KmjJH(624483, 624482), _0x54880d[_0x5f43a6.fCUqO]) : console[_0x5f43a6.qAdVm](_0x5f43a6.qGgkK);
    }
  } catch (_0x4b7cfe) {
    console[_0x5f43a6.YVgXu](_0x5f43a6.TMtuC(_0x5f43a6.zcMhw, _0x4b7cfe[_0x5f43a6.idrjK]));
    _0x5f43a6.SITor(setTimeout, () => initializeUserData(_0x540906), 300000);
  }
}
function getTimestamp() {
  return getTimestampFormatted();
}
var _0xb8gbd = 10;
const originalLog = console.log;
_0xb8gbd = 0;
console.log = function (..._0x1c95e4) {
  const _0x182f35 = getTimestamp();
  originalLog("[" + _0x182f35 + "]", ..._0x1c95e4);
};
let userPhone = [];
process?.["env"]?.["chinaTelecomAccount"] ? process?.["env"]?.["chinaTelecomAccount"]["split"]("&")["map"](_0xba94bd => {
  if (_0xba94bd) {
    let _0xe461e2 = _0xba94bd.split("#")[0];
    var _0x3f8bcb = 4;
    let _0xbb587e = _0xba94bd.split("#")[1];
    _0x3f8bcb = "pnmjic";
    const _0x4cfad9 = {
      phone: _0xe461e2,
      password: _0xbb587e
    };
    userPhone.push(_0x4cfad9);
  }
}) : (console.log("tnuoccAmoceleTanihc量变境环置设请，量变境环到找未 ❌".split("").reverse().join("")), process.exit());
var _0x6d_0xa8e;
let userName = "";
_0x6d_0xa8e = 6;
process?.["env"]?.["dxUserName1"] || "aaabbb" ? userName = process?.["env"]?.["dxUserName1"] || "aaabbb" : process.exit();
(async () => {
  console.log("...化始初始开，动启本脚 ��".split("").reverse().join(""));
  if (!validateDate()) {
    process.exit(1);
    return;
  }
  if (!(await validateLkey())) {
    process.exit(1);
    return;
  }
  try {
    await initializeUserData(userPhone);
    var _0x4af236;
    let _0x45f615 = [];
    _0x4af236 = 7;
    try {
      _0x45f615 = JSON.parse(fs.readFileSync("nosj.tsiLevil/.".split("").reverse().join(""), "8ftu".split("").reverse().join("")));
      console.log("💾 读取本地直播间数据成功（" + _0x45f615.length + "）个".split("").reverse().join(""));
      setLiveListAll(_0x45f615);
    } catch (_0x3fdb2d) {
      console.log("💾 本地直播间数据不存在，将重新获取");
      fs.writeFileSync("./liveList.json", JSON.stringify([]), "8ftu".split("").reverse().join(""));
      _0x45f615 = [];
    }
    if (_0x45f615.length === 0) {
      console.log("🏠 本地直播间数据为空，开始初始化加载（仅加载省份1）");
      var _0x325e36 = 14;
      const _0x1f9ef4 = userPhone.find(_0x3e7ebc => _0x3e7ebc.xbkToken);
      _0x325e36 = 4;
      _0x1f9ef4 && (await initLiveRoomFloor(1, 1, 1, _0x1f9ef4.xbkToken));
    } else {
      console.log("🏠 本地直播间数据有效");
      const _0x53fd0c = fs.statSync("nosj.tsiLevil/.".split("").reverse().join(""));
      var _0x5bca72;
      const _0x3c0262 = new Date(_0x53fd0c.mtime);
      _0x5bca72 = 1;
      const _0x26523a = new Date();
      const _0xe409d0 = (_0x26523a - _0x3c0262) / 3600000;
      if (_0xe409d0 > 2) {
        console.log("已前当（取获新重要需，时小2过超已据数间播直 ⏰".split("").reverse().join("") + Math.floor(_0xe409d0) + "）时小".split("").reverse().join(""));
        var _0x4a7c98;
        const _0x587c84 = userPhone.find(_0x127751 => _0x127751.xbkToken);
        _0x4a7c98 = "fblach";
        _0x587c84 && (await initLiveRoomFloor(1, 1, 1, _0x587c84.xbkToken));
      } else {
        console.log("⏰ 直播间数据较新（" + Math.floor(_0xe409d0) + "存缓用使，）前时小".split("").reverse().join(""));
        setTimeout(() => checkLotteryActivities(userPhone), 2000);
      }
    }
  } catch (_0x46b375) {
    console.error("：误错重严化始初本脚 ❌".split("").reverse().join("") + _0x46b375.message);
    console.log("化始初试重将后钟分1 ⏰".split("").reverse().join(""));
    setTimeout(() => process.exit(1), 60000);
  }
})();
setInterval(async () => {
  console.log("⏰ 定时任务：每小时更新直播间和账号列表（触发）");
  await initializeUserData(userPhone);
  initLiveList("etadpu".split("").reverse().join(""), userPhone);
}, 3600000);
setInterval(() => {
  console.log("）发触将即（动活奖抽可查检秒01每：务任时定 ⏰".split("").reverse().join(""));
  !isStart ? checkLotteryActivities(userPhone) : console.log("⏰ 抽奖流程进行中，跳过本次定时检查");
}, 300000);
setInterval(() => {
  const _0x35e877 = {
    VeJGX: "log",
    AEQWU: "⏰ 定时任务：每10分钟清空抽奖记录（触" + "）发".split("").reverse().join(""),
    jVLOS: function (_0x24902a, _0x33f759) {
      return _0x24902a > _0x33f759;
    },
    vcZFN: "length",
    cyDYy: function (_0x24adae, _0x16f5fe) {
      return _0x24adae ^ _0x16f5fe;
    },
    iBiaQ: "pop",
    RPnwz: "✅ 抽奖记录已清空"
  };
  console[_0x35e877.VeJGX](_0x35e877.AEQWU);
  while (_0x35e877.jVLOS(runGameId[_0x35e877.vcZFN], _0x35e877.cyDYy(642229, 642229))) {
    runGameId[_0x35e877.iBiaQ]();
  }
  console[_0x35e877.VeJGX](_0x35e877.RPnwz);
}, 600000);
setInterval(async () => {
  console.log("⏰ 定时任务：每分钟检查推送消息（触发）");
  if (!isStart) {
    var _0x8810ac = 7;
    let _0x1210ea = Object.keys(sendTxt);
    _0x8810ac = "ekojap";
    if (_0x1210ea.length > 0) {
      console.log("📤 发现" + _0x1210ea.length + "条待推送消息");
      for (let _0x1c0ec8 in sendTxt) {
        await sendMsg(sendTxt[_0x1c0ec8], _0x1c0ec8);
        await sleep(3000);
      }
      for (let _0x457ba7 in sendTxt) {
        delete sendTxt[_0x457ba7];
      }
      console.log("成完送推息消有所 ��".split("").reverse().join(""));
    } else {
      console.log("📤 没有待推送的消息");
    }
  } else {
    console.log("息消送推不暂，中行进程流奖抽 ⏰".split("").reverse().join(""));
  }
}, 60000);