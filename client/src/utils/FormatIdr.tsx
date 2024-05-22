function FormatIdr(currency: number) {
    return currency.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
}

export default FormatIdr