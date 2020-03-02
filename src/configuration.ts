import { SdkConfiguration } from './models'

class Configuration {
  private config: SdkConfiguration = {
    baseApiUrl: 'https://api.ordercloud.io/v1',
    baseAuthUrl: 'https://auth.ordercloud.io/oauth/token',
    timeoutInMilliseconds: 10 * 1000,
    clientID: null,
    cookieOptions: {
      samesite: 'lax', // browser default
      secure: false,
      domain: null,
    },
  }

  Set(config: SdkConfiguration): void {
    this.config = { ...this.config, ...config }
  }

  Get(): SdkConfiguration {
    return this.config
  }
}

export default new Configuration()
