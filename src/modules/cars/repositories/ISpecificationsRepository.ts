import { Specification } from "../model/Specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  create({ name, description }: ISpecificationDTO): void;
}

export { ISpecificationsRepository, ISpecificationDTO };
