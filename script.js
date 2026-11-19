"use strict";

// Fixed right-hand roster and its footnotes. The order is intentional.
const leaders = [
  [
    "Swings",
    "불광중학교 카르텔"
  ],
  [
    "BIG Naughty",
    "빅변기 연합(서로보듬어줘요)"
  ],
  [
    "김상민그는감히전설이라고할수있다",
    "김상민, 그는 감히 전설이라고 할 수 있다."
  ]
];
const supporters = [
  [
    [
      "한풍규",
      "빅애스 준희 가족"
    ],
    [
      "박재연",
      "빅애스 준희 가족"
    ],
    [
      "한준하",
      "빅애스 준희 가족"
    ]
  ],
  [
    [
      "정소연",
      "빅애스 서영이 가족"
    ],
    [
      "김종헌",
      "빅애스 서영이 가족"
    ],
    [
      "김연기",
      "빅애스 서영이 가족"
    ],
    [
      "박상민",
      "빅애스 서영이 가족"
    ],
    [
      "실제두판이",
      "빅애스 서영이 가족"
    ]
  ],
  [
    [
      "Harisu",
      "펑리수 전형, 게다가 실제 트젠"
    ]
  ],
  [
    [
      "장추자",
      "트젠방 전형. 목화솜님, 여기 트젠방이에요"
    ],
    [
      "ILLIT MOKA",
      "미안, 모카솜님…"
    ]
  ],
  [
    [
      "PSY",
      "싸이버거 전형. 뛰어💗"
    ]
  ],
  [
    [
      "Justin Bieber",
      "스티커 전형, 쟈스팅삐뽀(중구거)"
    ],
    [
      "Kim Kardashian",
      "원조 빅애스"
    ]
  ],
  [
    [
      "Seo In Young",
      "뻬미 전형, 동정심 전형"
    ]
  ],
  [
    [
      "양띵",
      "윤정이 친구"
    ],
    [
      "의문새",
      "붉은노을 댄스는 나만 추나"
    ]
  ],
  [
    [
      "퍼플키스 수안",
      "서원중학교 카르텔"
    ]
  ],
  [
    [
      "조우찬",
      "성복고등학교 카르텔"
    ],
    [
      "호미들",
      "서원고등학교 카르텔. 준희와 친한 오빠의 따까리들. 그 오빠가 서원고 통이었다는 썰까지… 와 리얼?"
    ]
  ],
  [
    [
      "김용준",
      "서원고 통, 호미들의 우두머리. 시발 이거 뭐야 존아웃겨"
    ]
  ],
  [
    [
      "우슬랑이",
      "미안, 그냥 끼고 싶어. 서영이랑 같은 종"
    ],
    [
      "샤이보이",
      "미안해, 남친 전형. 내게 와 테리. 서영이랑 같은 종"
    ]
  ],
  [
    [
      "Royal 44",
      "한동훈 전형. 시발 뭔 전형임 이건. 제일 이쁜 내 동생"
    ],
    [
      "한동훈",
      "한동훈, 음잘알 전형"
    ],
    [
      "DEX",
      "한준희 전형"
    ]
  ],
  [
    [
      "JMIN",
      "변비 전형(롱샷의 루이도 변비)"
    ],
    [
      "NOWIMYOUNG",
      "나우아임꺼영이"
    ]
  ],
  [
    [
      "RAKUNELAMA",
      "03년생 전형"
    ],
    [
      "NO YUNHA",
      "아일릿 윤아랑 이름 비슷함, 03년생 전형"
    ]
  ],
  [
    [
      "섹승협",
      "살사고등학교 음악선생님, 거대한 겨드랑이"
    ]
  ],
  [
    [
      "HERO JAEJOONG",
      "사생팬 관련 썰 전형, 대가리크기 전형. 같이 싸워줄 것 같음"
    ]
  ],
  [
    [
      "YANGHONGWON",
      "준희 친구 남친의 boss"
    ],
    [
      "양루아",
      "준희 친구 남친의 boss의 딸(셀카도 같이 찍음)"
    ]
  ],
  [
    [
      "MARK",
      "양홍원과 고등래퍼 출연, 맠홍 아카이브. 준희의 언니 친구와 언주중 카르텔"
    ],
    [
      "해찬",
      "동맠 전형"
    ]
  ],
  [
    [
      "정원",
      "양_원 연합. 준희의 남자친구, 두판이 전형"
    ]
  ],
  [
    [
      "EPIK HIGH",
      "삼인조 전형. 무조건임"
    ]
  ],
  [
    [
      "Matthew (OKASHII)",
      "실제 지인"
    ]
  ],
  [
    [
      "Raf Sandou (OKASHII)",
      "빅애스의 서영이가 흙조소 시절 후원함. 그리고 토니레이랑 우즈랑 노래함"
    ]
  ],
  [
    [
      "Jeffrey White (OKASHII)",
      "서영이 남친, 주먹이 쌤, 박재범 팀"
    ]
  ],
  [
    [
      "Tony Ray",
      "처녀 전형"
    ],
    [
      "이한결",
      "비처녀 전형"
    ]
  ],
  [
    [
      "LNGSHOT",
      "박재범 아들. 박재범은 뭔데 시발"
    ]
  ],
  [
    [
      "Jay Park",
      "준희 언니랑 서영이 친구한테서 들은 클럽 관련 카스썰 전형(미확인). 중2 때(나는 대1 때… 늘근이 대박)"
    ]
  ],
  [
    [
      "노윤서",
      "준희의 언니 비계친, 우리들의 빅애쓰"
    ]
  ],
  [
    [
      "tripleS 유연",
      "이화여대 연맹. 벗돕벗! 세상은 우리에게 물었고 이대는 그대를 답했다. 애돕애(스몰애스→트리플애스 알지?)"
    ]
  ],
  [
    [
      "tripleS 전원",
      "과기대 왔음. 서영이 생파 날에"
    ]
  ],
  [
    [
      "리트냥이",
      "세무냥이와 영혼결혼식"
    ],
    [
      "세무냥이",
      "리트냥이와 영혼결혼식. 국립서울과학기술대학교 카르텔"
    ]
  ],
  [
    [
      "박타포",
      "윤정 대디"
    ],
    [
      "강타포",
      "서영 대디"
    ],
    [
      "심타포",
      "준희 대디(준희가 최근에 파양함). 헐 안돼ㅠ 안돼!!"
    ]
  ],
  [
    [
      "노준구",
      "준희의 제3의 대디"
    ],
    [
      "이병학",
      "서영이 단타 ㅅㅂ"
    ],
    [
      "박정민",
      "윤정이를 이뽀함(위험인물; ㅅㅂㅅㅂㅅㅂ)"
    ]
  ],
  [
    [
      "세븐틴 정한",
      "서영이와 만남, 메로나도 버림(안 핥았습니다). 이 사람 멤버 수 많아서 못 아니 근데 세븐틴 수는 안 고려돼 있어. 순수체급 99명이야 지금…"
    ]
  ],
  [
    [
      "세휘",
      "ㅈㄴ 밑에 있네 시발. 실제 동기임, 미안해"
    ],
    [
      "노현",
      "부자 전형. 우리의 모든 전투식량을 지원해줄 수 있음(전투식량: 불닭볶음면, 마라샹궈, 펑리수)"
    ]
  ],
  [
    [
      "이창섭",
      "전과자 카르텔"
    ],
    [
      "EXO KAI",
      "전과자 아쉬운 전형"
    ],
    [
      "EXO D.O.",
      "탕화쿵푸 전형"
    ]
  ],
  [
    [
      "빠니보틀",
      "과기대 카르텔. 세무냥이랑 친구시켜줘야지, 소개시켜줘야쥬"
    ]
  ],
  [
    [
      "이연",
      "애 낳으심, 과기대 카르텔. 저도ㅠ 3년차 레즈비언인데 어떻게 이것도 몰라 ㄹㅇ? 축하해요…"
    ]
  ],
  [
    [
      "현규",
      "공황장애 전형"
    ],
    [
      "정형돈",
      "공황장애 전형"
    ],
    [
      "하하",
      "메르뗀다르메안 전형(메르뗀=미띤 / 다르미안이라=다름이 아니라)"
    ]
  ]
];

// A reference is an in-page jump link, never an external hyperlink.
function personLine(entry, number, bold = false) {
  const line = document.createElement("div");
  line.className = "person" + (bold ? " person--bold" : "");
  line.append(document.createTextNode(entry[0]));
  const ref = document.createElement("a");
  ref.className = "note-ref";
  ref.id = `note-ref-${number}`;
  ref.href = `#footnote-${number}`;
  ref.textContent = `[${number}]`;
  ref.dataset.number = String(number);
  ref.setAttribute("aria-label", `${entry[0]}의 각주 ${number}번으로 이동`);
  line.append(ref);
  return line;
}

function noteLine(entry, number) {
  const note = document.createElement("div");
  note.className = "footnote";
  note.id = `footnote-${number}`;
  note.tabIndex = -1;
  const label = document.createElement("a");
  label.className = "footnote-index";
  label.href = `#note-ref-${number}`;
  label.textContent = `[${number}]`;
  label.setAttribute("aria-label", `각주 ${number}번의 본문 위치로 돌아가기`);
  note.append(label, document.createTextNode(` ${entry[1]}`));
  return note;
}

function buildRoster() {
  let number = 1;
  const leaderBox = document.getElementById("leaders");
  const listBox = document.getElementById("support-list");
  const notesBox = document.getElementById("footnotes");

  const bigass = document.createElement("div");
  bigass.className = "person main-person";
  bigass.textContent = "빅애스";
  leaderBox.append(bigass);

  for (const entry of leaders) {
    leaderBox.append(personLine(entry, number, entry[0] === "Swings" || entry[0] === "BIG Naughty" || entry[0] === "김상민그는감히전설이라고할수있다"));
    notesBox.append(noteLine(entry, number));
    number++;
  }
  for (const group of supporters) {
    for (const entry of group) {
      listBox.append(personLine(entry, number));
      notesBox.append(noteLine(entry, number));
      number++;
    }
  }
}

const intro = document.getElementById("intro");
const result = document.getElementById("result");
const form = document.getElementById("name-form");
const audio = document.getElementById("bg-music");
const musicStart = 88; // 1 minute 28 seconds
const fadeDuration = 3200; // 3.2 seconds
const musicVolume = 0.48; // lower overall playback level on mobile and desktop
let fadeFrame = null;
let musicFadeStarted = false;

function startFadeIn() {
  if (musicFadeStarted) return;
  musicFadeStarted = true;
  audio.volume = 0;
  const began = performance.now();
  const fade = now => {
    const t = Math.min((now - began) / fadeDuration, 1);
    // Gentle ramp, rather than an abrupt jump in volume.
    audio.volume = musicVolume * (t * t * (3 - 2 * t));
    if (t < 1 && !audio.paused) fadeFrame = requestAnimationFrame(fade);
  };
  fadeFrame = requestAnimationFrame(fade);
}

function playMusicFromStartPoint() {
  // Must call play() in the same click/submit gesture for mobile autoplay rules.
  audio.volume = 0;
  const seekAndFade = () => {
    if (!Number.isFinite(audio.duration) || audio.duration > musicStart) {
      try { audio.currentTime = musicStart; } catch (_) {}
    }
    if (audio.currentTime >= musicStart - 0.5) startFadeIn();
    else audio.addEventListener("seeked", startFadeIn, { once: true });
  };
  if (audio.readyState >= HTMLMediaElement.HAVE_METADATA) seekAndFade();
  else audio.addEventListener("loadedmetadata", seekAndFade, { once: true });

  const promise = audio.play();
  if (promise) promise.catch(() => {
    // No music file or browser policy: allow the rest of the site to work normally.
  });
}

buildRoster();

form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("visitor-name");
  const name = input.value.trim().replace(/\s+/g, " ");
  if (!name) { input.focus(); return; }
  document.getElementById("my-team-title").textContent = `${name} 진영`;
  document.getElementById("my-team-name").textContent = name;
  playMusicFromStartPoint();
  input.blur(); // dismiss the mobile keyboard before displaying the roster
  intro.hidden = true;
  result.hidden = false;
  document.body.classList.add("has-result");
  window.scrollTo(0, 0);
});

const toggle = document.getElementById("support-toggle");
const list = document.getElementById("support-list");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-label", expanded ? "지지 의사 접기" : "지지 의사 펼치기");
  list.hidden = !expanded;
});

// Desktop: hover/focus previews, click jumps to the matching footnote.
// Touch devices: first tap previews the note, second tap jumps to the note.
// The number in the mobile preview can also be tapped to jump immediately.
const footnoteEntries = [...leaders, ...supporters.flat()];
const popup = document.getElementById("footnote-popup");
let activeReference = null;
let lastPointerWasTouch = false;
const isTouchUI = () => lastPointerWasTouch || matchMedia("(hover: none) and (pointer: coarse)").matches;

document.getElementById("result").addEventListener("pointerdown", event => {
  lastPointerWasTouch = event.pointerType === "touch";
}, { passive: true });

function positionPopup(ref) {
  if (!ref || popup.hidden) return;
  const anchor = ref.getBoundingClientRect();
  const rect = popup.getBoundingClientRect();
  const gap = 11;
  const x = Math.max(12, Math.min(anchor.left + anchor.width / 2 - rect.width / 2, innerWidth - rect.width - 12));
  const fitsAbove = anchor.top >= rect.height + gap + 8;
  const y = fitsAbove ? anchor.top - rect.height - gap : Math.min(anchor.bottom + gap, innerHeight - rect.height - 8);
  popup.style.left = `${x}px`;
  popup.style.top = `${Math.max(8, y)}px`;
  popup.dataset.placement = fitsAbove ? "top" : "bottom";
  const arrowX = Math.max(10, Math.min(rect.width - 10, anchor.left + anchor.width / 2 - x));
  popup.style.setProperty("--popup-arrow-x", `${arrowX}px`);
}

function showFootnote(ref) {
  const number = Number(ref.dataset.number);
  const entry = footnoteEntries[number - 1];
  if (!entry) return;
  activeReference = ref;
  popup.replaceChildren();
  const num = document.createElement(isTouchUI() ? "a" : "span");
  num.className = "popup-number";
  num.textContent = `[${number}]`;
  if (num.tagName === "A") {
    num.href = `#footnote-${number}`;
    num.setAttribute("aria-label", `각주 ${number}번 위치로 이동`);
  }
  popup.append(num, document.createTextNode(` ${entry[1]}`));
  popup.setAttribute("role", isTouchUI() ? "dialog" : "tooltip");
  popup.setAttribute("aria-label", `각주 ${number}번`);
  popup.hidden = false;
  positionPopup(ref);
}

function hideFootnote() {
  popup.hidden = true;
  activeReference = null;
}

const resultBox = document.getElementById("result");
resultBox.addEventListener("mouseover", event => {
  if (isTouchUI()) return; // mobile browsers may synthesize mouseover for a tap
  const ref = event.target.closest?.(".note-ref");
  if (ref && ref !== activeReference) showFootnote(ref);
});
resultBox.addEventListener("mouseout", event => {
  if (isTouchUI()) return;
  const ref = event.target.closest?.(".note-ref");
  if (ref && !ref.contains(event.relatedTarget)) hideFootnote();
});
resultBox.addEventListener("focusin", event => {
  if (isTouchUI()) return;
  const ref = event.target.closest?.(".note-ref");
  if (ref) showFootnote(ref);
});
resultBox.addEventListener("focusout", event => {
  if (isTouchUI()) return;
  if (event.target.closest?.(".note-ref")) hideFootnote();
});

resultBox.addEventListener("click", event => {
  const ref = event.target.closest?.(".note-ref");
  if (!ref) return;
  if (isTouchUI() && (popup.hidden || activeReference !== ref)) {
    event.preventDefault(); // first tap opens the Namuwiki-style preview
    showFootnote(ref);
    return;
  }
  // Desktop click, or second tap on the same number, follows the existing # link.
  hideFootnote();
  const target = document.getElementById(`footnote-${ref.dataset.number}`);
  if (target) requestAnimationFrame(() => target.focus({ preventScroll: true }));
});

popup.addEventListener("click", event => {
  if (event.target.closest?.(".popup-number[href]")) hideFootnote();
});

// The number at the footnote's end returns to its original reference in the roster.
document.getElementById("footnotes").addEventListener("click", event => {
  const backLink = event.target.closest?.(".footnote-index");
  if (!backLink) return;
  const target = document.getElementById(backLink.hash.slice(1));
  if (!target) return;
  if (list.contains(target) && list.hidden) {
    list.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "지지 의사 접기");
  }
  hideFootnote();
});

// Tapping away, scrolling, or pressing Escape closes the preview.
document.addEventListener("click", event => {
  if (!event.target.closest?.(".note-ref, .footnote-popup")) hideFootnote();
});
window.addEventListener("scroll", hideFootnote, { passive: true });
window.addEventListener("resize", () => { if (activeReference) positionPopup(activeReference); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideFootnote();
});
