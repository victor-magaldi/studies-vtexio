import { IOClients } from '@vtex/api'

import { UsersClient } from './users'
import {PostClient} from './getPosts'
import { ExternalMasterdata } from './externalMasterdata'
import { ExternalPvt } from './externalPvt'
import { Search } from './search'
export class Clients extends IOClients {
  public get users() {
    return this.getOrSet('users', UsersClient)
  }

  public get externalMasterdata() {
    return this.getOrSet('externalMasterdata', ExternalMasterdata)
  }

  public get posts() {
    return this.getOrSet('externalMasterdata', PostClient)
  }

  public get pvt() {
    return this.getOrSet('externalPvt', ExternalPvt)
  }
  public get search() {
    return this.getOrSet('search', Search)
  }
}
