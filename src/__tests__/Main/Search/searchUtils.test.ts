import { isValidLP } from "../../../views/Main/Search/searchUtils"

describe('search util tests', () => {

    it('test isValidLP fucntion', () => {
        expect(isValidLP('1234567')).toBe(true)
        expect(isValidLP('123456789')).toBe(false)
    })

})