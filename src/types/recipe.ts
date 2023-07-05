// type de l'object recette
export interface Recipe {
  id: number
  title: string

  
  description?: string

  /*  */
  image: string

  /* difficulté de la recette */
  difficulty: 1 | 2 | 3 | 4 | 5

  /* catégorie de la recette */
  tag: string

  /* temps de préparation en millisecondes */
  preparationTime: number
}
