// $(document).ready(() => {

// })

$(() => {

  const fetchBlogs = () => {
    $.ajax({
      url: '/api/blogs',
      method: 'GET',
      dataType: 'json',
      success: (blogs) => {
        console.log("data", blogs);
        createBlogs(blogs);
      },
      error: (err) => {
        console.log(`error: ${err}`)
      } 
    });
  };

  fetchBlogs();


  const createBlog = (blog) => {
    const $title = $('<h2>').text(blog.title);
    const $body = $('<p>').text(blog.body);
    const $authorId = $('<p>').text(`author id: ${blog.userId}`);
    const $blog = $('<article>').addClass('blog-post');

    $blog.append($title, $body, $authorId);
    return $blog;
  };

  const createBlogs = (blogs) => {
    const $blogsContainer = $('.blogs-container');
    $blogsContainer.empty();
    for(const blog of blogs) {
      const $blog = createBlog(blog);
      $blogsContainer.prepend($blog);
    }
  }

  const $form = $('#new-blog-form');

  $form.on('submit', function(event){
    event.preventDefault();
    console.log('The form was submitted!')
    const serializedData = $(this).serialize();

    console.log(serializedData);

    $.post('/api/blogs', serializedData, (response) => {
      console.log(response)
      fetchBlogs();
    })

  })



});