import { generateId } from "../utils/GenerateId";
import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";

class BurgersService {

  async find(query = {}) {
    return fakeDb.burgers;
  }

  async findById(id) {
    let value = fakeDb.burgers.find(b => b.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id")
    }
    return value;
  }

  create(newBurger) {
    newBurger.id = generateId()

    fakeDb.burgers.push(newBurger)
    return newBurger
  }

  async delete(id) {
    let value = fakeDb.burgers.find(b => b.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    fakeDb.burgers.filter(b => b.id === id)
  }
}

export const burgersService = new BurgersService();