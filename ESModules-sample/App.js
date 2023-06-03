// 子コンポーネントを読み込む
import BookFinish from './components/BookFinish.js';
import BookWish from './components/BookWish.js';

// 初期データを読み込む
import initialBooks from './data/books.js';

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
