const API_BASE_URL = 'http://localhost:3000';
async function addAllTracking() {
    const nomorResi = document.getElementById('nomor-resi').value; 
  
    try {
      const response = await fetch(`${API_BASE_URL}/tracking`, {
          method: 'GET',
          body: JSON.stringify({ nomorResi }) 
      });
      const data = await response.json();
      
      // Menampilkan hasil pelacakan di div output-box1
      const outputBox1 = document.getElementById('output-box1');
      outputBox1.innerHTML = `
        Nomor Resi: ${nomorResi}<br>
        Nama Penerima: ${data.receiverName}<br>
        Nomor HP: ${data.receiverPhoneNumber}<br>
        Status Pengiriman: ${data.status}
      ${JSON.stringify(data)}`;
  } catch (error) {
      console.error('Tidak dapat menemukan nomor resi Anda: ', error);
  } 
}

async function addAllCheck() {
  const origin = document.getElementById('origin').value; 

  try {
    const response = await fetch(`${API_BASE_URL}/tracking`, {
        method: 'GET',
        body: JSON.stringify({ origin }) 
    });
    const data = await response.json();
    
    // Menampilkan hasil pelacakan di div output-box2
    const outputBox2 = document.getElementById('output-box2');
    outputBox2.innerHTML = `
      origin: ${origin}<br>
      destination: ${destination}<br>
      weight: ${weight}<br>
      price: ${price}
    ${JSON.stringify(data)}`;
} catch (error) {
    console.error('Tidak dapat menemukan destinasi Anda: ', error);
} finally {
    fetchCheck(); 
}   
}