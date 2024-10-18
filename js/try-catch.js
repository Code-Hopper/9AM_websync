let a = 10
let b = 1

// try-catch-finally
// throw

try {

    let ans = a / b

    if (ans == "Infinity") {
        throw ("division not posible !")
    }

    console.log(ans)

} catch (err) {
    console.log("some error !", err)
} finally {
    console.log("program completed !")
}