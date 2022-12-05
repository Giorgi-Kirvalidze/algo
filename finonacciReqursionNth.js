function requirsiveFb(n) {
    if (n < 2) return n;
    return requirsiveFb(n - 1) + requirsiveFb(n - 2)
}