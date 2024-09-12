import React from "react"
import { useForm } from "react-hook-form"
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
    mode: "onSubmit",
  })

  const { register, handleSubmit, formState, reset } = form
  const { errors } = formState

  const onSubmit = (data: ArtFromValues) => {
    onFormSubmit(data)
    reset()
  }

  const renderError = (fieldError: any) =>
    fieldError && <span>{fieldError.message}</span>

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            type="text"
            id="title"
            placeholder="Title"
            {...register("title", {
              required: {
                value: true,
                message: "Title is required",
              },
            })}
          />
          <p>{renderError(errors.title)}</p>
        </div>

        <div className="form-control">
          <input
            type="text"
            id="artist"
            placeholder="Artist"
            {...register("artist", {
              required: {
                value: true,
                message: "Artist is required",
              },
            })}
          />
          <p>{renderError(errors.artist)}</p>
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
          <p>{renderError(errors.year)}</p>
        </div>

        <div className="form-control">
          <input
            type="text"
            id="medium"
            placeholder="Medium"
            {...register("medium", {
              required: {
                value: true,
                message: "Medium is required",
              },
            })}
          />
          <p>{renderError(errors.medium)}</p>
        </div>

        <div className="form-control">
          <input
            type="text"
            id="genre"
            placeholder="Genre"
            {...register("genre", {
              required: {
                value: true,
                message: "Genre is required",
              },
            })}
          />
          <p>{renderError(errors.genre)}</p>
        </div>

        <div className="form-control">
          <textarea
            id="description"
            placeholder="Description"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          <p>{renderError(errors.description)}</p>
        </div>

        <div className="form-control">
          <input
            type="url"
            id="image"
            placeholder="Image URL"
            {...register("image", {
              required: {
                value: true,
                message: "Image URL is required",
              },
              pattern: {
                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                message: "Enter a valid URL",
              },
            })}
          />
          <p>{renderError(errors.image)}</p>
        </div>

        <button type="submit">Add Art Piece</button>
      </form>
    </div>
  )
}

export default ArtForm
