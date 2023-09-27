import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface SearchGymsUseCaseRequest {
  query: string
  page: number
}

interface SearchGymsUseCase {
  gyms: Gym[]
}
export class SearchGymsUserCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseRequest): Promise<SearchGymsUseCase> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
