import { generateId } from "../utils/GenerateId"

class FakeDb {
  spells = [{ name: 'Ray of Fraught', description: "Its mildly worrying", id: generateId() }, { name: 'Hexblades Purse', description: "the best weapon is the old lady purse", id: generateId() }]
}

export const fakeDb = new FakeDb()