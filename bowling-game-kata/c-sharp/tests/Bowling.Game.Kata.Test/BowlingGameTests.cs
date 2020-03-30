using System;
using Xunit;
using Bowling.Game.Kata;

namespace Bowling.Game.Kata.Test
{
    public class BowlingGameTests
    {
        [Fact]
        public void WhenScoreCalledThenReturnsScore()
        {
            var game = new BowlingGame();

            Assert.Equal(0, game.Score());
        }
    }
}
