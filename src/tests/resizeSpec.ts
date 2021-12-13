//Test basic api
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('API Checks', () => {
    it('For Correct Image', async () => {
        const response = await request.get('/api/resize/imageName=fjord.jpg&width=150&height=150');
        expect(response.statusCode).toEqual(200);
    }
)});