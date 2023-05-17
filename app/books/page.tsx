import { Book } from "../components"

const books = [
  {

    title: 'Marvel: Secret Wars (2015)',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/comics-secret-wars-wallpaper-preview_hvwlhs.jpg",
    rating: 9.5
  },

  {

    title: 'Marvel: Secret Invasion',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/51Uh4Y-MSML_dpbslx.jpg",
    rating: 9.5
  },

  {

    title: 'Gaiman: American Gods',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/american-gods-my-ainsel_e6x1h6.jpg",
    rating: 9.5
  },
  {
    title: 'Iceberg Slim: Pimp',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/content_fzikqb.jpg",
    rating: 9.5
  },

  {
    title: 'Kent Bent: Refactoring',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/81ezCJTXFKL_uzv0u5.jpg",
    rating: 9.5
  },
  {

    title: 'Marvel: Secret Wars (2015)',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/comics-secret-wars-wallpaper-preview_hvwlhs.jpg",
    rating: 9.5
  },

  {

    title: 'Marvel: Secret Invasion',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/51Uh4Y-MSML_dpbslx.jpg",
    rating: 9.5
  },

  {

    title: 'Gaiman: American Gods',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/american-gods-my-ainsel_e6x1h6.jpg",
    rating: 9.5
  },
  {
    title: 'Iceberg Slim: Pimp',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/content_fzikqb.jpg",
    rating: 9.5
  },

  {
    title: 'Kent Bent: Refactoring',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/81ezCJTXFKL_uzv0u5.jpg",
    rating: 9.5
  },

  {

    title: 'Marvel: Secret Wars (2015)',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/comics-secret-wars-wallpaper-preview_hvwlhs.jpg",
    rating: 9.5
  },

  {

    title: 'Marvel: Secret Invasion',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/51Uh4Y-MSML_dpbslx.jpg",
    rating: 9.5
  },

  {

    title: 'Gaiman: American Gods',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/american-gods-my-ainsel_e6x1h6.jpg",
    rating: 9.5
  },
  {
    title: 'Iceberg Slim: Pimp',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/content_fzikqb.jpg",
    rating: 9.5
  },

  {
    title: 'Kent Bent: Refactoring',
    image: "https://res.cloudinary.com/kre/image/upload/v1684351212/81ezCJTXFKL_uzv0u5.jpg",
    rating: 9.5
  },


]

export default function Page() {
  return (
    <div className="books-page">
      {books.map((book, index) => {
        return (
          <Book {...book} key={index} />
        )
      })}
    </div>
  )
}
