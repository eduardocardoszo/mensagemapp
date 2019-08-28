"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mensagens_controller_1 = require("./mensagens.controller");
describe('Mensaje Controller', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [mensagens_controller_1.MensagensController],
        }).compile();
        controller = module.get(mensagens_controller_1.MensagensController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=mensagens.controller.spec.js.map