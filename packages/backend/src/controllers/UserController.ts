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
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    return response.json(users);
  }
}

export default new UserController()
