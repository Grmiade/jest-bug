export function add(...items: number[]) {
    return items.reduce((result, item) => result + item)
}
