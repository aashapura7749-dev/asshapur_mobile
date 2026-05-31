// 1. Phone BUY karne ke liye function (WhatsApp par redirect karega)
function buy(productName) {
    const phoneNumber = "919598919992"; // Aapka WhatsApp Number
    const message = `Hi Aashpura Mobile, I am interested in buying: ${productName}. Is it available?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// 2. Phone SELL karne ke liye function (Bill & Box Security Check ke saath)
function submitSellForm(event) {
    event.preventDefault(); // Page ko reload hone se rokne ke liye
    
    const model = document.getElementById("phoneModel").value;
    const condition = document.getElementById("phoneCondition").value;
    const hasBill = document.getElementById("hasBill").value;
    const hasBox = document.getElementById("hasBox").value;
    const price = document.getElementById("expectedPrice").value;

    // Strict Rule: Agar Bill ya Box dono mein se ek bhi 'No' hai toh alert dikhayega
    if (hasBill === "No" || hasBox === "No") {
        alert("⚠️ Security Alert: Aashpura Mobile Shop par phone bechne ke liye Original BILL aur BOX dono hona mandatory (zaroori) hai!");
        return; // Code aage nahi badhega, form submit nahi hoga
    }

    // Agar Bill aur Box dono 'Yes' hain, toh WhatsApp par detail chali jayegi
    const phoneNumber = "919598919992";
    const message = `Hi Aashpura Mobile, I want to SELL my phone:\n\n` +
                    `- Model: ${model}\n` +
                    `- Condition: ${condition}\n` +
                    `- Bill & Box: Available ✅\n` +
                    `- My Expected Price: ₹${price}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
