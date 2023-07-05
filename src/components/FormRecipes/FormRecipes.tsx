import { useForm } from 'react-hook-form';

const FormRecipes = () => {
    const { handleSubmit, register } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...register('title')} />
                <input {...register('description')} />
                <input {...register('difficulty')} />
                <input {...register('tag')} />
                <input {...register('duree')} />
                <button type="submit">Ajouter la recette</button>
            </form>
        </div>
    )
}

export default FormRecipes