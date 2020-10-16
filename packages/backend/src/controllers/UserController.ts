import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserRepository from '../repositories/UserRepository'

class UserController {
  async create(request: Request, response: Response): Promise<any> {
    const userRepository = getCustomRepository(UserRepository)

    const { name, email, password } = request.body

    const user = userRepository.create({
      name,
      email,
      password
    })

    await userRepository.save(user)
    return response.status(201).json(user)
  }

  async index(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)

    const users = await userRepository.find()

    return response.json(users)
  }

  async view(request: Request, response: Response) {
    const { userId } = request.params

    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne(userId);

    if (!user) {
      const resError = { error: `user wit id '${userId}' was not found` }
      return response.status(404).json(resError)
    }

    return response.json(user)
  }

  async remove(request: Request, response: Response) {
    const { userId } = request.params

    const userRepository = getCustomRepository(UserRepository)

    const { affected = 0 } = await userRepository.delete(userId)

    if (!affected) {
      const resError = { error: `user wit id '${userId}' was not found` }
      return response.status(404).json(resError)
    }

    return response.status(204)
  }
}

export default new UserController()
