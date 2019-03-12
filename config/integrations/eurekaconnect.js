const Eureka = require('eureka-js-client').Eureka

const client = new Eureka({
  // application instance information
  instance: {
    app: 'localhost',
    hostName: 'racs-transactionsjobs-service-node',
    ipAddr: 'localhost',
    port: {
      '$': 9056,
      '@enabled': 'true'
    },
    vipAddress: 'tst.mlnx.test.vggdev.com',
    statusPageUrl: 'http://localhost:9050/info',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn'
    }
  },
  eureka: {
    // eureka server host / port
    host: 'localhost',
    port: 9050,
    servicePath: '/eureka/apps/'
  }
})
module.exports = client
