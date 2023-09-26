import { InMemoryCheckInsRepository } from '@/repositories/In-memory/in-memory-check-ins-repository'
import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest'
import { CheckInUseCase } from '@/use-cases/check-in'
import { InMemoryGymsRepository } from '@/repositories/In-memory/in-memory-gyms-repository'
import { Decimal } from '@prisma/client/runtime/library'
import { CreateGymUserCase } from './create-gym'
// import { MaxNumberOfCheckInsError } from '@/use-cases/errors/max-number-of-check-ins-error'
// import { MaxDistanceError } from '@/use-cases/errors/max-distance-error'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUserCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUserCase(gymsRepository)
  })
  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    expect(gym.id).toEqual(expect.any(String))
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
