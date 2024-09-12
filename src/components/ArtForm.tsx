import React from "react"
import { useForm, FieldErrors } from "react-hook-form"
import { ArtPiece } from "../types"

interface ArtFromValues extends ArtPiece {}
interface ArtFormProps {
  onFormSubmit: (data: ArtFromValues) => void
}

const ArtForm: React.FC<ArtFormProps> = ({ onFormSubmit }) => {
  const form = useForm<ArtFromValues>({
    defaultValues: {
      title: "",
      artist: "",
      year: undefined,
      medium: "",
      genre: "",
      description: "",
      image: "",
    },
  })

  const { register, handleSubmit, formState, reset } = form
  const { errors } = formState

  const onSubmit = (data: ArtFromValues) => {
    onFormSubmit(data)
    reset()
  }

  // const onError = (errors: FieldErrors<ArtFromValues>) => {
  //   console.log("Form errors", errors)
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <input
          type="text"
          id="title"
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
        />
        <p>{errors.title && <span>{errors.title.message}</span>}</p>
      </div>

      <div className="form-control">
        <input
          type="text"
          id="artist"
          placeholder="Artist"
          {...register("artist", { required: "Artist is required" })}
        />
        <p>{errors.artist && <span>{errors.artist.message}</span>}</p>
      </div>

      <div className="form-control">
        <input
          type="number"
          id="year"
          placeholder="Year"
          {...register("year", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Enter a valid year",
            },
          })}
        />
        <p>{errors.year && <span>{errors.year.message}</span>}</p>
      </div>

      <div className="form-control">
        <input
          type="text"
          id="medium"
          placeholder="Medium"
          {...register("medium", { required: "Medium is required" })}
        />
        <p>{errors.medium && <span>{errors.medium.message}</span>}</p>
      </div>

      <div className="form-control">
        <input
          type="text"
          id="genre"
          placeholder="Genre"
          {...register("genre", { required: "Genre is required" })}
        />
        <p>{errors.genre && <span>{errors.genre.message}</span>}</p>
      </div>

      <div className="form-control">
        <textarea
          id="description"
          placeholder="Description"
          {...register("description", { required: "Description is required" })}
        />
        <p>{errors.description && <span>{errors.description.message}</span>}</p>
      </div>

      <div className="form-control">
        <input
          type="url"
          id="image"
          placeholder="Image URL"
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
              message: "Enter a valid URL",
            },
          })}
        />
        <p>{errors.image && <span>{errors.image.message}</span>}</p>
      </div>

      <button type="submit">Add Art Piece</button>
    </form>
  )
}

export default ArtForm
