const REQUIRED_KEYS = 5;
const pastelPalette = ["255, 198, 228", "194, 242, 255", "197, 231, 255", "255, 229, 198", "212, 196, 255"];
const kpopJobs = [
  "220701-03 자우림 콘서트 2층 스탠드팀", "220714-16 슈퍼주니어 2층 하수 스탠드팀", "220805-07 더보이즈 게이트팀",
  "220903 소녀시대 팬미팅 게이트팀", "220908-09 엔시티드림 콘서트 그라운드 하수팀", "221216-18 10CM 콘서트 스탠드팀",
  "221221 엔시티드림 앨범 이벤트 3층 스탠드팀", "221224 SBS 가요대전 플로어팀", "221230-31 신화 WDJ 콘서트 매표소팀",
  "230128-29 (여자)아이들 팬미팅 2층 스탠드팀", "230401-02 레드벨벳 콘서트 플로어팀", "230603-04 태연 콘서트 2층 스탠드팀",
  "240127-28 키 콘서트 스탠딩 하수팀", "240223-25 엔하이픈 콘서트 2층 하수팀", "240511-15 르세라핌 팬미팅 플로어팀",
  "240621-22 슈퍼주니어 콘서트 게이트팀", "240629-30 에스파 콘서트 플로어팀", "240712-14 더보이즈 콘서트 스탠드팀",
  "240723-24 세븐틴 팬미팅 플로어팀", "240803-04 NCT 127 팬미팅 플로어팀", "240913-15 라이즈 팬콘 플로어팀",
  "240927-29 지오디 콘서트 플로어팀", "241101-03 TXT 앵콜 콘서트 플로어팀", "241116 장저한 콘서트 플로어팀",
  "250202 기리보이 콘서트 내부팀", "250228-0302 제이홉 곤서트 게이트팀", "250308-09 TXT 인천콘서트 스탠드팀",
  "250620-22 TWS 콘서트 스탠드팀", "250628-29 진 콘서트 플로어팀", "250704-06 라이즈 콘서트 게이트팀",
  "250711-13 호시우지 팬콘서트 게이트팀", "250721 TXT 쇼케이스 스탠드팀", "260119 EXO 쇼케이스 스탠드팀",
  "260123-24 태용 콘서트 게이트팀", "260207-08 우리들의 발라드 콘서트 게이트팀", "260221 NCT WISH 팬미팅 게이트팀",
  "260306-08 라이즈 콘서트 외부팀", "260320-22 NCT DREAM 콘서트 게이트팀"
];
const projectSlideImages = {
  "detail-1": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-0fe78c1a-1175-44d9-96c6-d78f05684ac5.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-cd4bd615-3594-45d4-a801-cbd0f91135b5.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-206cb4ea-7fda-4813-be94-9f836accb318-b2696774-9b3a-44bb-a0dd-89274734c6a0.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-53d0d906-04eb-4315-bb41-4b9ece4a4e57.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-de5f8cdf-795f-42a3-87cf-f93861df2774.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-690b604a-ed2e-4b10-bd39-c8be8d391452.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9fe6ac1f-155f-4b65-958e-cd6911dffa04.png",
  ],
  "detail-2": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-847a6213-4729-4bd7-a6b2-e7a5cdaa5370.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-5a40a9b2-d1d1-468a-9dc1-0755b66ae859.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-5d6ffcdd-b73f-49c1-a7b8-d8dd2265ca33.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-fd488f24-8576-490a-b38f-ec8c279693fc.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-2017e51b-336a-4905-8a0a-5b5d7f46a9c0.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-6a5ee2cd-f2d9-47d5-aa4d-13bb2ef352ca.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9915ec85-5d47-4e36-8580-9634598be1fd.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-16270ea8-188c-4717-897d-9f12bbf24015.png",
  ],
  "detail-3": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-d00e868f-0be0-4a09-bd08-cfa95c88389b.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8f42e227-7139-4875-93b8-a827c0b66b9b.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-c569d49c-444c-4734-b7d7-654855cc81ef.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-28fd3861-c8e5-4479-a49c-432de574a027.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9870cb8e-d7fe-43cd-90d2-eb50f8542dc7.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9a36b653-763a-48c1-ac2f-94fd42049bfd.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-cfd22fbd-92d0-45b5-971c-dca396e1c39a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-878aac15-0093-4cca-a424-03013f359d19.png",
  ],
  "detail-4": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-e3b1b42f-1227-4cf1-969b-4a8caed899a6.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-e8748db4-c6d1-4f3f-b74f-af8ba47d421f.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-6959c04b-4bed-4156-832a-183ea58000ea.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-398756f6-8dfe-42ab-bbb1-b91f819e644d.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-828487a5-7eb9-4a1d-8c0c-ca547556a691.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8cc7f0cb-9b8d-40ed-97a4-15642c83e067.png",
  ],
  "detail-5": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-358ff705-ccf1-483d-879a-c4469d66318f.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-3e616fa9-97b1-45b7-b546-2132968f733a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-01758eb9-d08b-4224-b856-ed32c7ffe91a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-655731fd-0510-428d-8ef3-aca75a77fe0a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-43e7d4f5-ac9f-4075-b875-6e3d07d5a7a9.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-c575f951-9ce0-4097-866b-759600f242e7.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-7995faf3-6f14-4b67-9753-627aaf5b828d.png",
  ],
  "detail-6": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8374e08a-2c44-464e-b665-51a96959eccd.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-2e58316f-3cf0-4935-a3ce-0ca1fe724f10.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8704a41d-28c1-4a11-90bb-fd8eae86616c.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-a55496d4-8a30-4a54-8b2f-e430f64be29d.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-a24d0b95-c7d2-4b2f-8069-321bfc8b5f40.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9403b035-8873-4eb2-b54e-9ab039c548fe.png",
  ],
  "detail-8": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9a3fc02c-6470-45b6-894e-aaf46b41dc91.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-69ed1f77-81dc-4f35-b368-3132e764b60e.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-0bbf90ed-75de-442e-b650-4c3e8555987e.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-81508ef1-808c-4e4c-9d4b-6e3ab8468535.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-5468bb90-faca-4daa-bde0-db6b1bf2a490.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-92bb3346-0405-4d76-b4c6-6703f9b524cb.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-d5082aaa-0995-4453-b17b-6f36273dc617.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_IMG_4657-c184e5f7-5da4-4785-a972-5d35d7b3d13b.png",
  ],
  "detail-9": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-409117a9-3953-45f6-a74c-b7eae89c4a4e.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-7e103c87-37eb-45d6-9e9f-61715507563f.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-0963d4b5-5604-4756-bd52-56164ce512f0.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-c8717020-b010-41d0-9c30-91deb8eb291a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9b6e3911-b59c-45fe-87e3-ca29a66ba33b.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-f2fd17a4-58ff-49d7-bd68-25f2cf97ff2b.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-dbbe6d8d-68f1-46fb-a20b-f26fb165d451.png",
  ],
  "detail-10": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-560994f6-310d-4928-87cb-498de00a1635.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8ca2fcde-5c99-4df3-8f5b-469c6df68982.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-0f1420cd-095c-41d2-8b32-db1351692202.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-0918dd60-c720-4fbd-8159-15c8a3c51d34.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-5892cf44-c95f-4977-a357-e660ed00507f.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-6f6e12fb-7c46-493a-b45e-a9f4af9872b3.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-c5857aef-4a6f-43ed-9f65-9c80a44f4ed2.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-62480d4f-9a65-4cc7-a082-f8f2d1437818.png",
  ],
  "detail-11": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-b2d5476e-bfdd-4a0a-8843-9f4544075ada.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-d70c93da-88bc-4e43-bd9a-02025ec1255a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-3c4752bf-6ea5-439b-ba00-44ad2041b8d7.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-f30f7477-f45e-4fd6-a3c6-c147d2465a1a.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-e2341b2b-8bb5-42a5-a50c-34b385778adb.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-b8f30c33-5d20-490f-ad9b-9b7550b25d18.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-7545420b-bd5c-475d-8e57-82dc72b30192.png",
  ],
  "detail-12": [
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-09870b3a-cb6e-42fb-be35-3c5626664e92.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-c4b6b142-10c3-4512-aaaa-6d5cfa666aab.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-1f8fdc47-838d-4461-be61-240431e185d2.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-415140cd-ed45-44ad-8d3e-e9c33aac0997.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-a8d6e4cf-351f-4887-a4ee-df085525d4ad.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-954d94d0-8176-4b30-9674-a509814e8dd3.png",
    "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9879d22e-6f0c-44cb-8ebf-ac0eb75e53e9.png",
  ],
};
const projectCoverThumbnails = {
  "detail-4": "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-a47b0060-0f92-4f93-bef7-551b99c54508.png",
  "detail-6": "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-ffa3a291-c428-46e2-a86e-93b0cad1d7c5.png",
  "detail-7": "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-d8aff1c0-3a13-46cf-9344-785593ff12b9.png",
  "detail-8": "./assets/imported/c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-81508ef1-808c-4e4c-9d4b-6e3ab8468535.png",
};

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const canvas = document.getElementById("watercolor-canvas");
const ctx = canvas.getContext("2d");
const counter = document.getElementById("counter");
const menuButtons = document.querySelectorAll(".menu-btn");
const panels = document.querySelectorAll(".panel");
const balloonLayer = document.getElementById("balloon-layer");
const roomScene = document.getElementById("room-scene");
const overlayLayer = document.getElementById("overlay-layer");
const dogWrapper = document.getElementById("dog-wrapper");
const dogRunner = document.getElementById("dog-runner");
const yesButton = document.getElementById("yes-button");
const contentsCovers = document.querySelectorAll(".contents-cover");
const contentsModal = document.getElementById("contents-modal");
const contentsModalClose = document.getElementById("contents-modal-close");
const contentsModalTitle = document.getElementById("contents-modal-title");
const contentsModalBody = document.getElementById("contents-modal-body");
const kpopList = document.getElementById("kpop-list");
const toggleKpop = document.getElementById("toggle-kpop");
const hireButton = document.getElementById("hire-button");
const hireModal = document.getElementById("hire-modal");
const hireContinue = document.getElementById("hire-continue");
const hireCancel = document.getElementById("hire-cancel");
const contactInfo = document.getElementById("contact-info");

let remainingKeys = REQUIRED_KEYS;
let introFinished = false;
let pendingTransitionKey = null;
const activeBrushes = new Map();
let animationFrameId = null;
let lastPaintTime = 0;
let selectedOverlayId = "character";
let overlayDrag = null;
let overlayRAF = null;
let pendingPointer = null;
let dogIntervalId = null;
const dogFrames = ["./dog_states/sit.png", "./dog_states/stand.png"]; // 0=sit, 1=stand
const dogState = {
  isAnimating: true,
  frameIndex: 0,
};
const dogPosition = { x: 420, y: 332 };
const DOG_DRAG_THRESHOLD_PX = 8;
let dogDrag = null;
let dogDragRAF = null;
let pendingDogPointer = null;

function getRoomScale() {
  if (!roomScene || roomScene.clientWidth <= 0) return 1;
  const rect = roomScene.getBoundingClientRect();
  const scale = rect.width / roomScene.clientWidth;
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

const overlayItems = [
  {
    id: "bed-fixed",
    kind: "bed",
    x: 365,
    y: 225,
    src: "./bed_fixed_clean.png",
    width: 300,
    draggable: true,
    zIndex: 10
  },
  {
    id: "character",
    kind: "character",
    x: 420,
    y: 300,
    src: "./character_sprite_clean.png",
    width: 115,
    draggable: true,
    zIndex: 20
  },
  {
    id: "photo-stand",
    kind: "prop",
    x: 500,
    y: 395,
    src: "./photo_stand_clean.png",
    width: 135,
    draggable: true,
    zIndex: 16
  }
];

function random(min, max) { return Math.random() * (max - min) + min; }
function setCanvasSize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function drawSplat(x, y, radius, rgb) {
  const layers = [{ s: 1, a: 0.2 }, { s: 0.78, a: 0.14 }, { s: 0.56, a: 0.1 }];
  layers.forEach((l) => {
    const r = radius * l.s;
    const g = ctx.createRadialGradient(x, y, r * 0.1, x, y, r);
    g.addColorStop(0, `rgba(${rgb}, ${l.a})`);
    g.addColorStop(0.6, `rgba(${rgb}, ${l.a * 0.75})`);
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x + random(-12, 12), y + random(-12, 12), r, 0, Math.PI * 2);
    ctx.fill();
  });
}
function createBrush() {
  return {
    x: random(window.innerWidth * 0.14, window.innerWidth * 0.86),
    y: random(window.innerHeight * 0.18, window.innerHeight * 0.82),
    radius: random(22, 38),
    maxRadius: random(185, 260),
    growth: random(5.28, 9.12),
    rgb: pastelPalette[Math.floor(Math.random() * pastelPalette.length)]
  };
}
function paintLoop(ts) {
  if (introFinished) { animationFrameId = null; return; }
  if (ts - lastPaintTime > 35) {
    activeBrushes.forEach((b) => {
      b.radius = Math.min(b.radius + b.growth, b.maxRadius);
      drawSplat(b.x, b.y, b.radius, b.rgb);
    });
    lastPaintTime = ts;
  }
  animationFrameId = activeBrushes.size ? requestAnimationFrame(paintLoop) : null;
}
function startPaintLoop() {
  if (animationFrameId === null && activeBrushes.size) animationFrameId = requestAnimationFrame(paintLoop);
}
function finishIntro() {
  introFinished = true;
  intro.classList.remove("active");
  setTimeout(() => { intro.style.display = "none"; }, 450);
}
function onKeyDown(e) {
  if (introFinished || pendingTransitionKey) return;
  if (!/^[a-z]$/i.test(e.key)) return;
  const key = e.key.toLowerCase();
  if (!activeBrushes.has(key)) {
    const brush = createBrush();
    activeBrushes.set(key, brush);
    drawSplat(brush.x, brush.y, brush.radius, brush.rgb);
    remainingKeys -= 1;
    if (remainingKeys <= 0) {
      pendingTransitionKey = key;
      counter.textContent = "키를 떼면 입장합니다";
      startPaintLoop();
      return;
    }
    counter.textContent = `${remainingKeys}회 남았습니다`;
  }
  startPaintLoop();
}
function onKeyUp(e) {
  if (!/^[a-z]$/i.test(e.key)) return;
  const key = e.key.toLowerCase();
  activeBrushes.delete(key);
  if (pendingTransitionKey && key === pendingTransitionKey) finishIntro();
}

function activatePanel(id) {
  panels.forEach((p) => p.classList.toggle("active", p.id === id));
  menuButtons.forEach((b) => b.classList.toggle("active", b.dataset.panel === id));
}

function toggleContentsDetail(detailId) {
  const detail = document.getElementById(detailId);
  if (!detail) return;
  detail.classList.toggle("hidden");
}

function openContentsModal(detailId) {
  if (!contentsModal || !contentsModalTitle || !contentsModalBody) return;
  const detail = document.getElementById(detailId);
  const cover = document.querySelector(`.contents-cover[data-detail-id="${detailId}"]`);
  if (!detail || !cover) return;

  const label = cover.querySelector(".cover-label")?.textContent?.trim() || "Project";
  contentsModalTitle.textContent = label;
  contentsModalBody.innerHTML = "";

  Array.from(detail.children).forEach((child) => {
    if (child.classList.contains("slide-viewer")) return;
    contentsModalBody.appendChild(child.cloneNode(true));
  });

  const images = projectSlideImages[detailId] || [];
  if (images.length) {
    const viewer = createSlideViewer(images);
    contentsModalBody.appendChild(viewer);
  }

  contentsModal.classList.remove("hidden");
}

function closeContentsModal() {
  if (!contentsModal) return;
  contentsModal.classList.add("hidden");
}

function initContentsCoverCards() {
  contentsCovers.forEach((cover) => {
    const detailId = cover.dataset.detailId;
    const labelEl = cover.querySelector(".cover-label");
    if (!labelEl) return;
    const label = labelEl.textContent?.trim() ?? "";
    const thumb = projectCoverThumbnails[detailId] || projectSlideImages[detailId]?.[0] || "";
    if (!thumb) return;

    cover.innerHTML = "";

    const thumbWrap = document.createElement("span");
    thumbWrap.className = "cover-thumb";
    const img = document.createElement("img");
    img.src = thumb;
    img.alt = `${label} 썸네일`;
    thumbWrap.appendChild(img);

    const meta = document.createElement("span");
    meta.className = "cover-meta";
    const text = document.createElement("span");
    text.className = "cover-label";
    text.textContent = label;
    meta.appendChild(text);

    cover.append(thumbWrap, meta);
  });
}

function createSlideViewer(images) {
  const wrapper = document.createElement("div");
  wrapper.className = "slide-viewer";

  const viewport = document.createElement("div");
  viewport.className = "slide-viewport";

  const track = document.createElement("div");
  track.className = "slide-track";

  if (!images.length) {
    const empty = document.createElement("p");
    empty.className = "slide-empty";
    empty.textContent = "PPT 이미지를 추가하면 이곳에 미리보기가 표시됩니다.";
    wrapper.appendChild(empty);
    return wrapper;
  }

  images.forEach((src, index) => {
    const card = document.createElement("figure");
    card.className = "slide-card";
    const img = document.createElement("img");
    img.src = src;
    img.alt = `PPT slide ${index + 1}`;
    card.appendChild(img);
    track.appendChild(card);
  });

  viewport.appendChild(track);
  wrapper.appendChild(viewport);

  const enableArrows = images.length >= 4;
  if (!enableArrows) return wrapper;

  const leftArrow = document.createElement("button");
  leftArrow.className = "slide-arrow left";
  leftArrow.type = "button";
  leftArrow.setAttribute("aria-label", "왼쪽으로 이동");
  leftArrow.textContent = "◀";

  const rightArrow = document.createElement("button");
  rightArrow.className = "slide-arrow right";
  rightArrow.type = "button";
  rightArrow.setAttribute("aria-label", "오른쪽으로 이동");
  rightArrow.textContent = "▶";

  wrapper.append(leftArrow, rightArrow);

  let direction = 0;
  let rafId = null;
  let lastTs = 0;
  const speed = 0.26; // px/ms

  function step(ts) {
    if (!direction) {
      rafId = null;
      return;
    }
    const dt = lastTs ? ts - lastTs : 16;
    lastTs = ts;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (maxScroll <= 0) {
      direction = 0;
      rafId = null;
      return;
    }
    const next = clamp(viewport.scrollLeft + direction * speed * dt, 0, maxScroll);
    viewport.scrollLeft = next;
    if (next <= 0 || next >= maxScroll) {
      direction = 0;
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(step);
  }

  function startMove(nextDirection) {
    direction = nextDirection;
    lastTs = 0;
    if (!rafId) rafId = requestAnimationFrame(step);
  }

  function stopMove() {
    direction = 0;
    lastTs = 0;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  leftArrow.addEventListener("mouseenter", () => startMove(-1));
  rightArrow.addEventListener("mouseenter", () => startMove(1));
  leftArrow.addEventListener("mouseleave", stopMove);
  rightArrow.addEventListener("mouseleave", stopMove);
  wrapper.addEventListener("mouseleave", stopMove);

  return wrapper;
}

function initProjectSlideViewers() {
  Object.entries(projectSlideImages).forEach(([detailId, images]) => {
    const detail = document.getElementById(detailId);
    if (!detail) return;
    const viewer = createSlideViewer(images);
    detail.appendChild(viewer);
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getOverlayItemById(id) {
  return overlayItems.find((item) => item.id === id);
}

function renderOverlayItems() {
  if (!overlayLayer) return;
  overlayLayer.innerHTML = "";
  overlayItems.forEach((item) => {
    const el = document.createElement("img");
    el.className = `overlay-item ${item.kind}`;
    if (item.id === selectedOverlayId) el.classList.add("selected");
    if (overlayDrag && overlayDrag.id === item.id) el.classList.add("dragging");
    el.dataset.id = item.id;
    el.src = item.src;
    el.alt = item.id;
    el.style.left = `${item.x}px`;
    el.style.top = `${item.y}px`;
    el.style.width = `${item.width}px`;
    el.style.zIndex = String(item.zIndex ?? 10);
    overlayLayer.appendChild(el);
  });
}

function updateOverlayDragPosition() {
  if (!overlayDrag || !pendingPointer || !roomScene) {
    overlayRAF = null;
    return;
  }
  const item = getOverlayItemById(overlayDrag.id);
  if (!item) {
    overlayRAF = null;
    return;
  }
  const scale = overlayDrag.scale || 1;
  const nextLeft = (pendingPointer.clientX - overlayDrag.roomRect.left - overlayDrag.offsetX) / scale;
  const nextTop = (pendingPointer.clientY - overlayDrag.roomRect.top - overlayDrag.offsetY) / scale;
  const maxLeft = Math.max(0, roomScene.clientWidth - overlayDrag.width);
  const maxTop = Math.max(0, roomScene.clientHeight - overlayDrag.height);
  item.x = clamp(nextLeft, 0, maxLeft);
  item.y = clamp(nextTop, 0, maxTop);
  renderOverlayItems();
  overlayRAF = requestAnimationFrame(updateOverlayDragPosition);
}

function onOverlayPointerDown(event) {
  const target = event.target.closest(".overlay-item");
  if (!target || !roomScene) return;
  const id = target.dataset.id;
  const item = getOverlayItemById(id);
  if (!item) return;
  event.preventDefault();
  selectedOverlayId = id;
  if (!item.draggable) {
    renderOverlayItems();
    return;
  }
  const roomRect = roomScene.getBoundingClientRect();
  overlayDrag = {
    id,
    pointerId: event.pointerId,
    roomRect,
    scale: getRoomScale(),
    offsetX: event.clientX - (roomRect.left + item.x * getRoomScale()),
    offsetY: event.clientY - (roomRect.top + item.y * getRoomScale()),
    width: target.offsetWidth,
    height: target.offsetHeight
  };
  pendingPointer = event;
  target.setPointerCapture(event.pointerId);
  renderOverlayItems();
  if (!overlayRAF) {
    overlayRAF = requestAnimationFrame(updateOverlayDragPosition);
  }
}

function onOverlayPointerMove(event) {
  if (!overlayDrag || event.pointerId !== overlayDrag.pointerId) return;
  pendingPointer = event;
}

function onOverlayPointerUp(event) {
  if (!overlayDrag || event.pointerId !== overlayDrag.pointerId) return;
  const target = document.querySelector(`.overlay-item[data-id="${overlayDrag.id}"]`);
  if (target) target.releasePointerCapture(event.pointerId);
  overlayDrag = null;
  pendingPointer = null;
  if (overlayRAF) {
    cancelAnimationFrame(overlayRAF);
    overlayRAF = null;
  }
  renderOverlayItems();
}

function updateDogFrame() {
  if (!dogRunner || !dogWrapper) return;
  dogRunner.src = dogFrames[dogState.frameIndex];
}

function renderDogPosition() {
  if (!dogWrapper) return;
  dogWrapper.style.left = `${dogPosition.x}px`;
  dogWrapper.style.top = `${dogPosition.y}px`;
}

function startDogAnimation() {
  if (dogIntervalId !== null) return;
  dogIntervalId = window.setInterval(() => {
    if (!dogState.isAnimating) return;
    dogState.frameIndex = dogState.frameIndex === 0 ? 1 : 0;
    updateDogFrame();
  }, 760);
}

function toggleDogRunning() {
  dogState.isAnimating = !dogState.isAnimating;
  updateDogFrame();
}

function updateDogDragPosition() {
  if (!dogDrag || !pendingDogPointer || !roomScene || !dogWrapper) {
    dogDragRAF = null;
    return;
  }
  const scale = dogDrag.scale || 1;
  const nextLeft = (pendingDogPointer.clientX - dogDrag.roomRect.left - dogDrag.offsetX) / scale;
  const nextTop = (pendingDogPointer.clientY - dogDrag.roomRect.top - dogDrag.offsetY) / scale;
  const maxLeft = Math.max(0, roomScene.clientWidth - dogWrapper.offsetWidth);
  const maxTop = Math.max(0, roomScene.clientHeight - dogWrapper.offsetHeight);
  const clampedX = clamp(nextLeft, 0, maxLeft);
  const clampedY = clamp(nextTop, 0, maxTop);
  if (
    Math.abs(clampedX - dogPosition.x) > DOG_DRAG_THRESHOLD_PX
    || Math.abs(clampedY - dogPosition.y) > DOG_DRAG_THRESHOLD_PX
  ) {
    dogDrag.moved = true;
  }
  dogPosition.x = clampedX;
  dogPosition.y = clampedY;
  renderDogPosition();
  dogDragRAF = requestAnimationFrame(updateDogDragPosition);
}

function onDogPointerDown(event) {
  if (!dogWrapper || !roomScene) return;
  const roomRect = roomScene.getBoundingClientRect();
  const dogRect = dogWrapper.getBoundingClientRect();
  dogDrag = {
    pointerId: event.pointerId,
    roomRect,
    scale: getRoomScale(),
    offsetX: event.clientX - dogRect.left,
    offsetY: event.clientY - dogRect.top,
    moved: false,
  };
  pendingDogPointer = event;
  dogWrapper.classList.add("dragging");
  dogWrapper.setPointerCapture(event.pointerId);
  if (!dogDragRAF) {
    dogDragRAF = requestAnimationFrame(updateDogDragPosition);
  }
}

function onDogPointerMove(event) {
  if (!dogDrag || event.pointerId !== dogDrag.pointerId) return;
  pendingDogPointer = event;
}

function onDogPointerUp(event) {
  if (!dogDrag || event.pointerId !== dogDrag.pointerId || !dogWrapper) return;
  const didDrag = dogDrag.moved;
  dogWrapper.releasePointerCapture(event.pointerId);
  dogDrag = null;
  pendingDogPointer = null;
  dogWrapper.classList.remove("dragging");
  if (dogDragRAF) {
    cancelAnimationFrame(dogDragRAF);
    dogDragRAF = null;
  }
  if (!didDrag) {
    toggleDogRunning();
  }
}

function launchBalloons() {
  const colors = ["#ffc8e8", "#d5ecff", "#cbffd7", "#ffe3a9", "#dbc8ff"];
  for (let i = 0; i < 18; i += 1) {
    const balloon = document.createElement("span");
    balloon.className = "balloon";
    balloon.style.left = `${random(8, 92)}%`;
    balloon.style.background = colors[Math.floor(random(0, colors.length))];
    balloon.style.setProperty("--rise-duration", `${random(2400, 4800)}ms`);
    balloonLayer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 5200);
  }
}

let isKpopOpen = false;
function toggleKpopList() {
  isKpopOpen = !isKpopOpen;
  kpopList.classList.toggle("hidden", !isKpopOpen);
  toggleKpop.textContent = `${isKpopOpen ? "▲" : "▼"} K-pop 공연 진행요원 업무 경험 (click!)`;
}

function openHireModal() {
  if (!hireModal) return;
  hireModal.classList.remove("hidden");
}

function closeHireModal() {
  if (!hireModal) return;
  hireModal.classList.add("hidden");
}

function confirmHire() {
  closeHireModal();
  if (contactInfo) contactInfo.classList.remove("hidden");
}

kpopJobs.forEach((job) => {
  const li = document.createElement("li");
  li.textContent = job;
  kpopList.appendChild(li);
});

menuButtons.forEach((btn) => btn.addEventListener("click", () => activatePanel(btn.dataset.panel)));
yesButton.addEventListener("click", launchBalloons);
initContentsCoverCards();
contentsCovers.forEach((cover) => {
  cover.addEventListener("click", () => openContentsModal(cover.dataset.detailId));
});
toggleKpop.addEventListener("click", toggleKpopList);
initProjectSlideViewers();
if (hireButton) hireButton.addEventListener("click", openHireModal);
if (hireCancel) hireCancel.addEventListener("click", closeHireModal);
if (hireContinue) hireContinue.addEventListener("click", confirmHire);
if (hireModal) {
  hireModal.addEventListener("click", (event) => {
    if (event.target === hireModal) closeHireModal();
  });
}
if (contentsModalClose) contentsModalClose.addEventListener("click", closeContentsModal);
if (contentsModal) {
  contentsModal.addEventListener("click", (event) => {
    if (event.target === contentsModal) closeContentsModal();
  });
}
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeContentsModal();
    closeHireModal();
  }
});
if (overlayLayer) {
  renderOverlayItems();
  overlayLayer.addEventListener("pointerdown", onOverlayPointerDown);
  window.addEventListener("pointermove", onOverlayPointerMove);
  window.addEventListener("pointerup", onOverlayPointerUp);
  overlayLayer.addEventListener("click", (event) => {
    const target = event.target.closest(".overlay-item");
    if (!target) return;
    selectedOverlayId = target.dataset.id;
    renderOverlayItems();
  });
}
if (dogWrapper && roomScene) {
  renderDogPosition();
  dogWrapper.addEventListener("pointerdown", onDogPointerDown);
  window.addEventListener("pointermove", onDogPointerMove);
  window.addEventListener("pointerup", onDogPointerUp);
  updateDogFrame();
  startDogAnimation();
}
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.addEventListener("resize", setCanvasSize);
setCanvasSize();
