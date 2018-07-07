// alphabetical order
const params = {
  additional: {
    access_type: 'access_type',
    display: 'display'
  },
  auth0: {
    audience: 'audience',
    auth0Client: 'auth0Client',
    connection: 'connection',
    connection_scope: 'connection_scope',
    _csrf: '_csrf',
    device: 'device',
    _intstate: '_intstate',
    login_ticket: 'login_ticket',
    owp: 'owp',
    protocol: 'protocol',
    realm: 'realm'
  },
  blacklist: {
    connection: 'connection',
    credentialType: 'credentialType',
    domain: 'domain',
    email: 'email',
    federated: 'federated',
    otp: 'otp',
    password: 'password',
    phoneNumber: 'phoneNumber',
    popup: 'popup',
    popupOptions: 'popupOptions',
    popupHandler: 'popupHandler',
    postMessageDataType: 'postMessageDataType',
    postMessageOrigin: 'postMessageOrigin',
    scope: 'scope',
    tenant: 'tenant',
    timeout: 'timeout',
    usePostMessage: 'usePostMessage',
    userMetadata: 'userMetadata',
    user_metadata: 'user_metadata',
    username: 'username',
    verificationCode: 'verificationCode'
  },
  oauth2: {
    acr_values: 'acr_values',
    assertion: 'assertion',
    claims: 'claims',
    claims_locales: 'claims_locales',
    clientID: 'clientID',
    client_assertion: 'client_assertion',
    client_assertion_type: 'client_assertion_type',
    client_id: 'client_id',
    client_secret: 'client_secret',
    code: 'code',
    code_challenge: 'code_challenge',
    code_challenge_method: 'code_challenge_method',
    code_verifier: 'code_verifier',
    display: 'display',
    grant_type: 'grant_type',
    id_token_hint: 'id_token_hint',
    login_hint: 'login_hint',
    max_age: 'max_age',
    nonce: 'nonce',
    password: 'password',
    prompt: 'prompt',
    redirect_uri: 'redirect_uri',
    registration: 'registration',
    refresh_token: 'refresh_token',
    request: 'request',
    request_uri: 'request_uri',
    response_mode: 'response_mode',
    response_type: 'response_type',
    scope: 'scope',
    state: 'state',
    tenant: 'tenant',
    ui_locales: 'ui_locales',
    username: 'username'
  },
  toSnakeCase: {
    auth0Client: 'auth0Client',
    authParams: 'authParams',
    returnTo: 'returnTo'
  }
};

const paramsArray = {
  baseParams: [params.oauth2.clientID],
  blacklistAuthParams: [
    params.blacklist.domain,
    params.blacklist.popupOptions,
    params.blacklist.username,
    params.blacklist.tenant,
    params.blacklist.timeout
  ],
  blacklistDBParams: [
    params.blacklist.scope,
    params.blacklist.userMetadata,
    params.blacklist.user_metadata
  ],
  blacklistPopupParams: [params.blacklist.popupHandler],
  blacklistPostMessageParams: [
    params.blacklist.postMessageDataType,
    params.blacklist.tenant,
    params.blacklist.usePostMessage
  ],
  blacklistPostMessageOriginParams: [
    params.blacklist.postMessageDataType,
    params.blacklist.postMessageOrigin,
    params.blacklist.tenant,
    params.blacklist.usePostMessage
  ],
  blacklistUnhostedLoginParams: [
    params.blacklist.connection,
    params.blacklist.email,
    params.blacklist.phoneNumber,
    params.blacklist.verificationCode
  ],
  toSnakeCaseAuthParams: [params.toSnakeCase.auth0Client, params.toSnakeCase.authParams],
  toSnakeCaseBaseParams: [params.toSnakeCase.auth0Client]
};

export default {
  params: params,
  paramsArray: paramsArray
};
