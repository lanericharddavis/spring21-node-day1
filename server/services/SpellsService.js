import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class SpellsService {
  delete(id) {
    let value = fakeDb.spells.find(e => e.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed");
    }
    fakeDb.spells.filter(s => s.id !== id)
  }
  create(newSpell) {
    newSpell.id = generateId()
    // other buisness logic

    fakeDb.spells.push(newSpell)
    return newSpell
  }
  async find(query = {}) {
    // let values = await dbContext.Values.find(query);
    return fakeDb.spells;
  }
  async findById(id) {
    let value = fakeDb.spells.find(e => e.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed");
    }
    return value;
  }
}

export const spellsService = new SpellsService();