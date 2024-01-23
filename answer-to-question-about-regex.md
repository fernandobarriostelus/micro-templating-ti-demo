Question:
What does the `?` do in regex?

1. Quantifier
  - Regex: q(u?)eso
  - Description: Basically what it does is match the letters 'q' followed by an optional 'u' and then 'eso'.
  - Note: This is the same as: q(u{0,1})eso (which is why it is called a quantifier)

2. Positive lookahead
  - Regex: q(?=u)
  - Description: Basically what it does is match the letters 'q' that are followed by a 'u'

3. Negative lookahead
  - Regex: q(?!u)
  - Description: Basically what it does is match the letters 'q' that are not followed by a 'u'

4. Positive lookbehind
  - Regex: (?<=a)b 
  - Description: Basically what it does is match the letters 'b' that are preceded by an 'a'

5. Negative Lookbehind
  - Regex: (?<!a)b
  - Description: Basically what it does is match the letters 'b' that are not preceded by an 'a'

6. Atomic grouping
  - Regex: a(?>bc|b)c
  - Description: Basically in this case we want it to match `abcc` but not `abc` and not make sub-groups either. If we used a(bc|b)c what would happen is that we would make 1 match and a group with `bc`
