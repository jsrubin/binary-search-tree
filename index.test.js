const {
    minDepth,
    hasPathSum,
    binarySearchTreeUnordered,
    BinarySearchTreeTraditional,
} = require('./index')

describe('BinarySearchTreeTraditional test', () => {
    test('should return null for empty tree', (done) => {
        let tree = new BinarySearchTreeTraditional()
        expect(tree.root).toEqual(null)
        done()
    })

    // test('should return tree nodes', (done) => {
    //     // Given When
    //     let tree = new BinarySearchTreeTraditional()
    //     tree.add(10)
    //     tree.add(4)
    //     tree.add(4)

    //     // Then
    //     expect(tree.root).toEqual(10)
    //     expect(tree.left).toEqual(4)
    //     expect(tree.right).toEqual(null)
    //     done()
    // })

    // test('should return smalled found value (left most leaf)', (done) => {
    //     // Given When
    //     let tree = new BinarySearchTreeTraditional()
    //     tree.add(10)
    //     tree.add(4)
    //     tree.add(4)
    //     tree.add(12)
    //     tree.add(2)
    //     tree.add(72)
    //     tree.add(22)
    //     tree.add(40)
    //     tree.add(90)

    //     // Then
    //     expect(tree.smallest()).toEqual(2)
    //     done()
    // })

    // test('should return largest found value (right most leaf)', (done) => {
    //     // Given When
    //     let tree = new BinarySearchTreeTraditional()
    //     tree.add(10)
    //     tree.add(4)
    //     tree.add(4)
    //     tree.add(12)
    //     tree.add(2)
    //     tree.add(72)
    //     tree.add(22)
    //     tree.add(40)
    //     tree.add(90)

    //     // Then
    //     expect(tree.largest()).toEqual(90)
    //     done()
    // })
})

describe('binarySearchTreeUnordered test', () => {
    test('should return null when unset', () => {
        // When
        const tree = binarySearchTreeUnordered()
        // Then
        expect(tree).toEqual(null)
    })

    test('should return empty when empty input', () => {
        // Given
        const nodes = []

        // When
        const tree = binarySearchTreeUnordered(nodes)
        // Then
        expect(tree).toEqual(null)
    })

    test('should return unordered tree', () => {
        // Given
        const nodes = [5, 8, 4]

        // When
        const tree = binarySearchTreeUnordered(nodes)

        // Then
        expect(tree).toEqual({
            left: { left: null, right: null, value: 8 },
            right: { left: null, right: null, value: 4 },
            value: 5,
        })
    })

    test('should return unordered tree based on input', () => {
        // Given
        const nodes = [5, 4, 8, 11, null, 13, 4]

        // When
        const tree = binarySearchTreeUnordered(nodes)

        // Then
        expect(tree.left.left.value).toEqual(11)
        expect(tree.right.right.value).toEqual(4)
    })
})

describe('minDepth test', () => {
    test('should return 0', () => {
        const result = minDepth({})
        expect(result).toEqual(0)
    })

    test('should return 1', () => {
        const result = minDepth({ val: 0, left: null, right: null })
        expect(result).toEqual(1)
    })

    test('should return 5', () => {
        /*
    Input: root = [2,null,3,null,4,null,5,null,6]
                  [2,null,3,null,4,null,5,null,6]
    Output: 5
*/
        const root = {
            val: 2,
            left: null,
            right: {
                val: 3,
                left: null,
                right: {
                    val: 4,
                    left: null,
                    right: {
                        val: 5,
                        left: null,
                        right: { val: 6, left: null, right: null },
                    },
                },
            },
        }
        const result = minDepth(root)
        expect(result).toEqual(5)
    })

    test('should return 2', () => {
        /*
    Input: root = [3,9,20,null,null,15,7]
    Output: 2
*/
        const root = {
            val: 3,
            left: { val: 9, left: null, right: null },
            right: {
                val: 20,
                left: { val: 15, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        }
        const result = minDepth(root)
        expect(result).toEqual(2)
    })

    test('should return 2', () => {
        // [1, 2, 3, 4, 5]
        const root = {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null },
                right: { val: 5, left: null, right: null },
            },
            right: {
                val: 3,
                left: null,
                right: null,
            },
        }
        const result = minDepth(root)
        expect(result).toEqual(2)
    })
})
