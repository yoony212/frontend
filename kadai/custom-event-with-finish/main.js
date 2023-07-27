const initialBooks = [
  {
    id: 1,
    image: './images/item_book_1.jpg',
    title: '初めてのプログラミング',
    author: '煌木 太郎',
    hasRead: false,
  },
  {
    id: 2,
    image: './images/item_book_2.jpg',
    title: '実践で学ぶSEO入門',
    author: '煌木 太郎',
    hasRead: true,
  },
  {
    id: 3,
    image: './images/item_book_3.jpg',
    title: '実践 Webアプリケーション開発',
    author: '煌木 太郎',
    hasRead: false,
  },
  {
    id: 4,
    image: './images/item_book_4.jpg',
    title: '詳しい解説付き！ HTML5',
    author: '煌木 太郎',
    hasRead: true,
  },
  {
    id: 5,
    image: './images/item_book_5.jpg',
    title: 'みんなのプログラミング講座',
    author: '煌木 太郎',
    hasRead: false,
  },
];

/**
 * -------------------
 * BookWishコンポーネント
 * -------------------
 */
const BookWish = {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  template: `
    <li class="book media my-4">
      <img
        class="mr-3"
        v-bind:src="book.image"
        alt=""
        width="64"
        height="83"
      >
      <div class="media-body d-flex justify-content-between align-self-center">
        <div class="mr-2">
          <h3 class="h5">{{ book.title }}</h3>
          {{ book.author }}
        </div>
        <div class="book__actions mt-3 mr-xl-5 text-center text-black-50">

          <!-- TODO: 以下のspan要素をクリックしたときに、カスタムイベントを発行する -->
          <!-- イベント名は 'finish-book' としてください -->
          <span
            class="book__action book__action--finish mr-3"
            title="読み終わった"
            role="button"
            v-on:click="$emit('finish-book', book.id)"
          >
            <i class="fas fa-book-open"></i>
          </span>

          <span
            class="book__action book__action--deletion mr-3"
            title="削除する"
            role="button"
            v-on:click="$emit('delete-book', book.id)"
          >
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </div>
    </li>
  `,
};

/**
 * ---------------------
 * BookFinishコンポーネント
 * ---------------------
 */
const BookFinish = {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  template: `
    <li class="book media my-4">
      <img
        class="mr-3"
        v-bind:src="book.image"
        alt=""
        width="64"
        height="83"
      >
      <div class="media-body align-self-center">
        <div>
          <h3 class="mt-0 mb-1 h5">{{ book.title }}</h3>
          {{ book.author }}
        </div>
      </div>
    </li>
  `,
};

/**
 * -----------------
 * ルートVueインスタンス
 * -----------------
 */
new Vue({
  el: '#main',
  components: {
    BookWish,
    BookFinish,
  },
  data: { books: initialBooks },
  computed: {
    wishBooks() {
      return this.books.filter((book) => !book.hasRead);
    },
    finishBooks() {
      return this.books.filter((book) => book.hasRead);
    },
  },
  methods: {
    onDeleteBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
    onFinishBook(id) {
      const books = this.books.filter((book) => book.id !== id);
      const targetBook = this.books.find((book) => book.id === id);
      targetBook.hasRead = true;

      // 直近に読んだ本が、先頭にくるようにする
      this.books = [targetBook, ...books];
    },
  },
});
