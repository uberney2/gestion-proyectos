type CreatedAt = string;
type UpdatedAt = string;

export interface BaseEntity {
  createdAt?: CreatedAt;
  updatedAt?: UpdatedAt;
}
