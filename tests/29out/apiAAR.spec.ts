// AULA 40 - API Setup e Teardown (29/10/2026)

import {test, expect} from "@playwright/test";
const APIUrl = "https://api-qa-fap2026.onrender.com/api";

test.describe("Testes api no padrão AAR, com geração de massa para UI", 
  () => {
    let authToken: string; 
    let createdProdID: string;
    const uniqueProdName = `Teclado mecânico ${Date.now()}`;

    // ARRANGE (SETUP login Logista)
    test.beforeAll(async ({ request }) => {
      const loginRes= await request.post(`${APIUrl}/login`, {
        data: {
          "email": "lojista@system.com",
          "password": "SellerPass123"
        }
      });
      expect(loginRes.status()).toBe(200);
      const loginDate = await loginRes.json();
      authToken = loginDate.token;
      expect(authToken).toBeDefined();

      // Criar massa de teste para UI (produto)
      const productRes = await request.post(`${APIUrl}/seller/products`, {
        headers:{
          Authorization: `Bearer ${authToken}`
        },
        data: {
          "name": uniqueProdName,
          "description": "Massa teste gerada no setup API do tio Alison",
          "category": "Periféricos",
          "price": 199.99,
          "stock": 50,
          "image": "https://tse4.mm.bing.net/th/id/OIP.bPl3R1qP-Agt5mcttILp1QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
      })
      expect(productRes.status()).toBe(201);
      const productBody = await productRes.json();
      createdProdID = productBody.product._id;
      expect(createdProdID).toBeDefined();
    })
    test("Validar produto recém criado", async ({ request }) => {
      expect(createdProdID).toBeDefined();

      const res = await request.get(`${APIUrl}/products?search=${uniqueProdName}`);

      expect(res.status()).toBe(200);
      const productData = await res.json();
      expect(Array.isArray(productData)).toBeTruthy();
      const targetProd = productData.find((p:any) => p._id == createdProdID);
      expect(targetProd).toBeDefined();
      expect(targetProd.name).toBe(uniqueProdName);
      expect(targetProd.stock).toBe(50)
      expect(targetProd.price).toBe(199.99)
    })
  }
)