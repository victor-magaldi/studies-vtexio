import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

const routes = {
  getPosts: () => '/posts',
}

export class PostClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://jsonplaceholder.typicode.com', context, options)
  }


  public getPosts = async() => {
    return await this.http.get(routes.getPosts(), {
      metric: 'get-users',
    })
  }
}
