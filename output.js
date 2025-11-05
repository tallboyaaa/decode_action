//Wed Nov 05 2025 02:51:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const qs = require("querystring"),
  axios = require("axios"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
function generateRandomInteractionMessage() {
  const _0x40adb4 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x40adb4[Math.floor(Math.random() * _0x40adb4.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getEnvNumber(_0x4519ee, _0x28334c) {
  const _0x327f64 = parseInt(process.env[_0x4519ee], 10);
  return isNaN(_0x327f64) ? _0x28334c : _0x327f64;
}
const KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 10),
  KSROUNDS = getEnvNumber("KSROUNDS", 200),
  KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 1000000),
  KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 3);
function getTasksToExecute() {
  const _0x2b9807 = process.env.Task;
  if (!_0x2b9807) return console.log("未设置Task环境变量，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  const _0x264a30 = _0x2b9807.split(",").map(_0x59a6e1 => _0x59a6e1.trim().toLowerCase()).filter(Boolean),
    _0x1fa6c2 = ["food", "box", "look"],
    _0x134831 = _0x264a30.filter(_0x3ec55c => _0x1fa6c2.includes(_0x3ec55c));
  if (_0x134831.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x134831.join(", "));
  return _0x134831;
}
function getAccountConfigsFromEnv() {
  const _0x9ba070 = [],
    _0x46e476 = new Set();
  if (process.env.ksck) {
    const _0x592484 = process.env.ksck,
      _0x1dfe3f = _0x592484.split("&").map(_0xda9efc => _0xda9efc.trim()).filter(Boolean);
    _0x9ba070.push(..._0x1dfe3f);
  }
  for (let _0x1574c2 = 1; _0x1574c2 <= 666; _0x1574c2++) {
    const _0x1a43bc = "ksck" + _0x1574c2;
    if (process.env[_0x1a43bc]) {
      const _0x232b57 = process.env[_0x1a43bc],
        _0x248cc1 = _0x232b57.split("&").map(_0x1f902c => _0x1f902c.trim()).filter(Boolean);
      _0x9ba070.push(..._0x248cc1);
    }
  }
  const _0x56c8d9 = [];
  for (const _0x2e6eb8 of _0x9ba070) {
    if (!_0x46e476.has(_0x2e6eb8)) {
      _0x46e476.add(_0x2e6eb8);
      _0x56c8d9.push(_0x2e6eb8);
    }
  }
  console.log("从ksck及ksck1到ksck666环境变量中解析到 " + _0x56c8d9.length + " 个唯一配置");
  return _0x56c8d9;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute();
let globalSignatureFailures = 0;
const GLOBAL_SIGNATURE_FAILURE_LIMIT = getEnvNumber("KS_GLOBAL_SIGNATURE_FAILURE_LIMIT", 3);
async function validateCardKey() {
  const _0x5e7b45 = (process.env.kskm || "").trim();
  !_0x5e7b45 && (console.log("❌ 未设置kskm环境变量，请设置后重试！"), process.exit(1));
  (_0x5e7b45.length < 3 || _0x5e7b45.length > 50) && (console.log("❌ 卡密格式无效（长度需3-50字符），请检查kskm变量！"), process.exit(1));
  console.log("🔑 检测到卡密: " + _0x5e7b45.substring(0, 8) + "...");
  const _0x15a415 = "http://117.72.209.186:1314/query.php?card_key=" + encodeURIComponent(_0x5e7b45);
  try {
    const {
      body: _0x23af18
    } = await sendRequest({
      "method": "GET",
      "url": _0x15a415,
      "headers": {
        "User-Agent": "Mozilla/5.0"
      },
      "timeout": 10000
    }, null, "查询卡密状态");
    if (!_0x23af18) {
      console.log("❌ 卡密查询无响应，请检查服务！");
      process.exit(1);
    }
    const _0x593497 = _0x23af18.code || -999,
      _0x5db49e = _0x23af18.msg || "未知错误",
      _0x181f25 = _0x23af18.data || {};
    if (_0x593497 === 0 || _0x5db49e === "valid" && Object.keys(_0x181f25).length > 0) {
      {
        const _0x73323a = _0x181f25.type || "unknown",
          _0x3d7616 = _0x181f25.val || 0,
          _0x1d2c01 = _0x181f25.expire_formatted || "N/A";
        let _0x11501e = "";
        _0x73323a === "count" ? _0x11501e = "剩余次数: " + _0x3d7616 : _0x11501e = "过期时间: " + _0x1d2c01;
        console.log("✅ 卡密验证通过，类型: " + _0x73323a + ", " + _0x11501e);
        return;
      }
    } else console.log("❌ 卡密验证失败: " + _0x5db49e + " (code: " + _0x593497 + ")"), process.exit(1);
  } catch (_0x17251d) {
    console.log("❌ 卡密查询异常: " + _0x17251d.message + "，请检查服务或卡密！");
    process.exit(1);
  }
}
console.log(" 👉快手极速版看广告promax免费版👈");
console.log("ᥬ🌝᭄免费提供，接口撑不住我就关");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.join(", "));
console.log("🎯 配置参数：轮数=" + KSROUNDS + ", 金币上限=" + KSCOIN_LIMIT + ", 低奖励阈值=" + KSLOW_REWARD_THRESHOLD + ", 连续低奖励上限=" + KSLOW_REWARD_LIMIT);
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
function generateKuaishouDid() {
  try {
    {
      const _0x5262a9 = _0x386ee1 => {
          {
            const _0x5c958c = "0123456789abcdef";
            let _0xb00505 = "";
            for (let _0x40c8b1 = 0; _0x40c8b1 < _0x386ee1; _0x40c8b1++) {
              _0xb00505 += _0x5c958c.charAt(Math.floor(Math.random() * _0x5c958c.length));
            }
            return _0xb00505;
          }
        },
        _0x1a32ed = _0x5262a9(16),
        _0x147966 = "ANDROID_" + _0x1a32ed;
      return _0x147966;
    }
  } catch (_0x3509d8) {
    {
      console.log("生成did失败: " + _0x3509d8.message);
      const _0x475f10 = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x475f10.substring(0, 16);
    }
  }
}
async function sendRequest(_0x103ee1, _0x211430 = null, _0x4d2556 = "Unknown Request") {
  const _0x1ca802 = {
    ..._0x103ee1
  };
  let _0x481152 = null;
  if (_0x211430) try {
    {
      _0x481152 = new SocksProxyAgent(_0x211430);
      if (isDevMode) {}
    }
  } catch (_0x2e4fb5) {
    console.log("[错误] " + _0x4d2556 + " 代理URL无效(" + _0x2e4fb5.message + ")，尝试直连模式");
    isDevMode && console.log("[调试] 代理无效，自动切换到直连模式");
  } else {
    isDevMode && console.log("[调试] 未配置代理，使用直连模式");
  }
  if (isDevMode) {
    {
      const _0x2d5086 = _0x1ca802.method || "GET";
    }
  }
  try {
    const _0x3d706e = {
        "method": _0x1ca802.method || "GET",
        "url": _0x1ca802.url,
        "headers": _0x1ca802.headers || {},
        "data": _0x1ca802.body || _0x1ca802.form,
        "timeout": _0x1ca802.timeout || 30000,
        ...(_0x481152 && {
          "httpAgent": _0x481152,
          "httpsAgent": _0x481152
        })
      },
      _0x39760a = await axios(_0x3d706e);
    return {
      "response": _0x39760a,
      "body": _0x39760a.data
    };
  } catch (_0x3d2758) {
    if (_0x3d2758.response) return {
      "response": _0x3d2758.response,
      "body": null
    };else {
      if (_0x3d2758.request) {
        {
          if (_0x3d2758.name === "AggregateError" && Array.isArray(_0x3d2758.errors)) console.log("[调试] " + _0x4d2556 + " 请求错误: AggregateError\n" + _0x3d2758.errors.map((_0xfeb2e4, _0x4eb3b9) => "  [" + _0x4eb3b9 + "] " + (_0xfeb2e4?.["message"] || _0xfeb2e4)).join("\n"));else {}
        }
      } else {}
    }
    return {
      "response": null,
      "body": null
    };
  }
}
async function testProxyConnectivity(_0x1c1cde, _0x56a6c7 = "代理连通性检测") {
  if (!_0x1c1cde) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const {
    response: _0x316acc,
    body: _0xedc237
  } = await sendRequest({
    "method": "GET",
    "url": "https://httpbin.org/ip",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x1c1cde, _0x56a6c7 + " → baidu.com");
  if (_0xedc237) return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，成功访问 baidu.com，出口IP: " + _0xedc237.origin,
    "ip": _0xedc237.origin
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x25d1e0, _0x4d94aa, _0x26ddec = "?") {
  const _0x307606 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x25182c
    } = await sendRequest({
      "method": "GET",
      "url": _0x307606,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x25d1e0,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x4d94aa, "账号[" + _0x26ddec + "] 获取基本信息");
  if (_0x25182c && _0x25182c.result === 1 && _0x25182c.data) return {
    "nickname": _0x25182c.data.userData?.["nickname"] || null,
    "totalCoin": _0x25182c.data.totalCoin ?? null,
    "allCash": _0x25182c.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0x4d6bff, _0x379e51) {
  _0x4d6bff = String(_0x4d6bff);
  if (_0x4d6bff.length >= _0x379e51) return _0x4d6bff.substring(0, _0x379e51);
  const _0x122438 = _0x379e51 - _0x4d6bff.length,
    _0x25975f = Math.floor(_0x122438 / 2),
    _0x3b67c8 = _0x122438 - _0x25975f;
  return " ".repeat(_0x25975f) + _0x4d6bff + " ".repeat(_0x3b67c8);
}
class KuaishouAdTask {
  constructor({
    index: _0x54769a,
    salt: _0x5c0436,
    cookie: _0x4ba1f5,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"],
    remark = ""
  }) {
    this.index = _0x54769a;
    this.salt = _0x5c0436;
    this.cookie = _0x4ba1f5;
    this.nickname = nickname || remark || "账号" + _0x54769a;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.randomParams = this.generateRandomParams();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=" + this.randomParams.mod + "&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x4c99f0 => {
      this.taskConfigs[_0x4c99f0] && (this.taskStats[_0x4c99f0] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = KSLOW_REWARD_THRESHOLD;
    this.lowRewardLimit = KSLOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x31f581 => {
      this.taskConfigs[_0x31f581] && (this.taskLimitReached[_0x31f581] = false);
    });
  }
  ["generateRandomParams"]() {
    const _0x5daebf = ["Xiaomi(MI 15)", "Xiaomi(Redmi K80)", "vivo(X200)", "vivo(iQOO 13)", "OPPO(Find X8)", "OPPO(Reno 13)", "Huawei(Pura 80)", "Huawei(Mate 70)", "Samsung(Galaxy S25)", "Samsung(A55)"],
      _0x323a10 = ["CMCC", "CUCC", "CTCC"],
      _0x148cf2 = ["WIFI", "4G", "5G"],
      _0x444e0e = ["ANDROID_11", "ANDROID_12", "ANDROID_13", "ANDROID_14", "ANDROID_15"],
      _0x48a43d = ["30", "31", "33", "34", "35"],
      _0x37c65b = ["pineapple", "sm8350", "dimensity9200", "kirin9000s"],
      _0x2a51ab = [{
        "w": 720,
        "h": 1600
      }, {
        "w": 1080,
        "h": 2400
      }, {
        "w": 1440,
        "h": 3200
      }],
      _0x4daa9a = ["arm64-v8a", "armeabi-v7a"],
      _0x14585e = _0x5daebf[Math.floor(Math.random() * _0x5daebf.length)],
      _0x9983d2 = _0x323a10[Math.floor(Math.random() * _0x323a10.length)],
      _0x4ea515 = _0x148cf2[Math.floor(Math.random() * _0x148cf2.length)],
      _0x1ea3de = Math.floor(Math.random() * _0x444e0e.length),
      _0x70333 = _0x444e0e[_0x1ea3de],
      _0x1ce3a8 = _0x48a43d[_0x1ea3de],
      _0x2224ab = _0x37c65b[Math.floor(Math.random() * _0x37c65b.length)],
      _0x57dfff = "11." + (Math.floor(Math.random() * 10) + 6),
      _0x2fa6fa = (Math.floor(Math.random() * 201) + 1500).toString(),
      _0x294a00 = _0x2a51ab[Math.floor(Math.random() * _0x2a51ab.length)],
      _0x43cbb9 = _0x4daa9a[Math.floor(Math.random() * _0x4daa9a.length)];
    let _0x3f63e5 = _0x9983d2;
    if (_0x4ea515 !== "WIFI") {
      {
        const _0x44ec2e = ["CMCC", "CUCC"];
        _0x3f63e5 = _0x44ec2e[Math.floor(Math.random() * _0x44ec2e.length)];
      }
    }
    console.log("\n🚀 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 启动随机参数：");
    console.log("   - mod: " + _0x14585e);
    console.log("   - isp: " + _0x3f63e5);
    console.log("   - net: " + _0x4ea515);
    console.log("   - sys: " + _0x70333);
    console.log("   - androidApiLevel: " + _0x1ce3a8);
    console.log("   - boardPlatform: " + _0x2224ab);
    console.log("   - ver: " + _0x57dfff);
    console.log("   - kcv: " + _0x2fa6fa);
    console.log("   - screen: " + _0x294a00.w + "x" + _0x294a00.h);
    console.log("   - abi: " + _0x43cbb9);
    console.log("   - osVersion: " + _0x70333.split("_")[1]);
    isDevMode && console.log("[调试] 账号[" + this.nickname + "] 随机参数: mod=" + _0x14585e + ", isp=" + _0x3f63e5 + ", net=" + _0x4ea515 + ", sys=" + _0x70333 + ", screen=" + _0x294a00.w + "x" + _0x294a00.h);
    return {
      "mod": _0x14585e,
      "isp": _0x3f63e5,
      "net": _0x4ea515,
      "sys": _0x70333,
      "androidApiLevel": _0x1ce3a8,
      "boardPlatform": _0x2224ab,
      "ver": _0x57dfff,
      "kcv": _0x2fa6fa,
      "sw": _0x294a00.w.toString(),
      "sh": _0x294a00.h.toString(),
      "abi": _0x43cbb9,
      "osVersion": _0x70333.split("_")[1],
      "screenSize": {
        "width": _0x294a00.w,
        "height": _0x294a00.h
      }
    };
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x2312df = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x2312df && _0x2312df.totalCoin) {
          const _0x49cb47 = parseInt(_0x2312df.totalCoin);
          if (_0x49cb47 >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0x49cb47 + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
        }
        return false;
      }
    } catch (_0x574f8e) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x574f8e.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x4b13e7 = this.cookie.match(/egid=([^;]+)/),
        _0x4feddf = this.cookie.match(/did=([^;]+)/),
        _0x27d728 = this.cookie.match(/userId=([^;]+)/),
        _0x3864e0 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x51787b = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x4b13e7 ? _0x4b13e7[1] : "";
      this.did = _0x4feddf ? _0x4feddf[1] : "";
      this.userId = _0x27d728 ? _0x27d728[1] : "";
      this.kuaishouApiSt = _0x3864e0 ? _0x3864e0[1] : "";
      this.appver = _0x51787b ? _0x51787b[1] : "13.7.20.10468";
      (!this.egid || !this.did) && console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie格式可能无 egid 或 did，但继续尝试...");
    } catch (_0x3736b1) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x3736b1.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    for (const [_0x138eaa, _0x3eb8b5] of Object.entries(this.taskStats)) {
      const _0x37575b = this.taskConfigs[_0x138eaa].name;
      console.log("  " + _0x37575b + ": 成功" + _0x3eb8b5.success + "次, 失败" + _0x3eb8b5.failed + "次, 总奖励" + _0x3eb8b5.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x1b2efb, _0x424a19, _0x250a87 = 3, _0x57e9e2 = 2000) {
    let _0x19e4b9 = 0,
      _0x160ccf = null;
    while (_0x19e4b9 < _0x250a87) {
      try {
        const _0x171271 = await _0x1b2efb();
        if (_0x171271) return _0x171271;
        _0x160ccf = new Error(_0x424a19 + " 返回空结果");
      } catch (_0x527fd7) {
        _0x160ccf = _0x527fd7;
        console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x424a19 + " 异常: " + _0x527fd7.message);
      }
      _0x19e4b9++;
      _0x19e4b9 < _0x250a87 && (console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x424a19 + " 失败，重试 " + _0x19e4b9 + "/" + _0x250a87), await new Promise(_0x31278c => setTimeout(_0x31278c, _0x57e9e2)));
    }
    if (isDevMode && _0x160ccf) {}
    return null;
  }
  async ["getAdInfo"](_0x3088e6) {
    try {
      {
        const _0x38b251 = "/rest/e/reward/mixed/ad",
          _0x151c9f = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x28474f = {
            "earphoneMode": "1",
            "mod": this.randomParams.mod,
            "appver": this.appver,
            "isp": this.randomParams.isp,
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": this.randomParams.net,
            "kcv": this.randomParams.kcv,
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": this.randomParams.ver,
            "android_os": "0",
            "boardPlatform": this.randomParams.boardPlatform,
            "kpn": "NEBULA",
            "androidApiLevel": this.randomParams.androidApiLevel,
            "country_code": "cn",
            "sys": this.randomParams.sys,
            "sw": this.randomParams.sw,
            "sh": this.randomParams.sh,
            "abi": this.randomParams.abi,
            "userRecoBit": "0"
          },
          _0x12dd02 = {
            "appInfo": {
              "appId": "kuaishou_nebula",
              "name": "快手极速版",
              "packageName": "com.kuaishou.nebula",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": this.randomParams.osVersion,
              "deviceId": this.did,
              "screenSize": this.randomParams.screenSize,
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 11101,
              "subPageId": _0x3088e6.subPageId,
              "action": 0,
              "browseType": 1,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x36bffe = Buffer.from(JSON.stringify(_0x12dd02)).toString("base64");
        let _0x2a37c0 = await this.getSign(_0x36bffe);
        _0x151c9f.encData = _0x2a37c0.encdata;
        _0x151c9f.sign = _0x2a37c0.sign;
        let _0x423f6a = await this.requestSignService({
          "urlpath": _0x38b251,
          "reqdata": qs.stringify(_0x151c9f) + "&" + qs.stringify(_0x28474f),
          "api_client_salt": this.salt
        });
        const _0x5d5d11 = {
            ..._0x28474f,
            "sig": _0x423f6a.sig,
            "__NS_sig3": _0x423f6a.__NS_sig3,
            "__NS_xfalcon": "",
            "__NStokensig": _0x423f6a.__NStokensig
          },
          _0x5b3f81 = "https://api.e.kuaishou.com" + _0x38b251 + "?" + querystring.stringify(_0x5d5d11),
          {
            response: _0x55c3f4,
            body: _0x9aa9
          } = await sendRequest({
            "method": "POST",
            "url": _0x5b3f81,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x151c9f,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
        if (!_0x9aa9) return null;
        if (_0x9aa9.errorMsg === "OK" && _0x9aa9.feeds && _0x9aa9.feeds[0] && _0x9aa9.feeds[0].ad) {
          const _0x117ffb = _0x9aa9.feeds[0].caption || _0x9aa9.feeds[0].ad?.["caption"] || "";
          _0x117ffb && console.log("✅ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 成功获取到广告信息：" + _0x117ffb);
          const _0x55dd23 = _0x9aa9.feeds[0].exp_tag || "",
            _0x4f2ac9 = _0x55dd23.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x9aa9.feeds[0].ad.creativeId,
            "llsid": _0x4f2ac9
          };
        }
        if (isDevMode) {}
        return null;
      }
    } catch (_0x2c42ef) {
      console.log(_0x2c42ef);
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x2c42ef.message);
      return null;
    }
  }
  async ["generateSignature"](_0x2afc05, _0x39b847, _0x4ea23f, _0x3460c1) {
    try {
      const _0x299551 = JSON.stringify({
          "businessId": _0x3460c1.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x2afc05,
            "extInfo": "",
            "llsid": _0x39b847,
            "requestSceneType": _0x3460c1.requestSceneType,
            "taskType": _0x3460c1.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 11101,
          "posId": _0x3460c1.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x3460c1.subPageId
        }),
        _0x22d5d1 = "bizStr=" + encodeURIComponent(_0x299551) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x6d4899 = this.queryParams + "&" + _0x22d5d1,
        _0x25a4c6 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "reqdata": _0x6d4899,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
      return {
        "sig": _0x25a4c6.sig,
        "sig3": _0x25a4c6.__NS_sig3,
        "sigtoken": _0x25a4c6.__NStokensig,
        "post": _0x22d5d1
      };
    } catch (_0x1a0c8d) {
      console.log(_0x1a0c8d);
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0x1a0c8d.message);
      return null;
    }
  }
  async ["submitReport"](_0x2adfc1, _0x5edcf2, _0x437572, _0x3cdd50, _0x4c7236, _0x1f75f1) {
    try {
      const _0x3c26d2 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x2adfc1 + "&__NS_sig3=" + _0x5edcf2 + "&__NS_xfalcon=&__NStokensig=" + _0x437572),
        {
          response: _0x2346dd,
          body: _0x3bbc0c
        } = await sendRequest({
          "method": "POST",
          "url": _0x3c26d2,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x3cdd50,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0x3bbc0c) return {
        "success": false,
        "reward": 0
      };
      if (_0x3bbc0c.result === 1) {
        const _0x473fc8 = _0x3bbc0c.data?.["neoAmount"] || 0;
        console.log("💰 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x1f75f1.name + "获得" + _0x473fc8 + "💵");
        if (_0x473fc8 <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x473fc8 + ")低于阈值(" + this.lowRewardThreshold + ")，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit);
          this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true);
        } else this.lowRewardStreak = 0;
        return {
          "success": true,
          "reward": _0x473fc8
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x3bbc0c.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x1f75f1.name + " 已达上限"), this.taskLimitReached[_0x4c7236] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x1f75f1.name + " 奖励失败，result=" + _0x3bbc0c.result + " msg=" + (_0x3bbc0c.data || ""));
      if (isDevMode) {}
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x426985) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x426985.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["getSign"](_0x206744) {
    try {
      {
        const _0x4cbe04 = (process.env.kskm || "").trim();
        if (!_0x4cbe04) return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: 未提供kskm环境变量"), null;
        const _0x14b4b6 = "http://117.72.209.186:1314/sgin.php?card_key=" + encodeURIComponent(_0x4cbe04),
          {
            response: _0x19b1f9,
            body: _0x141639
          } = await sendRequest({
            "method": "POST",
            "url": _0x14b4b6,
            "body": JSON.stringify({
              "data": _0x206744
            }),
            "headers": {
              "Content-Type": "application/json"
            }
          });
        if (_0x141639 && _0x141639.status) return _0x141639.data;
      }
    } catch (_0x351d7a) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "���" : "") + " getSign异常: " + _0x351d7a.message);
    }
    return null;
  }
  async ["requestSignService"](_0x29017a, _0xabf315) {
    const _0x5b65e6 = (process.env.kskm || "").trim();
    if (!_0x5b65e6) return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: 未提供kskm环境变量"), null;
    let _0x24bc54 = {},
      _0x2e1b9b = {
        "path": _0x29017a.urlpath,
        "data": _0x29017a.reqdata,
        "salt": _0x29017a.api_client_salt
      };
    const _0x1d5e3a = "http://117.72.209.186:1314/sgin.php?card_key=" + encodeURIComponent(_0x5b65e6),
      {
        response: _0x43f56f,
        body: _0x416bf5
      } = await sendRequest({
        "method": "POST",
        "url": _0x1d5e3a,
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": JSON.stringify(_0x2e1b9b),
        "timeout": 15000
      }, null, _0xabf315 + "（签名服务）");
    if (!_0x416bf5) {
      if (_0x43f56f && [403, 405, 502].includes(_0x43f56f.status)) {
        if (_0x43f56f.status === 403) console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: HTTP状态码 403 - kskm过期，请检查或更换kskm"), process.exit(1);else {
          console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: HTTP状态码 " + _0x43f56f.status + "，将触发重试（非全局停止）");
          return null;
        }
      }
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: 无响应");
      return null;
    }
    if (_0x416bf5 && _0x416bf5.data && _0x416bf5.data.sig) {
      {
        let _0xced88d = _0x416bf5.data.nssig3,
          _0x22eac3 = _0x416bf5.data.nstokensig;
        Object.assign(_0x24bc54, {
          "__NS_sig3": _0xced88d,
          "__NStokensig": _0x22eac3,
          "sig": _0x416bf5.data.sig
        });
        globalSignatureFailures = 0;
        console.log("💠 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取签名成功！嘿嘿🤤🤤🤤");
        return _0x24bc54;
      }
    } else {
      globalSignatureFailures++;
      console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名接口失效，全局连续失败次数：" + globalSignatureFailures + "/" + GLOBAL_SIGNATURE_FAILURE_LIMIT);
      if (globalSignatureFailures >= GLOBAL_SIGNATURE_FAILURE_LIMIT) {
        console.log("🚫 全局签名接口连续" + GLOBAL_SIGNATURE_FAILURE_LIMIT + "次失效，立即停止整个脚本运行！");
        this.stopAllTasks = true;
        process.exit(1);
      }
      return null;
    }
  }
  async ["executeTask"](_0x347ca4) {
    const _0x5c3196 = this.taskConfigs[_0x347ca4];
    if (!_0x5c3196) return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 未知任务: " + _0x347ca4), false;
    if (this.taskLimitReached[_0x347ca4]) return false;
    try {
      const _0x275703 = await this.retryOperation(() => this.getAdInfo(_0x5c3196), "获取" + _0x5c3196.name + "信息", 3);
      if (!_0x275703) return this.taskStats[_0x347ca4].failed++, false;
      const _0x58fbac = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " ==>" + _0x5c3196.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x58fbac / 1000) + " 秒");
      await new Promise(_0x2813c6 => setTimeout(_0x2813c6, _0x58fbac));
      const _0x228e10 = await this.retryOperation(() => this.generateSignature(_0x275703.cid, _0x275703.llsid, _0x347ca4, _0x5c3196), "生成" + _0x5c3196.name + "签名", 3);
      if (!_0x228e10) return this.taskStats[_0x347ca4].failed++, false;
      const _0x4212ac = await this.retryOperation(() => this.submitReport(_0x228e10.sig, _0x228e10.sig3, _0x228e10.sigtoken, _0x228e10.post, _0x347ca4, _0x5c3196), "提交" + _0x5c3196.name + "报告", 3);
      if (_0x4212ac?.["success"]) return this.taskStats[_0x347ca4].success++, this.taskStats[_0x347ca4].totalReward += _0x4212ac.reward || 0, true;
      this.taskStats[_0x347ca4].failed++;
      return false;
    } catch (_0x44df61) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0x347ca4 + "): " + _0x44df61.message);
      this.taskStats[_0x347ca4].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x5f41a4 = {};
    for (const _0x15de17 of this.tasksToExecute) {
      if (this.stopAllTasks) break;
      if (!this.taskConfigs[_0x15de17]) {
        console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 跳过未知任务: " + _0x15de17);
        continue;
      }
      console.log("🚀 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 开始任务：" + this.taskConfigs[_0x15de17].name);
      _0x5f41a4[_0x15de17] = await this.executeTask(_0x15de17);
      if (this.stopAllTasks) break;
      if (_0x15de17 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        const _0x3f9017 = Math.floor(Math.random() * 8000) + 7000;
        console.log("⏱ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 下一个任务，随机等待 " + Math.round(_0x3f9017 / 1000) + " 秒");
        await new Promise(_0x3c3be8 => setTimeout(_0x3c3be8, _0x3f9017));
      }
    }
    return _0x5f41a4;
  }
}
function parseAccountConfig(_0x50b08f) {
  const _0x1205a7 = String(_0x50b08f || "").trim().split("#");
  if (_0x1205a7.length < 2) return null;
  let _0x56d7c9 = "",
    _0x15941f = "",
    _0x45799f = "",
    _0x5e1257 = null;
  if (_0x1205a7.length === 2) {
    _0x15941f = _0x1205a7[0];
    _0x45799f = _0x1205a7[1];
  } else {
    if (_0x1205a7.length === 3) {
      if (/socks5:\/\//i.test(_0x1205a7[2])) _0x15941f = _0x1205a7[0], _0x45799f = _0x1205a7[1], _0x5e1257 = _0x1205a7[2];else {
        _0x56d7c9 = _0x1205a7[0];
        _0x15941f = _0x1205a7[1];
        _0x45799f = _0x1205a7[2];
      }
    } else _0x1205a7.length >= 4 && (_0x56d7c9 = _0x1205a7[0], _0x15941f = _0x1205a7[1], _0x45799f = _0x1205a7.slice(2, _0x1205a7.length - 1).join("#"), _0x5e1257 = _0x1205a7[_0x1205a7.length - 1]);
  }
  if (_0x5e1257) {
    if (_0x5e1257.includes("|")) {
      console.log("开始解析代理格式: " + _0x5e1257);
      const _0x50566d = _0x5e1257.split("|");
      if (_0x50566d.length >= 2) {
        {
          const [_0x30f930, _0x297abe, _0x1686fc, _0x237ab0] = _0x50566d;
          _0x5e1257 = "socks5://" + _0x1686fc + ":" + _0x237ab0 + "@" + _0x30f930 + ":" + _0x297abe;
        }
      } else {
        _0x5e1257 = null;
        console.log("⚠️ 代理字段格式错误，忽略：" + _0x5e1257);
      }
    } else !/^socks5:\/\//i.test(_0x5e1257) && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x5e1257), _0x5e1257 = null);
  }
  return {
    "remark": _0x56d7c9 || "",
    "salt": _0x45799f,
    "cookie": _0x15941f,
    "proxyUrl": _0x5e1257
  };
}
function loadAccountsFromEnv() {
  const _0x23418e = getAccountConfigsFromEnv(),
    _0x4ccac2 = [];
  for (const _0x32c3a7 of _0x23418e) {
    const _0x4e684e = parseAccountConfig(_0x32c3a7);
    if (_0x4e684e) _0x4ccac2.push(_0x4e684e);else {
      console.log("账号格式错误：" + _0x32c3a7);
    }
  }
  _0x4ccac2.forEach((_0x53f5ae, _0x29d6f1) => {
    _0x53f5ae.index = _0x29d6f1 + 1;
  });
  return _0x4ccac2;
}
async function concurrentExecute(_0x24b928, _0x3e8c5f, _0x407a78) {
  const _0xdb63f6 = new Array(_0x24b928.length);
  let _0x20ca19 = 0;
  async function _0x49862e() {
    while (true) {
      const _0x18ba2e = _0x20ca19++;
      if (_0x18ba2e >= _0x24b928.length) return;
      const _0x103a75 = _0x24b928[_0x18ba2e];
      try {
        _0xdb63f6[_0x18ba2e] = await _0x407a78(_0x103a75, _0x18ba2e);
      } catch (_0x215f1e) {
        console.log("并发执行异常（index=" + (_0x18ba2e + 1) + "）：" + _0x215f1e.message);
        _0xdb63f6[_0x18ba2e] = null;
      }
    }
  }
  const _0x2153bf = Array.from({
    "length": Math.min(_0x3e8c5f, _0x24b928.length)
  }, _0x49862e);
  await Promise.all(_0x2153bf);
  return _0xdb63f6;
}
async function processAccount(_0x3e0c15) {
  if (_0x3e0c15.proxyUrl) {
    console.log("账号[" + _0x3e0c15.index + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " 🔌 测试代理连接中...");
    const _0xa313fe = await testProxyConnectivity(_0x3e0c15.proxyUrl, "账号[" + _0x3e0c15.index + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : ""));
    console.log("  - " + (_0xa313fe.ok ? "✅ 代理验证通过，IP: " + _0xa313fe.ip : "❌ 代理验证失败") + ": " + _0xa313fe.msg);
    _0xa313fe.ok && _0xa313fe.ip && _0xa313fe.ip !== "localhost" && (usedProxies.has(_0xa313fe.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0xa313fe.ip + "），请立即检查！"), process.exit(1)), usedProxies.add(_0xa313fe.ip));
  } else console.log("账号[" + _0x3e0c15.index + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " 未配置代理，走直连");
  console.log("账号[" + _0x3e0c15.index + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x39831c = await getAccountBasicInfo(_0x3e0c15.cookie, _0x3e0c15.proxyUrl, _0x3e0c15.index),
    _0x2696fb = _0x39831c?.["nickname"] || "账号" + _0x3e0c15.index;
  if (_0x39831c) {
    {
      const _0x339375 = _0x39831c.totalCoin != null ? _0x39831c.totalCoin : "未知",
        _0x5d725a = _0x39831c.allCash != null ? _0x39831c.allCash : "未知";
      console.log("账号[" + _0x2696fb + "] ✅ 登录成功，💰 当前金币: " + _0x339375 + "，💸 当前余额: " + _0x5d725a);
    }
  } else console.log("账号[" + _0x2696fb + "] ❌ 基本信息获取失败，继续执行");
  const _0x1f9811 = new KuaishouAdTask({
    ..._0x3e0c15,
    "nickname": _0x2696fb,
    "tasksToExecute": tasksToExecute
  });
  await _0x1f9811.checkCoinLimit();
  if (_0x1f9811.coinExceeded) {
    {
      console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
      const _0x3490fa = await getAccountBasicInfo(_0x3e0c15.cookie, _0x3e0c15.proxyUrl, _0x3e0c15.index),
        _0xe9e0d1 = _0x39831c?.["totalCoin"] || 0,
        _0x289622 = _0x3490fa?.["totalCoin"] || 0,
        _0x1111cc = _0x289622 - _0xe9e0d1,
        _0x59d029 = _0x39831c?.["allCash"] || 0,
        _0x4c83ea = _0x3490fa?.["allCash"] || 0,
        _0x9bfccf = _0x4c83ea - _0x59d029;
      return {
        "index": _0x3e0c15.index,
        "remark": _0x3e0c15.remark || "无备注",
        "nickname": _0x2696fb,
        "initialCoin": _0xe9e0d1,
        "finalCoin": _0x289622,
        "coinChange": _0x1111cc,
        "initialCash": _0x59d029,
        "finalCash": _0x4c83ea,
        "cashChange": _0x9bfccf,
        "stats": _0x1f9811.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x1ab74c = 0; _0x1ab74c < KSROUNDS; _0x1ab74c++) {
    const _0x474a9f = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " ⌛ 第" + (_0x1ab74c + 1) + "轮，先随机等待 " + Math.round(_0x474a9f / 1000) + " 秒");
    console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " 🚀 开始第" + (_0x1ab74c + 1) + "轮任务");
    const _0x32e6a3 = await _0x1f9811.executeAllTasksByPriority();
    if (Object.values(_0x32e6a3).some(Boolean)) {
      console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " ✅ 第" + (_0x1ab74c + 1) + "轮执行完成");
    } else console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " ⚠️ 第" + (_0x1ab74c + 1) + "轮没有成功任务");
    if (_0x1f9811.stopAllTasks) {
      console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " 🏁 达到停止条件，终止后续轮次");
      break;
    }
    if (_0x1ab74c < KSROUNDS - 1) {
      const _0x5bf788 = Math.floor(Math.random() * 10000) + 10000;
      console.log("账号[" + _0x1f9811.nickname + "]" + (_0x3e0c15.remark ? "（" + _0x3e0c15.remark + "）" : "") + " ⌛ 等待 " + Math.round(_0x5bf788 / 1000) + " 秒进入下一轮");
      await new Promise(_0x51a5e4 => setTimeout(_0x51a5e4, _0x5bf788));
    }
  }
  const _0x585ff4 = await getAccountBasicInfo(_0x3e0c15.cookie, _0x3e0c15.proxyUrl, _0x3e0c15.index),
    _0x1a925b = _0x39831c?.["totalCoin"] || 0,
    _0x5a9ff4 = _0x585ff4?.["totalCoin"] || 0,
    _0x2e4173 = _0x5a9ff4 - _0x1a925b,
    _0x308178 = _0x39831c?.["allCash"] || 0,
    _0x22a2f1 = _0x585ff4?.["allCash"] || 0,
    _0x1c13d9 = _0x22a2f1 - _0x308178;
  _0x1f9811.printTaskStats();
  return {
    "index": _0x3e0c15.index,
    "remark": _0x3e0c15.remark || "无备注",
    "nickname": _0x2696fb,
    "initialCoin": _0x1a925b,
    "finalCoin": _0x5a9ff4,
    "coinChange": _0x2e4173,
    "initialCash": _0x308178,
    "finalCash": _0x22a2f1,
    "cashChange": _0x1c13d9,
    "stats": _0x1f9811.getTaskStats(),
    "coinLimitExceeded": _0x1f9811.coinExceeded
  };
}
function printAccountsSummary(_0x6b4d2) {
  if (!_0x6b4d2.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x30ad4a = _0x6b4d2.reduce((_0x1966ff, _0x326798) => {
      return _0x1966ff + (parseInt(_0x326798.initialCoin) || 0);
    }, 0),
    _0x48cf22 = _0x6b4d2.reduce((_0x2636c4, _0xd13ae1) => {
      return _0x2636c4 + (parseInt(_0xd13ae1.finalCoin) || 0);
    }, 0),
    _0x2536f6 = _0x48cf22 - _0x30ad4a,
    _0x5d0a42 = _0x6b4d2.reduce((_0x43b01b, _0x349ec7) => {
      return _0x43b01b + (parseFloat(_0x349ec7.initialCash) || 0);
    }, 0),
    _0xaa4bde = _0x6b4d2.reduce((_0x4f62c4, _0x55aee4) => {
      return _0x4f62c4 + (parseFloat(_0x55aee4.finalCash) || 0);
    }, 0),
    _0x155a36 = _0xaa4bde - _0x5d0a42;
  let _0x45e43d = 0,
    _0x32fa5a = 0,
    _0x214bde = 0;
  _0x6b4d2.forEach(_0x53cd12 => {
    _0x53cd12.stats && Object.values(_0x53cd12.stats).forEach(_0x3d2f4a => {
      _0x45e43d += _0x3d2f4a.success + _0x3d2f4a.failed;
      _0x32fa5a += _0x3d2f4a.success;
      _0x214bde += _0x3d2f4a.totalReward;
    });
  });
  const _0x1c7dbb = _0x45e43d > 0 ? (_0x32fa5a / _0x45e43d * 100).toFixed(1) : "0.0",
    _0x13baef = _0x6b4d2.filter(_0x5b66cd => _0x5b66cd.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x6b4d2.length).padEnd(22) + ("超过金币阈值账号: " + _0x13baef).padEnd(22) + ("总任务数: " + _0x45e43d).padEnd(22) + ("任务成功率: " + _0x1c7dbb + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x2536f6).padEnd(26) + ("总金币奖励: " + _0x214bde).padEnd(26) + ("总余额变化: " + _0x155a36.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x393e57 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x9d3716 = [6, 16, 16, 12, 12, 12, 12, 12, 12];
  let _0xe14443 = "|";
  _0x393e57.forEach((_0x5ada52, _0x51bce3) => {
    _0xe14443 += centerAlign(_0x5ada52, _0x9d3716[_0x51bce3]) + "|";
  });
  console.log(_0xe14443);
  let _0x4abb8f = "|";
  _0x9d3716.forEach(_0x1b2e7c => {
    _0x4abb8f += "-".repeat(_0x1b2e7c) + "|";
  });
  console.log(_0x4abb8f);
  _0x6b4d2.forEach(_0xa25ec9 => {
    {
      let _0x3b78a6 = "|";
      _0x3b78a6 += centerAlign(_0xa25ec9.index, _0x9d3716[0]) + "|";
      _0x3b78a6 += centerAlign(_0xa25ec9.remark, _0x9d3716[1]) + "|";
      const _0x402272 = (_0xa25ec9.nickname || "-") + (_0xa25ec9.coinLimitExceeded ? " ⚠️" : "");
      _0x3b78a6 += centerAlign(_0x402272.substring(0, _0x9d3716[2] - 2), _0x9d3716[2]) + "|";
      _0x3b78a6 += centerAlign(_0xa25ec9.initialCoin, _0x9d3716[3]) + "|";
      _0x3b78a6 += centerAlign(_0xa25ec9.finalCoin, _0x9d3716[4]) + "|";
      const _0x83f4a5 = _0xa25ec9.coinChange >= 0 ? "+" + _0xa25ec9.coinChange : _0xa25ec9.coinChange;
      _0x3b78a6 += centerAlign(_0x83f4a5, _0x9d3716[5]) + "|";
      _0x3b78a6 += centerAlign(_0xa25ec9.initialCash, _0x9d3716[6]) + "|";
      _0x3b78a6 += centerAlign(_0xa25ec9.finalCash, _0x9d3716[7]) + "|";
      const _0x47e8aa = _0xa25ec9.cashChange >= 0 ? "+" + _0xa25ec9.cashChange.toFixed(2) : _0xa25ec9.cashChange.toFixed(2);
      _0x3b78a6 += centerAlign(_0x47e8aa, _0x9d3716[8]) + "|";
      console.log(_0x3b78a6);
    }
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  await validateCardKey();
  const _0x24b4d4 = loadAccountsFromEnv();
  console.log("共找到 " + _0x24b4d4.length + " 个有效账号");
  if (!_0x24b4d4.length) {
    process.exit(1);
  }
  const _0x3d06ba = getEnvNumber("MAX_CONCURRENCY", 888);
  console.log("\n防黑并发：" + _0x3d06ba + "    防黑轮数：" + KSROUNDS + "\n");
  const _0x1ad3b6 = [];
  await concurrentExecute(_0x24b4d4, _0x3d06ba, async _0x3193bd => {
    console.log("\n—— 🚀 开始账号[" + _0x3193bd.index + "]" + (_0x3193bd.remark ? "（" + _0x3193bd.remark + "）" : "") + " ——");
    try {
      const _0x44555b = await processAccount(_0x3193bd);
      _0x1ad3b6.push({
        "index": _0x3193bd.index,
        "remark": _0x3193bd.remark || "无备注",
        "nickname": _0x44555b?.["nickname"] || "账号" + _0x3193bd.index,
        "initialCoin": _0x44555b?.["initialCoin"] || 0,
        "finalCoin": _0x44555b?.["finalCoin"] || 0,
        "coinChange": _0x44555b?.["coinChange"] || 0,
        "initialCash": _0x44555b?.["initialCash"] || 0,
        "finalCash": _0x44555b?.["finalCash"] || 0,
        "cashChange": _0x44555b?.["cashChange"] || 0,
        "stats": _0x44555b?.["stats"] || {},
        "coinLimitExceeded": _0x44555b?.["coinLimitExceeded"] || false
      });
    } catch (_0xf06cb3) {
      console.log("账号[" + _0x3193bd.index + "]" + (_0x3193bd.remark ? "（" + _0x3193bd.remark + "）" : "") + " ❌ 执行异常：" + _0xf06cb3.message);
      _0x1ad3b6.push({
        "index": _0x3193bd.index,
        "remark": _0x3193bd.remark || "无备注",
        "nickname": "账号" + _0x3193bd.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0xf06cb3.message
      });
    }
  });
  _0x1ad3b6.sort((_0x2ed543, _0x2d50d0) => _0x2ed543.index - _0x2d50d0.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x1ad3b6);
})();