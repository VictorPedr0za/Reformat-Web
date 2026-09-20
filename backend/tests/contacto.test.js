const request = require('supertest');
const app = require('../server');
const db = require('../config/db');

jest.mock('../config/db', () => ({
  leerJSON: jest.fn(),
  guardarJSON: jest.fn()
}));

describe('Pruebas del Endpoint de Contacto', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/contacto debería retornar 200 y una lista de contactos', async () => {
    db.leerJSON.mockReturnValue([{ id: 1, nombre: 'Test', correo: 'test@test.com', consulta: 'Hola' }]);
    
    const res = await request(app).get('/api/contacto');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBe(1);
    expect(db.leerJSON).toHaveBeenCalledWith('contactos.json');
  });

  it('POST /api/contacto debería retornar 400 si faltan campos', async () => {
    const res = await request(app).post('/api/contacto').send({ nombre: 'Falta correo' });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBe('Faltan campos obligatorios');
  });

  it('POST /api/contacto debería retornar 201 si los datos son correctos', async () => {
    db.leerJSON.mockReturnValue([]);
    
    const res = await request(app).post('/api/contacto').send({ 
      nombre: 'Esteban', 
      correo: 'esteban@ejemplo.com', 
      consulta: 'Tengo una duda' 
    });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.mensaje).toBe('Contacto recibido correctamente');
    expect(db.guardarJSON).toHaveBeenCalled();
  });
});
