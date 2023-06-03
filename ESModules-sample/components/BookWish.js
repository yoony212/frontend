/**
 * -------------------
 * BookWishコンポーネント
 * -------------------
 */
export default {
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
