// main.js — Quiz Pertanyaan Absurd (Easy → Normal → Hard → Extrame)
// Satu kotak = satu huruf, otomatis uppercase.
// Jawaban normalisasi: trim + uppercase. Progress tersimpan di localStorage.

// -------------------- DATA SOAL (200 soal) --------------------
const QUESTIONS = {
  Easy: [
    { q: "Apa yang bisa naik tapi nggak punya kaki?", a: "HARGA" },
    { q: "Apa yang selalu basah kalau dipakai mengeringkan?", a: "HANDUK" },
    { q: "Apa yang bisa pecah tanpa disentuh?", a: "HATI" },
    { q: "Apa yang selalu datang tapi nggak pernah diundang?", a: "TUA" },
    { q: "Apa yang bisa dipukul tapi nggak sakit?", a: "GENDANG" },
    { q: "Apa yang bisa dipegang tapi nggak bisa dilihat?", a: "JANJI" },
    { q: "Apa yang selalu lari tapi nggak punya kaki?", a: "WAKTU" },
    { q: "Apa yang bisa terbang tanpa sayap?", a: "DOA" },
    { q: "Apa yang bisa ditulis tapi nggak bisa dibaca?", a: "CORETAN" },
    { q: "Apa yang bisa dilempar tapi nggak jatuh?", a: "SENJA" },
    { q: "Apa yang bisa dibagi tapi malah bertambah?", a: "CINTA" },
    { q: "Apa yang bisa dibakar tapi nggak jadi abu?", a: "SEMANGAT" },
    { q: "Apa yang bisa bikin orang buta sesaat?", a: "KILAU" },
    { q: "Apa yang bisa bikin kenyang tanpa dimakan?", a: "BAHAGIA" },
    { q: "Apa yang bisa dilihat semua orang tapi nggak bisa dipegang?", a: "BAYANGAN" },
    { q: "Apa yang bisa hilang tanpa pergi?", a: "SINYAL" },
    { q: "Apa yang selalu di depan tapi nggak pernah jalan duluan?", a: "WAJAH" },
    { q: "Apa yang bisa pecah tapi tetap utuh?", a: "REKOR" },
    { q: "Apa yang bisa dipakai sekali aja?", a: "NYAWA" },
    { q: "Apa yang bisa nyala tanpa api?", a: "LAMPU" },
    { q: "Apa yang bisa menembus tapi nggak punya bentuk?", a: "UDARA" },
    { q: "Apa yang bisa keluar masuk tapi nggak pernah bayar?", a: "NAPAS" },
    { q: "Apa yang bisa jatuh tapi nggak pernah sakit?", a: "HUJAN" },
    { q: "Apa yang bisa bikin orang terbangun tanpa suara?", a: "MIMPI" },
    { q: "Apa yang selalu ada tapi nggak pernah terlihat?", a: "WAKTU" },
    { q: "Apa yang bisa jadi panjang tapi nggak bisa diukur?", a: "CERITA" },
    { q: "Apa yang bisa ketemu di kegelapan tapi nggak punya cahaya?", a: "TAKUT" },
    { q: "Apa yang bisa dicuri tapi nggak bisa disimpan?", a: "WAKTU" },
    { q: "Apa yang bisa bikin sakit tapi nggak berdarah?", a: "KATA" },
    { q: "Apa yang bisa jatuh ke bawah tapi tetap naik ke atas?", a: "HUJAN" },
    { q: "Apa yang selalu di ujung tapi nggak pernah selesai?", a: "HARAPAN" },
    { q: "Apa yang bisa bikin orang nangis tapi bikin lega?", a: "ONION" },
    { q: "Apa yang bisa jalan tapi nggak pernah pindah tempat?", a: "JAM" },
    { q: "Apa yang bisa mati tapi nggak hidup?", a: "BATERAI" },
    { q: "Apa yang bisa bikin orang sibuk tanpa kerja?", a: "GOSIP" },
    { q: "Apa yang bisa bikin gelap tapi bukan malam?", a: "MATILAMPU" },
    { q: "Apa yang bisa jatuh dari langit selain hujan?", a: "BINTANG" },
    { q: "Apa yang bisa bikin perut kenyang tanpa makanan?", a: "TIDUR" },
    { q: "Apa yang bisa dipinjam tapi nggak bisa dikembalikan?", a: "WAKTU" },
    { q: "Apa yang selalu mengekor tapi nggak pernah nyalip?", a: "BAYANGAN" },
    { q: "Apa yang bisa lari kencang tanpa kaki?", a: "PIKIRAN" },
    { q: "Apa yang bisa disimpan di dompet tapi nggak bisa dibelanjakan?", a: "FOTO" },
    { q: "Apa yang bisa dipakai tapi nggak pernah usang?", a: "NAMA" },
    { q: "Apa yang bisa diambil tapi nggak bisa dikembalikan?", a: "KESEMPATAN" },
    { q: "Apa yang bisa bikin panas tapi nggak terbakar?", a: "MALU" },
    { q: "Apa yang bisa hilang dalam hitungan detik tapi susah balik lagi?", a: "KEPERCAYAAN" },
    { q: "Apa yang bisa bikin orang buta padahal matanya sehat?", a: "CINTA" },
    { q: "Apa yang bisa bikin orang kaya miskin dalam semalam?", a: "MIMPI" },
    { q: "Apa yang bisa datang kapan saja tanpa diundang?", a: "MASALAH" },
    { q: "Apa yang bisa bikin perut sakit tanpa makanan basi?", a: "TAWA" }
  ],
  Normal: [
    { q: "Apa yang bisa hidup di kepala tapi nggak punya kaki?", a: "IDE" },
    { q: "Apa yang bisa bikin orang sibuk padahal cuma diam?", a: "LAMUNAN" },
    { q: "Apa yang bisa ditutup tapi nggak pernah terbuka?", a: "RAHASIA" },
    { q: "Apa yang bisa berputar tanpa berhenti tapi nggak pusing?", a: "PLANET" },
    { q: "Apa yang bisa bikin orang kuat padahal nggak berotot?", a: "TEKAD" },
    { q: "Apa yang bisa tumbuh tapi nggak punya akar?", a: "MASALAH" },
    { q: "Apa yang bisa datang setiap pagi tanpa dipanggil?", a: "MATAHARI" },
    { q: "Apa yang bisa pergi jauh tanpa bergerak?", a: "KHAYALAN" },
    { q: "Apa yang bisa bikin orang kehilangan arah meski punya peta?", a: "RINDU" },
    { q: "Apa yang bisa dipatahkan tanpa suara?", a: "HARAPAN" },
    { q: "Apa yang bisa jadi obat tapi juga bisa jadi racun?", a: "WAKTU" },
    { q: "Apa yang bisa bikin orang terdiam padahal ramai?", a: "TAKJUB" },
    { q: "Apa yang bisa bikin orang lari tanpa dikejar?", a: "PANIK" },
    { q: "Apa yang bisa bikin orang berhenti meski nggak ada polisi?", a: "TAKUT" },
    { q: "Apa yang bisa ditelan tapi nggak bisa dimakan?", a: "LUD" },
    { q: "Apa yang bisa bikin orang berat meski nggak berbobot?", a: "BEBAN" },
    { q: "Apa yang bisa jadi awal tapi juga akhir?", a: "NOL" },
    { q: "Apa yang bisa bikin orang sibuk menunggu?", a: "ANTRIAN" },
    { q: "Apa yang bisa bikin orang kalah padahal belum bertanding?", a: "TAKUT" },
    { q: "Apa yang bisa diikat tanpa tali?", a: "JANJI" },
    { q: "Apa yang bisa bikin orang lupa waktu?", a: "GAME" },
    { q: "Apa yang bisa bikin orang sakit meski nggak ada luka?", a: "PATAH" },
    { q: "Apa yang bisa bikin orang marah tanpa alasan?", a: "LAPAR" },
    { q: "Apa yang bisa jatuh meski nggak punya berat?", a: "AIR" },
    { q: "Apa yang bisa bikin orang sibuk cari padahal nggak hilang?", a: "MASADEPAN" },
    { q: "Apa yang bisa bikin orang nangis meski bahagia?", a: "KENANGAN" },
    { q: "Apa yang bisa ditanam tapi nggak tumbuh?", a: "UTANG" },
    { q: "Apa yang bisa hilang kalau dibagi?", a: "RAH" },
    { q: "Apa yang bisa diisi tapi nggak bisa penuh?", a: "KEINGINAN" },
    { q: "Apa yang bisa bikin orang kaya tapi juga miskin?", a: "PIKIRAN" },
    { q: "Apa yang bisa bikin orang berhenti meski nggak ada dinding?", a: "BATAS" },
    { q: "Apa yang bisa berjalan ke belakang tapi bukan kepiting?", a: "WAKTU" },
    { q: "Apa yang bisa bikin orang diam meski punya banyak kata?", a: "MALU" },
    { q: "Apa yang bisa dilihat sekali lalu hilang selamanya?", a: "PELUANG" },
    { q: "Apa yang bisa ditarik tapi nggak ada bentuk?", a: "PERHATIAN" },
    { q: "Apa yang bisa dikunci tapi nggak ada gemboknya?", a: "HATI" },
    { q: "Apa yang bisa bikin orang buta padahal ada cahaya?", a: "GELOMBANG" },
    { q: "Apa yang bisa berubah bentuk tapi bukan air?", a: "AWAN" },
    { q: "Apa yang bisa naik turun tanpa tangga?", a: "SUARA" },
    { q: "Apa yang bisa bikin orang sibuk padahal cuma nunggu?", a: "LOADING" },
    { q: "Apa yang bisa bikin orang gila meski sehat?", a: "CINTA" },
    { q: "Apa yang bisa bikin orang pergi meski nggak ada pintu?", a: "ANGIN" },
    { q: "Apa yang bisa bikin orang gelisah meski diam?", a: "GELIAT" },
    { q: "Apa yang bisa bikin orang tenang meski ribut?", a: "MUSIK" },
    { q: "Apa yang bisa bikin orang pusing meski duduk diam?", a: "LAPAR" },
    { q: "Apa yang bisa dilihat tapi nggak bisa disentuh?", a: "MIMPI" },
    { q: "Apa yang bisa bikin orang jatuh tanpa lubang?", a: "SENYUM" },
    { q: "Apa yang bisa bikin orang sibuk padahal cuma rebahan?", a: "CHAT" },
    { q: "Apa yang bisa bikin orang hilang meski masih ada?", a: "KEPERCAYAAN" },
    { q: "Apa yang bisa bikin orang berhenti berpikir?", a: "MATI" }
  ],
  Hard: [
    { q: "Apa yang bisa muncul di langit tanpa awan?", a: "PELITA" },
    { q: "Apa yang bisa habis meski nggak pernah dipakai?", a: "KESABARAN" },
    { q: "Apa yang bisa dicuri tanpa sentuhan?", a: "NAMA" },
    { q: "Apa yang bisa berlari padahal diam di tempat?", a: "LUKA" },
    { q: "Apa yang bisa jatuh tanpa arah?", a: "DEBU" },
    { q: "Apa yang bisa menutup mata tapi bukan kelopak?", a: "GELAP" },
    { q: "Apa yang bisa membakar tanpa panas?", a: "AMARAH" },
    { q: "Apa yang bisa membuat orang tua jadi anak-anak lagi?", a: "NOSTALGIA" },
    { q: "Apa yang bisa tenggelam tanpa air?", a: "HARAPAN" },
    { q: "Apa yang bisa bikin sakit kepala padahal bukan penyakit?", a: "MATEMATIKA" },
    { q: "Apa yang bisa terdengar tapi nggak ada bunyi?", a: "DIAM" },
    { q: "Apa yang bisa berjalan di malam tanpa kaki?", a: "BULAN" },
    { q: "Apa yang bisa menutup telinga meski nggak ada penutup?", a: "BISING" },
    { q: "Apa yang bisa bikin orang berteriak meski senang?", a: "GOL" },
    { q: "Apa yang bisa bertambah meski berkurang?", a: "ILMU" },
    { q: "Apa yang bisa bikin orang sibuk padahal kosong?", a: "LAMPU" },
    { q: "Apa yang bisa berdiri tanpa kaki dan jatuh tanpa dorongan?", a: "MENARA" },
    { q: "Apa yang bisa bikin orang berhenti padahal jalan terus?", a: "KENYATAAN" },
    { q: "Apa yang bisa muncul di dada meski nggak ada jantung?", a: "NYALI" },
    { q: "Apa yang bisa bikin orang hilang arah padahal ada kompas?", a: "ILUSI" },
    { q: "Apa yang bisa bikin orang melihat masa depan?", a: "MIMPI" },
    { q: "Apa yang bisa bikin orang bisu padahal punya mulut?", a: "TAKJUB" },
    { q: "Apa yang bisa ditelan tanpa mulut?", a: "KESEPIAN" },
    { q: "Apa yang bisa tumbuh meski tidak disiram?", a: "KEBODOHAN" },
    { q: "Apa yang bisa bikin orang buta arah padahal ada cahaya?", a: "KABUT" },
    { q: "Apa yang bisa digenggam meski nggak ada bentuk?", a: "ASA" },
    { q: "Apa yang bisa bikin orang tertawa meski sakit?", a: "IRONI" },
    { q: "Apa yang bisa bikin orang sibuk padahal diam?", a: "RESAH" },
    { q: "Apa yang bisa menari tanpa tubuh?", a: "API" },
    { q: "Apa yang bisa bikin dunia gelap tanpa malam?", a: "ASAP" },
    { q: "Apa yang bisa bikin orang takut meski tak terlihat?", a: "HANTU" },
    { q: "Apa yang bisa memotong tapi nggak tajam?", a: "KATA" },
    { q: "Apa yang bisa jatuh dari hati?", a: "AIR" },
    { q: "Apa yang bisa bikin orang merasa terbang meski di tanah?", a: "PUJAAN" },
    { q: "Apa yang bisa bikin orang hilang meski berdiri?", a: "BAYANG" },
    { q: "Apa yang bisa dikirim tanpa kurir?", a: "PESAN" },
    { q: "Apa yang bisa bikin hancur meski tanpa ledakan?", a: "KEBOHONGAN" },
    { q: "Apa yang bisa bikin orang sibuk mengejar meski nggak lari?", a: "MIMPI" },
    { q: "Apa yang bisa bikin orang sakit padahal manis?", a: "GULA" },
    { q: "Apa yang bisa bikin orang terdiam meski ingin bicara?", a: "TAKUT" },
    { q: "Apa yang bisa bikin dunia berputar meski nggak ada motor?", a: "GRAVITASI" },
    { q: "Apa yang bisa bikin orang hilang arah di laut?", a: "OMBAK" },
    { q: "Apa yang bisa bikin orang lelah tanpa gerak?", a: "PIKIRAN" },
    { q: "Apa yang bisa bikin orang hanyut meski tanpa sungai?", a: "LAGU" },
    { q: "Apa yang bisa membuat orang bodoh merasa pintar?", a: "PUJIAN" },
    { q: "Apa yang bisa bikin orang merasa kosong meski penuh?", a: "JIWA" },
    { q: "Apa yang bisa bikin orang berhenti melangkah meski jalan rata?", a: "RAGU" },
    { q: "Apa yang bisa bikin orang gelap mata meski siang?", a: "EMOSI" },
    { q: "Apa yang bisa bikin orang jatuh meski berdiri tegak?", a: "TAKDIR" },
    { q: "Apa yang bisa bikin orang menyesal padahal sudah selesai?", a: "PILIHAN" }
  ],
  Extrame: [
    { q: "Apa yang bisa lahir tanpa ibu?", a: "MITOS" },
    { q: "Apa yang bisa berjalan di otak tanpa kaki?", a: "IDEALIS" },
    { q: "Apa yang bisa hidup tanpa tubuh?", a: "ARWAH" },
    { q: "Apa yang bisa memakan waktu padahal nggak punya mulut?", a: "TUGAS" },
    { q: "Apa yang bisa memenjarakan meski tanpa jeruji?", a: "RUTINITAS" },
    { q: "Apa yang bisa bikin orang lumpuh padahal sehat?", a: "TAKDIR" },
    { q: "Apa yang bisa berteriak tanpa suara?", a: "SUNYI" },
    { q: "Apa yang bisa hancur meski tak pernah ada?", a: "MAYA" },
    { q: "Apa yang bisa menari di kepala tanpa musik?", a: "CEMAS" },
    { q: "Apa yang bisa membunuh tanpa darah?", a: "DOSA" },
    { q: "Apa yang bisa menutup langit tanpa awan?", a: "KEGELAPAN" },
    { q: "Apa yang bisa bikin orang hilang tapi tetap ada?", a: "IDENTITAS" },
    { q: "Apa yang bisa memanjat tanpa kaki?", a: "ASAP" },
    { q: "Apa yang bisa membekukan hati tanpa es?", a: "PENGKHIANATAN" },
    { q: "Apa yang bisa bersinar meski bukan cahaya?", a: "HARAPAN" },
    { q: "Apa yang bisa mengikat jiwa tanpa tali?", a: "JANJIAN" },
    { q: "Apa yang bisa memakan dunia tanpa gigi?", a: "WABAH" },
    { q: "Apa yang bisa berputar tanpa poros?", a: "KEBINGUNGAN" },
    { q: "Apa yang bisa berjalan di kegelapan tanpa arah?", a: "MALAM" },
    { q: "Apa yang bisa mendekat meski tak pernah bergerak?", a: "KEMATIAN" },
    { q: "Apa yang bisa menghapus jejak padahal tak ada hujan?", a: "ANGIN" },
    { q: "Apa yang bisa membuat orang kenyang meski lapar?", a: "ILUSI" },
    { q: "Apa yang bisa jadi kunci meski bukan besi?", a: "DOA" },
    { q: "Apa yang bisa bikin orang tenggelam padahal di darat?", a: "DEPRESI" },
    { q: "Apa yang bisa membuka pintu padahal tak punya tangan?", a: "PELUANG" },
    { q: "Apa yang bisa menyalakan hati tanpa api?", a: "KASIH" },
    { q: "Apa yang bisa membuat orang gila meski sendiri?", a: "SEPI" },
    { q: "Apa yang bisa menjatuhkan pohon tanpa kapak?", a: "WAKTU" },
    { q: "Apa yang bisa berjalan ke masa lalu padahal maju?", a: "INGATAN" },
    { q: "Apa yang bisa menjadi obat tapi rasanya pahit?", a: "KEJUJURAN" },
    { q: "Apa yang bisa menutup mulut padahal tak ada tangan?", a: "MALU" },
    { q: "Apa yang bisa menggerakkan dunia padahal tak terlihat?", a: "DOA" },
    { q: "Apa yang bisa membuat orang buta meski matanya terbuka?", a: "EGO" },
    { q: "Apa yang bisa merobek hati tanpa pisau?", a: "PERPISAHAN" },
    { q: "Apa yang bisa menjadi beban meski tak berbobot?", a: "DENDAM" },
    { q: "Apa yang bisa membuat orang menangis meski tertawa?", a: "IRONI" },
    { q: "Apa yang bisa membakar bumi tanpa api?", a: "KELOMPOK" },
    { q: "Apa yang bisa menghapus masa depan?", a: "KEPUTUSAN" },
    { q: "Apa yang bisa menghentikan detak meski bukan penyakit?", a: "TAKUT" },
    { q: "Apa yang bisa membungkam ribuan mulut?", a: "DIKTATOR" },
    { q: "Apa yang bisa menutup mata hati?", a: "KEDENGKIAN" },
    { q: "Apa yang bisa membalik dunia tanpa tangan?", a: "REVOLUSI" },
    { q: "Apa yang bisa berjalan tanpa arah tapi tetap sampai?", a: "NASIB" },
    { q: "Apa yang bisa membuat orang melayang meski berat?", a: "KEBANGGAAN" },
    { q: "Apa yang bisa jatuh tanpa gravitasi?", a: "KEPUTUSASAAN" },
    { q: "Apa yang bisa menghantui meski sudah mati?", a: "KENANGAN" },
    { q: "Apa yang bisa menghentikan waktu dalam diri?", a: "RASA" },
    { q: "Apa yang bisa membuat dunia bisu?", a: "KEHENINGAN" },
    { q: "Apa yang bisa menelan cahaya?", a: "KEGELAPAN" },
    { q: "Apa yang bisa membuat orang hilang dalam dirinya sendiri?", a: "KEKOSONGAN" }
  ]
};

// -------------------- PROGRESS HANDLING --------------------
const STORAGE_KEY = "absurd_quiz_progress_v1";
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
const categories = ["Easy", "Normal", "Hard", "Extrame"];

if (!progress) {
  progress = {
    unlocked: { Easy: true, Normal: false, Hard: false, Extrame: false },
    index: { Easy: 0, Normal: 0, Hard: 0, Extrame: 0 },
    completed: { Easy: false, Normal: false, Hard: false, Extrame: false }
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  const savedText = document.getElementById("savedText");
  if (savedText) savedText.textContent = "Progres tersimpan otomatis.";
}

// -------------------- UI ELEMENTS --------------------
const categoriesDiv = document.getElementById("categories");
const questionArea = document.getElementById("questionArea");
const questionText = document.getElementById("questionText");
const hintText = document.getElementById("hintText");
const levelInfo = document.getElementById("levelInfo");
const letterContainer = document.getElementById("letterContainer");
const enterBtn = document.getElementById("enterBtn");
const backBtn = document.getElementById("backBtn");
const progressText = document.getElementById("progressText");
const crumb = document.getElementById("crumb");
const status = document.getElementById("status");
const completeBox = document.getElementById("completeBox");
const completeMsg = document.getElementById("completeMsg");
const nextCategoryBtn = document.getElementById("nextCategory");
const backToMenu = document.getElementById("backToMenu");
const bgAudio = document.getElementById("bgAudio");
const resetProgressBtn = document.getElementById("resetProgress");
const muteBtn = document.getElementById("muteBtn");

// audio autoplay attempt
bgAudio.play().catch(()=>{/* autoplay blocked until user interact; mute/unmute toggles */});

// -------------------- STATE --------------------
let currentCategory = null;
let currentIndex = 0;
let currentAnswer = "";
let inputs = [];

// -------------------- BUILD CATEGORIES --------------------
function renderCategories() {
  categoriesDiv.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("div");
    btn.className = "cat-btn" + (progress.unlocked[cat] ? "" : " locked");
    btn.dataset.cat = cat;
    const left = document.createElement("div");
    left.textContent = cat;
    left.style.fontWeight = "800";
    const right = document.createElement("div");
    right.className = "muted";
    const idx = progress.index[cat] || 0;
    const total = QUESTIONS[cat].length;
    right.textContent = `${idx}/${total}`;
    btn.appendChild(left);
    btn.appendChild(right);
    btn.addEventListener("click", () => {
      if (!progress.unlocked[cat]) {
        flashLocked();
        return;
      }
      openCategory(cat);
    });
    categoriesDiv.appendChild(btn);
  });
}

function flashLocked() {
  const el = document.querySelector(".sidebar");
  if (!el) return;
  el.animate([{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(0)"}],{duration:220});
}

// -------------------- OPEN CATEGORY --------------------
function openCategory(cat) {
  currentCategory = cat;
  currentIndex = progress.index[cat] || 0;
  crumb.textContent = cat;
  status.textContent = `Kategori: ${cat}`;
  showQuestion();
  questionArea.classList.remove("hidden");
  completeBox.classList.add("hidden");
}

// -------------------- SHOW QUESTION --------------------
function showQuestion() {
  const catArr = QUESTIONS[currentCategory];
  if (!catArr) return;
  if (currentIndex >= catArr.length) {
    // category complete
    onCategoryComplete();
    return;
  }
  const qObj = catArr[currentIndex];
  questionText.textContent = qObj.q;
  hintText.textContent = ""; // no hint for now
  levelInfo.textContent = `Level ${currentIndex+1} / ${catArr.length}`;
  progressText.textContent = `Pertanyaan ${currentIndex+1} dari ${catArr.length}`;

  currentAnswer = String(qObj.a).trim().toUpperCase();
  buildInputs(currentAnswer.length);

  // focus first input
  setTimeout(()=>{ if(inputs[0]) inputs[0].focus(); },80);
  enterBtn.disabled = true;
  saveProgress();
}

// build single-letter inputs
function buildInputs(len) {
  letterContainer.innerHTML = "";
  inputs = [];
  for (let i=0;i<len;i++) {
    const inp = document.createElement("input");
    inp.type = "text";
    inp.maxLength = 1;
    inp.className = "letter";
    inp.autocomplete = "off";
    inp.spellcheck = false;
    inp.setAttribute("inputmode","text");
    // prevent paste
    inp.addEventListener("paste", e => e.preventDefault());
    inp.addEventListener("contextmenu", e => e.preventDefault());

    inp.addEventListener("input", (ev) => {
      inp.value = (inp.value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (inp.value && i < len-1) {
        inputs[i+1].focus();
      }
      updateEnterState();
    });

    inp.addEventListener("keydown", (ev) => {
      if (ev.key === "Backspace") {
        if (inp.value === "" && i>0) {
          inputs[i-1].focus();
        } else {
          // clear this char by default behavior
        }
      } else if (ev.key === "ArrowLeft") {
        if (i>0) inputs[i-1].focus();
      } else if (ev.key === "ArrowRight") {
        if (i<len-1) inputs[i+1].focus();
      } else if (ev.key === "Enter") {
        // if all filled, submit
        if (inputs.every(x => x.value.length===1)) {
          checkAnswer();
        }
      }
    });

    inputs.push(inp);
    letterContainer.appendChild(inp);
  }
}

function updateEnterState() {
  const filled = inputs.length > 0 && inputs.every(i => i.value && i.value.length===1);
  enterBtn.disabled = !filled;
}

// -------------------- CHECK ANSWER --------------------
function checkAnswer() {
  if (!inputs.length) return;
  const user = inputs.map(i => (i.value||"").toString().trim().toUpperCase()).join("");
  const correct = currentAnswer.toUpperCase().trim();

  if (user === correct) {
    // correct visual
    inputs.forEach(i => { i.classList.add("correct"); i.disabled = true; });
    // advance
    progress.index[currentCategory] = currentIndex + 1;
    if (progress.index[currentCategory] >= QUESTIONS[currentCategory].length) {
      progress.completed[currentCategory] = true;
      // unlock next
      const idx = categories.indexOf(currentCategory);
      if (idx >= 0 && idx < categories.length - 1) {
        const next = categories[idx+1];
        progress.unlocked[next] = true;
      }
      saveProgress();
      setTimeout(()=>{ onCategoryComplete(); renderCategories(); }, 600);
    } else {
      saveProgress();
      setTimeout(()=>{ currentIndex++; showQuestion(); renderCategories(); }, 600);
    }
  } else {
    // wrong visual
    inputs.forEach(i => i.classList.add("wrong"));
    setTimeout(()=>{ inputs.forEach(i => i.classList.remove("wrong")); },700);
  }
}

// -------------------- CATEGORY COMPLETE --------------------
function onCategoryComplete() {
  questionArea.classList.add("hidden");
  completeBox.classList.remove("hidden");
  completeMsg.textContent = `Kamu menyelesaikan kategori ${currentCategory}.`;
  // show nextCategory button if unlocked
  const idx = categories.indexOf(currentCategory);
  if (idx >=0 && idx < categories.length - 1) {
    const next = categories[idx+1];
    if (progress.unlocked[next]) {
      nextCategoryBtn.style.display = "inline-block";
      nextCategoryBtn.textContent = `Buka ${next}`;
    } else {
      nextCategoryBtn.style.display = "none";
    }
  } else {
    nextCategoryBtn.style.display = "none";
  }
  renderCategories();
  saveProgress();
}

// -------------------- BUTTON HOOKS --------------------
enterBtn.addEventListener("click", checkAnswer);
backBtn.addEventListener("click", ()=>{
  questionArea.classList.add("hidden");
  completeBox.classList.add("hidden");
  crumb.textContent = "Pilih kategori";
  status.textContent = "Siap";
});

backToMenu.addEventListener("click", ()=>{
  questionArea.classList.add("hidden");
  completeBox.classList.add("hidden");
  crumb.textContent = "Pilih kategori";
  status.textContent = "Siap";
});

nextCategoryBtn.addEventListener("click", ()=>{
  const idx = categories.indexOf(currentCategory);
  if (idx >=0 && idx < categories.length - 1) {
    const next = categories[idx+1];
    progress.unlocked[next] = true;
    saveProgress();
    renderCategories();
    openCategory(next);
  }
});

// keyboard: pressing Enter when inputs filled also checks
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // if question area visible and enter enabled
    if (!questionArea.classList.contains("hidden") && !enterBtn.disabled) {
      e.preventDefault();
      checkAnswer();
    }
  }
});

// reset progress
resetProgressBtn.addEventListener("click", ()=>{
  if (confirm("Reset semua progres?")) {
    progress = {
      unlocked: { Easy: true, Normal: false, Hard: false, Extrame: false },
      index: { Easy: 0, Normal: 0, Hard: 0, Extrame: 0 },
      completed: { Easy: false, Normal: false, Hard: false, Extrame: false }
    };
    saveProgress();
    renderCategories();
    questionArea.classList.add("hidden");
    completeBox.classList.add("hidden");
    crumb.textContent = "Pilih kategori";
    status.textContent = "Siap";
  }
});

// mute/unmute
muteBtn.addEventListener("click", ()=>{
  if (bgAudio.paused) {
    bgAudio.play();
    muteBtn.textContent = "Mute";
  } else {
    bgAudio.pause();
    muteBtn.textContent = "Unmute";
  }
});

// -------------------- INIT --------------------
renderCategories();
// If user left progress mid-category, auto-open that category
(function autoOpenProgress() {
  for (let cat of categories) {
    const idx = progress.index[cat] || 0;
    if (idx > 0 && progress.unlocked[cat] && !progress.completed[cat]) {
      openCategory(cat);
      return;
    }
  }
})();
