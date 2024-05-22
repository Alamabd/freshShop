function Rating(star: number) {
  return '★★★★★☆☆☆☆☆'.slice(5-star, 10-star)
}

export default Rating