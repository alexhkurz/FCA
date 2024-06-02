# Fuzzy Formal Concept Analysis

From the commandline (tested on Mac):

```
git clone https://github.com/alexhkurz/FCA.git
cd FCA
open index.html
```

Modify the input boxes.

- Given a weighted relation and a weighted upset, compute the downset of the upset and the upset of the downset of the downset.
- Missing triples and pairs are valued valued at 0.
- Values range between 0 and 1.
- Denoting the relation by $I$ and the weighted upset by $\psi$, the value of $x$ in the downset of the upset is $\bigwedge_a I(x,a)\lhd \psi(x)$ where $\lhd$ is truncated division (truncated to remain inside [0,1]). To mimic logical implication, division by $0$ gives $1$.
