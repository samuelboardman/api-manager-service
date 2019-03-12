exports.dataSourceDto = {
  dataSourceTypeId: String,
  description: String,
  baseUrl: String,
  id: String,
  authorizationType: String,
  loginBody: Map,
  loginEndpoint: String,
  pullEndPoint: String,
  pushEndpoint: String,
  institutionId: String,
  pushQueueName: String,
  requirePushUpdate: Boolean,
  headers: Map,
  params: Map,
  tenantId: String

}
