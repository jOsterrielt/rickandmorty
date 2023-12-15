const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const character1 = { id: 1, name: "Rick" };
const character2 = { id: 2, name: "Morty" };

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const res = await session(app).get("/rickandmorty/character/1");
      expect(res.statusCode).toBe(200);
      const expectedProperties = {
        id: expect.any(Number),
        name: expect.any(String),
        species: expect.any(String),
        gender: expect.any(String),
        status: expect.any(String),
        origin: expect.any(Object),
        image: expect.any(String),
      };
      expect(res.body).toMatchObject(expectedProperties);
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/abc").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Debe retornar {access: true} cuando las credenciales son correctas", async () => {
      const res = await agent.get(
        "/rickandmorty/login?email=prueba@email.com&password=Prueba123"
      );
      expect(res.body.access).toBe(true);
    });
    it("Debe retornar {access: false} cuando las credenciales son incorrectas", async () => {
      const res = await agent.get(
        "/rickandmorty/login?email=prueba@email.com&password=Prueba23"
      );
      expect(res.body.access).toBe(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Debe retornar un array de objetos", async () => {
      const res = await agent.post("/rickandmorty/fav").send(character1);
      expect(res.body).toEqual([character1]);
    });
    it("Debe retornar un array de objetos", async () => {
      const res = await agent.post("/rickandmorty/fav").send(character1);
      expect(res.body).toContainEqual(character1);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Devuelve array con personajes si no elimina ningun personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/3");
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
    it("Devuelve array sin personaje con el id eliminado", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).not.toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
  });
});
