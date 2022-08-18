import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
