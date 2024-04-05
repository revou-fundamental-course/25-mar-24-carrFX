var height, weight, result, keterangan;

function hitung() {
    height = parseFloat(document.getElementById('height').value);
    height /= 100;
    weight = parseFloat(document.getElementById('weight').value);
    result = weight / (height * height);
    
    if (result > 30) {
        resultText = "Obesitas";
    } else if (result >= 25 && result <= 29.9) {
        resultText = "Overweight";
    } else if (result >= 18.5 && result <= 24.9) {
        resultText = "Ideal";
    } else if (result < 18.5) {
        resultText = "Underweight";
    } else {
        resultText = "Berat dan tinggi badan anda tidak valid";
    }

    if (result > 30) {
        keterangan = "Obesitas adalah kondisi medis di mana seseorang memiliki kelebihan berat badan yang berbahaya untuk kesehatan. Saran pola hidup untuk mengatasi tubuh obesitas antara lain adalah dengan cara Makan seimbang, Batasi porsi makan dan aktivitas fisik, Hindari makanan Junk Food dan lain sebagainya.";
    } else if (result >= 25 && result <= 29.9) {
        keterangan = "Overweight adalah kondisi di mana seseorang memiliki berat badan lebih dari yang dianggap sehat untuk tinggi badannya. Saran pola hidup untuk mengatasi tubuh yang overweight antara lain adalah dengan mengontrol porsi makan, minum air putih, tidur yang cukup dan jangan lupa untuk berkonsultasi dengan profesional medis.";
    } else if (result >= 18.5 && result <= 24.9) {
        keterangan = "Ideal adalah kondisi tubuh yang sehat dan seimbang, di mana seseorang memiliki berat badan yang proporsional dengan tinggi badannya. Untuk tetap menjaga berat badan yang ideal dan kesehatan secara umum antara lain adalah dengan cara mengurangi konsumsi gula dan lemak jenuh, kelola stres, dan jangan lupa untuk rutin cek kesehatan tubuh.";
    } else if (result < 18.5) {
        keterangan = "Underweight adalah kondisi di mana seseorang memiliki berat badan yang lebih rendah dari yang dianggap sehat untuk tinggi badannya. Saran pola hidup untuk tubuh yang underweight antara lain adalah makan lebih banyak kalori, tingkatkan asupan protein, minum minuman berkalori serta konsultasikan dengan preofesional medis secara berkala.";
    } else {
        keterangan = "Silakan masukkan berat dan tinggi badan yang valid...";
    }

    document.getElementById('result').innerHTML = result.toFixed(1);
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('keterangan').innerHTML = keterangan;
}