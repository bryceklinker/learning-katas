using Xunit;

namespace FizzBuzz.Kata.Test
{
    public class FizzBuzzCalculatorTest
    {
        [Fact]
        public void WhenNumberIs_1_ThenReturns_1()
        {
            var calculator = new FizzBuzzCalculator();

            var result = calculator.Calculate(1);
            
            Assert.Equal("1", result);;
        }
    }
}
