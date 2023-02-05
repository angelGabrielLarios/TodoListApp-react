export const getRandomKey = () => {
    const key = parseInt(
        Date.now() * Math.random()
    )

    return key
}




