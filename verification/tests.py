"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": [[
                [0]
                ]],
            "answer": [
                [0]
                ],
        },
        {
            "input": [[
                [1, 2],
                [3, 4]
                ]],
            "answer": [
                [1],
                [3, 2],
                [4]
                ],
        },
        {
            "input": [[
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 0]
                ]],
            "answer": [
                [1],
                [6, 2],
                [7, 3],
                [8, 4],
                [9, 5],
                [0]
                ],
        },
        {
            "input": [[
                [1, 2], 
                [3, 4],
                [5, 6],
                [7, 8],
                [9, 0]
                ]],
            "answer": [
                [1],
                [3, 2],
                [5, 4],
                [7, 6],
                [9, 8],
                [0]
                ],
        },
    ],
    "Extra": [
        {
            "input": [[
                [1, 5, 6],
                [3, 3, 4],
                [7, 9, 2],
                ]],
            "answer": [
                [1],
                [3, 5],
                [7, 3, 6],
                [9, 4],
                [2]
                ],
        },
        {
            "input": [[
                [1, 2, 3], 
                [3, 4, 5],
                [5, 6, 7],
                [7, 8, 9],
                [9, 10, 11]
                ]],
            "answer": [
                [1],
                [3, 2],
                [5, 4, 3],
                [7, 6, 5],
                [9, 8, 7],
                [10, 9],
                [11]
                ],
        },
        {
            "input": [[
                [1, 2, 3]
                ]],
            "answer": [
                [1],
                [2],
                [3]
                ],
        },
        {
            "input": [[
                [1],
                [2],
                [3]
                ]],
            "answer": [
                [1],
                [2],
                [3]
                ],
        },
    ]
}
