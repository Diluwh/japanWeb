// List of Japanese words and their Romaji
const words = [
    { japanese: "こんにちは", romaji: "konnichiwa" },
    { japanese: "ありがとう", romaji: "arigatou" },
    { japanese: "さようなら", romaji: "sayounara" },
    { japanese: "はい", romaji: "hai" },
    { japanese: "いいえ", romaji: "iie" },
     { japanese: "おはよう", romaji: "ohayou" },
    { japanese: "こんばんは", romaji: "konbanwa" },
    { japanese: "おやすみ", romaji: "oyasumi" },
    { japanese: "すみません", romaji: "sumimasen" },
    { japanese: "ごめんなさい", romaji: "gomennasai" },
    { japanese: "いらっしゃい", romaji: "irasshai" },
    { japanese: "ようこそ", romaji: "youkoso" },
    { japanese: "いただきます", romaji: "itadakimasu" },
    { japanese: "ごちそうさまでした", romaji: "gochisousama deshita" },
    { japanese: "たんじょうび", romaji: "tanjoubi" },
    { japanese: "おめでとう", romaji: "omedetou" },
    { japanese: "なまえ", romaji: "namae" },
    { japanese: "ともだち", romaji: "tomodachi" },
    { japanese: "せんせい", romaji: "sensei" },
    { japanese: "がっこう", romaji: "gakkou" },
    { japanese: "いえ", romaji: "ie" },
    { japanese: "うち", romaji: "uchi" },
    { japanese: "いぬ", romaji: "inu" },
    { japanese: "ねこ", romaji: "neko" },
    { japanese: "きょう", romaji: "kyou" },
    { japanese: "あした", romaji: "ashita" },
    { japanese: "きのう", romaji: "kinou" },
    { japanese: "あい", romaji: "ai" },
    { japanese: "こころ", romaji: "kokoro" },
    { japanese: "みず", romaji: "mizu" },
    { japanese: "やま", romaji: "yama" },
    { japanese: "かわ", romaji: "kawa" },
    { japanese: "はな", romaji: "hana" },
    { japanese: "そら", romaji: "sora" },
    { japanese: "くも", romaji: "kumo" },
    { japanese: "あめ", romaji: "ame" },
    { japanese: "ゆき", romaji: "yuki" },
    { japanese: "かぜ", romaji: "kaze" },
    { japanese: "つき", romaji: "tsuki" },
    { japanese: "ほし", romaji: "hoshi" },
    { japanese: "ひ", romaji: "hi" },
    { japanese: "つくえ", romaji: "tsukue" },
    { japanese: "いす", romaji: "isu" },
    { japanese: "ほん", romaji: "hon" },
    { japanese: "えんぴつ", romaji: "enpitsu" },
    { japanese: "けしごむ", romaji: "keshigomu" },
    { japanese: "じてんしゃ", romaji: "jitensha" },
    { japanese: "くるま", romaji: "kuruma" },
    { japanese: "でんしゃ", romaji: "densha" },
    { japanese: "ひこうき", romaji: "hikouki" },
    { japanese: "ふね", romaji: "fune" },
    { japanese: "とり", romaji: "tori" },
    { japanese: "さかな", romaji: "sakana" },
    { japanese: "かさ", romaji: "kasa" },
    { japanese: "かばん", romaji: "kaban" },
    { japanese: "とけい", romaji: "tokei" },
    { japanese: "めがね", romaji: "megane" },
    { japanese: "しんごう", romaji: "shingou" },
    { japanese: "まど", romaji: "mado" },
    { japanese: "ドア", romaji: "doa" },
    { japanese: "つくる", romaji: "tsukuru" },
    { japanese: "たべる", romaji: "taberu" },
    { japanese: "のむ", romaji: "nomu" },
    { japanese: "みる", romaji: "miru" },
    { japanese: "きく", romaji: "kiku" },
    { japanese: "はなす", romaji: "hanasu" },
    { japanese: "おもう", romaji: "omou" },
    { japanese: "しる", romaji: "shiru" },
    { japanese: "わかる", romaji: "wakaru" },
    { japanese: "つかう", romaji: "tsukau" },
    { japanese: "あそぶ", romaji: "asobu" },
    { japanese: "およぐ", romaji: "oyogu" },
    { japanese: "はしる", romaji: "hashiru" },
    { japanese: "ねる", romaji: "neru" },
    { japanese: "おきる", romaji: "okiru" }
  ];
  
  let currentWord = null;
  
  // Function to load a random word
  function loadWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("japanese-word").textContent = currentWord.japanese;
    document.getElementById("user-input").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result").className = "result";
  }
  
  // Load the first word on page load
  loadWord();
  
  // Check function
  function checkRomaji() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
  
    if (userInput === currentWord.romaji) {
      resultDiv.textContent = "Correct! ✅";
      resultDiv.className = "result correct";
    } else {
      resultDiv.textContent = "Incorrect! ❌";
      resultDiv.className = "result incorrect";
    }
  }
  
  // Load the next word
  function nextWord() {
    loadWord();
  }
  