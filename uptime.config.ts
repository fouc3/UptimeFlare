// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: '欢乐村状态侦测',
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [],
  // 监控分组配置
  group: {
    '中国区域 (GlobalPing)': ['cn_ping_9wmc', 'cn_ping_happycraft', 'cn_ping_1_happycraft'],
    '北美区域 (Worker Proxy)': ['us_ping_9wmc', 'us_ping_happycraft', 'us_ping_1_happycraft'],
    '使用API': ['api_9wmc', 'api_happycraft', 'api_1_happycraft'],
  }
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // ------------------------------------------------
    // 1. 中国 Ping (GlobalPing, Region: chine)
    // ------------------------------------------------
    {
      id: 'cn_ping_9wmc',
      name: '[CN] 9wmc.xyz',
      method: 'TCP_PING',
      target: '9wmc.xyz:25565',
      checkProxy: 'globalping://4ypg7r2glgabqgfx3cy2w3ljy5h6ezab?magic=China',
      tooltip: 'GlobalPing - China Node',
    },
    {
      id: 'cn_ping_happycraft',
      name: '[CN] happycraft.cc',
      method: 'TCP_PING',
      target: 'happycraft.cc:25565',
      checkProxy: 'globalping://4ypg7r2glgabqgfx3cy2w3ljy5h6ezab?magic=China',
      tooltip: 'GlobalPing - China Node',
    },
    {
      id: 'cn_ping_1_happycraft',
      name: '[CN] 1.happycraft.cc',
      method: 'TCP_PING',
      target: '1.happycraft.cc:25565',
      checkProxy: 'globalping://4ypg7r2glgabqgfx3cy2w3ljy5h6ezab?magic=China',
      tooltip: 'GlobalPing - China Node',
    },

    // ------------------------------------------------
    // 2. 美区 Ping (Worker Proxy, Region: nam)
    // ------------------------------------------------
    {
      id: 'us_ping_9wmc',
      name: '[US] 9wmc.xyz',
      method: 'TCP_PING',
      target: '9wmc.xyz:25565',
      checkProxy: 'worker://nam',
      tooltip: 'Worker Proxy - North America',
    },
    {
      id: 'us_ping_happycraft',
      name: '[US] happycraft.cc',
      method: 'TCP_PING',
      target: 'happycraft.cc:25565',
      checkProxy: 'worker://nam',
      tooltip: 'Worker Proxy - North America',
    },
    {
      id: 'us_ping_1_happycraft',
      name: '[US] 1.happycraft.cc',
      method: 'TCP_PING',
      target: '1.happycraft.cc:25565',
      checkProxy: 'worker://nam',
      tooltip: 'Worker Proxy - North America',
    },

    // ------------------------------------------------
    // 3. UAPIs Minecraft status check
    // ------------------------------------------------
    {
      id: 'api_9wmc',
      name: '[API] 9wmc.xyz Status',
      method: 'GET',
      target: 'https://uapis.cn/api/v1/game/minecraft/serverstatus?server=9wmc.xyz:25565',
      responseKeyword: '"online":true', // Match JSON 'online': true
      tooltip: 'UAPIs Minecraft Server Status',
    },
    {
      id: 'api_happycraft',
      name: '[API] happycraft.cc Status',
      method: 'GET',
      target: 'https://uapis.cn/api/v1/game/minecraft/serverstatus?server=happycraft.cc:25565',
      responseKeyword: '"online":true',
      tooltip: 'UAPIs Minecraft Server Status',
    },
    {
      id: 'api_1_happycraft',
      name: '[API] 1.happycraft.cc Status',
      method: 'GET',
      target: 'https://uapis.cn/api/v1/game/minecraft/serverstatus?server=1.happycraft.cc:25565',
      responseKeyword: '"online":true',
      tooltip: 'UAPIs Minecraft Server Status',
    },
  ],
  // [Optional] Notification settings
  // notification: {
  //   // [Optional] Notification webhook settings, if not specified, no notification will be sent
  //   // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
  //   webhook: {
  //     // [Required] webhook URL (example: Telegram Bot API)
  //     url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
  //     // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
  //     // method: 'POST',
  //     // [Optional] headers to be sent
  //     // headers: {
  //     //   foo: 'bar',
  //     // },
  //     // [Required] Specify how to encode the payload
  //     // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
  //     // 'param': append url-encoded payload to URL search parameters
  //     // 'json': POST json payload as body, set content-type header to 'application/json'
  //     // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
  //     payloadType: 'x-www-form-urlencoded',
  //     // [Required] payload to be sent
  //     // $MSG will be replaced with the human-readable notification message
  //     payload: {
  //       chat_id: 12345678,
  //       text: '$MSG',
  //     },
  //     // [Optional] timeout calling this webhook, in millisecond, default to 5000
  //     timeout: 10000,
  //   },
  //   // [Optional] timezone used in notification messages, default to "Etc/GMT"
  //   timeZone: 'Asia/Shanghai',
  //   // [Optional] grace period in minutes before sending a notification
  //   // notification will be sent only if the monitor is down for N continuous checks after the initial failure
  //   // if not specified, notification will be sent immediately
  //   gracePeriod: 5,
  // },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = []

// const maintenances: MaintenanceConfig[] = [
//   {
//     // [Optional] Monitor IDs to be affected by this maintenance
//     monitors: ['foo_monitor', 'bar_monitor'],
//     // [Optional] default to "Scheduled Maintenance" if not specified
//     title: 'Test Maintenance',
//     // Description of the maintenance, will be shown at status page
//     body: 'This is a test maintenance, server software upgrade',
//     // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
//     start: '2020-01-01T00:00:00+08:00',
//     // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
//     // if not specified, the maintenance will be considered as on-going
//     end: '2050-01-01T00:00:00+08:00',
//     // [Optional] color of the maintenance alert at status page, default to "yellow"
//     color: 'blue',
//   },
// ]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
