function converterTempo(segundos) {
    const horas = Math.floor(segundos / 3600)
    segundos %= 3600
    const minutos = Math.floor(segundos / 60)
    segundos %= 60
    return `${horas}: ${minutos}: ${segundos}`
}
const tempoSegundos = 3672
const tempoFormatado = converterTempo(tempoSegundos)

document.write(converterTempo(tempoSegundos))