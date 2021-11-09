const initialTracks = [
  /// ///////////////////////////////      PLAYLIST   Céline Dion       ///////////////////////////////
  // {
  //   id: 130855172,
  //   readable: true,
  //   title: 'Encore un soir',
  //   title_short: 'Encore un soir',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/130855172',
  //   duration: 263,
  //   rank: 801184,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-f.dzcdn.net/stream/c-f8c834e437d001e1637fb0aab39bdd34-6.mp3',
  //   md5_image: '156da0776275f7afa331b1b7ee103e26',
  //   time_add: 1635263587,
  //   artist: {
  //     id: 198,
  //     name: 'Céline Dion',
  //     link: 'https://www.deezer.com/artist/198',
  //     tracklist: 'https://api.deezer.com/artist/198/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 13890556,
  //     title: 'Encore un soir (Deluxe Edition)',
  //     cover: 'https://api.deezer.com/album/13890556/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/156da0776275f7afa331b1b7ee103e26/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/156da0776275f7afa331b1b7ee103e26/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/156da0776275f7afa331b1b7ee103e26/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/156da0776275f7afa331b1b7ee103e26/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '156da0776275f7afa331b1b7ee103e26',
  //     tracklist: 'https://api.deezer.com/album/13890556/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 495635702,
  //   readable: true,
  //   title: 'Ashes (from "Deadpool 2" Motion Picture Soundtrack)',
  //   title_short: 'Ashes',
  //   title_version: '(from "Deadpool 2" Motion Picture Soundtrack)',
  //   link: 'https://www.deezer.com/track/495635702',
  //   duration: 199,
  //   rank: 774720,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-b.dzcdn.net/stream/c-bab19077145fddd8b31c90a09855f52d-5.mp3',
  //   md5_image: '671f30ad0146e484925893df18ab58ca',
  //   time_add: 1635263649,
  //   artist: {
  //     id: 198,
  //     name: 'Céline Dion',
  //     link: 'https://www.deezer.com/artist/198',
  //     tracklist: 'https://api.deezer.com/artist/198/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 62813782,
  //     title: 'Ashes (from "Deadpool 2" Motion Picture Soundtrack)',
  //     cover: 'https://api.deezer.com/album/62813782/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/671f30ad0146e484925893df18ab58ca/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/671f30ad0146e484925893df18ab58ca/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/671f30ad0146e484925893df18ab58ca/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/671f30ad0146e484925893df18ab58ca/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '671f30ad0146e484925893df18ab58ca',
  //     tracklist: 'https://api.deezer.com/album/62813782/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 2205002,
  //   readable: true,
  //   title: 'On ne change pas',
  //   title_short: 'On ne change pas',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/2205002',
  //   duration: 247,
  //   rank: 770400,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-5.dzcdn.net/stream/c-5bae981e2e7e25fbb40c4e115bb6ad1b-5.mp3',
  //   md5_image: 'fc67a093d5d9db713dca0b549293d4e3',
  //   time_add: 1635263649,
  //   artist: {
  //     id: 198,
  //     name: 'Céline Dion',
  //     link: 'https://www.deezer.com/artist/198',
  //     tracklist: 'https://api.deezer.com/artist/198/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 216959,
  //     title: 'On ne change pas',
  //     cover: 'https://api.deezer.com/album/216959/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/fc67a093d5d9db713dca0b549293d4e3/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/fc67a093d5d9db713dca0b549293d4e3/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/fc67a093d5d9db713dca0b549293d4e3/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/fc67a093d5d9db713dca0b549293d4e3/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'fc67a093d5d9db713dca0b549293d4e3',
  //     tracklist: 'https://api.deezer.com/album/216959/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 714269242,
  //   readable: true,
  //   title: 'All By Myself',
  //   title_short: 'All By Myself',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/714269242',
  //   duration: 312,
  //   rank: 742739,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 2,
  //   preview:
  //     'https://cdns-preview-2.dzcdn.net/stream/c-29623e28e6094292e847620cfda739d0-2.mp3',
  //   md5_image: '348692abbdb9950a998c8d58cbba78b7',
  //   time_add: 1635263649,
  //   artist: {
  //     id: 198,
  //     name: 'Céline Dion',
  //     link: 'https://www.deezer.com/artist/198',
  //     tracklist: 'https://api.deezer.com/artist/198/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 104051722,
  //     title: 'Falling into You',
  //     cover: 'https://api.deezer.com/album/104051722/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '348692abbdb9950a998c8d58cbba78b7',
  //     tracklist: 'https://api.deezer.com/album/104051722/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 1015665,
  //   readable: true,
  //   title: 'Destin',
  //   title_short: 'Destin',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/1015665',
  //   duration: 255,
  //   rank: 733257,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 2,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-f.dzcdn.net/stream/c-fb3126738ff3bcd1473e4122303b0270-3.mp3',
  //   md5_image: '3e2f7d9b6981565984c8dede9e162131',
  //   time_add: 1635263649,
  //   artist: {
  //     id: 198,
  //     name: 'Céline Dion',
  //     link: 'https://www.deezer.com/artist/198',
  //     tracklist: 'https://api.deezer.com/artist/198/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 111884,
  //     title: "D'Eux",
  //     cover: 'https://api.deezer.com/album/111884/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3e2f7d9b6981565984c8dede9e162131/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3e2f7d9b6981565984c8dede9e162131/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3e2f7d9b6981565984c8dede9e162131/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3e2f7d9b6981565984c8dede9e162131/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '3e2f7d9b6981565984c8dede9e162131',
  //     tracklist: 'https://api.deezer.com/album/111884/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },

  /// ///////////////////////////////      PLAYLIST   Système of a down       ///////////////////////////////
  // {
  //   id: 15523793,
  //   readable: true,
  //   title: 'Toxicity',
  //   title_short: 'Toxicity',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/15523793',
  //   duration: 218,
  //   rank: 930686,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 2,
  //   preview:
  //     'https://cdns-preview-b.dzcdn.net/stream/c-b0d103a775b345bcc014c9993d6c9a4a-5.mp3',
  //   md5_image: '1d2f10d7d6bfb816148e8dda5c32f841',
  //   time_add: 1635765662,
  //   artist: {
  //     id: 458,
  //     name: 'System of a Down',
  //     link: 'https://www.deezer.com/artist/458',
  //     tracklist: 'https://api.deezer.com/artist/458/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 1434890,
  //     title: 'Toxicity',
  //     cover: 'https://api.deezer.com/album/1434890/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/1d2f10d7d6bfb816148e8dda5c32f841/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/1d2f10d7d6bfb816148e8dda5c32f841/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/1d2f10d7d6bfb816148e8dda5c32f841/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/1d2f10d7d6bfb816148e8dda5c32f841/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '1d2f10d7d6bfb816148e8dda5c32f841',
  //     tracklist: 'https://api.deezer.com/album/1434890/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 546578,
  //   readable: true,
  //   title: 'Lonely Day',
  //   title_short: 'Lonely Day',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/546578',
  //   duration: 167,
  //   rank: 898260,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-3.dzcdn.net/stream/c-366c8e0040970911e82b776fcb2bdd8d-5.mp3',
  //   md5_image: '047bea0f3708bd88049e675c918f9605',
  //   time_add: 1635765662,
  //   artist: {
  //     id: 458,
  //     name: 'System of a Down',
  //     link: 'https://www.deezer.com/artist/458',
  //     tracklist: 'https://api.deezer.com/artist/458/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 72046,
  //     title: 'Hypnotize',
  //     cover: 'https://api.deezer.com/album/72046/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '047bea0f3708bd88049e675c918f9605',
  //     tracklist: 'https://api.deezer.com/album/72046/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 627656,
  //   readable: true,
  //   title: 'Sugar',
  //   title_short: 'Sugar',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/627656',
  //   duration: 153,
  //   rank: 681361,
  //   explicit_lyrics: true,
  //   explicit_content_lyrics: 1,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-6.dzcdn.net/stream/c-63ec7c9cf9b58c6428cf40353193693a-5.mp3',
  //   md5_image: 'b5292c48ea66f5f87d081f95ba2d61a5',
  //   time_add: 1635765662,
  //   artist: {
  //     id: 458,
  //     name: 'System of a Down',
  //     link: 'https://www.deezer.com/artist/458',
  //     tracklist: 'https://api.deezer.com/artist/458/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 78576,
  //     title: 'System Of A Down',
  //     cover: 'https://api.deezer.com/album/78576/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b5292c48ea66f5f87d081f95ba2d61a5/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b5292c48ea66f5f87d081f95ba2d61a5/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b5292c48ea66f5f87d081f95ba2d61a5/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b5292c48ea66f5f87d081f95ba2d61a5/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'b5292c48ea66f5f87d081f95ba2d61a5',
  //     tracklist: 'https://api.deezer.com/album/78576/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 70996748,
  //   readable: true,
  //   title: 'Spiders',
  //   title_short: 'Spiders',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/70996748',
  //   duration: 215,
  //   rank: 624517,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 2,
  //   preview:
  //     'https://cdns-preview-c.dzcdn.net/stream/c-c921f0abf85b36ea8878b68ab520dd1b-7.mp3',
  //   md5_image: 'd861e28aa0c976db91a019d6fe7c5463',
  //   time_add: 1635765662,
  //   artist: {
  //     id: 458,
  //     name: 'System of a Down',
  //     link: 'https://www.deezer.com/artist/458',
  //     tracklist: 'https://api.deezer.com/artist/458/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 6969482,
  //     title: 'System Of A Down',
  //     cover: 'https://api.deezer.com/album/6969482/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/d861e28aa0c976db91a019d6fe7c5463/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/d861e28aa0c976db91a019d6fe7c5463/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/d861e28aa0c976db91a019d6fe7c5463/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/d861e28aa0c976db91a019d6fe7c5463/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'd861e28aa0c976db91a019d6fe7c5463',
  //     tracklist: 'https://api.deezer.com/album/6969482/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },
  // {
  //   id: 561753,
  //   readable: true,
  //   title: 'Hypnotize',
  //   title_short: 'Hypnotize',
  //   title_version: '',
  //   link: 'https://www.deezer.com/track/561753',
  //   duration: 189,
  //   rank: 750687,
  //   explicit_lyrics: false,
  //   explicit_content_lyrics: 0,
  //   explicit_content_cover: 0,
  //   preview:
  //     'https://cdns-preview-8.dzcdn.net/stream/c-8668907c4fc7c82ed34ea16fdb7353d7-4.mp3',
  //   md5_image: '047bea0f3708bd88049e675c918f9605',
  //   time_add: 1635765662,
  //   artist: {
  //     id: 458,
  //     name: 'System of a Down',
  //     link: 'https://www.deezer.com/artist/458',
  //     tracklist: 'https://api.deezer.com/artist/458/top?limit=50',
  //     type: 'artist',
  //   },
  //   album: {
  //     id: 72046,
  //     title: 'Hypnotize',
  //     cover: 'https://api.deezer.com/album/72046/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/047bea0f3708bd88049e675c918f9605/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '047bea0f3708bd88049e675c918f9605',
  //     tracklist: 'https://api.deezer.com/album/72046/tracks',
  //     type: 'album',
  //   },
  //   type: 'track',
  // },

  /// ///////////////////////////////      PLAYLIST   Francis Cabrel       ///////////////////////////////
  {
    id: 72066476,
    readable: true,
    title: 'Animal (Remastered)',
    title_short: 'Animal',
    title_version: '(Remastered)',
    link: 'https://www.deezer.com/track/72066476',
    duration: 327,
    rank: 608087,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-a.dzcdn.net/stream/c-aef7e678959a2b865669c8b1ed903dc6-7.mp3',
    md5_image: 'b80edc86b5d37cb64420c4ff7fc15385',
    time_add: 1635663296,
    artist: {
      id: 670,
      name: 'Francis Cabrel',
      link: 'https://www.deezer.com/artist/670',
      tracklist: 'https://api.deezer.com/artist/670/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 7079912,
      title: 'Sarbacane (Remastered)',
      cover: 'https://api.deezer.com/album/7079912/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/1000x1000-000000-80-0-0.jpg',
      md5_image: 'b80edc86b5d37cb64420c4ff7fc15385',
      tracklist: 'https://api.deezer.com/album/7079912/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 72066526,
    readable: true,
    title: 'Assis sur le rebord du monde (Remastered)',
    title_short: 'Assis sur le rebord du monde',
    title_version: '(Remastered)',
    link: 'https://www.deezer.com/track/72066526',
    duration: 206,
    rank: 610908,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-7.dzcdn.net/stream/c-79ef5da5b2d948486812335d8dad3372-6.mp3',
    md5_image: '80844751cd0a48825327ae6176069f64',
    time_add: 1635663296,
    artist: {
      id: 670,
      name: 'Francis Cabrel',
      link: 'https://www.deezer.com/artist/670',
      tracklist: 'https://api.deezer.com/artist/670/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 7079919,
      title: 'Samedi soir sur la terre (Remastered)',
      cover: 'https://api.deezer.com/album/7079919/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/80844751cd0a48825327ae6176069f64/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/80844751cd0a48825327ae6176069f64/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/80844751cd0a48825327ae6176069f64/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/80844751cd0a48825327ae6176069f64/1000x1000-000000-80-0-0.jpg',
      md5_image: '80844751cd0a48825327ae6176069f64',
      tracklist: 'https://api.deezer.com/album/7079919/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 72066477,
    readable: true,
    title: "C'est écrit (Remastered)",
    title_short: "C'est écrit",
    title_version: '(Remastered)',
    link: 'https://www.deezer.com/track/72066477',
    duration: 353,
    rank: 732479,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-69174662c70b9addae9aa7a96f35f1a8-6.mp3',
    md5_image: 'b80edc86b5d37cb64420c4ff7fc15385',
    time_add: 1635663296,
    artist: {
      id: 670,
      name: 'Francis Cabrel',
      link: 'https://www.deezer.com/artist/670',
      tracklist: 'https://api.deezer.com/artist/670/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 7079912,
      title: 'Sarbacane (Remastered)',
      cover: 'https://api.deezer.com/album/7079912/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/b80edc86b5d37cb64420c4ff7fc15385/1000x1000-000000-80-0-0.jpg',
      md5_image: 'b80edc86b5d37cb64420c4ff7fc15385',
      tracklist: 'https://api.deezer.com/album/7079912/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 433389382,
    readable: true,
    title: "C'était l'hiver (Remastered)",
    title_short: "C'était l'hiver",
    title_version: '(Remastered)',
    link: 'https://www.deezer.com/track/433389382',
    duration: 233,
    rank: 555658,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-d.dzcdn.net/stream/c-d07c3561a83984e217aba59c67308009-7.mp3',
    md5_image: '08156278c43e52f0dae8899be2079abe',
    time_add: 1635663296,
    artist: {
      id: 670,
      name: 'Francis Cabrel',
      link: 'https://www.deezer.com/artist/670',
      tracklist: 'https://api.deezer.com/artist/670/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 52310662,
      title: "L'essentiel 1977-2017",
      cover: 'https://api.deezer.com/album/52310662/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/08156278c43e52f0dae8899be2079abe/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/08156278c43e52f0dae8899be2079abe/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/08156278c43e52f0dae8899be2079abe/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/08156278c43e52f0dae8899be2079abe/1000x1000-000000-80-0-0.jpg',
      md5_image: '08156278c43e52f0dae8899be2079abe',
      tracklist: 'https://api.deezer.com/album/52310662/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 72066454,
    readable: true,
    title: 'Carte postale (Remastered)',
    title_short: 'Carte postale',
    title_version: '(Remastered)',
    link: 'https://www.deezer.com/track/72066454',
    duration: 261,
    rank: 499141,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-3.dzcdn.net/stream/c-372a96a4277a36039edbb30afba22047-6.mp3',
    md5_image: '874c782737a7f52df79e69c3df2cc6b8',
    time_add: 1635663296,
    artist: {
      id: 670,
      name: 'Francis Cabrel',
      link: 'https://www.deezer.com/artist/670',
      tracklist: 'https://api.deezer.com/artist/670/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 7079909,
      title: 'Carte postale (Remastered)',
      cover: 'https://api.deezer.com/album/7079909/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/874c782737a7f52df79e69c3df2cc6b8/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/874c782737a7f52df79e69c3df2cc6b8/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/874c782737a7f52df79e69c3df2cc6b8/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/874c782737a7f52df79e69c3df2cc6b8/1000x1000-000000-80-0-0.jpg',
      md5_image: '874c782737a7f52df79e69c3df2cc6b8',
      tracklist: 'https://api.deezer.com/album/7079909/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 72064820,
    readable: true,
    title: 'Cent ans de plus (Remastered)',
    title_short: 'Cent ans de plus',
    title_version: '(Remastered)',
    link: 'https://www.deezer.com/track/72064820',
    duration: 233,
    rank: 489299,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-b.dzcdn.net/stream/c-b8473b3aab4d93daa75819d739ee69e9-7.mp3',
    md5_image: '2833ab88c8dede00f133535b18da282f',
    time_add: 1635663296,
    artist: {
      id: 670,
      name: 'Francis Cabrel',
      link: 'https://www.deezer.com/artist/670',
      tracklist: 'https://api.deezer.com/artist/670/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 7079664,
      title: 'Hors-saison (Remastered)',
      cover: 'https://api.deezer.com/album/7079664/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2833ab88c8dede00f133535b18da282f/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2833ab88c8dede00f133535b18da282f/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2833ab88c8dede00f133535b18da282f/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2833ab88c8dede00f133535b18da282f/1000x1000-000000-80-0-0.jpg',
      md5_image: '2833ab88c8dede00f133535b18da282f',
      tracklist: 'https://api.deezer.com/album/7079664/tracks',
      type: 'album',
    },
    type: 'track',
  },
];

export default initialTracks;
