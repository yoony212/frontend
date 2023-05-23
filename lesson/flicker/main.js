// Flickr API key
const API_KEY = 'b7ce56292ba4f5ef968acbd0666f9895';

// Flickr画像データのURLを返す
const getFlickrImageURL = (photo, size) => {
  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
    photo.secret
  }`;
  if (size) {
    // サイズ指定ありの場合
    url += `_${size}`;
  }
  url += '.jpg';
  return url;
};

// Flickr画像の元ページのURLを返す
const getFlickrPageURL = (photo) => `https://www.flickr.com/photos/${photo.owner}/${photo.id}`;

// Flickr画像のaltテキストを返す
const getFlickrText = (photo) => {
  let text = `"${photo.title}" by ${photo.ownername}`;
  if (photo.license === '4') {
    // Creative Commons Attribution（CC BY）ライセンス
    text += ' / CC BY';
  }
  return text;
};

// リクエストパラメータを作る
const parameters = $.param({
  method: 'flickr.photos.search',
  api_key: API_KEY,
  text: 'cat', // 検索テキスト
  sort: 'interestingness-desc', // 興味深さ順
  per_page: 12, // 取得件数
  license: '4', // Creative Commons Attributionのみ
  extras: 'owner_name,license', // 追加で取得する情報
  format: 'json', // レスポンスをJSON形式に
  nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
});
const url = `https://api.flickr.com/services/rest/?${parameters}`;
console.log(url);

// 猫の画像を検索して表示
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // データが取得できなかった場合
    if (data.stat !== 'ok') {
      throw new Error('データの取得に失敗しました。');
    }

    // 空の<div>を作る
    const $div = $('<div>');

    // ヒット件数
    $div.append(`<div>${data.photos.total} photos in total</div>`);

    for (let i = 0; i < data.photos.photo.length; i++) {
      const photo = data.photos.photo[i];
      const photoText = getFlickrText(photo);

      // $divに <a href="..." ...><img src="..." ...></a> を追加する
      $div.append(
        $('<a>', {
          class: 'd-inline-block img-tooltip',
          'data-text': photoText,
          href: getFlickrPageURL(photo),
          rel: 'noopener noreferrer',
          target: '_blank', // リンクを新規タブで開く
        }).append(
          $('<img>', {
            src: getFlickrImageURL(photo, 'q'),
            alt: photoText,
            width: 150,
            height: 150,
          }),
        ),
      );
    }
    // $divを#mainに追加する
    $div.appendTo('#main');
  }).catch((error) => {
    console.error(`エラーが発生しました： ${error.message}`);
  });