/**
 * ---------------------
 * BookFinishコンポーネント
 * ---------------------
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
      <div class="media-body align-self-center">
        <div>
          <h3 class="mt-0 mb-1 h5">{{ book.title }}</h3>
          {{ book.author }}
        </div>
      </div>
    </li>
  `,
};
