// Flickr API key
const API_KEY = 'df5b51680612c75674c5ff87e3d22817';

/**
 * --------------------
 * Flickr API 関連の関数
 * --------------------
 */

// 検索テキストに応じたデータを取得するためのURLを作成して返す
const getRequestURL = (searchText) => {
  const parameters = {
    method: 'flickr.photos.search',
    api_key: API_KEY,
    text: searchText, // 検索テキスト
    sort: 'interestingness-desc', // 興味深さ順
    per_page: 4, // 取得件数
    license: '4', // Creative Commons Attributionのみ
    extras: 'owner_name,license', // 追加で取得する情報
    format: 'json', // レスポンスをJSON形式に
    nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
  };
  const url = new URL('https://api.flickr.com/services/rest');
  url.search = new URLSearchParams(parameters);
  return url;
};

// photoオブジェクトから画像のURLを作成して返す
const getFlickrImageURL = (photo, size) => {
  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
  if (size) {
    // サイズ指定ありの場合
    url += `_${size}`;
  }
  url += '.jpg';
  return url;
};

// photoオブジェクトからページのURLを作成して返す
const getFlickrPageURL = (photo) =>
  `https://www.flickr.com/photos/${photo.owner}/${photo.id}`;

// photoオブジェクトからaltテキストを生成して返す
const getFlickrText = (photo) => {
  let text = `"${photo.title}" by ${photo.ownername}`;
  if (photo.license === '4') {
    // Creative Commons Attribution（CC BY）ライセンス
    text += ' / CC BY';
  }
  return text;
};

/**
 * ※参考：コードのひな形
 * ここまで学習した内容を基に、Vueのコードを書くときの「ひな形」を用意しました。課題に取り組む際の参考にしてください。
 */

new Vue({
  el: '#gallery_content', // elオプションの値に '#gallery' を設定

  data: {
    photos: [],
  },

  methods: {
    fetchImagesFromFlickr(searchText) {
      const url = getRequestURL(searchText);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.stat !== 'ok') {
            throw new Error('データの取得に失敗しました。');
          }

          const fetchedPhotos = data.photos.photo;
          const arrangedPhotos = [];

          for (let i = 0, len = fetchedPhotos.length; i < len; i++) {
            const photo = fetchedPhotos[i];
            const arrangedPhoto = {
              id: photo.id,
              imageURL: getFlickrImageURL(photo, 'q'),
              pageURL: getFlickrPageURL(photo),
              text: getFlickrText(photo),
            };
            arrangedPhotos.push(arrangedPhoto);
          }
          this.photos = arrangedPhotos;
        });
    },
  },

  created() {
    const gallery_list = ['cat', 'dog'];
    for (let i = 0; i < gallery_list.length; i++) {
      fetchImagesFromFlickr(gallery_list[i]);
    }
  },
});
