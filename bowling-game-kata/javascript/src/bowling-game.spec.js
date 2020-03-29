import {BowlingGame} from "./bowling-game";

describe('BowlingGame', () => {
    it('should have a score method', () => {
        const game = new BowlingGame();

        expect(game.score()).toBe(0);
    });
});