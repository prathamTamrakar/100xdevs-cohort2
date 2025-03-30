import { atom, selector } from 'recoil'

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const evenSelector = selector({
    key: 'evenSelector',
    get: ({ get }) => {
        const count = get(countAtom)
        return count % 2 == 0
    }
    // explain get , that is 
})


// todo app with filtering logic 
// webhooks as a service 
// svix 