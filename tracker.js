const INITIAL_DATA = [
    {
        "id": "1766639488235",
        "title": "The last of us part I",
        "type": "game",
        "status": "completed",
        "rating": 10,
        "notes": "",
        "cover": "https://imgs.search.brave.com/AIWqEfzpB_ISASNTekyBgeHJAyhcB3nbt4CjzO4qLTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGxheWVyLml0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEy/L3RoZS1sYXN0LW9m/LXVzLWNvcGVydGlu/YS1naW9jby5qcGc",
        "dateAdded": "2025-12-25T05:11:28.235Z"
    },
    {
        "id": "1766639531074",
        "title": "The last of us part II",
        "type": "game",
        "status": "completed",
        "rating": 10,
        "notes": "",
        "cover": "https://imgs.search.brave.com/haVOoa7qOodM_i_A0hGZQmxgJ4r74u-jK2G1T0N25t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80Zi9UTE9VX1Ay/X0JveF9BcnRfMi5w/bmcvMjUwcHgtVExP/VV9QMl9Cb3hfQXJ0/XzIucG5n",
        "dateAdded": "2025-12-25T05:12:11.074Z"
    },
    {
        "id": "1766639970498",
        "title": "Red dead redemption 2",
        "type": "game",
        "status": "replay",
        "rating": 9.9,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
        "dateAdded": "2025-12-25T05:19:30.498Z"
    },
    {
        "id": "1766640061891",
        "title": "Silent hill 2",
        "type": "game",
        "status": "replay",
        "rating": 9.4,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/coavaf.webp",
        "dateAdded": "2025-12-25T05:21:01.891Z"
    },
    {
        "id": "1766640200901",
        "title": "Beyond two souls",
        "type": "game",
        "status": "replay",
        "rating": 8,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co8r4w.webp",
        "dateAdded": "2025-12-25T05:23:20.901Z"
    },
    {
        "id": "1766640259529",
        "title": "Life is strange 1",
        "type": "game",
        "status": "completed",
        "rating": 9.7,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r8e.webp",
        "dateAdded": "2025-12-25T05:24:19.529Z"
    },
    {
        "id": "1766640305328",
        "title": "Clair obscure expedition 33",
        "type": "game",
        "status": "completed",
        "rating": 9.2,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co9gam.webp",
        "dateAdded": "2025-12-25T05:25:05.328Z"
    },
    {
        "id": "1766640347915",
        "title": "Heavy rain",
        "type": "game",
        "status": "replay",
        "rating": 9,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/coaajv.webp",
        "dateAdded": "2025-12-25T05:25:47.915Z"
    },
    {
        "id": "1766640389580",
        "title": "Resident evil 4 remake",
        "type": "game",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.webp",
        "dateAdded": "2025-12-25T05:26:29.580Z"
    },
    {
        "id": "1766640438060",
        "title": "The walking dead",
        "type": "game",
        "status": "replay",
        "rating": 9.8,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co7axc.webp",
        "dateAdded": "2025-12-25T05:27:18.060Z"
    },
    {
        "id": "1766640468869",
        "title": "The wolf among us",
        "type": "game",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rcy.webp",
        "dateAdded": "2025-12-25T05:27:48.869Z"
    },
    {
        "id": "1766640508884",
        "title": "Dispatch",
        "type": "game",
        "status": "completed",
        "rating": 8.7,
        "notes": "",
        "cover": "https://imgs.search.brave.com/FmvegHyuZgPceU_No43JuGHRh7bCMfyHba9FRh50hVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3ds/b25ndG9iZWF0LmNv/bS9nYW1lcy8xNjA2/MThfRGlzcGF0Y2gu/anBnP3dpZHRoPTc2/MA",
        "dateAdded": "2025-12-25T05:28:28.884Z"
    },
    {
        "id": "1766640622774",
        "title": "Assassin's creed 1",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rrw.webp",
        "dateAdded": "2025-12-25T05:30:22.774Z"
    },
    {
        "id": "1766640658509",
        "title": "Assassin's creed 2",
        "type": "game",
        "status": "completed",
        "rating": 9.3,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nrv.webp",
        "dateAdded": "2025-12-25T05:30:58.509Z"
    },
    {
        "id": "1766640689549",
        "title": "Assassin's creed 3",
        "type": "game",
        "status": "completed",
        "rating": 9.4,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xii.webp",
        "dateAdded": "2025-12-25T05:31:29.549Z"
    },
    {
        "id": "1766640762073",
        "title": "Assassn's creed black flag",
        "type": "game",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4qfn.webp",
        "dateAdded": "2025-12-25T05:32:42.073Z"
    },
    {
        "id": "1766640920560",
        "title": "Assassin's creed unity",
        "type": "game",
        "status": "completed",
        "rating": 7.7,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xiq.webp",
        "dateAdded": "2025-12-25T05:35:20.560Z"
    },
    {
        "id": "1766640978966",
        "title": "Assassin's creed rogue",
        "type": "game",
        "status": "completed",
        "rating": 7.6,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xir.webp",
        "dateAdded": "2025-12-25T05:36:18.966Z"
    },
    {
        "id": "1766641012655",
        "title": "Assassin's Creed syndicate",
        "type": "game",
        "status": "completed",
        "rating": 7.4,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xis.webp",
        "dateAdded": "2025-12-25T05:36:52.655Z"
    },
    {
        "id": "1766641045346",
        "title": "Assassin's Creed origins",
        "type": "game",
        "status": "completed",
        "rating": 7.2,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rbe.webp",
        "dateAdded": "2025-12-25T05:37:25.346Z"
    },
    {
        "id": "1766641076640",
        "title": "Assassin's creed odyssey",
        "type": "game",
        "status": "completed",
        "rating": 8.1,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2nul.webp",
        "dateAdded": "2025-12-25T05:37:56.640Z"
    },
    {
        "id": "1766641105491",
        "title": "Assassin's creed valhalla",
        "type": "game",
        "status": "completed",
        "rating": 6.9,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ed3.webp",
        "dateAdded": "2025-12-25T05:38:25.491Z"
    },
    {
        "id": "1766641129159",
        "title": "Assassin's creed shadows",
        "type": "game",
        "status": "completed",
        "rating": 7.4,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co87cu.webp",
        "dateAdded": "2025-12-25T05:38:49.159Z"
    },
    {
        "id": "1766641164293",
        "title": "Assassin's creed mirage",
        "type": "game",
        "status": "completed",
        "rating": 7.3,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co57sj.webp",
        "dateAdded": "2025-12-25T05:39:24.293Z"
    },
    {
        "id": "1766641223649",
        "title": "Detroit become human",
        "type": "game",
        "status": "replay",
        "rating": 9,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co6mzf.webp",
        "dateAdded": "2025-12-25T05:40:23.649Z"
    },
    {
        "id": "1766641246541",
        "title": "Elden ring",
        "type": "game",
        "status": "completed",
        "rating": 8.6,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
        "dateAdded": "2025-12-25T05:40:46.541Z"
    },
    {
        "id": "1766641277806",
        "title": "Resident evil 2 remake",
        "type": "game",
        "status": "watching",
        "rating": 8.4,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ir3.webp",
        "dateAdded": "2025-12-25T05:41:17.806Z"
    },
    {
        "id": "1766641432909",
        "title": "South park the stick of truth",
        "type": "game",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1v8x.webp",
        "dateAdded": "2025-12-25T05:43:52.909Z"
    },
    {
        "id": "1766641545106",
        "title": "South Park: The Fractured But Whole",
        "type": "game",
        "status": "on-hold",
        "rating": 5,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1v8w.webp",
        "dateAdded": "2025-12-25T05:45:45.106Z"
    },
    {
        "id": "1766641933534",
        "title": "Breaking bad",
        "type": "series",
        "status": "completed",
        "rating": 10,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        "dateAdded": "2025-12-25T05:52:13.534Z"
    },
    {
        "id": "1766641969945",
        "title": "The walking dead",
        "type": "series",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://imgs.search.brave.com/wdipKrmJFdDCZfdLQYlRup-0EAGcrl_kUvt2miQYCzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFMd2xUbVp6SUwu/anBn",
        "dateAdded": "2025-12-25T05:52:49.945Z"
    },
    {
        "id": "1766641992016",
        "title": "The good doctor",
        "type": "series",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/luhKkdD80qe62fwop6sdrXK9jUT.jpg",
        "dateAdded": "2025-12-25T05:53:12.016Z"
    },
    {
        "id": "1766642032046",
        "title": "Tredici",
        "type": "series",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/r6vlLLCl8SYka5hObkP5Jn5H5uR.jpg",
        "dateAdded": "2025-12-25T05:53:52.046Z"
    },
    {
        "id": "1766642104815",
        "title": "La casa di carta",
        "type": "series",
        "status": "completed",
        "rating": 8.8,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/u1RSyTfhoKBMlVqXfoEzGldlDtL.jpg",
        "dateAdded": "2025-12-25T05:55:04.815Z"
    },
    {
        "id": "1766642140377",
        "title": "Squid game",
        "type": "series",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/nW5rupC5zMeAGgGBYXkr8JL8Xq7.jpg",
        "dateAdded": "2025-12-25T05:55:40.377Z"
    },
    {
        "id": "1766642237729",
        "title": "Wednesday",
        "type": "series",
        "status": "on-hold",
        "rating": 8,
        "notes": "Iniziare episodio 5",
        "cover": "https://imgs.search.brave.com/SSeNABMtyf7_CYOj3qZ8tiChQUVXjOg9OU5ALLh8QwE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzUwMC85UEZv/bkJoeTRjUXk3Snoy/ME5wTXlnY3pPa3Yu/anBn",
        "dateAdded": "2025-12-25T05:57:17.729Z"
    },
    {
        "id": "1766642277084",
        "title": "Better Call Saul",
        "type": "series",
        "status": "on-hold",
        "rating": 5,
        "notes": "Finita stagione 1",
        "cover": "https://imgs.search.brave.com/7LyxRl3eVJ868xmluCjNbHUo4RTlNvD9JtjjVYS7JRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tci5j/b21pbmdzb29uLml0/L3Jzei9zZXJpZXR2/L3NlcmllLzQ1NC80/NTRfNC5qcGc_cHJl/c2V0PXBzdHIyMzU",
        "dateAdded": "2025-12-25T05:57:57.084Z"
    },
    {
        "id": "1766642374778",
        "title": "Attack on titan",
        "type": "anime",
        "status": "replay",
        "rating": 10,
        "notes": "",
        "cover": "https://imgs.search.brave.com/y-L7too9vukfuzfnZGrKOeCD-1UnVUvqpf6ze-JqJPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzY2/NjguanBn",
        "dateAdded": "2025-12-25T05:59:34.778Z"
    },
    {
        "id": "1766642415346",
        "title": "Detective Conan",
        "type": "anime",
        "status": "completed",
        "rating": 9.7,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/gW14n6xxONXrya8CIDhRe5Ada7U.jpg",
        "dateAdded": "2025-12-25T06:00:15.346Z"
    },
    {
        "id": "1766642445921",
        "title": "Death note",
        "type": "anime",
        "status": "completed",
        "rating": 9.8,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/chnG4pYo89weaBjXHJWvW68E35B.jpg",
        "dateAdded": "2025-12-25T06:00:45.921Z"
    },
    {
        "id": "1766642477869",
        "title": "Dragon Ball Z",
        "type": "anime",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/f2zhRLqwRLrKhEMeIM7Z5buJFo3.jpg",
        "dateAdded": "2025-12-25T06:01:17.869Z"
    },
    {
        "id": "1766642500157",
        "title": "Dragon ball gt",
        "type": "anime",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/whMOujSNYXRQeeCWf39CfkqguFy.jpg",
        "dateAdded": "2025-12-25T06:01:40.157Z"
    },
    {
        "id": "1766643112766",
        "title": "Life is strange true colors",
        "type": "game",
        "status": "completed",
        "rating": 7,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2vpp.webp",
        "dateAdded": "2025-12-25T06:11:52.766Z"
    },
    {
        "id": "1766643156398",
        "title": "Life is strange double exposure",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co8bp9.webp",
        "dateAdded": "2025-12-25T06:12:36.398Z"
    },
    {
        "id": "1766643192707",
        "title": "Stranger things",
        "type": "series",
        "status": "watching",
        "rating": 9.2,
        "notes": "Attendere per gran finale",
        "cover": "https://image.tmdb.org/t/p/w500/cVxVGwHce6xnW8UaVUggaPXbmoE.jpg",
        "dateAdded": "2025-12-25T06:13:12.707Z"
    },
    {
        "id": "1766643317209",
        "title": "Uncharted 4",
        "type": "game",
        "status": "completed",
        "rating": 8.5,
        "notes": "",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.webp",
        "dateAdded": "2025-12-25T06:15:17.209Z"
    },
    {
        "id": "1766783073165",
        "title": "Resident evil Village",
        "type": "game",
        "status": "on-hold",
        "rating": 7.9,
        "notes": "",
        "cover": "https://imgs.search.brave.com/aKUrlA7mjexPmZ9AEDHcNFPrw-C0LCZYzhhER_kOgVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MDEvMjIvcmUtdmls/bGFnZS1idXR0b24t/ZmluLTE2MTEyNzc3/MTUxOTMuanBnP2Ny/b3A9MToxLHNtYXJ0/JmZvcm1hdD1qcGcm/YXV0bz13ZWJwJnF1/YWxpdHk9ODA",
        "dateAdded": "2025-12-26T21:04:33.165Z"
    },
    {
        "id": "1766935642299",
        "title": "Ritorno al futuro",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/AkmUoSHkxW9txpzZ52gCcWweEkE.jpg",
        "dateAdded": "2025-12-28T15:27:22.299Z"
    },
    {
        "id": "1766935655842",
        "title": "Ritorno al futuro 2",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/y86WZGmsiKHZ0HmH1NZRx2iOaP4.jpg",
        "dateAdded": "2025-12-28T15:27:35.842Z"
    },
    {
        "id": "1766935672171",
        "title": "Ritorno al futuro - Parte III",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/fR29F37jN4y1xapDAcjI9CEgM65.jpg",
        "dateAdded": "2025-12-28T15:27:52.171Z"
    },
    {
        "id": "1766935697900",
        "title": "La maledizione della prima luna",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/AfhQSm3zu2PC7AZ45YKvX9OuFOZ.jpg",
        "dateAdded": "2025-12-28T15:28:17.900Z"
    },
    {
        "id": "1766935715607",
        "title": "Pirati dei Caraibi - La maledizione del forziere fantasma",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "1:49:26",
        "cover": "https://image.tmdb.org/t/p/w500/yH5iDtRaq53q0sSU6EgUatKhrEn.jpg",
        "dateAdded": "2025-12-28T15:28:35.607Z"
    },
    {
        "id": "1766935740487",
        "title": "Pirati dei Caraibi - Oltre i confini del mare",
        "type": "movie",
        "status": "replay",
        "rating": 5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/p0aMDd3EtOCfImHIeL9hgPnLRIo.jpg",
        "dateAdded": "2025-12-28T15:29:00.487Z"
    },
    {
        "id": "1766935760496",
        "title": "Pirati dei Caraibi - La vendetta di Salazar",
        "type": "movie",
        "status": "replay",
        "rating": 5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/vvglsPQgyGogyTu2e59dJYGlJNE.jpg",
        "dateAdded": "2025-12-28T15:29:20.496Z"
    },
    {
        "id": "1766935795466",
        "title": "Polar Express",
        "type": "movie",
        "status": "completed",
        "rating": 7,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/pjbpInddfbe0TvcJvpHmRQSucdV.jpg",
        "dateAdded": "2025-12-28T15:29:55.466Z"
    },
    {
        "id": "1766936968285",
        "title": "Resident evil 4 DLC",
        "type": "game",
        "status": "completed",
        "rating": 8.6,
        "notes": "",
        "cover": "https://imgs.search.brave.com/nhkxaOQoXcm2x5DQPLXlUuf8OxSbxni8uHYKO_m0fcM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcu/Y29tL2lt/YWdlcy9nL0hjOEFB/T1N3cn5abE5zR0cv/cy1sNTAwLmpwZw",
        "dateAdded": "2025-12-28T15:49:28.285Z"
    },
    {
        "id": "1767027481518",
        "title": "Pulp Fiction",
        "type": "movie",
        "status": "planned",
        "rating": null,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/9p10J9Xp7MuaVac56g8BwAuXEsA.jpg",
        "dateAdded": "2025-12-29T16:58:01.518Z"
    },
    {
        "id": "1767027540200",
        "title": "I segreti di Twin Peaks",
        "type": "series",
        "status": "planned",
        "rating": null,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/lA9CNSdo50iQPZ8A2fyVpMvJZAf.jpg",
        "dateAdded": "2025-12-29T16:59:00.200Z"
    },
    {
        "id": "1767028611613",
        "title": "Life is Strange 2",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://us.gamesplanet.com/acache/37/91/1/us/packshot-21f50dc8aaecdc8a9a9f00e78d0bde91.jpg",
        "dateAdded": "2025-12-29T17:16:51.613Z"
    },
    {
        "id": "1767028679475",
        "title": "Life Is Strange: Before The Storm - Deluxe Edition",
        "type": "game",
        "status": "completed",
        "rating": 9.7,
        "notes": "",
        "cover": "https://images.greenmangaming.com/cf1a665c3cbf4eaeb3ab08b6cf057126/beebbeace1494f5f890f2d99e56e2792.jpg",
        "dateAdded": "2025-12-29T17:17:59.475Z"
    },
    {
        "id": "1767029319256",
        "title": "Outlast",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/238320/capsule_231x87.jpg?t=1666817106",
        "dateAdded": "2025-12-29T17:28:39.256Z"
    },
    {
        "id": "1767029365938",
        "title": "Outlast 2",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/414700/capsule_231x87.jpg?t=1618944453",
        "dateAdded": "2025-12-29T17:29:25.938Z"
    },
    {
        "id": "1767029394968",
        "title": "Sifu",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138710/capsule_231x87.jpg?t=1754555101",
        "dateAdded": "2025-12-29T17:29:54.968Z"
    },
    {
        "id": "1767029797131",
        "title": "Dragon Ball Xenoverse 2 - Super Pass",
        "type": "game",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://sttc.gamersgate.com/images/product/dragon-ball-xenoverse-2-super-pass/cover-180-6ebc89.jpg",
        "dateAdded": "2025-12-29T17:36:37.131Z"
    },
    {
        "id": "1767029827510",
        "title": "DRAGON BALL XENOVERSE Bundle",
        "type": "game",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://hb.imgix.net/dcfffa62988d28e288456530269488ac5a260a20.jpg?auto=compress,format&fit=crop&h=84&w=135&s=caed39eab85ca827f2e08aef92808f88",
        "dateAdded": "2025-12-29T17:37:07.510Z"
    },
    {
        "id": "1767030130475",
        "title": "Inception",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/5QHWgqaBxZI1eM5e3YhyKzY5o3z.jpg",
        "dateAdded": "2025-12-29T17:42:10.475Z"
    },
    {
        "id": "1767030256556",
        "title": "Quo vado?",
        "type": "movie",
        "status": "completed",
        "rating": 10,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/9X8csv75uWcVspL3Mk9gSJhBJ0J.jpg",
        "dateAdded": "2025-12-29T17:44:16.556Z"
    },
    {
        "id": "1767030281596",
        "title": "Buen Camino",
        "type": "movie",
        "status": "completed",
        "rating": 9.5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/5sHyD2AEaaX9tzRkBdWM5G9NeJ8.jpg",
        "dateAdded": "2025-12-29T17:44:41.596Z"
    },
    {
        "id": "1767030320320",
        "title": "Che bella giornata",
        "type": "movie",
        "status": "completed",
        "rating": 9.5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/4PgvPYJkkwgFK4epIsOFyhM3dhq.jpg",
        "dateAdded": "2025-12-29T17:45:20.320Z"
    },
    {
        "id": "1767030341506",
        "title": "Cado dalle nubi",
        "type": "movie",
        "status": "completed",
        "rating": 9.5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/gR1gjETXUOBVJIZMpms96zFsyYt.jpg",
        "dateAdded": "2025-12-29T17:45:41.506Z"
    },
    {
        "id": "1767030360999",
        "title": "Sole a catinelle",
        "type": "movie",
        "status": "completed",
        "rating": 9.5,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/jI5WTCv0V3i4J6EcPWmxt4Da6sq.jpg",
        "dateAdded": "2025-12-29T17:46:00.999Z"
    },
    {
        "id": "1767030374736",
        "title": "Tolo Tolo",
        "type": "movie",
        "status": "completed",
        "rating": 8,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/CqUxog8F6aaK97RYh8YXhv3NDL.jpg",
        "dateAdded": "2025-12-29T17:46:14.736Z"
    },
    {
        "id": "1767030405572",
        "title": "Interstellar",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/bMKiLh0mES4Uiococ240lbbTGXQ.jpg",
        "dateAdded": "2025-12-29T17:46:45.572Z"
    },
    {
        "id": "1767030540512",
        "title": "Far cry 3",
        "type": "game",
        "status": "on-hold",
        "rating": 5,
        "notes": "",
        "cover": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220240/capsule_231x87.jpg?t=1752169206",
        "dateAdded": "2025-12-29T17:49:00.512Z"
    },
    {
        "id": "1767033146912",
        "title": "Shrek",
        "type": "movie",
        "status": "completed",
        "rating": 9,
        "notes": "",
        "cover": "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
        "dateAdded": "2025-12-29T18:32:26.912Z"
    }
];

// ===== Data Management =====
class MediaTracker {
    constructor() {
        this.media = this.loadFromStorage();
        this.currentFilter = { type: 'all', status: 'all' };
        this.currentSort = 'ratingDesc'; // Default: highest rating first
        this.searchQuery = '';
        this.editingId = null;
        this.deletingId = null;
        this.suggestionTimeout = null;
        this.suggestionTimeout = null;
        this.compactView = false;
        this.adminPassword = localStorage.getItem('mediaAdminPassword') || 'steven2025';
        this.init();
    }

    async init() {
        console.log(`🚀 Media Tracker initializing...`);
        this.bindEvents();
        this.render();
        this.updateStats();

        if (this.media.length === 0 && INITIAL_DATA.length > 0) {
            console.log("ℹ️ Loading initial dataset.");
            this.media = [...INITIAL_DATA];
            this.saveToStorage();
            this.render();
            this.updateStats();
        }

        console.log(`✅ Media Tracker ready with ${this.media.length} items.`);
    }

    // ===== Local Storage =====
    loadFromStorage() {
        try {
            const data = localStorage.getItem('mediaTracker');
            if (data) {
                const parsed = JSON.parse(data);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
            console.log("ℹ️ LocalStorage empty or missing. Using INITIAL_DATA.");
            return [...INITIAL_DATA];
        } catch (error) {
            console.error('Error loading data:', error);
            return [...INITIAL_DATA];
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('mediaTracker', JSON.stringify(this.media));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }



    // ===== Backup & Export =====
    exportData() {
        try {
            const exportData = {
                version: '1.0',
                exportDate: new Date().toISOString(),
                mediaCount: this.media.length,
                media: this.media
            };

            const jsonString = JSON.stringify(exportData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
            a.download = `media-tracker-backup-${timestamp}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log(`✅ Exported ${this.media.length} opere successfully`);
            alert(`✅ Backup creato con successo!\n\n${this.media.length} opere esportate.`);
        } catch (error) {
            console.error('Error exporting data:', error);
            alert('❌ Errore durante l\'esportazione dei dati.');
        }
    }

    importData(file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // Validate data structure
                if (!importedData.media || !Array.isArray(importedData.media)) {
                    throw new Error('Formato file non valido');
                }

                const importCount = importedData.media.length;
                const currentCount = this.media.length;

                // Ask user if they want to replace or merge
                let action = 'merge';
                if (currentCount > 0) {
                    const userChoice = confirm(
                        `Hai già ${currentCount} opere salvate.\n\n` +
                        `Il file contiene ${importCount} opere.\n\n` +
                        `Clicca OK per UNIRE i dati (totale: ${currentCount + importCount})\n` +
                        `Clicca ANNULLA per SOSTITUIRE tutti i dati`
                    );
                    action = userChoice ? 'merge' : 'replace';
                }

                if (action === 'replace') {
                    this.media = importedData.media;
                } else {
                    // Merge: add imported items that don't exist
                    const existingTitles = new Set(this.media.map(m => m.title.toLowerCase()));
                    const newItems = importedData.media.filter(
                        item => !existingTitles.has(item.title.toLowerCase())
                    );
                    this.media = [...this.media, ...newItems];
                }

                this.saveToStorage();
                this.render();
                this.updateStats();

                const finalCount = this.media.length;
                const added = finalCount - currentCount;

                console.log(`✅ Import completed: ${finalCount} total opere`);
                alert(
                    `✅ Import completato!\n\n` +
                    `Opere totali: ${finalCount}\n` +
                    (action === 'merge' && added > 0 ? `Nuove opere aggiunte: ${added}` : '')
                );

                // Reset file input
                document.getElementById('importFileInput').value = '';
            } catch (error) {
                console.error('Error importing data:', error);
                alert(`❌ Errore durante l'importazione:\n${error.message}`);
                document.getElementById('importFileInput').value = '';
            }
        };

        reader.onerror = () => {
            alert('❌ Errore nella lettura del file.');
            document.getElementById('importFileInput').value = '';
        };

        reader.readAsText(file);
    }

    // ===== Event Binding =====
    bindEvents() {
        // Add media buttons
        document.getElementById('addMediaBtn').addEventListener('click', () => this.openModal());
        document.getElementById('addMediaBtnEmpty').addEventListener('click', () => this.openModal());

        // Modal controls
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('modalOverlay').addEventListener('click', () => this.closeModal());
        document.getElementById('cancelBtn').addEventListener('click', () => this.closeModal());
        document.getElementById('mediaForm').addEventListener('submit', (e) => this.handleSubmit(e));

        // Delete modal
        document.getElementById('deleteModalClose').addEventListener('click', () => this.closeDeleteModal());
        document.getElementById('deleteOverlay').addEventListener('click', () => this.closeDeleteModal());
        document.getElementById('cancelDeleteBtn').addEventListener('click', () => this.closeDeleteModal());
        document.getElementById('confirmDeleteBtn').addEventListener('click', () => this.confirmDelete());

        // Filters
        document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleTypeFilter(e));
        });

        document.querySelectorAll('#statusFilters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleStatusFilter(e));
        });

        // Search with autocomplete
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.render();
            this.showSearchAutocomplete(e.target.value);
        });

        searchInput.addEventListener('focus', (e) => {
            if (e.target.value) {
                this.showSearchAutocomplete(e.target.value);
            }
        });

        // Close autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-bar')) {
                this.hideSearchAutocomplete();
            }
        });

        // Sort
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.render();
        });

        // Rating input (now supports decimals)
        document.getElementById('mediaRating').addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            if (value >= 1 && value <= 10) {
                this.updateRatingDisplay(value);
            }
        });

        // Title input for suggestions and auto-fetch
        document.getElementById('mediaTitle').addEventListener('input', (e) => {
            this.handleTitleInput(e.target.value);
        });

        // Type change triggers auto-fetch if title exists
        document.getElementById('mediaType').addEventListener('change', (e) => {
            const title = document.getElementById('mediaTitle').value;
            if (title && title.length >= 3) {
                this.autoFetchCover(title, e.target.value);
            }
        });

        // Cover URL preview
        document.getElementById('mediaCover').addEventListener('input', (e) => {
            this.previewCover(e.target.value);
        });

        // View toggle
        document.getElementById('viewToggle').addEventListener('click', () => this.toggleView());

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.form-group')) {
                this.hideSuggestions();
            }
        });



        // Status change - toggle rating field
        document.getElementById('mediaStatus').addEventListener('change', (e) => {
            this.toggleRatingField(e.target.value);
        });

        // Backup - Export data
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());

        // Backup - Import data
        document.getElementById('importDataBtn').addEventListener('click', () => {
            document.getElementById('importFileInput').click();
        });

        document.getElementById('importFileInput').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.importData(file);
            }
        });


    }

    // ===== Modal Management =====
    openModal(mediaId = null) {
        this.editingId = mediaId;
        const modal = document.getElementById('mediaModal');
        const form = document.getElementById('mediaForm');
        const title = document.getElementById('modalTitle');
        const submitBtn = document.getElementById('submitBtnText');

        form.reset();
        this.hideSuggestions();
        document.getElementById('coverPreview').classList.remove('show');

        if (mediaId) {
            const media = this.media.find(m => m.id === mediaId);
            if (media) {
                title.textContent = 'Modifica Opera';
                submitBtn.textContent = 'Salva';
                document.getElementById('mediaId').value = media.id;
                document.getElementById('mediaTitle').value = media.title;
                document.getElementById('mediaType').value = media.type;
                document.getElementById('mediaStatus').value = media.status;
                document.getElementById('mediaRating').value = media.rating || 5;
                document.getElementById('mediaNotes').value = media.notes || '';
                document.getElementById('mediaCover').value = media.cover || '';
                this.updateRatingDisplay(media.rating || 5);
                if (media.cover) {
                    this.previewCover(media.cover);
                }
            }
        } else {
            title.textContent = 'Aggiungi Opera';
            submitBtn.textContent = 'Aggiungi';
            this.updateRatingDisplay(5);
            // Enable rating by default for new items
            this.toggleRatingField('');
        }

        // Trigger rating field state based on current status
        const currentStatus = document.getElementById('mediaStatus').value;
        this.toggleRatingField(currentStatus);

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        document.getElementById('mediaModal').classList.remove('show');
        document.body.style.overflow = '';
        this.editingId = null;
        this.hideSuggestions();
        // Re-enable rating field when closing
        this.toggleRatingField('');
    }

    openDeleteModal(mediaId) {
        this.deletingId = mediaId;
        const media = this.media.find(m => m.id === mediaId);
        if (media) {
            document.getElementById('deleteMediaTitle').textContent = media.title;
            document.getElementById('deleteModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    closeDeleteModal() {
        document.getElementById('deleteModal').classList.remove('show');
        document.body.style.overflow = '';
        this.deletingId = null;
    }

    // ===== CRUD Operations =====
    handleSubmit(e) {
        e.preventDefault();

        const status = document.getElementById('mediaStatus').value;
        const ratingInput = document.getElementById('mediaRating');
        const rating = status === 'planned' ? null : parseFloat(ratingInput.value);

        const mediaData = {
            id: this.editingId || Date.now().toString(),
            title: document.getElementById('mediaTitle').value.trim(),
            type: document.getElementById('mediaType').value,
            status: status,
            rating: rating,
            notes: document.getElementById('mediaNotes').value.trim(),
            cover: document.getElementById('mediaCover').value.trim(),
            dateAdded: this.editingId ?
                this.media.find(m => m.id === this.editingId).dateAdded :
                new Date().toISOString()
        };

        if (this.editingId) {
            const index = this.media.findIndex(m => m.id === this.editingId);
            this.media[index] = mediaData;
        } else {
            this.media.push(mediaData);
        }

        this.saveToStorage();
        this.closeModal();
        this.render();
        this.updateStats();
    }

    deleteMedia(id) {
        this.openDeleteModal(id);
    }

    confirmDelete() {
        if (this.deletingId) {
            this.media = this.media.filter(m => m.id !== this.deletingId);
            this.saveToStorage();
            this.closeDeleteModal();
            this.render();
            this.updateStats();
        }
    }

    // ===== Filtering & Sorting =====
    handleTypeFilter(e) {
        document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        this.currentFilter.type = e.target.dataset.type;
        this.render();
    }

    handleStatusFilter(e) {
        document.querySelectorAll('#statusFilters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        this.currentFilter.status = e.target.dataset.status;
        this.render();
    }

    getFilteredMedia() {
        let filtered = [...this.media];

        // Type filter
        if (this.currentFilter.type !== 'all') {
            filtered = filtered.filter(m => m.type === this.currentFilter.type);
        }

        // Status filter
        if (this.currentFilter.status !== 'all') {
            filtered = filtered.filter(m => m.status === this.currentFilter.status);
        }

        // Search filter
        if (this.searchQuery) {
            filtered = filtered.filter(m =>
                m.title.toLowerCase().includes(this.searchQuery) ||
                (m.notes && m.notes.toLowerCase().includes(this.searchQuery))
            );
        }

        // Sort
        filtered.sort((a, b) => {
            switch (this.currentSort) {
                case 'dateDesc':
                    return new Date(b.dateAdded) - new Date(a.dateAdded);
                case 'dateAsc':
                    return new Date(a.dateAdded) - new Date(b.dateAdded);
                case 'ratingDesc':
                    return b.rating - a.rating;
                case 'ratingAsc':
                    return a.rating - b.rating;
                case 'titleAsc':
                    return a.title.localeCompare(b.title);
                case 'titleDesc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        return filtered;
    }

    // ===== Rendering =====
    render() {
        const grid = document.getElementById('mediaGrid');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.getFilteredMedia();

        // Apply compact view class
        if (this.compactView) {
            grid.classList.add('compact-view');
        } else {
            grid.classList.remove('compact-view');
        }

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.add('show');
        } else {
            emptyState.classList.remove('show');

            // No Pagination - Show All
            grid.innerHTML = filtered.map(media => this.createMediaCard(media)).join('');

            // Bind action buttons
            filtered.forEach(media => {
                document.getElementById(`edit-${media.id}`).addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openModal(media.id);
                });

                document.getElementById(`delete-${media.id}`).addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.deleteMedia(media.id);
                });
            });
        }
    }

    createMediaCard(media) {
        const typeEmojis = {
            game: '🎮',
            anime: '📺',
            series: '🎬',
            movie: '🎥'
        };

        const statusConfig = {
            completed: {
                label: media.type === 'game' ? '✅ Completato' : '✅ Visto',
                class: 'status-completed'
            },
            watching: {
                label: media.type === 'game' ? '▶️ In Corso' : '▶️ In Visione',
                class: 'status-watching'
            },
            'on-hold': {
                label: '⏸️ Riprendere',
                class: 'status-on-hold'
            },
            planned: {
                label: media.type === 'game' ? '📋 Da Giocare' : '📋 Da Vedere',
                class: 'status-planned'
            },
            replay: {
                label: media.type === 'game' ? '🔄 Da Rigiocare' : '🔄 Da Rivedere',
                class: 'status-replay'
            }
        };

        const status = statusConfig[media.status];
        const stars = this.generateStars(media.rating);
        const coverContent = media.cover ?
            `<img src="${media.cover}" alt="${media.title}" onerror="this.parentElement.innerHTML='<div class=\\'media-placeholder\\'>${this.getInitials(media.title)}</div>'">` :
            `<div class="media-placeholder">${this.getInitials(media.title)}</div>`;

        return `
            <div class="media-card">
                <div class="media-cover">
                    ${coverContent}
                </div>
                <div class="media-info">
                    <div class="media-header">
                        <h3 class="media-title">${this.escapeHtml(media.title)}</h3>
                        <span class="media-type-badge">${typeEmojis[media.type]}</span>
                    </div>
                    <div class="media-status ${status.class}">${status.label}</div>
                    <div class="media-rating">
                        ${media.rating ? `
                            <div class="stars">${stars}</div>
                            <span class="rating-number">${media.rating}/10</span>
                        ` : '<span class="rating-number" style="color: var(--text-muted);">Nessun voto</span>'}
                    </div>
                    ${media.notes ? `<p class="media-notes">${this.escapeHtml(media.notes)}</p>` : ''}
                    <div class="media-actions">
                        <button class="action-btn" id="edit-${media.id}">✏️ Modifica</button>
                        <button class="action-btn delete" id="delete-${media.id}">🗑️ Elimina</button>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        // Convert rating (1-10) to stars (0-5)
        const starRating = rating / 2;
        const fullStars = Math.floor(starRating);
        const hasHalfStar = (starRating % 1) >= 0.25 && (starRating % 1) < 0.75;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star">★</span>';
        }
        if (hasHalfStar) {
            stars += '<span class="star half">★</span>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="star empty">★</span>';
        }

        return stars;
    }

    getInitials(title) {
        return title
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 3);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== Stats =====
    updateStats() {
        const total = this.media.length;
        const completed = this.media.filter(m => m.status === 'completed').length;
        const watching = this.media.filter(m => m.status === 'watching').length;
        const avgRating = total > 0 ?
            (this.media.reduce((sum, m) => sum + m.rating, 0) / total).toFixed(1) :
            '-';

        document.getElementById('totalCount').textContent = total;
        document.getElementById('completedCount').textContent = completed;
        document.getElementById('watchingCount').textContent = watching;
        document.getElementById('avgRating').textContent = avgRating;
    }

    // ===== UI Helpers =====
    updateRatingDisplay(value) {
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue < 1 || numValue > 10) return;

        const starsContainer = document.getElementById('ratingStars');
        starsContainer.innerHTML = this.generateStars(numValue);
    }

    previewCover(url) {
        const preview = document.getElementById('coverPreview');
        if (url) {
            preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.classList.remove('show')">`;
            preview.classList.add('show');
        } else {
            preview.classList.remove('show');
        }
    }

    toggleRatingField(status) {
        const ratingInput = document.getElementById('mediaRating');
        const ratingGroup = document.getElementById('ratingGroup');
        const ratingOptional = document.getElementById('ratingOptional');

        if (status === 'planned') {
            // Disable rating for "Da Vedere" status
            ratingInput.disabled = true;
            ratingInput.value = '';
            ratingInput.removeAttribute('required');
            ratingGroup.style.opacity = '0.5';
            ratingOptional.textContent = '(Non disponibile per opere da vedere)';
            document.getElementById('ratingStars').innerHTML = '';
        } else {
            // Enable rating for all other statuses
            ratingInput.disabled = false;
            ratingInput.setAttribute('required', 'required');
            ratingGroup.style.opacity = '1';
            ratingOptional.textContent = '';
            if (!ratingInput.value) {
                ratingInput.value = 5;
                this.updateRatingDisplay(5);
            }
        }
    }

    // ===== Cover Image API Integration =====
    async handleTitleInput(title) {
        clearTimeout(this.suggestionTimeout);

        if (title.length < 3) {
            this.hideSuggestions();
            return;
        }

        this.suggestionTimeout = setTimeout(async () => {
            const type = document.getElementById('mediaType').value;
            if (!type) {
                this.hideSuggestions();
                return;
            }

            // Fetch suggestions
            await this.fetchSuggestions(title, type);

            // Auto-fetch cover if no manual URL is set
            const coverInput = document.getElementById('mediaCover');
            if (!coverInput.value) {
                console.log('Triggering auto-fetch for:', title, type);
                await this.autoFetchCover(title, type);
            }
        }, 800);
    }

    async autoFetchCover(title, type) {
        if (!title || !type || title.length < 3) return;

        const coverInput = document.getElementById('mediaCover');
        const originalPlaceholder = coverInput.placeholder;
        coverInput.placeholder = "🔄 Cercando copertina...";

        try {
            console.log('Fetching cover for:', title, 'Type:', type);
            let coverUrl = '';

            if (type === 'game') {
                const results = await this.searchGames(title);
                if (results.length > 0 && results[0].cover) {
                    coverUrl = results[0].cover;
                }
            } else if (type === 'anime' || type === 'series' || type === 'movie') {
                const results = await this.searchTMDB(title, type);
                if (results.length > 0 && results[0].cover) {
                    coverUrl = results[0].cover;
                }
            }

            if (coverUrl) {
                coverInput.value = coverUrl;
                this.previewCover(coverUrl);
                console.log('Cover found:', coverUrl);
            } else {
                console.log('No cover found');
                coverInput.placeholder = "Nessuna copertina trovata automaticamente";
            }
        } catch (error) {
            console.error('Error auto-fetching cover:', error);
            coverInput.placeholder = "Errore ricerca copertina";
        } finally {
            setTimeout(() => {
                if (!coverInput.value) {
                    coverInput.placeholder = originalPlaceholder;
                }
            }, 3000);
        }
    }

    async fetchSuggestions(title, type) {
        try {
            let results = [];

            if (type === 'game') {
                results = await this.searchGames(title);
            } else if (type === 'anime' || type === 'series' || type === 'movie') {
                results = await this.searchTMDB(title, type);
            }

            this.displaySuggestions(results);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            this.hideSuggestions();
        }
    }

    async searchGames(query) {
        console.log('🎮 Searching games with query:', query);

        // Call all APIs in parallel and return the first successful result
        const searchPromises = [
            this.searchCheapShark(query).catch(err => ({ error: err.message, source: 'CheapShark' })),
            this.searchRAWG(query).catch(err => ({ error: err.message, source: 'RAWG' })),
            this.searchFreeToGame(query).catch(err => ({ error: err.message, source: 'FreeToGame' }))
        ];

        try {
            // Use Promise.race to get the first successful result
            const results = await Promise.all(searchPromises);

            // Find the first successful result (array with length > 0)
            for (const result of results) {
                if (Array.isArray(result) && result.length > 0) {
                    const source = result[0].type === 'game' ? 'API' : 'Unknown';
                    console.log(`✅ Found ${result.length} results from first successful API`);
                    return result;
                }
            }

            // If all failed, log errors
            results.forEach(result => {
                if (result.error) {
                    console.warn(`⚠️ ${result.source} failed:`, result.error);
                }
            });

            console.error('❌ All game search APIs failed for:', query);
            return [];
        } catch (error) {
            console.error('❌ Unexpected error in game search:', error);
            return [];
        }
    }

    async searchRAWG(query) {
        const apiKey = 'd0b3e8f5a8f44e0b8e5f5a8f44e0b8e5';
        const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(query)}&page_size=10`;

        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        try {
            // Try with CORS proxy
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`RAWG HTTP ${response.status}`);
            }

            const proxyData = await response.json();
            const data = JSON.parse(proxyData.contents);

            if (!data.results || data.results.length === 0) {
                throw new Error('No results from RAWG');
            }

            return data.results.slice(0, 5).map(game => ({
                title: game.name,
                cover: game.background_image,
                year: game.released ? new Date(game.released).getFullYear() : '',
                type: 'game'
            }));
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async searchCheapShark(query) {
        // CheapShark has a deals API that includes game info
        const apiUrl = `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(query)}&limit=5`;

        // Add timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        try {
            const response = await fetch(apiUrl, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`CheapShark HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data || data.length === 0) {
                throw new Error('No results from CheapShark');
            }

            return data.map(game => ({
                title: game.external,
                cover: game.thumb,
                year: '',
                type: 'game'
            }));
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async searchFreeToGame(query) {
        // FreeToGame API - free games database
        const apiUrl = 'https://www.freetogame.com/api/games';

        // Add timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        try {
            const response = await fetch(apiUrl, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`FreeToGame HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data || data.length === 0) {
                throw new Error('No results from FreeToGame');
            }

            // Filter games by query
            const filtered = data.filter(game =>
                game.title.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 5);

            if (filtered.length === 0) {
                throw new Error('No matching games in FreeToGame');
            }

            return filtered.map(game => ({
                title: game.title,
                cover: game.thumbnail,
                year: game.release_date ? new Date(game.release_date).getFullYear() : '',
                type: 'game'
            }));
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async searchTMDB(query, type) {
        try {
            // Determine the correct media type for TMDB API
            // anime and series -> tv, movie -> movie
            const mediaType = (type === 'anime' || type === 'series') ? 'tv' : 'movie';
            const apiKey = '8265bd1679663a7ea12ac168da84d2e8';

            // Build API URL with optimized parameters
            // For anime, also search in original language (Japanese)
            const language = type === 'anime' ? 'ja-JP' : 'it-IT';
            let apiUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&language=${language}&query=${encodeURIComponent(query)}&page=1&include_adult=false`;

            // Try direct API call first (CORS might work for TMDB)
            let response = await fetch(apiUrl).catch(() => null);

            // If direct call fails or returns no results for anime, try with Italian language
            if ((!response || !response.ok) && type === 'anime') {
                console.log('Trying anime search with Italian language...');
                apiUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&language=it-IT&query=${encodeURIComponent(query)}&page=1&include_adult=false`;
                response = await fetch(apiUrl).catch(() => null);
            }

            // If direct call still fails, use proxy
            if (!response || !response.ok) {
                console.log('Direct TMDB call failed, trying with proxy...');
                const proxyUrl = 'https://api.allorigins.win/raw?url=';
                response = await fetch(proxyUrl + encodeURIComponent(apiUrl)).catch(() => null);
            }

            // Try alternative proxy if first one fails
            if (!response || !response.ok) {
                console.log('First proxy failed, trying alternative...');
                const altProxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
                response = await fetch(altProxyUrl + encodeURIComponent(apiUrl)).catch(() => null);
            }

            if (!response || !response.ok) {
                console.warn('TMDB API failed with all methods:', response?.status);
                return [];
            }

            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                console.log(`No ${mediaType} results found for:`, query);
                return [];
            }

            console.log(`Found ${data.results.length} results for ${query}`);

            return data.results.slice(0, 5).map(item => ({
                title: item.name || item.title,
                cover: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
                year: (item.first_air_date || item.release_date) ? new Date(item.first_air_date || item.release_date).getFullYear() : '',
                type: type
            }));
        } catch (error) {
            console.error('Error searching TMDB:', error);
            return [];
        }
    }

    displaySuggestions(results) {
        const container = document.getElementById('suggestions');

        if (results.length === 0) {
            this.hideSuggestions();
            return;
        }

        container.innerHTML = results.map(item => `
            <div class="suggestion-item" 
                 data-title="${this.escapeHtml(item.title)}" 
                 data-cover="${item.cover || ''}" 
                 data-original-thumb="${item.originalThumb || ''}">
                ${item.cover ?
                `<img src="${item.cover}" 
                      alt="${item.title}" 
                      class="suggestion-cover" 
                      onerror="if(this.dataset.fallback){this.src=this.dataset.fallback; this.closest('.suggestion-item').dataset.cover=this.dataset.fallback;} else {this.style.display='none';}"
                      data-fallback="${item.originalThumb || ''}">` :
                `<div class="suggestion-cover" style="display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">N/A</div>`
            }
                <div class="suggestion-info">
                    <div class="suggestion-title">${this.escapeHtml(item.title)}</div>
                    ${item.year ? `<div class="suggestion-meta">${item.year}</div>` : ''}
                </div>
            </div>
        `).join('');

        container.classList.add('show');

        // Bind click events
        container.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                document.getElementById('mediaTitle').value = item.dataset.title;
                document.getElementById('mediaCover').value = item.dataset.cover;
                this.previewCover(item.dataset.cover);
                this.hideSuggestions();
            });
        });
    }

    hideSuggestions() {
        document.getElementById('suggestions').classList.remove('show');
    }

    // ===== Search Autocomplete =====
    showSearchAutocomplete(query) {
        if (!query || query.length < 2) {
            this.hideSearchAutocomplete();
            return;
        }

        // Get all unique titles from media that match the query
        const titles = this.media
            .map(m => m.title)
            .filter(title => title.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5);

        if (titles.length === 0) {
            this.hideSearchAutocomplete();
            return;
        }

        // Create autocomplete dropdown if it doesn't exist
        let autocomplete = document.getElementById('searchAutocomplete');
        if (!autocomplete) {
            autocomplete = document.createElement('div');
            autocomplete.id = 'searchAutocomplete';
            autocomplete.className = 'suggestions search-autocomplete';
            autocomplete.style.position = 'absolute';
            autocomplete.style.top = '100%';
            autocomplete.style.left = '0';
            autocomplete.style.right = '0';
            autocomplete.style.zIndex = '100';
            document.querySelector('.search-bar').appendChild(autocomplete);
        }

        autocomplete.innerHTML = titles.map(title => `
            <div class="autocomplete-item" data-title="${this.escapeHtml(title)}">
                <span>🔍</span>
                <span>${this.escapeHtml(title)}</span>
            </div>
        `).join('');

        autocomplete.classList.add('show');

        // Bind click events
        autocomplete.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const searchInput = document.getElementById('searchInput');
                searchInput.value = item.dataset.title;
                this.searchQuery = item.dataset.title.toLowerCase();
                this.render();
                this.hideSearchAutocomplete();
            });
        });
    }

    hideSearchAutocomplete() {
        const autocomplete = document.getElementById('searchAutocomplete');
        if (autocomplete) {
            autocomplete.classList.remove('show');
        }
    }

    // ===== Pagination Helpers =====
    getTotalPages() {
        const filtered = this.getFilteredMedia();
        return Math.ceil(filtered.length / this.itemsPerPage);
    }

    goToPage(page) {
        const totalPages = this.getTotalPages();
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.render();
            // Scroll to top of grid
            document.getElementById('mediaGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    updatePaginationControls(totalPages, totalItems) {
        const paginationTop = document.getElementById('paginationTop');
        const pageInfo = document.getElementById('pageInfo');
        const firstBtn = document.getElementById('firstPage');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        const lastBtn = document.getElementById('lastPage');

        // Show/hide pagination
        if (totalPages <= 1) {
            paginationTop.style.display = 'none';
        } else {
            paginationTop.style.display = 'flex';
        }

        // Update page info
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);
        pageInfo.textContent = `${startItem}-${endItem} di ${totalItems}`;

        // Update button states
        firstBtn.disabled = this.currentPage === 1;
        prevBtn.disabled = this.currentPage === 1;
        nextBtn.disabled = this.currentPage === totalPages;
        lastBtn.disabled = this.currentPage === totalPages;
    }

    hidePagination() {
        document.getElementById('paginationTop').style.display = 'none';
    }

    // ===== View Toggle =====
    toggleView() {
        this.compactView = !this.compactView;
        const viewToggle = document.getElementById('viewToggle');
        const viewIcon = document.getElementById('viewIcon');
        const viewText = document.getElementById('viewText');

        if (this.compactView) {
            viewToggle.classList.add('active');
            viewIcon.textContent = '📋';
            viewText.textContent = 'Normale';
        } else {
            viewToggle.classList.remove('active');
            viewIcon.textContent = '📋';
            viewText.textContent = 'Compatta';
        }

        this.render();
    }
}

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    new MediaTracker();
});
