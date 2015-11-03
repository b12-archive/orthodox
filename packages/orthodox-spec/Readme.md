orthodox-spec
=============

Usage
-----

Use `spec.json` to test if your thing is orthodox-compliant. It’s an array of inputs and outputs. Just check if your output matches our expected output.

We always exclude the trailing semicolon and insignificant whitespace in the expected output. These things have no effect on inline styles or property blocks in a stylesheet – so if your thing outputs them, feel free to ignore that in the comparison.
