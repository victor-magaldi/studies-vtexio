import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class Search extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        ...options?.headers,
        VtexIdClientAutCookie: context.authToken,
      },
      timeout: 5000,
    })
  }


  public sellerBySku = async (skuId: string): Promise<any> => {
    const url = `/api/catalog_system/pvt/sku/stockkeepingunitbyid/${skuId}`

    return this.http.getRaw(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${this.context.authToken}`,
      },
    })
  }

  public sellers = async (salesChannel?: string): Promise<any> => {
    const sc = salesChannel ? `sc=${salesChannel}` : ''
    const params = `?${sc}`
    console.log(params)
    const url = `/api/dataentities/CL/search?_where=document=editado&_fields=email,document`

    return this.http.getRaw(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${this.context.authToken}`,
      },
    })
  }
}
