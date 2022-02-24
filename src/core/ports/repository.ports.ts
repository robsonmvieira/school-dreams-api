export interface Save<Entity> {
  save(entity: Entity): Promise<Entity>
}

export interface FindMany<Entity, EntityProps> {
  findMany(entity: EntityProps): Promise<Entity[]>
}
export interface FindOne<Entity, EntityProps> {
  findOneOrThrow(params: EntityProps): Promise<Entity>
}

export interface FindOneById<Entity> {
  findOneByIdOrThrow(id: string): Promise<Entity>
}
export interface DeleteOne<Entity> {
  delete(entity: Entity): Promise<Entity>
}

export interface RepositoryPort<Entity, EntityProps>
  extends Save<Entity>,
    FindOne<Entity, EntityProps>,
    FindOneById<Entity>,
    FindMany<Entity, EntityProps>,
    DeleteOne<Entity> {}
