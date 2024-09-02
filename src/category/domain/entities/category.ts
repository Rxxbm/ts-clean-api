import { UniqueEntityUUID } from '../../@seedwork/domain/unique-entity-uuid';

type props = {
    id?: string;
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;
};

export class Category{
    constructor(
        public readonly props: props
    ){
        this.props.id = this.props.id ?? UniqueEntityUUID.generate();
        this.props.created_at = this.props.created_at ?? new Date();
        this.props.is_active = this.props.is_active ?? true;
        this.props.description = this.props.description ?? null;
    } 
}