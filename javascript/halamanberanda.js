const API_BASE_URL = "https://kind-tan-spider-slip.cyclic.app";

async function lacak() {
  const nomerResi = document.getElementById("nomor-resi").value;

  try {
    const response = await fetch(`${API_BASE_URL}/lacak`)
    const data = await response.json();
    console.log(data)

    // Menampilkan hasil pelacakan di div output-box2
    const outputBox2 = document.getElementById("output-box1");
    if (!Array.isArray(data)) {
      console.log("masuk")
      outputBox2.innerHTML = 
     "<h3>barang tidak di temukan</h3>"
      return;
    }
    if (data.length > 0 ) {
      const result = data.filter(resi => resi.id == nomerResi)
      if (result.length === 0) {
      outputBox2.innerHTML = 
     "<h3>barang tidak di temukan</h3>"
      return;
      }
      outputBox2.innerHTML = ` 
      id: ${result[0].id}<br>
      nama: ${result[0].nama}<br>
      numberTelpon: ${result[0].numberTelpon}<br>
      statusPengiriman: ${result[0].statusPengiriman}`;
      return;
    }
    
    outputBox2.innerHTML = `
      origin: ${origin}<br>
      destination: ${destination}<br>
      weight: ${weight}<br>
      price: ${data.tarif}`;
  } catch (error) {
    console.error("Tidak dapat menemukan destinasi Anda: ", error);
  }
}

async function checkTarif() {
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const weight = document.getElementById("weight").value;

  try {
    const response = await fetch(`${API_BASE_URL}/tarif?origin=${origin}&destination=${destination}&weight=${weight}`)
    const data = await response.json();
    console.log(data)

    // Menampilkan hasil pelacakan di div output-box2
    const outputBox2 = document.getElementById("output-box2");
    if (data.tarif === null) {
      outputBox2.innerHTML = '<h3>tarif tidak tersedia</h3>'
      return;
    }
    
    outputBox2.innerHTML = `
      origin: ${origin}<br>
      destination: ${destination}<br>
      weight: ${weight}<br>
      price: ${data.tarif}`;
  } catch (error) {
    console.error("Tidak dapat menemukan destinasi Anda: ", error);
  }
}