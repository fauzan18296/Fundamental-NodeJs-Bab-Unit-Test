test('test toBe', () => {
  const name = "Fauzan";
  const hello = `Hello, ${name}`;
  expect(hello).toBe("Hello, Fauzan")
})

test('test toEquals', () => {
  let person = {id:"fauzan"}
  Object.assign(person, {name:"Fauzan"})
  expect(person).toEqual({id:"fauzan", name: "Fauzan"})
})
