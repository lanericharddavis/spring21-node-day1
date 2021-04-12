import { generateId } from "../utils/GenerateId"

class FakeDb {
  burgers = [
    {
      name: 'Meaty Burg',
      bread: 'Wheat',
      condiment: 'Ketchup',
      topping: 'Lettice',
      main: 'Beef',
      id: generateId()
    },
    {
      name: 'Veggie Burg',
      bread: 'Cauliflower',
      condiment: 'Ranch',
      topping: 'Lettice',
      main: 'Bell Pepper',
      id: generateId()
    },
    {
      name: 'Ice Burg',
      bread: 'Soggy Bun',
      condiment: 'Water',
      topping: 'Iceburg Lettice',
      main: 'Slab-o-Ice',
      id: generateId()
    }
  ]
}

export const fakeDb = new FakeDb()