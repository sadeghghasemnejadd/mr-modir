export default function getCurrency(amount: number) {
    return `${new Intl.NumberFormat('fa-ir').format(amount)} تومان`
}
