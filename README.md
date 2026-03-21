B1 Motors
Website automotivo desenvolvido para a B1 Motors, com foco em apresentação premium do estoque e captação de leads de clientes interessados.

✨ Funcionalidades
- Listagem de veículos
- Página dedicada para cada carro
- Galeria de imagens
- Página de contato
- Botão **Tenho interesse** integrado à ficha de captação
- Envio automático de leads para Google Sheets
- Organização inicial dos leads em planilha com status

🚀 Tecnologias utilizadas
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Google Apps Script**
- **Google Sheets**

📌 Sobre o sistema de leads
O projeto conta com uma integração simples e funcional para captação de interessados:
1. O cliente acessa a página de um veículo
2. Clica em **Tenho interesse**
3. Preenche a ficha com seus dados
4. As informações são enviadas automaticamente para uma planilha no Google Sheets

Isso permite que a loja tenha uma base organizada de leads sem depender apenas do WhatsApp.

📂 Estrutura principal
```bash
app/
├── api/
│   └── ficha/
│       └── route.ts
├── carros/
│   ├── [slug]/
│   │   └── page.tsx
│   └── page.tsx
├── contato/
│   └── page.tsx
├── ficha/
│   └── page.tsx
└── page.tsx

components/
└── cars/
    └── CarGallery.tsx

data/
└── cars.ts
