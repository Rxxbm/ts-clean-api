import { UniqueEntityUUID } from '../../@seedwork/domain/unique-entity-uuid';
import { Entity } from '../entity/entity';

type props = {
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;
};

export class Category extends Entity<props>{
    constructor(
        public readonly props: props,
        id?: UniqueEntityUUID
    ){
        super(props, id);
        this.props.created_at = this.props.created_at ?? new Date();
        this.props.is_active = this.props.is_active ?? true;
        this.props.description = this.props.description ?? null;
    } 

    get name(): string{
        return this.props.name;
    }

    get description(): string{
        return this.props.description;
    }

    get is_active(): boolean{
        return this.props.is_active;
    }

    get created_at(): Date{
        return this.props.created_at;
    }
}
