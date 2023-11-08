/**
* 授权码设置
* monitor：前端监控
* event: 埋点系统
* 配置更改后，需重启
*/
const licenseConfig = {
  "monitor": {
    "purchaseCode": "OQPQPRSWWPSTIUVIWZXW", // 监控系统授权码
    "secretCode": ""  // 解码（没有可不填）
  },
  "event": {
    "purchaseCode": "OQPQPRSWWPSTIUVIWZXW", // 埋点系统授权码
    "secretCode": ""  // 解码（没有可不填）
  }
}

/**
* 域名端口设置
* 配置更改后，需重启
*/
const domainConfig = {
  "host": {
    "fe": "localhost:8010", // 前端访问域名
    "be": "localhost:8011"  // 后端接口域名
  },
  "port": {
    "fe": "8010",  // 前端启动端口号
    "be": "8011"   // 后端启动端口号
  },
  "uploadDomain": {
    "monitor": "", // 指定监控系统上报域名
    "event": ""    // 指定埋点系统上报域名
  },
}

/**
* mysql数据库设置
* monitor：前端监控数据库（与应用中心共用）
* event: 埋点系统数据库
* 配置更改后，需重启
*/
const mysqlConfig = {
  "center": {
    "write": {
      "ip": "121.4.94.89",
      "port": "3306",
      "dataBaseName": "webfunny_db_20231105222631212",
      "userName": "webfunny",
      "password": "12345678"
    },
    "read": []
  },
  "monitor": {
    "write": {
      "ip": "121.4.94.89",
      "port": "3306",
      "dataBaseName": "webfunny_db_20231105222631212",
      "userName": "webfunny",
      "password": "12345678"
    },
    "read": []
  },
  "event": {
    "write": {
      "ip": "121.4.94.89",
      "port": "3306",
      "dataBaseName": "webfunny_db_20231105222631212",
      "userName": "webfunny",
      "password": "12345678"
    },
    "read": []
  }
}

/**
* 其他相关设置
* 配置更改后，需重启
*/
const otherConfig = {
  "email": {
    "useCusEmailSys": false, 
    "emailUser": "",
    "emailPassword": ""
  },
  "protocol": "",
  "messageQueue": false,
  "openMonitor": true,
  "logSaveDays": 8,
  "isOpenTodayStatistic": true,
  "business": {
    "batchInsert": {
      "limitQueueLength": 1000
    },
    "userStayTimeScope": {
      "min": 100,
      "max": 100000
    }
  },
  "registerEntry": true,
  "resetPwdEntry": true,
  "ssoCheckUrl": "",
  "activationRequired": false,
  "emailNeeded": {
    "need": true,
    "requireVerify": true
  },
  "phoneNeeded": {
    "need": true,
    "requireVerify": false
  },
  "uploadServerErrorToWebfunny": true, // 是否上报错误日志至Webfunny服务（推荐开启，便于排查问题）
  "extraCors": {
    "headers": ""
  },
}
module.exports = {
  licenseConfig, domainConfig, mysqlConfig, otherConfig
}