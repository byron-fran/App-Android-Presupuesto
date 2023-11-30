export const moneda = valor =>{
    return Number(valor).toLocaleString('en-US', {
        style  : 'currency',
        currency : 'USD'
    })
}