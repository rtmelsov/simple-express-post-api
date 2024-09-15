export type PostType = {
    author: {
        type: StringConstructor,
        required: boolean
    }
    title: {
        type: StringConstructor,
        required: boolean
    }
    content: {
        type: StringConstructor,
        required: boolean
    }
    picture: {
        type: StringConstructor
    }
}