export interface Iuser{
    id: number
    name: string
}

export interface InitialStateUser{
    isLoading: boolean
    error: string | null
    user: Iuser
}