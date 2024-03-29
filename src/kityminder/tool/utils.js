export function debounce(fn, wait = 50) {
    let timer = null
    return function(...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}