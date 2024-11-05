function showNextPlot(currentIndex) {
    document.getElementById('plot' + currentIndex).style.display = 'none';
    if (currentIndex + 1 < 11) {
        document.getElementById('plot' + (currentIndex + 1)).style.display = 'block';
    }
}
