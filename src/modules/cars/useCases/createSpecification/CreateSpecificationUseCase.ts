import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { ICreateSpecificationDTO } from '../../repositories/ISpecificationRepository';

class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
