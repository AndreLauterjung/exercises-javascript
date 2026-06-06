function termometro (celsius, formula)
{
    return formula(celsius);
}

const paraFahrenheit = (celsius) =>
{
    return (celsius * (9/5)) +32;
}

const temperaturaFinal = termometro(49, paraFahrenheit);
console.log(temperaturaFinal);