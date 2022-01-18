// class LikesComponent {
//   constructor() {
//     this.likes = 0;
//   };

//   increment() {
//     this.likes += 1;
//     console.log(this.likes)
//   }
// }

// const likes = new LikesComponent();
// likes.increment()
// likes.increment()
// likes.increment()
// likes.increment()

let likes = 0;
const increment = () => {
  likes++;
  console.log(likes);
};

increment()
increment()
increment()
increment()