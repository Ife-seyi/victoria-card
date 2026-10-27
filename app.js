function saveContact(){
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Archibong;Victoria;;;",
    "FN:Victoria Archibong",
    "TITLE:Executive Assistant / Software Developer",
    "EMAIL;TYPE=work:victoria.archibong@leadershiplegacy-consulting.com",
    "EMAIL;TYPE=home:Victoriaonvirtual@gmail.com",
    "TEL;TYPE=CELL:+2348083454892",
    "URL:https://github.com/Ife-seyi/",
    "END:VCARD"
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Victoria-Archibong.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Portfolio track toggle (only present on portfolio.html)
document.querySelectorAll(".track-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".track-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".track-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`track-${btn.dataset.track}`).classList.add("active");
  });
});
