//reduce method for sum:
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((a,b)=>a+b) //add this in bracket : (a,b)=>a+b

console.log(totalRainfall)


//reduce method for making a sentence
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((a,b)=>a+b)

console.log(sentence)