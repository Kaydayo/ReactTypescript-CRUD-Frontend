export interface Modalprops {
    handleCloseModal: () => void
}

export interface Headerprops {
    handleOpenModal: () => void
}

export interface Data {
    id: number,
    name: string,
    description: string,
    quantity: number,
    price: number
}

export type NewData = {
    name: string,
    description: string,
    quantity: number,
    price: number
}

export type HandleEdit = {
    id: number,
    name: string,
    description: string,
    quantity: number,
    price: number,
    handleEdit: () => void
}