/* jshint curly:true, debug:true */

// Flickr API key
const API_KEY = 'df5b51680612c75674c5ff87e3d22817';

// 状態の定数
const IS_INITIALIZED = 'IS_INITIALIZED'; // 最初の状態
const IS_FETCHING = 'IS_FETCHING'; // APIからデータを取得中
const IS_FAILED = 'IS_FAILED'; // APIからデータを取得できなかった
const IS_FOUND = 'IS_FOUND'; // APIから画像データを取得できた
const IS_NOT_FOUND = 'IS_NOT_FOUND';
/**
 * TODO: 状態の定数を定義する
 * この定数は「検索テキストに該当する画像データがない状態」を表す
 * 定数名は、例えば IS_NOT_FOUND などが分かりやすい
 */

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
    per_page: 12, // 取得件数
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
 * -------------
 * Vueインスタンス
 * -------------
 */

new Vue({
  el: '#app',

  data: {
    prevSearchText: '',
    photos: [],
    currentState: IS_INITIALIZED,
  },

  computed: {
    isinitialized() {
      return this.currentState === IS_INITIALIZED;
    },
    isFetching() {
      return this.currentState === IS_FETCHING;
    },
    isFailed() {
      return this.currentState === IS_FAILED;
    },
    isFound() {
      return this.currentState === IS_FOUND;
    },
    isNotFound() {
      return this.currentState === IS_NOT_FOUND;
    },

    /**
     * TODO: 算出プロパティを定義する
     * この算出プロパティは、現在の状態が「検索テキストに該当する画像データがない状態」と一致するときにtrueを返す
     */
  },

  methods: {
    // 状態を変更する
    toFetching() {
      this.currentState = IS_FETCHING;
    },
    toFailed() {
      this.currentState = IS_FAILED;
    },
    toFound() {
      this.currentState = IS_FOUND;
    },
    toNotFound() {
      this.currentState = IS_NOT_FOUND;
    },

    /**
     * TODO: メソッドを定義する
     * このメソッドは、現在の状態を「検索テキストに該当する画像データがない状態」に変更する
     */

    fetchImagesFromFlickr(event) {
      const searchText = event.target.elements.search.value;

      // APIからデータを取得中で、なおかつ検索テキストが前回の検索時と同じ場合、再度リクエストしない
      if (this.isFetching && searchText === this.prevSearchText) {
        return;
      }

      // Vueインスタンスのデータとして、検索テキストを保持しておく
      this.prevSearchText = searchText;

      this.toFetching();

      const url = getRequestURL(searchText);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.stat !== 'ok') {
            this.toFailed();
            return;
          }

          const fetchedPhotos = data.photos.photo;

          // 検索テキストに該当する画像データがない場合
          if (fetchedPhotos.length === 0) {
            // TODO: メソッドを呼び出して、現在の状態を「検索テキストに該当する画像データがない状態」に変更する
            this.toNotFound();
            return;
          }

          this.photos = fetchedPhotos.map((photo) => ({
            id: photo.id,
            imageURL: getFlickrImageURL(photo, 'q'),
            pageURL: getFlickrPageURL(photo),
            text: getFlickrText(photo),
          }));
          this.toFound();
        })
        .catch(() => {
          this.toFailed();
        });
    },
  },
});
