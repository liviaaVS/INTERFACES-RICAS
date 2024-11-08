const fatorial = require('./fatorial');

test('Fatorial de 5', () => {
  expect(fatorial(5)).toBe(120);
});


test('Should throw exception: Fatorial de 0 ou menor ', () => {
    try {
      fatorial(0)
      fatorial(-1)
    } catch (e) {
      expect(e.message).toBe('Number is not valid');
    }
});

test('Fatorial de 10 a 20', () => {
    const fatValues = [
        3_628_800,     // fatorial(10)
        39_916_800,    // fatorial(11)
        479_001_600,   // fatorial(12)
        6_227_020_800, // fatorial(13)
        87_178_291_200, // fatorial(14)
        1_307_674_368_000, // fatorial(15)
        20_922_789_888_000, // fatorial(16)
        355_687_428_096_000, // fatorial(17)
        6_402_373_705_728_000, // fatorial(18)
        121_645_100_408_832_000, // fatorial(19)
        2_432_902_008_176_640_000 // fatorial(20)
    ];

    for (let x = 10; x <= 20; x++) {
        expect(fatorial(x)).toBe(fatValues[x - 10]);
    }
});

