export const jsonFetcher = async (url: string) => {
    if (url) {
        const res = await fetch(url)

        const json = await res.json();
        return json

    }
}

export const textFetcher = async (url: string) => {
    if (url) {
        const res = await fetch(url)

        const text = await res.text();
        return text

    }
}
