import { EnvOptions } from './config'
import { getContainer } from './inversify.config'
import { TYPES } from './types/types'
import { WorkItemUpdateResults } from './workitem/types'
import { WorkItemAssociationService } from './workitem/WorkItemAssociationService'

export async function main(buildId: number, envOptions?: EnvOptions): Promise<WorkItemUpdateResults> {
  try {
    const container = await getContainer(envOptions)
    const workItemAssociationService = container.get<WorkItemAssociationService>(TYPES.WorkItemAssociationService)
    const result = await workItemAssociationService.linkTestMethods(buildId)

    return result
  } catch (O_o) {
    throw O_o
  }
}
